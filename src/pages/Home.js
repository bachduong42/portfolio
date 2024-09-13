import Sidebar from "../components/Sidebar";
import About from "../components/About"
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    return (
        <div className="flex w-full h-screen">
            <Sidebar></Sidebar>
            <div className="ml-[20%] flex flex-col w-4/5">
                <About></About>
                <Projects></Projects>
                <Skills></Skills>
            </div>
        </div>
    );
}

export default Home;