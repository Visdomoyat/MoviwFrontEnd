import styles from './Footer.module.css'

function Footer() {
    return (
        <main className={styles.footer}>
            <table>
                <tr>
                    <th>Portfolio</th>
                    <th>Contact Us</th>
                </tr>
                <tr>
                    <td>
                        <a href=" https://zombiecart.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <p>Zombie Shopping Cart </p>
                        </a>
                    </td>
                    <td>
                         +1 234 8177 874
                    </td>
                </tr>
            </table>
            <p>copyright 2025 VISDOM-DEV All Rights Reserved</p>
        </main>
    )
}

export default Footer