import "pages/Home.css";

function ProjectImage(props) {
    switch (props.title) {
        case "Snowscaper":
            return (<img src={require("img/banner-snowscaper.png")} alt={props.title} />);
        case "Freestile":
            return (<img src={require("img/banner-freestile.png")} alt={props.title} />);
        case "Snow Vacation":
            return (<img src={require("img/banner-snowvacation.png")} alt={props.title} />);
        case "Habits":
            return (<img src={require("img/banner-habits.png")} alt={props.title} />);
        case "Exosphere":
            return (<img src={require("img/banner-exosphere.png")} alt={props.title} />);
        case "Pivot Jump":
            return (<img src={require("img/banner-pivotjump.png")} alt={props.title} />);
        case "Geometry Merge":
            return (<img src={require("img/banner-geometrymerge.png")} alt={props.title} />);
        case "Mecha Serpent":
            return (<img src={require("img/banner-mechaserpent.png")} alt={props.title} />);
        default:
            return (<img src={require("img/ponderingPenguin256.png")} alt={props.title} />);
    }
}

function Project(props) {
    return (
        <div className="project">
            <a href={props.url} target="_blank" rel="noopener noreferrer"> <ProjectImage title={props.title} /> </a>
            <div className="project-info">
                <h1 className="project-title">{props.title}</h1>
                <p className="project-desc">{props.desc}</p>
            </div>
        </div>
    );
}

export default Project;
