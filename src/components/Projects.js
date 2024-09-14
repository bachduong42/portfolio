import ProjectItem from "./ProjectItem";
import pbl3 from "../images/pbl3.png"
import pbl4 from "../images/pbl41.png"
import pbl5 from "../images/pbl5.png"
function Projects() {
    const listProject = [
        { ava: pbl3, name: 'Accommodation Management Software', descrip: 'Build a desktop system to manage and rent rooms' },
        { ava: pbl4, name: 'Volunteer Activities Management System', descrip: 'Build a website to manage volunteer activities' },
        { ava: pbl5, name: 'Face recognition time attendance system', descrip: 'Build a website combined with AI to take attendance using facial recognition and timekeeping' }
    ]
    return (
        <div id="project" className="w-full md:pl-[40px] md:pr-[80px] pl-[20px] pr-[20px] md:mt-0 mt-2">
            <div className="text-[30px] text-[#34495e] font-bold ">Projects</div>
            <div className="text-[#34495e] text-[20px] md:mb-0 mb-2">Here are a few of my standout projects:</div>
            <div className="grid md:grid-cols-2 gap-4 md:px-5 md:py-5 grid-cols-1">
                {listProject.map((item, index) => (
                    <ProjectItem key={index} props={item}></ProjectItem>
                ))}
            </div>
        </div>
    );
}

export default Projects;