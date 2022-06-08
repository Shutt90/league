import type { Component } from 'solid-js';
import Champions from './components/Champions';
import Header from './components/Header';

import styles from './App.module.css';


const App: Component = () => { 
  return (
    <div class={styles.container}>
      <Header/>
      <Champions />
    </div>
  );

};


export default App;