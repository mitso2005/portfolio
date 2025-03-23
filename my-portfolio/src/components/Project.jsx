const Project = ({ title, techStack, githubLink }) => {
    // Function to determine link text
    const renderGitHubLink = () => {
        if (githubLink) {
            return (
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:underline"
                >
                    View on GitHub →
                </a>
            );
        } else {
            return <span className="text-gray-400">GitHub Coming Soon</span>;
        }
    };

    return (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
            {/* Left: Project Title & Tech Stack */}
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{techStack}</p>
            </div>

            {/* Right: GitHub Link */}
            {renderGitHubLink()}
        </div>
    );
};

export default Project;