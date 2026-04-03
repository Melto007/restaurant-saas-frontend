import { C } from "@/shared/constants/constants";
import { NAV_GROUPS } from "@/shared/constants/constants";
import NavBtn from "./NavBtn";
// import StatusBadge from "../components/StatusBadge";
import { SIDEBAR_MINI, SIDEBAR_FULL } from "@/shared/constants/constants";

export default function Sidebar({
    isDesktop,
    drawerOpen,
    collapsed,
    activeNav,
    onNavClick,
    profileName,
    profileRole,
    profileStatus,
}: any) {
    const sideW = isDesktop ? (collapsed ? SIDEBAR_MINI : SIDEBAR_FULL) : 0;

    function NavTree() {
        return (
            <nav style={{
                display: "flex", flexDirection: "column",
                height: "100%", padding: "16px 10px 12px",
                overflowY: "auto", gap: 2,
            }}>
                {NAV_GROUPS.map((group, gi) => (
                <div key={group.title} style={{ marginBottom: gi < NAV_GROUPS.length - 1 ? 8 : 0 }}>
                    {!collapsed ? (
                    <p style={{
                        fontSize: 9.5, fontWeight: 800, textTransform: "uppercase",
                        letterSpacing: "0.22em", color: C.muted2,
                        padding: "6px 12px 5px", marginBottom: 2,
                    }}>
                        {group.title}
                    </p>
                    ) : (
                    gi > 0 && (
                        <div style={{
                            height: 1, background: C.border,
                            margin: "6px 8px 8px",
                        }} />
                    )
                    )}

                    {group.items.map(item => (
                        <NavBtn
                            key={item.id}
                            item={item}
                            isActive={item.id === activeNav}
                            collapsed={collapsed}
                            onClick={() => onNavClick(item.id)}
                        />
                    ))}
                </div>
                ))}

                {/* ── Bottom user card ── */}
                <div style={{
                    marginTop: "auto", paddingTop: 12,
                    borderTop: `1px solid ${C.border}`,
                    marginLeft: 4, marginRight: 4,
                }}>
                {collapsed ? (
                    /* Mini avatar when sidebar is icon-only */
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{
                            width: 34, height: 34, borderRadius: 10,
                            background: `linear-gradient(135deg,${C.greenDark},${C.green})`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 12, fontWeight: 700, color: "#fff",
                        }}>
                            {profileName ? profileName[0].toUpperCase() : "J"}
                        </div>
                    </div>
                ) : (
                    /* Full user card */
                    <div style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "8px 10px", borderRadius: 12,
                        background: "rgba(255,255,255,0.04)",
                    }}>
                    <div style={{
                        width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                        background: `linear-gradient(135deg,${C.greenDark},${C.green})`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, fontWeight: 700, color: "#fff",
                    }}>
                        {profileName ? profileName[0].toUpperCase() : "J"}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                            fontSize: 12.5, fontWeight: 600, color: C.text,
                            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        }}>
                            {profileName || "Jean Dubois"}
                        </p>
                        <p style={{ fontSize: 11, color: C.muted2, marginTop: 1 }}>
                            {profileRole}
                        </p>
                    </div>
                    {/* <StatusBadge status={profileStatus} /> */}
                    </div>
                )}
                </div>
            </nav>
        );
    }

    return (
        <>
            {!isDesktop && (
                <aside style={{
                    position: "fixed", left: 0, top: 60, bottom: 0, zIndex: 150,
                    width: SIDEBAR_FULL,
                    background: C.navyDeep,
                    borderRight: `1px solid ${C.border}`,
                    transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
                    transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
                }}>
                    <NavTree />
                </aside>
            )}

            {isDesktop && (
                <aside style={{
                    width: sideW,
                    minWidth: sideW,
                    maxWidth: sideW,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    background: C.navyDeep,
                    borderRight: `1px solid ${C.border}`,
                    overflow: "hidden",
                    transition: "width 0.28s cubic-bezier(0.4,0,0.2,1), min-width 0.28s, max-width 0.28s",
                }}>
                    <NavTree />
                </aside>
            )}
        </>
    );
}
