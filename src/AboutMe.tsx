
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

import portrait from './assets/sittingMe.jpg'





const AboutMeIcons = () => {
    return (
        <div className={"d-flex flex-nowrap justify-content-evenly align-items-center gap-3 w-100"} style={{height: '50px'}}>
            <a className="fab fa-github" href="https://github.com/teaBag024">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a className="fa fa-envelope" href="mailto:lxz230006@utdallas.edu">
                <FontAwesomeIcon icon={['fa', 'envelope']} />
            </a>
            <a className="fab fa-instagram"
               href="https://www.instagram.com/lilac_a_doodle?igsh=Y2IzeXM3end5eGZl">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a className="fab fa-linkedin-square"
               href="https://www.linkedin.com/in/lilian-zeng-b10b5a316/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
        </div>
    )
};
export default function AboutMe(){

    return(
        <>
            <div id={"about-me"}></div>
            <div className="container" id="startCardsID">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="solidCard col-md-4" id="cardID">
                        <div className="imgContainer">
                            <img src={portrait} width="100%"/>
                        </div>
                        <div className="title">
                            <h1>Lilian Zeng</h1>
                        </div>
                        <AboutMeIcons/>
                    </div>

                    <div className="cardText col-md-6 align-self-end" id="bioCardID">
                        <br />
                        <br />
                        <div className="title">
                            <h2>Bio</h2>
                        </div>
                        <div>
                            Hi!, I am Lilian -- currently pursuing my Computer Science undergrad at The
                            University of Texas at Dallas. When I'm not locking in, I enjoy hikes in the great outdoors
                            and various arts ad crafts.
                            <br />
                            <br />
                            Currently looking for internship opportunities over the summer!
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </>
    )
}


