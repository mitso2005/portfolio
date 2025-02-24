
function Header(){

    return(
        <header>
            <nav>
                <ul className="fixed top-0 left-0 h-10 w-full bg-black text-white flex justify-center items-center space-x-10 shadow-md">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">UGC</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )

}

export default Header