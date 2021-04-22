function Footer() {
    return (
        <footer className="bg-[#f2f2f2] text-gray-500 leading-none">
            <div className="px-8 md:px-44 py-4 border-b border-gray-300">
                <p>Germany</p>
            </div>
            <div className="flex flex-col items-center px-4 md:px-40 md:flex-row md:justify-evenly xl:justify-between">
                <div className="flex items-center text-center">
                    <a href="" className="basic-link p-4">
                        Advertising
                    </a>
                    <a href="" className="basic-link p-4">
                        Business
                    </a>
                    <a href="" className="basic-link p-4">
                        About
                    </a>
                </div>
                <div className="flex items-center text-center">
                    <a href="" className="basic-link p-4">
                        Privacy
                    </a>
                    <a href="" className="basic-link p-4">
                        Terms
                    </a>
                    <a href="" className="basic-link p-4">
                        Settings
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
