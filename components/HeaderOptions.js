import HeaderOption from "./HeaderOption";
import {
    SearchIcon,
    PhotographIcon,
    NewspaperIcon,
    MapIcon,
    PlayIcon,
    DotsVerticalIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
    return (
        <div className="text-sm overflow-x-auto text-gray-500 border-b border-gray-200 md:pl-40">
            <div className="flex justify-between md:max-w-2xl px-4">
                {/* Left */}
                <div className="flex space-x-4 sm:space-x-6">
                    <HeaderOption Icon={SearchIcon} title="All" selected />
                    <HeaderOption Icon={PhotographIcon} title="Image" />
                    <HeaderOption Icon={NewspaperIcon} title="News" />
                    <HeaderOption Icon={MapIcon} title="Maps" />
                    <HeaderOption Icon={PlayIcon} title="Videos" />
                    <HeaderOption Icon={DotsVerticalIcon} title="More" />
                </div>

                {/* Right */}
                <div className="flex items-center">
                    <a
                        href="#"
                        className="px-3 py-1 border-b-4 border-transparent hover:text-blue-500"
                    >
                        Setting
                    </a>
                    <a
                        href="#"
                        className="px-3 py-1 mb-1 border border-transparent hover:bg-gray-100 hover:border-gray-200 hover:shadow-sm"
                    >
                        Tools
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderOptions;
