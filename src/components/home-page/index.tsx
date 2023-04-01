import FeelingProud from "../feeling-proud"
import styles from "./HomePage.module.css"
import {Fade} from "react-awesome-reveal"

const HomePageComponent = () => {
    return(
        <div className="container">
            <div className="row">
                <div className={`col-md-6 ${styles.greetingLeftContainer}`}>
                    <h1 className={`mb-5 ${styles.title}`}><Fade cascade damping={0.1}>Sahil Verma</Fade></h1>
                    <h2 className={`text-muted ${styles.subTitle}`}>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</h2>
                </div>
                <div className="col-md-6">
                    <FeelingProud />
                </div>
            </div>
        </div>
    )
}

export default HomePageComponent