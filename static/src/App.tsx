import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import axios from 'axios';
import Champion from './components/champion';

import styles from './App.module.css';

async function getData() {
  try {
    const response = await axios.get('http://localhost:8080/champs',)
    return response.data
  } catch (err) {
    console.error(err);
  }
}

const App: Component = () => {

  getData()
  .then(res => {
    var data = res
  })
  .catch(err => console.log(err))
  
  return (
    <div class={styles.container}>
      {data.forEach((champ, index) => {
        return <Champion champion={champ} mastery={champ} />
      })}
    </div>
  );
};

export default App;
