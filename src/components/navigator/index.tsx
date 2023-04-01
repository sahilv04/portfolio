import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'
import styles from './Navigator.module.css'

const Navigator = () => {
    return(
        <Navbar className={`container ${styles.navigatorMain}`} sticky='top'>
            <Container>
                <Link className={`navbar-brand pt-4 ${styles.brandText}`} href="/">
                    <span className={styles.arrow}>{'<'}</span> Sahil Verma <span className={styles.arrow}>{'/>'}</span>
                </Link>
            </Container>
            <Container>
                <Link className='navbar-brand' href="/">Home</Link>
                <Link className='navbar-brand' href="/education">Education</Link>
                <Link className='navbar-brand' href="/experience">Experience</Link>
                <Link className='navbar-brand' href="/blogs">Blogs</Link>
                <Link className='navbar-brand' href="/contact-me">Contact me</Link>
            </Container>
        </Navbar>
    )
}

export default Navigator