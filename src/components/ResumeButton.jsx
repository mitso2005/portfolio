import React from 'react';

function ResumeButton() {
  return (
    <div className="fixed bottom-6 left-4 z-50">
      <a
        href="/DimitriResume.pdf"
        download
        className="bg-red-500 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-red-600 transition duration-300 shadow-lg hover:shadow-xl"
      >
        Download my Resume
      </a>
    </div>
  );
}

export default ResumeButton;
