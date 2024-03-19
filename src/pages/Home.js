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
                    <Project
                        title="Snowscaper"
                        url="https://ponderingpenguin.itch.io/snowscaper"
                        desc="Manage your very own little ski resort. Make sure the visitors are having their best time at your resort and that everything is running smoothly."
                    />
                    <Project
                        title="Freestile"
                        url="https://ponderingpenguin.itch.io/freestile"
                        desc="Move around the board and merge blocks by careful planning. Aim for as many juicy points as possible!" 
                    />
                    <Project
                        title="Snow Vacation"
                        url="https://ponderingpenguin.itch.io/ski-resort-manager-wip"
                        desc="Become the manager of your very own ski resort"
                    />
                    <Project
                        title="Habits"
                        url="https://ponderingpenguin.itch.io/habits"
                        desc="The world's most simplified life simulator"
                    />
                    <Project
                        title="Exosphere"
                        url="https://gus-028.itch.io/exosphere"
                        desc="Aim for the stars in this minimalistic endless runner"
                    />
                    <Project
                        title="Pivot Jump"
                        url="https://gus-028.itch.io/pivot-jump"
                        desc="Twist and turn your entire surroundings to reach the goal"
                    />
                    <Project
                        title="Geometry Merge"
                        url="https://gus-028.itch.io/geometry-merge"
                        desc="Move and merge while watching your playable area shrinking"
                    />
                    <Project
                        title="Mecha Serpent"
                        url="https://gus-028.itch.io/mecha-serpent"
                        desc="Grow a mechanical snake large enough to reach around the globe"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
