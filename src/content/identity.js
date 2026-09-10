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
    photoDisplay: "images/linkedin-profile-photo-720.webp",
    summary:
        "Full-stack developer with 4+ years across frontend, backend, React Native, databases, and DevOps. Sole engineer and server administrator at EasySales — React/Next.js dashboards, React Native mobile, Shopify Liquid/private apps, and the servers in that seat. Previously Jewelry Photographer and Shopify store developer at Saray Jewellery. Focused on SEO, Core Web Vitals, and UX. Work in Agile with SOLID and OWASP in mind; AI-assisted with Cursor and ChatGPT.",
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
    lede: "Sole engineer and server administrator at EasySales. Previously Shopify and jewelry photography at Saray Jewellery.",
    chips: ["React", "Next.js", "React Native", "Shopify", "Node.js", "DevOps"],
};

export const aboutCopy = {
    pull: "Sole engineer and server administrator at EasySales — dashboards, mobile, commerce, and DevOps in one seat.",
    paragraphs: [
        "Full-stack developer with 4+ years across frontend, backend, React Native, databases, and DevOps.",
        "At EasySales I ship React/Next.js dashboards, React Native mobile, and Shopify Liquid/private apps, and I administer the servers. Before that I was Jewelry Photographer and Shopify store developer at Saray Jewellery — store work there included Stripe and Tabby.",
        "Focused on SEO, Core Web Vitals, and UX. Work in Agile with SOLID and OWASP in mind; AI-assisted with Cursor and ChatGPT.",
        "B.Eng in Computer and Electronic Systems from Tartus University (2017–2022), top of class at 91.11%. Al-Basel awards, SCPC, an IoT virtual lab, and an NLP fake news project sit on that path. Hardware side of the stack includes Arduino and Raspberry Pi.",
    ],
    pillars: [
        { label: "Web", detail: "React / Next.js dashboards" },
        { label: "Mobile", detail: "React Native applications" },
        { label: "Commerce", detail: "Shopify Liquid & private apps" },
        { label: "DevOps", detail: "Server administration" },
    ],
};

export const stats = [
    { label: "Experience", value: "4+", unit: "years" },
    { label: "Based in", value: "UAE", unit: "Al Ain / Abu Dhabi" },
    { label: "Now", value: "EasySales", unit: "Sole engineer · Server admin" },
    { label: "Recently", value: "Saray", unit: "Jewellery" },
];

export const education = {
    degree: "B.Eng Computer and Electronic Systems",
    school: "Tartus University",
    dates: "2017–2022",
    note: "Top of class — 91.11%",
    honors: [
        {
            title: "Al-Basel awards",
            detail: "Academic honors during the Tartus degree.",
        },
        {
            title: "SCPC",
            detail: "Listed with the Tartus University degree.",
        },
    ],
    projects: [
        {
            title: "IoT virtual lab",
            detail: "Academic IoT lab work at Tartus University.",
        },
        {
            title: "NLP fake news project",
            detail: "Academic NLP project on fake news.",
        },
    ],
};

export const work = [
    {
        id: "easysales",
        title: "IT Applications Manager & Server Administrator",
        company: "EasySales",
        location: "Abu Dhabi",
        dates: "Feb 2025 – Present",
        featured: true,
        teaser:
            "Sole engineer and server administrator — EasyChat (React Native) on the Play Store and App Store; Shopify Dawn + private app.",
        highlights: [
            "Sole engineer and server administrator across React/Next.js dashboards, React Native mobile, Shopify, and DevOps.",
            "Shipped EasyChat, a React Native app, to the Play Store and App Store.",
            "Shopify Dawn theme plus a private Shopify app.",
            "Shopify Liquid and private-app work sit in the same seat.",
        ],
        stack: [
            "React",
            "Next.js",
            "React Native",
            "Shopify Dawn",
            "Liquid",
            "Private app",
            "DevOps",
        ],
    },
    {
        id: "saray",
        title: "Jewelry Photographer & Shopify Store Dev/Admin",
        company: "Saray Jewellery",
        dates: "Jun 2024 – Feb 2025",
        featured: true,
        teaser:
            "Shopify store development and administration, jewelry photography, Stripe and Tabby.",
        highlights: [
            "Shopify store development and administration.",
            "Jewelry photography for the store.",
            "Payments through Stripe and Tabby.",
        ],
        stack: ["Shopify", "Photography", "Stripe", "Tabby"],
    },
    {
        id: "ososs",
        title: "Frontend Developer",
        company: "OSOSS",
        location: "Kuwait (remote)",
        dates: "Feb 2023 – Jun 2024",
        highlights: ["Frontend development for OSOSS, remote, Kuwait."],
        stack: ["Frontend"],
    },
    {
        id: "freelance",
        title: "Frontend Developer Freelancer",
        dates: "Sep 2022 – Feb 2023",
        highlights: [
            "Independent frontend work.",
            "Built a booking site.",
        ],
        stack: ["Frontend", "Booking site"],
    },
    {
        id: "chi",
        title: "Frontend Developer",
        company: "CHI",
        engagement: "Freelancer",
        location: "Damascus (remote)",
        dates: "Jun 2022 – Sep 2022",
        highlights: [
            "Frontend development for CHI as a freelancer, remote from Damascus.",
        ],
        stack: ["Frontend"],
    },
    {
        id: "oresys",
        title: "Junior Web Developer",
        company: "ORESYS",
        location: "Tartus",
        dates: "Feb 2021 – May 2022",
        highlights: [
            "Junior web development at ORESYS in Tartus.",
            "Also served as a trainer.",
        ],
        stack: ["Web", "Trainer"],
    },
];

