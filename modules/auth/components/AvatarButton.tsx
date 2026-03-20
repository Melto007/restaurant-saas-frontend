"use client"

import { useState, useRef } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { C } from "@/shared/constants/constants";

function AvatarButton({ name, isMobile, onProfileClick, onSecurityClick }: any) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setOpen(false));

    const menuItems = [
        ["👤", "My Profile", onProfileClick],
        ["🔒", "Security",   onSecurityClick],
        ["⚙️", "Settings",  null],
    ];

    const initial = name ? name[0].toUpperCase() : "J";

    return (
        <div style={{ position: "relative" }} ref={ref}>
        <button
            onClick={() => setOpen(o => !o)}
            style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "5px 10px 5px 5px", borderRadius: 12, cursor: "pointer",
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${open ? "rgba(76,191,103,0.35)" : C.border}`,
            transition: "all 0.18s",
            }}
        >
            {/* Avatar circle */}
            <div style={{
            width: 28, height: 28, borderRadius: 8, flexShrink: 0,
            background: `linear-gradient(135deg,${C.greenDark},${C.green})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#fff",
            }}>
            {initial}
            </div>

            {/* Name + role — hidden on mobile */}
            {!isMobile && (
            <>
                <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: C.text, lineHeight: 1 }}>Jean Dubois</p>
                <p style={{ fontSize: 10.5, color: C.muted2, marginTop: 2 }}>Head Manager</p>
                </div>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.muted2} strokeWidth="2.5" style={{ marginLeft: 2 }}>
                <polyline points={open ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                </svg>
            </>
            )}
        </button>

        {open && (
            <div style={{
            position: "absolute", right: 0, top: 44, width: 200,
            borderRadius: 16, overflow: "hidden", zIndex: 300,
            background: C.navyCard, border: `1px solid ${C.border}`,
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            animation: "fadeUp 0.22s ease both",
            }}>
            {/* User info */}
            <div style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}` }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Jean Dubois</p>
                <p style={{ fontSize: 11, color: C.muted2, marginTop: 2 }}>jean@lamaison.com</p>
            </div>

            {/* Menu items */}
            {menuItems.map(([ic, lb, fn]) => (
                <button
                key={lb}
                onClick={() => { fn?.(); setOpen(false); }}
                style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 16px", background: "none", border: "none",
                    cursor: "pointer", color: C.muted, fontSize: 13,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "all 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = C.text; }}
                onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.muted; }}
                >
                <span>{ic}</span>
                <span>{lb}</span>
                </button>
            ))}

            {/* Sign out */}
            <div style={{ borderTop: `1px solid ${C.border}`, padding: "6px 16px 10px" }}>
                <button style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10,
                padding: "8px 0", background: "none", border: "none",
                cursor: "pointer", color: C.orange, fontSize: 13,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                <span>🚪</span>
                <span>Sign Out</span>
                </button>
            </div>
            </div>
        )}
        </div>
    );
}

export default AvatarButton