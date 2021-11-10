import React from 'react';
import styles from './edit_header.module.css';


const Edit_header = (props) => {
    return(
        <div className={styles.header}>
        <h1 className={styles.year}>2019년</h1>
        <p className={styles.month}>수요일</p>
        <div className={styles.weather}>
        <button className={styles.button}>🌞</button>
        <button className={styles.button}>🌧</button>
        <button className={styles.button}>☁</button>
        <button className={styles.button}>⛅</button>
        <button className={styles.button}>🌫</button>
        <button className={styles.button}>❄</button>
        </div>
        </div>
    )
}

export default Edit_header;