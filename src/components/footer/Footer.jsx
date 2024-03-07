import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.text}>
                Joodi creative thoughts agency. All right reserved.
            </div>
        </div>
    );
}

export default Footer;