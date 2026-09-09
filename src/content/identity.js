export const SITE_URL = "https://h-habka.github.io/myPortfolio";

export const profile = {
    name: "Hossien Habka",
    firstName: "Hossien",
    lastName: "Habka",
    title: "Full-Stack Web & Application Developer",
    location: "Al Ain / Abu Dhabi, UAE",
    phone: "+971588930130",
    phoneHref: "tel:+971588930130",
    email: "hossien.habka1@gmail.com",
    linkedin: "https://www.linkedin.com/in/hossien-habka-b67069229",
    github: "https://github.com/H-Habka",
    githubHandle: "H-Habka",
    whatsapp: "https://wa.me/971588930130",
    photo: "images/linkedin-profile-photo.png",
    summary:
        "Full-stack developer with 4+ years across frontend, backend, React Native, and databases. Sole engineer at EasySales — React/Next.js dashboards, React Native mobile, and Shopify Liquid/private apps. Previously Jewelry Photographer and Shopify store developer at Saray Jewellery. Focused on SEO, Core Web Vitals, and UX. Work in Agile with SOLID and OWASP in mind; AI-assisted with Cursor and ChatGPT.",
};

export const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export const hero = {
    kicker: "Al Ain / Abu Dhabi, UAE",
    lede: "Sole engineer at EasySales. Previously Shopify and jewelry photography at Saray Jewellery.",
    chips: ["React", "Next.js", "React Native", "Shopify", "Node.js"],
};

export const aboutCopy = {
    pull: "Sole engineer at EasySales — dashboards, mobile, and commerce in one seat.",
    paragraphs: [
        "Full-stack developer with 4+ years across frontend, backend, React Native, and databases.",
        "At EasySales I ship React/Next.js dashboards, React Native mobile, and Shopify Liquid/private apps. Before that I was Jewelry Photographer and Shopify store developer at Saray Jewellery.",
        "Focused on SEO, Core Web Vitals, and UX. Work in Agile with SOLID and OWASP in mind; AI-assisted with Cursor and ChatGPT.",
    ],
    pillars: [
        { label: "Web", detail: "React / Next.js dashboards" },
        { label: "Mobile", detail: "React Native applications" },
        { label: "Commerce", detail: "Shopify Liquid & private apps" },
    ],
};

export const stats = [
    { label: "Experience", value: "4+", unit: "years" },
    { label: "Based in", value: "UAE", unit: "Al Ain / Abu Dhabi" },
    { label: "Now", value: "EasySales", unit: "Sole engineer" },
    { label: "Recently", value: "Saray", unit: "Jewellery" },
];

export const education = {
    degree: "B.Eng Computer and Electronic Systems",
    school: "Tartus University",
    dates: "2017–2022",
    note: "Top of class — 91.11%",
};

export const work = [
    {
        title: "IT Applications Manager",
        company: "EasySales",
        location: "Abu Dhabi",
        dates: "Feb 2025 – Present",
        teaser:
            "Sole engineer — EasyChat (React Native) on the Play Store and App Store; Shopify Dawn + custom app",
        featured: true,
    },
    {
        title: "Jewelry Photographer & Shopify Store Dev/Admin",
        company: "Saray Jewellery",
        dates: "Jun 2024 – Feb 2025",
        teaser: "Shopify store development and administration, plus jewelry photography",
        featured: true,
    },
    {
        title: "Frontend Developer",
        company: "OSOSS",
        location: "Kuwait (remote)",
        dates: "Feb 2023 – Jun 2024",
    },
    {
        title: "Frontend Developer Freelancer",
        dates: "Sep 2022 – Feb 2023",
    },
    {
        title: "Frontend Developer",
        company: "CHI",
        location: "Damascus (remote)",
        dates: "Jun 2022 – Sep 2022",
    },
    {
        title: "Junior Web Developer",
        company: "ORESYS",
        location: "Tartus",
        dates: "Feb 2021 – May 2022",
    },
];

export const skillGroups = [
    {
        title: "Frontend & mobile",
        items: [
            "React",
            "Next.js",
            "React Native",
            "JavaScript",
            "Tailwind CSS",
            "React Query",
            "Zustand",
            "React Hook Form",
            "HTML",
            "SCSS",
        ],
    },
    {
        title: "Platform & backend",
        items: [
            "Shopify / Liquid",
            "Node.js",
            "Express",
            "Databases",
            "Git",
            "SEO / CWV",
        ],
    },
    {
        title: "Practice",
        items: [
            "UX",
            "Agile",
            "SOLID",
            "OWASP",
            "SEO",
            "Core Web Vitals",
            "Cursor",
            "ChatGPT",
        ],
    },
];

export const frontendSkills = skillGroups[0].items;
export const platformSkills = skillGroups[1].items;

export const shipped = [
    {
        id: "easychat",
        title: "EasyChat",
        company: "EasySales",
        language: "React Native",
        blurb: "Shipped to the Play Store and App Store.",
    },
];
