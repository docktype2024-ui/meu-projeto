import {FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
    return (
    <footer>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedinIn/>
            </li>
        </ul>   
        <p>Nosso rodape</p>     
    </footer>
)
}
export default Footer