import notionImg from "../assets/notiontemplates.png";

const DownloadDescription = () => {
    return (
        <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-black mb-4">
                Free Notion Template for Job Tracking and Leetcode Practice
            </h2>
            <p className="text-gray-600">
                Stay organized during your job hunt with this easy-to-use Notion template. 
                Track applications, schedule interviews, and manage your progress effortlessly.
                Pair this with a Leetcode tracker to keep your coding skills sharp and land your dream job.
            </p>
            <div>
                {/* Notion Image */}
                <img
                src={notionImg}
                alt="notionImg"
                />
            </div>
        </div>
    );
};

export default DownloadDescription;
