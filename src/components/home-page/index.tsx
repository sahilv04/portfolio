import BannerComponent from "./components/Banner"
import CloudInfraComponent from "./components/CloudInfra"
import WhatDoIDoComponent from "./components/WhatDoIDo"

const HomePageComponent = () => {
    return(
        <div className="container">
            <BannerComponent />
            <WhatDoIDoComponent />
            <CloudInfraComponent />
        </div>
    )
}

export default HomePageComponent