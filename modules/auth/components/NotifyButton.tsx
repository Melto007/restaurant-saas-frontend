import { useState, useRef } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { C, NOTIFS } from "@/shared/constants/constants";

function NotifButton() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, () => setOpen(false));

    return (
        <div style={{ position: "relative" }} ref={ref}>
        <button
            onClick={() => setOpen(o => !o)}
            style={{
                width: 36, height: 36, borderRadius: 10, border: "none", cursor: "pointer",
                background: open ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                color: C.muted,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", transition: "all 0.18s",
            }}
        >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {/* Unread dot */}
            <span style={{
                position: "absolute", top: 7, right: 7,
                width: 7, height: 7, borderRadius: "50%",
                background: C.orange, border: `1.5px solid ${C.navyDeep}`,
            }} />
        </button>

        {open && (
            <div style={{
            position: "absolute", right: 0, top: 44, width: 288,
            borderRadius: 18, overflow: "hidden", zIndex: 300,
            background: C.navyCard, border: `1px solid ${C.border}`,
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            animation: "fadeUp 0.22s ease both",
            }}>
            {/* Header */}
            <div style={{
                padding: "12px 16px", borderBottom: `1px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: C.text }}>Notifications</p>
                <span style={{
                fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 99,
                background: "rgba(255,107,56,0.15)", color: C.orange,
                }}>
                3 new
                </span>
            </div>

            {/* Items */}
            {NOTIFS.map((n, i) => (
                <div
                key={i}
                style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "12px 16px", borderBottom: `1px solid ${C.border}`,
                    cursor: "pointer", transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                <span style={{ fontSize: 18, marginTop: 1 }}>{n.icon}</span>
                <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 12.5, fontWeight: 600, color: C.text }}>{n.title}</p>
                    <p style={{ fontSize: 11, color: C.muted2, marginTop: 2 }}>{n.time}</p>
                </div>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: n.col, marginTop: 6, flexShrink: 0 }} />
                </div>
            ))}

            {/* Footer */}
            <div style={{ padding: "10px 16px" }}>
                <button style={{
                background: "none", border: "none", cursor: "pointer",
                color: C.green, fontSize: 12.5, fontWeight: 600,
                width: "100%", textAlign: "center",
                }}>
                View all notifications
                </button>
            </div>
            </div>
        )}
        </div>
    );
}

export default NotifButton