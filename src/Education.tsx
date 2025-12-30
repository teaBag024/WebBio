import './edu.css'

function utdallas(){
    interface SchoolYearClasses {
        title: string,
        completed: boolean,
        classTaken:string[]
    }
    const classes: SchoolYearClasses[] = [
        {title: "2026, Spring", completed:false,
            classTaken:["Professional Responsibility", "Digital Logic and Computer Design", "Database Systems", "Advanced Algorithm Design and Analysis", "Cyber Attack and Defense Lab"]},
        {title: "2025, Fall", completed:true,
            classTaken:["Probability and Statistics", "Data Structures and Algorithms", "Software Engineering", "Programming Paradigms"]},
        {title: "2025, Summer", completed:true,
            classTaken:["Professional and Technical Communication", "Japanese History and Culture"]},
        {title: "2025, Spring", completed:true,
            classTaken:["Computer Architecture", "Systems Programming Unix"]},
        {title: "2024, Fall", completed:true,
            classTaken:["Computer Science II", "Discrete Math I"]},
    ]

    return(
        <>
            <div className="col-md-8">
                <div className="row">
                    <div className="cardText">
                        <div className="title">
                            <h5>University of Texas at Dallas</h5>
                            <small><small>Current GPA: 3.603</small></small>
                        </div>
                        <div>
                            Class of 2028
                            <br />
                        </div>
                    </div>
                </div>
                <br/>
            </div>

            <div className={"d-flex justify-content-center"}>
                <div id={"classesUTD"} className={"justify-content-evenly mx-auto"}>
                    {classes.map(item => (
                        <div key = {item.title} className={"cardText"}>
                            <b>{item.title}:</b> {item.completed? "" : " (Ongoing)"}
                            <small><small>
                                <ul>
                                    {item.classTaken.map(i =>(
                                        <li key = {i}>{i}</li>
                                    ))}
                                </ul>
                            </small></small>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )


}
function deast(){
    return(
        <div className={"col-md-8"}>
            <div className="row">
                <div className="cardText">
                    <div className="title">
                        <h5>Downingtown High School East Campus</h5>
                    </div>
                    <div>
                        Class of 2024 <i>(Completed)</i> <br/>
                        <small><small>GPA: 4.4234 <span></span>SAT: 1560</small></small>
                    </div>
                    <br/>
                    <div className="row ">
                        <div className="col-md-4 cardText">Awards:
                            <small><small>
                                <ul>
                                    <li>National Merit Finalist</li>
                                    <li>AP Scholar with Distinction</li>
                                </ul>
                            </small></small>
                        </div>

                        <div className="col-md-8 cardText">Related Course Work:
                            <small><small>
                                <ul>
                                    <li>AP Computer Science A</li>
                                    <li>AP Computer Science Principles</li>
                                    <li>Honors Data Structures & Game Design</li>
                                    <li>Web and Design</li>
                                </ul>
                            </small></small>

                        </div>



                    </div>

                </div>
            </div>

        </div>
    )
}


export default function MyEducation(){
    return(
        <div id={"myedu"}>
            <div id="educID"></div>
            <div className={"container"}>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="sectionTitle title col d-flex justify-content-center">
                        <h2>Education</h2>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    {utdallas()}
                </div>
                <div className="row d-flex justify-content-center">
                    {deast()}
                </div>


            </div>


        </div>
    )
}