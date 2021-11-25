import React,{useState} from 'react';
import Card from '../card/card';
import styles from './preview.module.css'

const Preview = ({diary}) => {
    return(
        <div className={styles.preview}>
        {diary.map(item => (
         <Card item={item}/>
        ))};
       
        </div>
    )
}

export default Preview;