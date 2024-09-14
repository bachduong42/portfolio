import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import fe from "../images/fe.png"
import be from "../images/be.png"
function About() {
    console.log("about" + window.innerWidth)
    return (
        <div id="about" className="w-full md:pl-[40px] md:pr-[80px] py-[90px] pl-[20px] pr-[20px] flex flex-col md:gap-5 gap-5">
            <div className="md:flex block md:gap-2 gap-0 cursor-pointer w-full md:mt-0 mt-8">
                <div className="text-[50px] text-[#343a40] font-extrabold h-[60px]">VAN THI</div>
                <div className="text-[50px] text-[#13C892] font-extrabold hover:text-[#ffc107] h-[60px]">BACH DUONG</div>
            </div>
            <div>
                <div className="flex gap-3 items-center font-semibold">
                    <FaIcon.FaAddressCard className="text-[20px] text-[#34495e] " />
                    <div className="text-[20px] text-[#34495e]  ">Enthusiast Web Developer</div>
                </div>
                <div className="flex gap-3 md:items-center font-semibold ">
                    <FaIcon.FaMapMarkedAlt className="text-[20px] text-[#34495e] " />
                    <div className="text-[20px] text-[#34495e] ">Hoa Khanh Bac, Lien Chieu, Da Nang</div>
                </div>
            </div>
            <div className="w-full md:h-[100px] h-[150px] bg-[#D9FFF1] rounded-[7px] px-2 flex flex-col justify-center">
                <div className=" text-[16px] text-[#0E5A3A] ">Hi there! Thanks for visiting my profile.</div>
                <div className=" text-[16px] text-[#0E5A3A]">As a fourth-year student with a passion for technology and web design. Eager to contribute my skills to a forward-thinking team</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2 ">
                    <img src={fe} alt="" className="w-[30px] h-[30px]" />
                    <div>
                        <span className="text-[18px] text-[#34495e] font-semibold">Front-end:</span>
                        <span className="text-[18px] text-[#34495e]"> I have experience working with</span>
                        <span className="text-[18px] text-[#34495e] font-semibold"> HTML, CSS, JavaScript, ReactJS, TailwindCSS, Bootstrap</span>
                    </div>

                </div>
                <div className="flex gap-2">
                    <img src={be} alt="" className="w-[30px] h-[30px]" />
                    <div>
                        <span className="text-[18px] text-[#34495e] font-semibold">Back-end:</span>
                        <span className="text-[18px] text-[#34495e]"> I have experience working with</span>
                        <span className="text-[18px] text-[#34495e] font-semibold"> C++, Java, C#, PHP, Spring Boot</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-3">
                <div className="flex gap-2 items-center">
                    <MdIcon.MdEmail className="text-[25px] text-[#057872]" />
                    <a href="mailto:bachduongvan0402@gmail.com" className="italic hover:text-[#d6a309] hover:underline text-[#079992]">bachduongvan0402@gmail.com</a>
                </div>
            </div>
            <div className="flex gap-3">
                <a
                    href="https://github.com/bachduong42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[40px] hover:text-[#d6a309] cursor-pointer">
                    <FaGithub />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100012616719686&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[40px] hover:text-[#d6a309] cursor-pointer text-[#0865ff]">
                    <FaFacebook />
                </a>
                <a
                    href="https://www.instagram.com/_kwiwiwiii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[25px] cursor-pointer rounded-[90px] flex items-center justify-center "
                    style={{
                        background: 'linear-gradient(45deg, #FEDA77, #F58529, #DD2A7B, #8134AF, #515BD4)',
                        width: '40px',
                        height: '40px',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#d6a309';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(45deg, #FEDA77, #F58529, #DD2A7B, #8134AF, #515BD4)';
                    }}
                >
                    <FaInstagram className="text-white" />
                </a>
                <a
                    href="https://www.linkedin.com/in/d%C6%B0%C6%A1ng-v%C4%83n-th%E1%BB%8B-b%E1%BA%A1ch-0830a224a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] hover:bg-[#d6a309] cursor-pointer bg-[#0d62bc] text-white w-[40px] h-[40px] items-center flex justify-center rounded-[90px]">
                    <FaLinkedinIn />
                </a>

            </div>
            <div className="italic text-[18px] mt-3 text-[#34495e]">"Good things take time"</div>
        </div>
    );
}

export default About;