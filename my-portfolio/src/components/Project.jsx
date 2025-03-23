const Project = ({ title, techStack, githubLink }) => {
    return (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
            {/* Left: Project Title & Tech Stack */}
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{techStack}</p>
            </div>

            {/* Right: GitHub Link */}
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
            >
                View on GitHub →
            </a>
        </div>
    );
};

export default Project;