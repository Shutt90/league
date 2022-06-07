import type { Component } from 'solid-js';
import Champion from './components/champion';
import Champions from './components/champions';

import styles from './App.module.css';


const App: Component = () => { 

  // fetch('http://localhost:8080/champs')
  // .then(res => res.json())
  // .then(res => data = res)
  // .catch(err => console.error(err))

  return (
    <div class={styles.container}>
      <h1>Hello world</h1>
      <Champions />
    </div>
  );

};


export default App;