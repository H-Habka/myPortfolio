import React from "react";
import { GoMail } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";

const ContactSection = () => {
    return (
        <div
            id="Contact"
            className="flex flex-col md:flex-row pb-32 mt-24 pt-8 w-10/12 mx-auto gap-4"
        >
            <div className="flex flex-col gap-4 px-4" style={{ flex: 1 / 3 }}>
                <div data-aos="fade-right" className="bg-two rounded-xl p-4 text-five flex items-center text-center flex-col gap-2 group hover:bg-transparent border-2 border-two">
                    <div>
                        <GoMail size={24} />
                    </div>
                    <div>Email</div>
                    <div className="text-one group-hover:text-three">hossien.habka1@gmail.com</div>
                    <a target="_blank" href="mailto:hossien.habka1@gmail.com" className="text-lg font-bold text-four cursor-pointer hover:scale-125 hover:text-white" >Send Message</a>
                </div>
                <div data-aos="fade-right" className="bg-two rounded-xl p-4 text-five flex items-center text-center flex-col gap-2 group hover:bg-transparent border-2 border-two">
                    <div>
                        <RiMessengerLine size={24} />
                    </div>
                    <div>Messenger</div>
                    <div className="text-one group-hover:text-three">in Facebook</div>
                    <a target="_blank" href="http://m.me/100021919424493" className="text-lg font-bold text-four cursor-pointer hover:scale-125 hover:text-white" >Send Message</a>
                </div>
                <div data-aos="fade-right" className="bg-two rounded-xl p-4 text-five flex items-center text-center flex-col gap-2 group hover:bg-transparent border-2 border-two">
                    <div>
                        <ImWhatsapp size={24} />
                    </div>
                    <div>Whatsapp</div>
                    <div className="text-one group-hover:text-three">+971588930130</div>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=%2b971588930130" className="text-lg font-bold text-four cursor-pointer hover:scale-125 hover:text-white" >Send Message</a>
                </div>
            </div>
            <form
                style={{ flex: 2 / 3 }}
                className="flex flex-col gap-4 px-4  md:px-8"
                onSubmit={(e) => {
                    e.preventDefault() 
                    alert("sorry try again later !!")
                }}
            >
                <input
                data-aos="fade-left"
                required
                className="p-4 bg-transparent rounded-xl text-four outline-none border-two focus:border-white border-2 text-lg md:text-xl font-semibold"
                type="text"
                placeholder="Your Full Name"
                />
                <input
                data-aos="fade-left"
                required
                className="p-4 bg-transparent rounded-xl text-four outline-none border-two focus:border-white border-2 text-lg md:text-xl font-semibold"
                type="text"
                placeholder="Your Email"
                />
                <textarea
                data-aos="fade-left"
                required
                className="p-4 bg-transparent rounded-xl text-four outline-none border-two focus:border-white border-2 text-lg md:text-xl font-semibold"
                cols="30"
                rows="10"
                placeholder="Your Message"
                ></textarea>
                <button
                    data-aos="fade-left"
                    type="submit"
                    className="bg-three px-4 py-2 rounded-xl w-fit hover:bg-two hove:text-three"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactSection;
