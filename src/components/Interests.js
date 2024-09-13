import anh1 from "../images/cf1.jpg"
import anh2 from "../images/anh2.jpg"
import anh3 from "../images/anh3.jpg"
function Interests() {
    return (
        <div id="interest" className="w-full pl-[40px] pr-[100px] pt-[70px] flex flex-col gap-2">
            <div className="text-[30px] text-[#34495e] font-bold ">Interests</div>
            <div className="text-[18px] text-[#34495e]">Aside from being a developer,
                I love relaxing by indulging in my favorite hobbies.
                Music helps me relax and stay focused, while reading books opens my mind to new ideas and perspectives.
                I’m also a big fan of movies, which allow me to appreciate different styles of storytelling and creativity.
                These interests not only offer a break from development but also fuel my imagination and problem-solving skills.</div>
            <div className="grid grid-cols-6 mt-2 gap-1">
                <div className="relative w-[170px] h-[170px]  cursor-pointer overflow-hidden">
                    <img src={anh3} alt="" className="w-full h-full object-cover transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="relative w-[170px] h-[170px] cursor-pointer overflow-hidden">
                    <img src={anh1} alt="" className="w-full h-full object-cover transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="relative w-[170px] h-[170px]  cursor-pointer overflow-hidden">
                    <img src={anh2} alt="" className="w-full h-full object-cover transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                </div>

            </div>
        </div>
    );
}

export default Interests;