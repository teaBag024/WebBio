

function myjobs(){
    interface Job{
        title: string;
        start: string;
        end: string;
        descripton: string;
        notes: string[];
    }

    const Jobs: Job[] = [
        {title: "Anson L. Clark Summer Research",
            start:"May 2024",
            end:"July 2024",
            descripton:"Assisted in research pertaining to the effectiveness of Large Language Models in Software Engineering under Professor Wei Yang.",
            notes:["Experimented with Codellama",
                "Wrote Python Scripts to run Codellama and automate testing",
                "Submitted to and presented at the Summer Platform for Undergraduate Research Symposium at the end of the program"]
        },
        {title: "Frozen Associate, Wegmans Food Market",
            start:"May 2023",
            end:"May 2024",
            descripton:"",
            notes:["Provided Excellent Customer Service",
                "Stocked Shelves and assisted in with inventory management"]
        },
        {title: "Teacher Assistant/Volunteer, HUAXIA Great Valley Chinese School",
            start:"Sept. 2021",
            end:"May 2022",
            descripton:"",
            notes:["Organized engaging learning activities for students ages 7–9 ",
                "Assisted in teaching Chinese",
                "Grading Homework and other Activites"]
        }
    ]

    return(
        <>
            {Jobs.map(item => (
                <div key={item.title} className = "cardText">
                    <h5>{item.title}</h5>
                    <i>{item.start} - {item.end}</i>
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


export default function WorkExp(){
    return(
        <>
            <div id="wExpID"></div>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="sectionTitle title col ">
                        <h2>Work Experience</h2>
                    </div>
                </div>
                <div className={"row mb-5"}>
                    <div className={"col-md-1"}></div>
                    <div className="col-md-8">
                        {myjobs()}
                    </div>
                </div>
            </div>
        </>
    )
}