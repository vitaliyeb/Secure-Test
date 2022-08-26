import React, {FC} from "react";
import styles from './style.module.css';

const Layout: FC<{children: React.ReactNode}> = ({ children }) => {
    return (<div className={styles.wrapper}>
        { children }
    </div>)
}

export default Layout;