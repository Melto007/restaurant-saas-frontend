"use client"

import { useState } from "react";
import { C } from "@/shared/constants/constants";

function SearchBox() {
    const [focused, setFocused] = useState(false);
    return (
        <div style={{ position: "relative", flex: 1, maxWidth: 340 }}>
        <svg
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.muted2} strokeWidth="2.5"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
        </svg>
        <input
            type="text"
            placeholder="Search orders, staff, menu…"
            onFocus={() => setFocused(true)}
            onBlur={()  => setFocused(false)}
            style={{
            width: "100%",
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${focused ? "rgba(76,191,103,0.45)" : C.border}`,
            borderRadius: 12,
            color: C.text,
            fontSize: 13,
            padding: "7.5px 14px 7.5px 36px",
            outline: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            boxShadow: focused ? "0 0 0 3px rgba(76,191,103,0.08)" : "none",
            transition: "all 0.2s",
            }}
        />
        </div>
    );
}

export default SearchBox;