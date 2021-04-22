function Avatar({ url, wrapClasses }) {
    return (
        <div className={`avatar-wrap ${wrapClasses}`}>
            <img loading="lazy" src={url} alt="Profile Picture" className="rounded-full" />
        </div>
    );
}

export default Avatar;
