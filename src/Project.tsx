
function myprojects(){
    interface Project{
        name: string;
        where: string;
        descripton: string;
        notes: string[];
    }

    const projects: Project[] = [
        {name: "Scribblebug",
            where: "HackUTA 2025",
            descripton: "Built a web solution that utilizes the Gemini API to generate games in Javascript",
            notes: ["Worked on front-end development using React.js and Bootstrap",
                "Worked on incorporating Django to store Users and Games to Database",
                "Used Auth0 to include user authentication."]},
        {name: "What's Up UTD?",
            where: "HackAI 2025",
            descripton: "Participated in the 24-hour Hackathon as a Hacker in a team of 4. Built a full-stack web solution.",
            notes: ["Focused on front-end development using React.js, Bootstrap, and Recharts.",
                "2nd Place Winner For the Nebula Labs Sponsor Challenge"]},
        {name: "DHY-N0",
            where: "HackUTD 2024: Ripple Effect",
            descripton: "Built a web solution that utilizes the Gemini API to answer university specific questions",
            notes: ["Focused on front-end development using React.js, Bootstrap.",
                "2nd Place Winner For the EOG Resources Challenge",
                "Winner of the MLH .tech Challenge"]},

    ]

    return(
        <>
            {projects.map(item => (
                <div key={item.name} className = "cardText">
                    <h5>{item.name}</h5>
                    <i>{item.where}</i>
                    <br />
                    {item.descripton}
                    <ul>
                        {item.notes.map(i => (
                            <li key={i}> {i} </li>
                        ))}
                    </ul>
                </div>
            ))}

        </>
    )

}


export default function Projects(){
    return(
        <>
            <div id="projectID"></div>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="sectionTitle title col ">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className={"row mb-5"}>
                    <div className={"col-md-1"}></div>
                    <div className="col-md-8">
                        {myprojects()}
                    </div>
                </div>
            </div>
        </>
    )
}