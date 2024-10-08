import Sidebar from "../components/Sidebar";
import About from "../components/About"
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Interests from "../components/Interests";
import End from "../components/End";
import { useEffect, useState } from "react";
function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth < 700);

    return (
        <div className="flex w-full h-screen">
            <Sidebar></Sidebar>
            <div className={`flex flex-col ${sidebarOpen ? "w-full" : 'md:ml-[20%] md:w-4/5'}`}>
                <About></About>
                <Projects></Projects>
                <Skills></Skills>
                <Education></Education>
                <Interests></Interests>
                <End></End>
            </div>
        </div>
    );
}

export default Home;