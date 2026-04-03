export const C = {
    green:     "#4CBF67",
    greenDark: "#37A873",
    amber:     "#FFC34A",
    orange:    "#FF6B38",
    navyDeep:  "#1a1d2e",
    navyCard:  "#1f2235",
    navySurf:  "#232640",
    bg:        "#13151f",
    text:      "#e8eaf0",
    muted:     "#8892b0",
    muted2:    "#555c78",
    border:    "rgba(255,255,255,0.07)",
};

export const SIDEBAR_FULL = 240;
export const SIDEBAR_MINI = 68;
export const DESKTOP_BP   = 1024;
export const MOBILE_BP    = 768;

export const NAV_GROUPS = [
    {
        title: "Overview",
        items: [
            { id: "dashboard",    icon: "◈",   label: "Dashboard",      badge: null },
            { id: "orders",       icon: "📦",  label: "Orders",         badge: "12" },
            { id: "reservations", icon: "🗓",  label: "Reservations",   badge: "3"  },
        ],
    },
    {
        title: "Manage",
        items: [
            { id: "menu",      icon: "🍽",  label: "Menu Management", badge: null },
            { id: "customers", icon: "👥",  label: "Customers",       badge: null },
            { id: "staff",     icon: "🧑‍🍳", label: "Staff",           badge: null },
        ],
    },
    {
        title: "Finance",
        items: [
            { id: "analytics", icon: "📊", label: "Analytics", badge: null },
            { id: "payments",  icon: "💳", label: "Payments",  badge: null },
        ],
    },
    {
        title: "System",
        items: [
            { id: "settings", icon: "⚙️", label: "Settings", badge: null },
        ],
    },
];

export const STATS = [
    {
        label: "Active Staff",
        value: "42",
        sub: "+3 this month",
        icon: "🧑‍🍳",
        accent: C.green,
        bg: "rgba(76,191,103,0.09)"
    },
    {
        label: "Open Orders",
        value: "17",
        sub: "↑ 8% today",
        icon: "📦",
        accent: C.amber,
        bg: "rgba(255,195,74,0.09)"
    },
    {
        label: "Revenue Today",
        value: "₹84k",
        sub: "+12% vs yesterday",
        icon: "📈",
        accent: C.orange,
        bg: "rgba(255,107,56,0.09)"
    },
    {
        label: "Reservations",
        value: "9",
        sub: "Next at 7:30 PM",
        icon: "🗓",
        accent: C.greenDark,
        bg: "rgba(55,168,115,0.09)"
    },
];

export const ROLES    = ["Manager", "Chef", "Waiter", "Cashier", "Host", "Bartender"];
export const STATUSES = ["Active", "On Leave", "Inactive"];
export const TWO_FA   = ["Disabled", "SMS", "Authenticator App", "Email OTP"];

export const INIT_PERSONAL = { name: "", email: "", phone: "", dob: "", role: "Manager", status: "Active" };
export const INIT_SECURITY = { password: "", confirm: "", twofa: "Disabled" };


export const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@700;800;900&display=swap');`;


export const BASE_CSS = `
    ${FONT_IMPORT}
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    ::-webkit-scrollbar       { width: 4px; height: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.09); border-radius: 99px; }
    @keyframes spin        { to { transform: rotate(360deg); } }
    @keyframes fadeUp      { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
    @keyframes toastSlide  { from { opacity:0; transform:translateX(30px); } to { opacity:1; transform:translateX(0); } }
    .fade-up   { animation: fadeUp 0.3s ease both; }
    .fade-up-1 { animation: fadeUp 0.3s 0.07s ease both; }
    .fade-up-2 { animation: fadeUp 0.3s 0.14s ease both; }
    .fade-up-3 { animation: fadeUp 0.3s 0.21s ease both; }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #1a1d2e inset !important;
        -webkit-text-fill-color: #e8eaf0 !important;
    }`
;

export const NOTIFS = [
    { icon: "📦", title: "New order #1042",       time: "2 min ago",  col: C.amber  },
    { icon: "🗓", title: "Reservation confirmed",  time: "18 min ago", col: C.green  },
    { icon: "⚠️", title: "Low stock: Salmon",      time: "1 hr ago",   col: C.orange },
];