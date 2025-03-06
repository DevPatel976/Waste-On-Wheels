let binLevel = 0; // Store bin level globally

export async function GET(req) {
    try {
        return new Response(JSON.stringify({ level: binLevel }), {
            headers: { "Content-Type": "application/json" },
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Server error" }), {
            headers: { "Content-Type": "application/json" },
            status: 500,
        });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        
        if (body.level !== undefined) {
            binLevel = body.level; // Update bin level
            return new Response(JSON.stringify({ success: true, level: binLevel }), {
                headers: { "Content-Type": "application/json" },
                status: 200,
            });
        } else {
            return new Response(JSON.stringify({ error: "Invalid data" }), {
                headers: { "Content-Type": "application/json" },
                status: 400,
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: "Server error" }), {
            headers: { "Content-Type": "application/json" },
            status: 500,
        });
    }
}
