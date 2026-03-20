"use client"
import { useState } from "react";
import { C } from "@/shared/constants/constants";

function NavBtn({ item, isActive, collapsed, onClick }: any) {
    const [hov, setHov] = useState(false);
    return (
        <button
            onClick={onClick}
            title={collapsed ? item.label : undefined}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: collapsed ? 0 : 10,
                justifyContent: collapsed ? "center" : "flex-start",
                padding: collapsed ? "10px 0" : "9px 12px",
                borderRadius: 12,
                background: isActive
                ? "rgba(76,191,103,0.12)"
                : hov ? "rgba(255,255,255,0.05)" : "transparent",
                border: isActive
                ? "1px solid rgba(76,191,103,0.22)"
                : "1px solid transparent",
                color: isActive ? C.green : hov ? C.text : C.muted,
                cursor: "pointer",
                transition: "all 0.15s",
                marginBottom: 2,
                position: "relative",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
        >
            {isActive && (
                <span style={{
                    position: "absolute", left: 0,
                    top: "18%", bottom: "18%",
                    width: 3, borderRadius: "0 3px 3px 0",
                    background: C.green,
                }} />
            )}

            <span style={{ fontSize: 15, flexShrink: 0, lineHeight: 1 }}>{item.icon}</span>

            {!collapsed && (
                <>
                    <span style={{
                        flex: 1, textAlign: "left", fontSize: 13.5,
                        fontWeight: isActive ? 600 : 500,
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                        {item.label}
                    </span>
                    {item.badge && (
                        <span style={{
                            fontSize: 10, fontWeight: 800,
                            padding: "2px 7px", borderRadius: 99,
                            background: "rgba(76,191,103,0.18)", color: C.green, flexShrink: 0,
                        }}>
                            {item.badge}
                        </span>
                    )}
                </>
            )}
        </button>
    );
}

export default NavBtn