import React from 'react';
import Editor from './components/editor/editor';
import Preview from './components/preview/preview';
import styles from './App.module.css'

const App = (props) =>{
  return(
    <div className={styles.app}>
    <Preview/>
    <Editor/>
    </div>
  )
}

export default App;