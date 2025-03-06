import serial
import requests
import time
import json

SERIAL_PORT = "COM17"  # Adjust as per your system
BAUD_RATE = 9600
SERVER_URL = "http://localhost:3000/api/get-bin-level"

API_TOKEN = "mySuperSecretToken123"  # Match with .env.local

HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_TOKEN}"  
}

def connect_serial():
    while True:
        try:
            ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
            print(f"✅ Connected to {SERIAL_PORT}")
            return ser
        except serial.SerialException:
            print(f"⚠️ Could not connect to {SERIAL_PORT}. Retrying in 5s...")
            time.sleep(5)

ser = connect_serial()

while True:
    try:
        raw_data = ser.readline().decode("utf-8", errors="ignore").strip()

        if not raw_data:
            print("⚠️ No valid data received")
            continue

        print(f"🔍 Raw Data from Arduino: {raw_data}")

        # Try parsing JSON
        try:
            data = json.loads(raw_data)
            distance_cm = float(data["distance"])  # Read distance from JSON

            # ✅ Convert distance to percentage levels
            if 0 < distance_cm < 10:
                bin_level = 100
            elif distance_cm < 15:
                bin_level = 75
            elif distance_cm < 22:
                bin_level = 50
            elif distance_cm < 29:
                bin_level = 25
            else:
                bin_level = 0  # Bin is empty

            print(f"📊 Converted Bin Level: {bin_level}%")

            response = requests.post(SERVER_URL, json={"level": bin_level}, headers=HEADERS)

            if response.status_code == 200:
                print("✅ Data sent successfully!")
            elif response.status_code == 401:
                print("❌ 401 Unauthorized! Check API authentication.")
            else:
                print(f"❌ Failed to send data: {response.status_code} | {response.text}")

        except json.JSONDecodeError as e:
            print(f"⚠️ JSON Parse Error: {e} | Received: {raw_data}")

        time.sleep(2)

    except serial.SerialException:
        print("⚠️ Serial connection lost! Reconnecting...")
        ser = connect_serial()
    except requests.RequestException as e:
        print(f"⚠️ API request failed: {e}")
    except KeyboardInterrupt:
        print("\n🛑 Script stopped by user.")
        ser.close()
        break
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
