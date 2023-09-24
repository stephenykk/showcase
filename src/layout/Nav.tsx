import { NavLink } from "react-router-dom"
import styles from './Nav.module.scss'

function Nav() {

    const getClassName = (props: { isActive: boolean, isPending: boolean }) => {
        return styles['nav-item'] + ' ' + (props.isActive ? styles.active : '')
    }

    return (
        <nav className={styles.navbar}>
            <NavLink className={getClassName} to="/">Home</NavLink>
            <NavLink className={getClassName} to="/list">List</NavLink>
            <NavLink className={getClassName} to="/detail">Detail</NavLink>
            <NavLink className={getClassName} to="/login">Login</NavLink>
        </nav>
    )
}


export default Nav