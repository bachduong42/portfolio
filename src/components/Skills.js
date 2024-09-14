import * as FaIcon from "react-icons/fa";
import * as DiIcon from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFigmaLogo } from "react-icons/pi";
function Skills() {
    return (
        <div id="skill" className="w-full md:pl-[40px] md:pr-[80px] pl-[20px] pr-[20px] pt-[70px] flex flex-col gap-2">
            <div className="text-[30px] text-[#34495e] font-bold ">Skills</div>
            <div className="text-[#34495e] text-[20px]">Programming Languages & Tools:</div>
            <div className="flex gap-5 items-center flex-wrap">
                <div className="group relative">
                    <FaIcon.FaHtml5 className="text-[60px] text-[#e54d26] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">HTML</span>
                </div>
                <div className="group relative">
                    <FaIcon.FaCss3 className="text-[55px] text-[#3d8fc6] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">CSS</span>
                </div>
                <div className="group relative">
                    <FaIcon.FaJs className="text-[55px] text-[#f7e018] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">JavaScript</span>
                </div>
                <div className="group relative">
                    <FaIcon.FaReact className="text-[55px] text-[#61dafb] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">React</span>
                </div>
                <div className="group relative">
                    <RiTailwindCssFill className="text-[55px] text-[#16becb] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">Tailwind CSS</span>
                </div>
                <div className="group relative">
                    <FaIcon.FaBootstrap className="text-[55px] text-[#8712fb] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">Bootstrap</span>
                </div>
                <div className="group relative">
                    <FaIcon.FaJava className="text-[55px] text-[#3d8fc6] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">Java</span>
                </div>
                <div className="group relative">
                    <DiIcon.DiDotnet className="text-[55px] text-[#1487cb] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">.NET</span>
                </div>
                <div className="group relative">
                    <DiIcon.DiMysql className="text-[55px] text-[#3d8fc6] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">MySQL</span>
                </div>
                <div className="group relative">
                    <DiIcon.DiGithubBadge className="text-[55px] text-black hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">GitHub</span>
                </div>
                <div className="group relative">
                    <DiIcon.DiTrello className="text-[55px] text-[#0052cc] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">Trello</span>
                </div>
                <div className="group relative">
                    <PiFigmaLogo className="text-[55px] text-[#0052cc] hover:text-[#ffc107] cursor-pointer" />
                    <span className="tooltip-text text-[13px]">Figma</span>
                </div>
            </div>
            <div className="font-semibold text-[20px] text-[#34495e] mt-2">Workflow</div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <FaIcon.FaCheck className="text-[15px] text-[#3dab62]" />
                    <div className="font-semibold text-[16px] text-[#34495e]">Git, Github for Teamwork</div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaIcon.FaCheck className="text-[15px] text-[#3dab62]" />
                    <div className="font-semibold text-[16px] text-[#34495e]">Responsive Web Design</div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaIcon.FaCheck className="text-[15px] text-[#3dab62]" />
                    <div className="font-semibold text-[16px] text-[#34495e]">Testing & Debugging</div>
                </div>
            </div>
        </div>
    );
}

export default Skills;