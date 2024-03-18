import './Header.css';
import styles from './Header.module.css';
function Header(){
    const myStyle = {
        color:'blue',
        backgroundColor:'lightblue'
    }
    return(
        <>
        <h1 className={styles.bigBlue}>External Styling CSS</h1>
        <h1 style={myStyle}>Internal Styling CSS</h1>
        <p>Paragraph text goes here</p>
        </>
    )
}

export default Header;