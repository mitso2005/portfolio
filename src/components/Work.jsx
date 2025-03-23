const Work = ({ title, company, time, website}) => {

    return (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
            {/* Left: Company & Title */}
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                {/* Company as a clickable link */}
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm text-red-500 hover:underline">
                    {company}
                </a>
            </div>

            <p className=" text-gray-400">{time}</p>
        </div>
    );
};

export default Work;