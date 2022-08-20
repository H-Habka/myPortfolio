import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaHandPointDown } from "react-icons/fa";
const HeaderSection = () => {
    return (
        <div
            id="home"
            className="flex flex-col gap-4 items-center lg:h-screen w-screen justify-between md:pt-20 pt-10"
        >
            <div className="flex flex-col gap-2 text-white text-center">
                <p
                    data-aos="fade-down"
                    data-aos-delay="400"
                    className="text-xl"
                >
                    Hello I'm
                </p>
                <p
                    data-aos="fade-down"
                    data-aos-delay="600"
                    className="text-4xl text-two"
                >
                    Hossien Habka
                </p>
                <p
                    data-aos="fade-down"
                    data-aos-delay="800"
                    className="text-five text-lg"
                >
                    FrontEnd Developer
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-8/12 mx-auto md:gap-6">
                <div className="flex md:flex-col gap-4 text-five">
                    <a
                        data-aos="fade-right"
                        data-aos-delay="400"
                        data-aos-offset="-100"
                        href="https://github.com/H-Habka"
                        target="_blank"
                    >
                        <BsGithub size={30} className="hover:text-black" />
                    </a>
                    <a
                        data-aos="fade-right"
                        data-aos-delay="600"
                        data-aos-offset="-100"
                        href="https://www.linkedin.com/in/hossien-habka-b67069229/"
                        target="_blank"
                    >
                        <BsLinkedin
                            size={30}
                            className="hover:text-[#0077b5]"
                        />
                    </a>
                    <a
                        data-aos="fade-right"
                        data-aos-delay="800"
                        data-aos-offset="-100"
                        href="https://www.facebook.com/profile.php?id=100021919424493"
                        target="_blank"
                    >
                        <BsFacebook
                            size={30}
                            className="hover:text-[#4267B2]"
                        />
                    </a>
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-offset="-100"
                    data-aos-delay="800"
                    className="w-[320px] rounded-t-full bg-gradient-to-b from-two to-transparent "
                >
                    <img src={require("../images/Post.png")} alt="profile" />
                </div>
                <a data-aos="fade-down" data-aos-duration="500" data-aos-offset="-100" data-aos-delay="1000" href='#about' className="text-two animate-bounce hover:text-three cursor-pointer">
                    <FaHandPointDown size={40}  />
                </a>
            </div>
        </div>
    );
};

export default HeaderSection;
