

import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import {SlArrowUp} from "react-icons/sl";

const Footer = () => {

    return (
<div className="max-w-screen-2xl mx-auto">

        <footer className="bg-gray-300 boxShadow rounded-xl w-full mx-auto p-3 lg:p-4 relative mt-20">

            <div
                className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
                <p className="text-center text-3xl text-black font-bold">BlogScope</p>

                <p className="text-[0.9rem] text-center sm:text-start text-gray-600">Explore, learn, and grow with our community.
                </p>

                <button className="py-3 px-6 rounded-full bg-primary text-white">Contact Us</button>

                <div className="flex gap-[15px] text-black mt-4 mb-5">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <CgFacebook/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsTwitter/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsInstagram/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsLinkedin/>
                    </a>
                </div>
            </div>

            <div
                className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
                <p className="text-[0.9rem] text-gray-300">© 2021 All Rights Reserved</p>

                <SlArrowUp
                    className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300"/>
            </div>

            <img src="https://i.ibb.co/zNk7XT4/Rectangle-97.png" alt="background/image"
                 className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl w-full "/>
            <img src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
                 alt="background/image"
                 className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl w-full mx-auto"/>
        </footer>


</div>
    );
};

export default Footer;
                    