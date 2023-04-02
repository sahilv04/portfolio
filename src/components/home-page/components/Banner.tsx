import FeelingProud from "../../svg/feeling-proud"
import styles from "../HomePage.module.css"
import {Fade} from "react-awesome-reveal"

const BannerComponent = () => {
    return(
            <div className="row mt-4">
                <div className={`col-md-6 d-flex ${styles.greetingLeftContainer}`}>
                    <div className={`me-4 pt-4 ${styles.socialIconsContainer}`}>
                        <a className={styles.socialIconItem}
                            href="https://github.com/sahilv04"
                            target="_blank"
                        ><i className="fa-brands fa-github"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialLinkedinIcon}`}
                            href="https://www.linkedin.com/in/sahil-verma-421133147"
                            target="_blank"
                        ><i className="fa-brands fa-linkedin-in"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialGoogleIcon}`}
                            href="mailto:sahilv04@gmail.com"
                            target="_blank"
                        ><i className="fa-brands fa-google"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialTwitterIcon}`}
                            href="https://twitter.com/sahilv04"
                            target="_blank"
                        ><i className="fa-brands fa-twitter"></i></a>
                        <a className={`${styles.socialIconItem} ${styles.socialInstagramIcon}`}
                            href="hhttps://www.instagram.com/ess__vee"
                            target="_blank"
                        ><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div>
                    <h1 className={`mb-4 ${styles.title}`}><Fade cascade damping={0.1}>Sahil Verma</Fade></h1>
                    <p className={`text-muted ${styles.subTitle}`}>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <FeelingProud />
                </div>
            </div>
    )
}

export default BannerComponent