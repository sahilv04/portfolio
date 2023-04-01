import Navigator from "@/components/navigator"
import styles from '@/styles/Home.module.css'

const MainContainer = ({children}: any) => {
    return (
        <main className={styles.main}>
            <Navigator />
            {children}
        </main>
    )
}

export default MainContainer