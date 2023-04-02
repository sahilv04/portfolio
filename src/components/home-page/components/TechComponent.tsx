import styles from "../HomePage.module.css"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

type TCProps = {
    children: any,
    tooltip: string
}
const TechComponent = ({children, tooltip}:TCProps) => {
    const renderTooltip = (props: any) => (
        <Tooltip {...props}>
          {tooltip}
        </Tooltip>
      );
    return(
        <span className={`me-3 ${styles.technologyIcon}`}>
            <OverlayTrigger overlay={renderTooltip}>
                {children}
            </OverlayTrigger>
        </span>
    )
}

export default TechComponent