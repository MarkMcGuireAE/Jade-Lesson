import React from 'react';
import Child from './Child';

import styles from "./Last.module.css"
const Last = () => {
    return (
        <div>
            <h1 className={styles.title}>
                
            Last
            </h1>
            <Child/>
        </div>
    );
}

export default Last;
