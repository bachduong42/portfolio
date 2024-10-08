function ProjectItem({ props }) {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative md:w-full md:h-[250px] w-full h-[190px] overflow-hidden group rounded-[7px] pb-2 md:pb-0 ">
            <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                <img
                    src={props.ava}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div
                className="absolute inset-0 bg-black hover:bg-[#054e38] hover:bg-opacity-80 bg-opacity-50 flex justify-center items-center rounded-[7px] flex-col cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            >
                <span className="text-white font-bold text-[16px] ">{props.name}</span>
                <span className="text-white text-[10px] mt-1 ">{props.descrip}</span>
            </div>
        </a>

    );
}

export default ProjectItem;