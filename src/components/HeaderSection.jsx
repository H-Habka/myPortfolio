import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHandPointDown } from "react-icons/fa";
import { profile } from "../content/identity";
import { publicUrl } from "../utils/publicUrl";

const HeaderSection = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full flex-col justify-center px-5 sm:px-8 pt-16 pb-28"
        >
            <div className="section-inner grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <p
                        data-aos="fade-up"
                        data-aos-delay="80"
                        className="section-kicker"
                    >
                        Hello, I&apos;m
                    </p>
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="180"
                        className="font-display mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        {profile.name}
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="280"
                        className="mt-4 text-lg text-three sm:text-xl"
                    >
                        {profile.title}
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="320"
                        className="mt-2 text-sm text-muted sm:text-base"
                    >
                        {profile.location}
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                        <a
                            data-aos="fade-up"
                            data-aos-delay="360"
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="icon-link"
                        >
                            <BsGithub size={20} />
                        </a>
                        <a
                            data-aos="fade-up"
                            data-aos-delay="440"
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="icon-link"
                        >
                            <BsLinkedin size={20} />
                        </a>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="240"
                    className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                >
                    <div className="absolute -inset-6 rounded-full bg-two/20 blur-3xl" />
                    <div className="relative overflow-hidden rounded-t-full bg-gradient-to-b from-two/80 to-transparent shadow-glow">
                        <img
                            src={publicUrl(profile.photo)}
                            alt={`${profile.name}, ${profile.title}`}
                            className="relative w-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
            <a
                data-aos="fade-down"
                data-aos-delay="700"
                href="#about"
                className="mx-auto mt-10 text-two transition duration-300 hover:text-three md:absolute md:bottom-24 md:left-1/2 md:mt-0 md:-translate-x-1/2"
                aria-label="Scroll to about"
            >
                <FaHandPointDown size={28} className="animate-bounce" />
            </a>
        </section>
    );
};

export default HeaderSection;
