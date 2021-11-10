import React from 'react';
import Edit_header from '../edit_header/edit_header';
import styles from './edit_form.module.css'

const Edit_form = (props) => {
    return(
        <div className={styles.editform}>
            <Edit_header/>
         <form className={styles.form}>
            <input 
            className={styles.title}
            type="text"
            name="title"
            />
            <textarea
            className={styles.text}
            type="text"
            name="text"
            />
         </form>
         <button className={styles.add}>❤</button>
        </div>
    )
}

export default Edit_form;