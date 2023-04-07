import WhatDoIDoSvg from "@/components/svg/what-do-i-do"
import styles from "../HomePage.module.css"
import MongoDbIcon from "@/components/svg/MongoDbIcon";
import TypescriptIcon from "@/components/svg/TypescriptIcon";
import PostgreIcon from "@/components/svg/PostgreIcon";
import TechComponent from "./TechComponent";
import CloudInfraSvg from "@/components/svg/CloudInfraSvg";
import { Fade } from "react-awesome-reveal";

const CloudInfraComponent = () => {
    return(
        <Fade direction="up" triggerOnce>
        <div className={`row`}>
            <h1 className="text-center primary-text-color">Cloud Infrastructure</h1>
            <div className="col-md-6"><CloudInfraSvg /></div>
            <div className="col-md-6">
                <h2 className="text-center mt-5 mb-5 primary-text-color">Full Stack Development</h2>
                <div className="text-center mb-5">
                    <TechComponent tooltip="AWS"><i className="fa-brands fa-aws" style={{color: "#ff6a00"}}></i></TechComponent>
                    <TechComponent tooltip="MongoDB"><span className={styles.techSvgIcon}><MongoDbIcon /></span></TechComponent>
                    <TechComponent tooltip="PostgreSQL"><span className={styles.techSvgIcon}><PostgreIcon /></span></TechComponent>
                    <TechComponent tooltip="Docker"><i className="fa-brands fa-docker" style={{color: "#00c7fc"}}></i></TechComponent>
                </div>
                <div className="text-secondary h5">
                    <p>⚡ Experience working on multiple cloud platforms</p>
                    <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default CloudInfraComponent