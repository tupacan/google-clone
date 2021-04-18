function Avatar({ url }) {
    return (
        <div className="avatar-wrap">
            <img
                loading="lazy"
                src={url}
                alt="Profile Picture"
                className="rounded-full" />
        </div>
    )
}

export default Avatar
