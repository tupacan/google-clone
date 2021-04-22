import { MenuIcon, MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex flex-wrap sm:flex-nowrap justify-between sm:justify-start items-center w-full p-4 sm:p-6">
                <MenuIcon className="sm:hidden h-5 text-gray-500 flex-shrink-0 cursor-pointer" />
                <Image
                    src={
                        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    }
                    width={92}
                    height={30}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow order-1 sm:order-none w-full sm:w-auto items-center max-w-2xl border border-gray-100 rounded-full shadow-md py-2 px-4 mt-5 sm:mt-0 sm:ml-10 sm:mr-4">
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow w-full focus:outline-none"
                        defaultValue={router.query.term}
                    />
                    <XIcon
                        className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        title="Clear"
                        onClick={() => {
                            searchInputRef.current.value = "";
                        }}
                    />
                    <div className="hidden sm:flex items-center border-l border-gray-300 pl-3 ml-4">
                        <MicrophoneIcon className="h-6 text-blue-500 cursor-pointer" />
                        <SearchIcon
                            className="h-6 text-blue-500 ml-4 cursor-pointer"
                            onClick={search}
                        />
                    </div>
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar
                    url={"https://angeltasevski.com/img/avatar192x192.jpg"}
                    wrapClasses={"sm:ml-auto"}
                />
            </div>
            <HeaderOptions />
        </header>
    );
}

export default Header;
