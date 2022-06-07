import axios from 'axios';
import { createSignal, For } from 'solid-js';
import Champion from './champion';
const [champs, setChamps] = createSignal({'hello': 'world', 'world': 'hello'});

async function getChamps() {
    const res = await axios.get('http://localhost:8080/champs')
    const data = res.data;
    return data

}

getChamps().then(champs => setChamps(champs)).catch(err => console.error(err));


export default function Champions() {

    console.log(champs())

    return (
        // <h1>Champion</h1>
        <For each={champs()}>
            {(champion, i) =>
            <div class="champions_container">
                <Champion champion={champion} mastery={champion} />
            </div>}
        </For>
    )
}
