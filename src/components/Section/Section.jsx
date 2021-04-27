import React from 'react';

import styles from './Section.module.css';

const Section = ({title, children}) => {
    return (
        <section>
            <h2 className={styles.heading}>{title}</h2>
            {children}
        </section>
    )
    
}
export default Section