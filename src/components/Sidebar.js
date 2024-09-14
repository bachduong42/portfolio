import { useEffect, useState } from "react";
import ava from "../images/ava.jpg"
function Sidebar() {
    const [active, setActive] = useState('about')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [showsidebarMobile, setShowsidebarMobile] = useState(false);

    const scrollToSection = (sectionId, event) => {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(sectionId);
            if (window.innerWidth < 768) {
                setSidebarOpen(true)
                setShowsidebarMobile(false)
            }
        }
    };
    const handleScroll = () => {
        const sections = ['about', 'project', 'skill', 'education', 'interest', 'end'];
        let currentSection = 'about';

        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = sectionId;
                }
            }
        });

        setActive(currentSection);
        setSidebarOpen(true)
        setShowsidebarMobile(false)
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        setShowsidebarMobile(false)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div className={`fixed top-0 left-0 md:w-1/5 bg-[#13C892] md:h-screen w-full h-[90px] flex flex-col items-center z-50 `}>
            <div className="flex justify-between w-full md:justify-center py-1 px-2 ">
                <div className="bg-[#71EAC6] md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[90px] md:mt-[120px]  relative items-center flex justify-center cursor-pointer hover:opacity-85 transition-opacity duration-300">
                    <img src={ava} alt="" className="absolute md:w-[150px] md:h-[150px] w-[75px] h-[75px] object-cover rounded-[90px]" />
                </div>
                {sidebarOpen &&
                    <div className="flex md:hidden text-[40px] text-white items-center px-2 transi duration-200 ease-in-out">
                        <button onClick={() => setShowsidebarMobile(!showsidebarMobile)}>
                            {showsidebarMobile ? "✕" : "☰"}
                        </button>
                    </div>}
            </div>
            <nav className={`flex flex-col w-full md:gap-6 gap-3 px-8 md:px-0 md:mt-9 md:py-0 py-5 justify-center md:items-center bg-[#13C892] transition-max-height duration-500 ease-in-out 
                            ${showsidebarMobile ? 'block' : 'hidden'} md:flex`}>
                <a href="#about" className={`font-bold md:text-[18px] text-[25px] ${active === 'about' ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white`} onClick={(event) => scrollToSection('about', event)}>ABOUT ME</a>
                <a href="#project" className={`font-bold  md:text-[18px] text-[25px]  ${active === 'project' ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white`} onClick={(event) => scrollToSection('project', event)}>PROJECTS</a>
                <a href="#skill" className={`font-bold  md:text-[18px] text-[25px]  ${active === 'skill' ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white`} onClick={(event) => scrollToSection('skill', event)}>SKILLS</a>
                <a href="#education" className={`font-bold md:text-[18px] text-[25px]  ${active === 'education' ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white`} onClick={(event) => scrollToSection('education', event)}>EDUCATION</a>
                <a href="#interest" className={`font-bold  md:text-[18px] text-[25px]  ${active === 'interest' ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white`} onClick={(event) => scrollToSection('interest', event)}>INTERESTS</a>
                <a href="#end" className={`font-bold  md:text-[18px] text-[25px]  ${active === 'end' ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white`} onClick={(event) => scrollToSection('end', event)}>THE END</a>
            </nav>
        </div>

    );
}

export default Sidebar;