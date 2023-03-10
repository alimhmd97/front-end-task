import { BreadCrumb } from '../breadCrumb/breadCrumb';
import styles from './header.module.css';

const Header = ({title}) => {
    return (
        <header className={styles.header_wrapper}>
            <span className={styles.title_wrapper}>{title}</span>
            <BreadCrumb title={title}/>
        </header>
    );
}

export{Header};
