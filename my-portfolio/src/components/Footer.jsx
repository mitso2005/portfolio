
function Footer(){

    return(
        <footer className="bg-gray-900 text-white py-8 flex flex-col items-center space-y-4">
            <ul className="flex flex-col items-center space-y-2">
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">UGC</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
            {/* Social Media Links */}
            <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-300 transition">
                <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="hover:text-gray-300 transition">
                <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="#" className="hover:text-gray-300 transition">
                <i className="fab fa-linkedin text-2xl"></i>
                </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">&copy; 2025 Your Name. All rights reserved.</p>
        </footer>
    )

}

export default Footer