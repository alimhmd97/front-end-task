import styles from './navbar.module.css';
import homeIcon from '../../../../public/assets/images/home_logo.png'
import Image from 'next/image';
const Navbar = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <a><Image  alt='' src={homeIcon}/></a>
        </div>
    );
}

export  {Navbar};
