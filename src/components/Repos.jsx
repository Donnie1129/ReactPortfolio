const Repos = (props) => {
    const { title, image, liveUrl, githubUrl } = props.project;

    const renderLinks = () => {
        return (
            <>
                <a href={liveUrl}>Live Site</a>
                <br />
                <a href={githubUrl}>GitHub Repository</a>
            </>
        );
    };

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <img src={image} alt={title} style={{ maxWidth: '30%', height: 'auto' }} />
            </div>
            {renderLinks()}
        </div>
    );
};

export default Repos;
