import { BsBookmarkFill } from "react-icons/bs";
import { BsAlarmFill } from "react-icons/bs";
function Education() {
    return (
        <div id="education" className="w-full md:pl-[40px] md:pr-[100px] pl-[20px] pr-[20px] pt-[70px] flex flex-col gap-2 ">
            <div className="text-[30px] text-[#34495e] font-bold md:mt-0 mt-1">Education</div>
            <div className="md:flex gap-2 block ">
                <span className="text-[20px] text-[#34495e]">Fourth-year student at</span>
                <span className="text-[20px] text-[#13C892] font-semibold"> Danang University of Science and Technology</span>
            </div>
            <div className="flex gap-2 items-center">
                <BsBookmarkFill className="text-[#ffc107]" />
                <div className="font-bold text-[18px] text-[#34495e]">Major:</div>
                <span className="font-bold text-[18px] text-[#34495e]">Software engineering </span>
            </div>
            <div className="flex gap-2 items-center">
                <BsBookmarkFill className="text-[#ffc107]" />
                <div className="font-bold text-[18px] text-[#34495e]">GPA:</div>
                <span className="font-bold text-[18px] text-[#34495e]">3.67/4</span>
            </div>
            <div className="flex gap-2 items-center">
                <BsAlarmFill className="text-[#e54d26]" />
                <div className="font-bold text-[18px] text-[#34495e]">2021-2025</div>
            </div>
        </div>
    );
}

export default Education;