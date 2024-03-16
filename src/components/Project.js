import "pages/Home.css";

function ProjectImage(props) {
    switch (props.title) {
        case "Freestile":
            return (<img src={require("img/banner-freestile.png")} alt={props.title} />);
        case "Snow Vacation":
            return (<img src={require("img/banner-snowvacation.png")} alt={props.title} />);
        default:
            return (<img src={require("img/ponderingPenguin256.png")} alt={props.title} />);
    }
}

function Project(props) {
    return (
        <div className="project">
            <ProjectImage title={props.title} />
            <h1 className="project-title">{props.title}</h1>
        </div>
    );
}

export default Project;
