import axios from 'axios';
import { createSignal, For } from 'solid-js';
import Champion from './champion';
import styles from '../styles/champions.module.css';
const [champs, setChamps] = createSignal([{Champion: 'Aatrox', Points: '525'}]);

async function getChamps() {
    const res = await axios.get('http://localhost:8080/champs')
    const data = res.data;
    return data

}

getChamps().then(champs => setChamps(champs)).catch(err => console.error(err));

export default function Champions() {
    setTimeout(() => console.log(champs()), 2000);
    return (
        <div class={styles.champions_container}>
            <h3>Champion Mastery</h3>
            <For each={champs()}>
                {(champion, i) =>
                <div class="champions_container">
                    <Champion data-index={i} champion={champion.Champion} mastery={champion.Points} />
                </div>}
            </For>
        </div>
    )
}
