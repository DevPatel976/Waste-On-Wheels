"use client";
import { useEffect, useState } from "react";

export default function BinStatus() {
    const [binLevel, setBinLevel] = useState(0);

    useEffect(() => {
        const fetchBinLevel = async () => {
            try {
                const res = await fetch("/api/get-bin-level");
                const data = await res.json();
                if (data.level !== null) setBinLevel(data.level);
            } catch (error) {
                console.error("Error fetching bin level:", error);
            }
        };

        fetchBinLevel();
        const interval = setInterval(fetchBinLevel, 5000); // Refresh every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Bin Status</h1>
            <p>Current Bin Level: {binLevel}%</p>
            <div style={{
                width: "100px",
                height: "200px",
                border: "2px solid black",
                background: `linear-gradient(to top, gray ${binLevel}%, white ${binLevel}%)`
            }}>
            </div>
        </div>
    );
}