export const skillGroups = [
    {
        id: "frontend",
        title: "Frontend & mobile",
        kicker: "Core stack",
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
        id: "commerce",
        title: "Commerce, backend & DevOps",
        kicker: "Platform",
        items: [
            "Shopify / Liquid",
            "Shopify Dawn",
            "Private apps",
            "Node.js",
            "Express",
            "Databases",
            "DevOps",
            "Server administration",
            "SEO / CWV",
        ],
    },
    {
        id: "practice",
        title: "Practice",
        kicker: "How the work is held",
        items: ["UX", "Agile", "SOLID", "OWASP", "SEO", "Core Web Vitals"],
    },
    {
        id: "hardware",
        title: "Hardware",
        kicker: "Electronics",
        items: ["Arduino", "Raspberry Pi"],
    },
    {
        id: "tools",
        title: "Tools",
        kicker: "Daily bench",
        items: ["Git", "Cursor", "ChatGPT"],
    },
];

export const skillOrbit = [
    {
        ring: 0,
        items: ["React", "Next.js", "React Native", "Tailwind"],
    },
    {
        ring: 1,
        items: ["React Query", "Zustand", "RHF", "Shopify Liquid", "DevOps"],
    },
    {
        ring: 2,
        items: ["Agile", "SOLID", "OWASP", "Arduino", "RPi", "Git"],
    },
];

export const frontendSkills = skillGroups[0].items;
export const platformSkills = skillGroups[1].items;

export const cases = [
    {
        id: "easychat",
        kicker: "EasySales · shipped product",
        title: "EasyChat",
        company: "EasySales",
        role: "Sole engineer",
        language: "React Native",
        featured: true,
        blurb: "React Native app, shipped to the Play Store and App Store. Store listings are named here without public store links.",
        highlights: [
            "Built and shipped as the sole engineer at EasySales.",
            "React Native.",
            "Live on the Play Store and the App Store.",
        ],
        stack: ["React Native", "EasySales"],
    },
    {
        id: "dawn-private-app",
        kicker: "EasySales · commerce",
        title: "Shopify Dawn + private app",
        company: "EasySales",
        role: "Sole engineer",
        language: "Shopify",
        blurb: "Dawn theme work plus a private Shopify app — Liquid and custom app surface in the same EasySales seat. No public store link is published.",
        highlights: [
            "Shopify Dawn theme.",
            "Private / custom Shopify app.",
            "Liquid alongside React/Next.js dashboards.",
        ],
        stack: ["Shopify Dawn", "Liquid", "Private app"],
    },
    {
        id: "saray-store",
        kicker: "Saray Jewellery · commerce",
        title: "Saray Jewellery store",
        company: "Saray Jewellery",
        role: "Shopify store dev/admin · photographer",
        language: "Shopify",
        blurb: "Store development and administration, jewelry photography, and payments through Stripe and Tabby. No public store link is published.",
        highlights: [
            "Shopify store development and administration.",
            "Jewelry photography.",
            "Stripe and Tabby.",
        ],
        stack: ["Shopify", "Photography", "Stripe", "Tabby"],
    },
    {
        id: "booking-site",
        kicker: "Freelance · frontend",
        title: "Booking site",
        role: "Frontend Developer Freelancer",
        language: "Frontend",
        blurb: "A booking site built during independent frontend work (Sep 2022 – Feb 2023). No public live link is published.",
        highlights: [
            "Freelance frontend engagement.",
            "Booking site.",
        ],
        stack: ["Frontend", "Booking"],
    },
    {
        id: "iot-lab",
        kicker: "Tartus University · academic",
        title: "IoT virtual lab",
        company: "Tartus University",
        language: "IoT",
        blurb: "Academic IoT virtual lab during the Computer and Electronic Systems degree. Hardware skills include Arduino and Raspberry Pi.",
        highlights: [
            "IoT virtual lab at Tartus University.",
            "Arduino and Raspberry Pi are listed as skills.",
        ],
        stack: ["IoT", "Arduino", "Raspberry Pi"],
    },
    {
        id: "nlp-fake-news",
        kicker: "Tartus University · academic",
        title: "NLP fake news project",
        company: "Tartus University",
        language: "NLP",
        blurb: "Academic NLP project on fake news, completed during the Tartus degree. No public repo link is published.",
        highlights: ["NLP fake news project.", "Part of the 2017–2022 degree."],
        stack: ["NLP"],
    },
];
