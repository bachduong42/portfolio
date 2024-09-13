import * as FaIcon from "react-icons/fa";
function Skills() {
    return (
        <div id="skill" className="w-full pl-[40px] pr-[80px] pt-[70px]">
            <div className="text-[30px] text-[#34495e] font-bold ">Skills</div>
            <div className="text-[#34495e] text-[20px]">Programming Languages & Tools:</div>
            <div className="flex gap-2 items-center">
                <FaIcon.FaHtml5 className="text-[60px] text-[#e54d26] hover:text-[#ffc107] " />
                <FaIcon.FaCss3 className="text-[55px] text-[#3d8fc6] hover:text-[#ffc107]" />
            </div>
        </div>
    );
}

export default Skills;