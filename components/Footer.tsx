import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © Hana Cai 2021
            </p>
            <div className={styles.footer__left}>
                <a href="https://github.com/hanasai95">Github</a> <br />
                <a href="https://www.linkedin.com/in/hana-c-b43a32211/">LinkedIn</a>

            </div>
        </footer >
    )
}