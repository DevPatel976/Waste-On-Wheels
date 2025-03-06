import React from "react";
import "./BinVisualizer.css";

export default function BinVisualizer({ binLevel }) {
    // Convert bin level to percentage height
    const fillHeight = `${binLevel}%`; 

    return (
        <div className="bin-wrapper">
            <div className="bin-container">
                <div className="bin-fill" style={{ height: fillHeight }}></div>
            </div>
        </div>
    );
}
