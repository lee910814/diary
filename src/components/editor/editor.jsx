import React from 'react';
import Edit_form from '../edit_form/edit_form';
import styles from './editor.module.css'

const Editor = (props) => {
    return(
        <div className={styles.editor}>
          <Edit_form/>
        </div>
    )
}

export default Editor;