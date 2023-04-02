import WhatDoIDoSvg from "@/components/svg/what-do-i-do"
import styles from "../HomePage.module.css"
import MongoDbIcon from "@/components/svg/MongoDbIcon";
import TypescriptIcon from "@/components/svg/TypescriptIcon";
import PostgreIcon from "@/components/svg/PostgreIcon";
import TechComponent from "./TechComponent";

const WhatDoIDoComponent = () => {
    return(
        <div className={`row mt-5 ${styles.whatDoIDoContainer}`}>
            <h1 className="text-center primary-text-color">What do I do?</h1>
            <div className="col-md-6"><WhatDoIDoSvg /></div>
            <div className="col-md-6">
                <h2 className="text-center mt-5 mb-5 primary-text-color">Full Stack Development</h2>
                <div className="text-center mb-4">
                    <TechComponent tooltip="ReactJS"><i className="fa-brands fa-react" style={{color: "#00c7fc"}}></i></TechComponent>
                    <TechComponent tooltip="NodeJS"><i className="fa-brands fa-node-js" style={{color: "#669c35"}}></i></TechComponent>
                    <TechComponent tooltip="Angular"><i className="fa-brands fa-angular" style={{color: "#e32400"}}></i></TechComponent>
                    <TechComponent tooltip="React Native"><i className="fa-brands fa-react" style={{color: "#874efe"}}></i></TechComponent>
                    <TechComponent tooltip="Javascript"><i className="fa-brands fa-js" style={{color: "#f5ec00", backgroundColor: '#111111'}}></i></TechComponent>
                    <TechComponent tooltip="Typescript"><span className={styles.techSvgIcon}><TypescriptIcon /></span></TechComponent>
                    <TechComponent tooltip="MongoDB"><span className={styles.techSvgIcon}><MongoDbIcon /></span></TechComponent>
                    <TechComponent tooltip="PostgreSQL"><span className={styles.techSvgIcon}><PostgreIcon /></span></TechComponent>
                    <TechComponent tooltip="NPM"><i className="fa-brands fa-npm" style={{color: "#b51a00"}}></i></TechComponent>
                    <TechComponent tooltip="Yarn"><i className="fa-brands fa-yarn" style={{color: "#008cb4"}}></i></TechComponent>
                    <TechComponent tooltip="Sass"><i className="fa-brands fa-sass" style={{color: "#ed719d"}}></i></TechComponent>
                    <TechComponent tooltip="HTML5"><i className="fa-brands fa-html5" style={{color: "#ff6a00"}}></i></TechComponent>
                    <TechComponent tooltip="CSS3"><i className="fa-brands fa-css3" style={{color: "#0061ff"}}></i></TechComponent>
                </div>
                <div className="text-secondary h5">
                    <p>⚡ Building responsive website front end using React-Redux and Angular</p>
                    <p>⚡ Creating application backend in Node and Express</p>
                    <p>⚡ Leading the team and maintaining high code quality</p>
                </div>
            </div>
        </div>
    )
}

export default WhatDoIDoComponent