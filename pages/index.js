import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image/";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
    // set useRouter to a var for easy access
    const router = useRouter();

    // get the input text attached to a ref
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <div className="flex justify-center flex-col h-screen">
            <Head>
                <title>Google Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="flex justify-between items-center text-sm text-gray-800 py-2 px-4">
                {/* Left Section */}
                <div className="flex space-x-4">
                    <a className="basic-link" href="#">
                        About
                    </a>
                    <a className="basic-link" href="#">
                        Store
                    </a>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <a className="basic-link" href="#">
                        Gmail
                    </a>
                    <a className="basic-link" href="#">
                        Images
                    </a>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full text-gray-500 p-2 cursor-pointer hover:bg-gray-100">
                        <ViewGridIcon />
                    </div>

                    {/* Avatar */}
                    <Avatar url="https://angeltasevski.com/img/avatar192x192.jpg" />
                </div>
            </header>

            {/* Body */}
            <main className="px-5 flex-grow">
                <form className="flex flex-col items-center mt-48 mb-10">
                    <Image
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        width={272}
                        height={92}
                    />

                    <div className="flex items-center mt-5 px-3 w-full max-w-xl rounded-full border border-gray-200 hover:shadow-md focus-within:shadow-md">
                        <SearchIcon className="h-4 px-1 mr-2 text-gray-500" />
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="flex-grow focus:outline-none py-2.5"
                        />
                        <MicrophoneIcon className="h-5 px-1 text-blue-500 cursor-pointer" />
                    </div>

                    <div className="flex flex-col justify-center w-full mt-7 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row">
                        <button className="btn" onClick={search}>
                            Google Search
                        </button>
                        <button className="btn" onClick={search}>
                            I'm feeling lucky
                        </button>
                    </div>
                </form>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
