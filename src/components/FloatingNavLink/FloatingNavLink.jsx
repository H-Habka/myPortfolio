import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiBookOpen, BiMessageSquareDetail } from "react-icons/bi";
import { FaServicestack } from "react-icons/fa";
import FloatingNavLinkItem from "./FloatingNavLinkItem";
const FloatingNavLink = () => {
    return (
        <div
            className="flex gap-3 items-center  px-4 py-4 rounded-full bottom-[30px] z-50 fixed backdrop-blur-sm left-1/2 -translate-x-1/2"
            style={{ backgroundColor: "#19191966" }}
        >
            <FloatingNavLinkItem
                icon={<AiOutlineHome size={20} />}
                href="#home"
            />
            <FloatingNavLinkItem icon={<BsPerson size={20} />} href="#about" />
            <FloatingNavLinkItem
                icon={<BiBookOpen size={20} />}
                href="#Experience"
            />
            <FloatingNavLinkItem
                icon={<FaServicestack size={20} />}
                href="#RecentWork"
            />
            <FloatingNavLinkItem
                icon={<BiMessageSquareDetail size={20} />}
                href="#Contact"
            />
        </div>
    );
};

export default FloatingNavLink;
