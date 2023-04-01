import FeelingProud from "../feeling-proud"
import styles from "./HomePage.module.css"
import {Fade} from "react-awesome-reveal"

const HomePageComponent = () => {
    return(
        <div className="container">
            <div className="row">
                <div className={`col-md-6 d-flex ${styles.greetingLeftContainer}`}>
                    <div className={`me-4 pt-4 ${styles.socialIconsContainer}`}>
                        <a className={styles.socialIconItem}><i className="fa-brands fa-github"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialLinkedinIcon}`}><i className="fa-brands fa-linkedin-in"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialGoogleIcon}`}><i className="fa-brands fa-google"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialTwitterIcon}`}><i className="fa-brands fa-twitter"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialInstagramIcon}`}><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div>
                    <h1 className={`mb-5 ${styles.title}`}><Fade cascade damping={0.1}>Sahil Verma</Fade></h1>
                    <h2 className={`text-muted ${styles.subTitle}`}>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <FeelingProud />
                </div>
            </div>
        </div>
    )
}

export default HomePageComponent