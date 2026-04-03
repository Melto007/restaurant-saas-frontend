"use client"
import { useState } from "react";
import { C } from "@/shared/constants/constants";
import SearchBox from "./SearchBox";
import NotifButton from "./NotifyButton";
import AvatarButton from "./AvatarButton";

export default function Header({
    isDesktop,
    isMobile,
    collapsed,
    onToggleSidebar,
    onToggleDrawer,
    profileName,
    onProfileClick,
    onSecurityClick,
}: any) {
    const [logoError, setLogoError] = useState(false)
    return (
        <header style={{
            position: "sticky", top: 0, zIndex: 200,
            height: 60, display: "flex", alignItems: "center",
            gap: 12, padding: "0 20px",
            background: "rgba(26,29,46,0.92)",
            backdropFilter: "blur(18px)",
            borderBottom: `1px solid ${C.border}`,
            boxShadow: "0 1px 28px rgba(0,0,0,0.4)",
        }}>

        {!isDesktop && (
            <button
            onClick={onToggleDrawer}
            style={{
                width: 36, height: 36, border: "none", borderRadius: 10, cursor: "pointer",
                background: "rgba(255,255,255,0.05)", color: C.muted,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
            >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                <line x1="3" y1="6"  x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            </button>
        )}

        {isDesktop && (
            <button
            onClick={onToggleSidebar}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            style={{
                width: 34, height: 34,
                border: `1px solid ${C.border}`,
                borderRadius: 10, cursor: "pointer",
                background: "rgba(255,255,255,0.04)", color: C.muted2,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                transition: "all 0.18s",
            }}
            >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {collapsed
                ? <><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></>
                : <><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></>
                }
            </svg>
            </button>
        )}

        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textDecoration: "none" }}>
            <div style={{
            width: 34, height: 34, borderRadius: 10, overflow: "hidden", flexShrink: 0,
            background: `linear-gradient(135deg,${C.greenDark},${C.green})`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
            boxShadow: `0 0 0 1px rgba(76,191,103,0.35), 0 4px 14px rgba(76,191,103,0.22)`,
            }}>
            {logoError ? (
                <span className="text-2xl">🍴</span>
                ) : (
                <img
                    src="icon512_rounded.png"
                    alt="logo"
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }}
                    onError={() => setLogoError(true)}
                />
            )}
            </div>
            {!isMobile && (
                <div>
                    <p style={{
                    fontSize: 14.5, fontWeight: 800, color: C.text,
                    lineHeight: 1, fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.01em",
                    }}>
                    La Maison
                    </p>
                    <p style={{
                    fontSize: 8.5, fontWeight: 700, color: C.green,
                    letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2,
                    }}>
                    Restaurant Suite
                    </p>
                </div>
            )}
        </a>

        {!isMobile && (
            <div style={{ width: 1, height: 20, background: C.border, margin: "0 4px" }} />
        )}

        {/* ── Search ── */}
        <SearchBox />

        {/* ── Spacer ── */}
        <div style={{ flex: 1 }} />

        {/* ── Right cluster ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <NotifButton />
            <div style={{ width: 1, height: 20, background: C.border, margin: "0 4px" }} />
            <AvatarButton
                name={profileName}
                isMobile={isMobile}
                onProfileClick={onProfileClick}
                onSecurityClick={onSecurityClick}
            />
        </div>
        </header>
    );
}