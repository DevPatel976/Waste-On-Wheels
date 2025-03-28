"use client";
import { useEffect, useState } from "react";
import "./BinVisualizer.css";

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
        const interval = setInterval(fetchBinLevel, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bin-wrapper">
            <h1 className="bin-status-title">Bin Status</h1>
            <p className="bin-level-text">Current Bin Level: {binLevel}%</p>
            <div className="bin-container">
                <div 
                    className="bin-fill"
                    style={{ height: `${binLevel}%` }}
                />
            </div>
        </div>
    );
}
