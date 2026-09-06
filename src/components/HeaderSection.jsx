import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaHandPointDown } from "react-icons/fa";

const HeaderSection = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full items-center px-5 sm:px-8 pt-16 pb-28"
        >
            <div className="section-inner grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <p
                        data-aos="fade-up"
                        data-aos-delay="80"
                        className="section-kicker"
                    >
                        Hello I'm
                    </p>
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="180"
                        className="font-display mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        Hossien Habka
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="280"
                        className="mt-4 text-lg text-three sm:text-xl"
                    >
                        FrontEnd Developer
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                        <a
                            data-aos="fade-up"
                            data-aos-delay="360"
                            href="https://github.com/H-Habka"
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
                            href="https://www.linkedin.com/in/hossien-habka-b67069229/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="icon-link"
                        >
                            <BsLinkedin size={20} />
                        </a>
                        <a
                            data-aos="fade-up"
                            data-aos-delay="520"
                            href="https://www.facebook.com/profile.php?id=100021919424493"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="icon-link"
                        >
                            <BsFacebook size={20} />
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
                            src={require("../images/Post.webp")}
                            alt="profile"
                            className="relative w-full"
                        />
                    </div>
                </div>
            </div>
            <a
                data-aos="fade-down"
                data-aos-delay="700"
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-two transition duration-300 hover:text-three"
                aria-label="Scroll to about"
            >
                <FaHandPointDown size={28} className="animate-bounce" />
            </a>
        </section>
    );
};

export default HeaderSection;
