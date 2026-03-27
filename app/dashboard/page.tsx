"use client";
import { useState, useCallback, useEffect } from "react";

import { BASE_CSS, C, DESKTOP_BP, MOBILE_BP } from "@/shared/constants/constants";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { useToast } from "@/shared/hooks/useToast";
import Sidebar from "@/modules/auth/components/SideBar";
import Header from "@/modules/auth/components/Header"
// import MainContent from "@/modules/auth/components/MainContent";

export default function Page() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
    }, []);

    const winW      = useWindowWidth();
    const isDesktop = winW !== null && winW >= DESKTOP_BP;
    const isMobile  = winW !== null && winW < MOBILE_BP;

    const [collapsed,   setCollapsed]   = useState(false);
    const [drawerOpen,  setDrawerOpen]  = useState(false);

    useEffect(() => {
        if (isDesktop) setDrawerOpen(false);
    }, [isDesktop]);

    const [activeNav, setActiveNav] = useState("dashboard");

    const handleNavClick = useCallback((id: string) => {
        setActiveNav(id);
        setDrawerOpen(false);   // close mobile drawer on nav
    }, []);

    const [ tab, setTab ] = useState("personal");
    const { toasts, push: pushToast } = useToast()

    const [profileName,   setProfileName]   = useState("");
    const [profileRole,   setProfileRole]   = useState("Manager");
    const [profileStatus, setProfileStatus] = useState("Active");

    if (!mounted || winW === null) return null

    return (
        <div style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                background: C.bg,
                color: C.text,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
        >
        <style>{BASE_CSS}</style>

        <Header
            isDesktop={isDesktop}
            isMobile={isMobile}
            collapsed={collapsed}
            onToggleSidebar={() => setCollapsed(c => !c)}
            onToggleDrawer={()  => setDrawerOpen(o => !o)}
            profileName={profileName}
            onProfileClick={()  => setTab("personal")}
            onSecurityClick={() => setTab("security")}
        />

        <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>

            {drawerOpen && !isDesktop && (
                <div
                    onClick={() => setDrawerOpen(false)}
                    style={{
                        position: "fixed", inset: 0, zIndex: 140,
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(4px)",
                    }}
                />
            )}

            <Sidebar
                isDesktop={isDesktop}
                drawerOpen={drawerOpen}
                collapsed={collapsed}
                activeNav={activeNav}
                onNavClick={handleNavClick}
                profileName={profileName}
                profileRole={profileRole}
                profileStatus={profileStatus}
            />

            {/* ════════════════ MAIN CONTENT ════════════════ */}
            {/* <MainContent
            isMobile={isMobile}
            tab={tab}
            onTabChange={setTab}
            toasts={toasts}
            pushToast={pushToast}
            onProfileChange={(key, val) => {
                if (key === "name")   setProfileName(val);
                if (key === "role")   setProfileRole(val);
                if (key === "status") setProfileStatus(val);
            }}
            onNewStaff={() => pushToast("Invitation sent to new staff member!", "success")}
            /> */}
            </div>
        </div>
    );
}
