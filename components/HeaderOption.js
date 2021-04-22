function HeaderOption({ Icon, title, selected }) {
    return (
        <div
            className={`flex items-center space-x-1 py-2 border-b-4 border-transparent cursor-pointer hover:text-blue-500 ${
                selected && "border-blue-500 text-blue-500"
            }`}
        >
            <Icon className="h-4 hidden sm:block" />
            <p>{title}</p>
        </div>
    );
}

export default HeaderOption;
