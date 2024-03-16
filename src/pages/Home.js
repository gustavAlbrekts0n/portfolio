import "pages/Home.css";
import Project from "components/Project";

function Home() {
    return (
        <div className="root">
            <div className="intro">
                <h1 className="intro-hello">Hello!</h1>
                <div className="intro-body">
                    <p className="intro-tagline">
                        I'm <strong>PonderingPenguin</strong>, a passionate indie game developer, web developer and computer science student.
                    </p>
                    <div className="intro-icon">
                        <img src={require("img/ponderingPenguin256.png")} alt="PonderingPenguin" />
                    </div>
                </div>
            </div>
            <div className="projects">
                <h1 className="projects-header">MY PROJECTS</h1>
                <div className="project-list">
                    <Project title="Freestile" />
                    <Project title="Snow Vacation" />
                </div>
            </div>
        </div>
    );
}

export default Home;
