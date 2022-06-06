import axios from 'axios';
import { For } from 'solid-js';
import { createSignal } from 'solid-js';

export default async function Champion({children}) {
    let data = {};

    try {
        const res = await axios.get('http://localhost:8080/champs')
        data = res.data;
    } catch (err) {
        console.error(err)
    }

    const [champs, setChamps] = createSignal(data);


    console.log(champs)

    
    
    return (
        <div class="champions_container">
            <For each={data}>
            {data.map(champion =>{
                return <Champion champion={champion} mastery={champion} />
            })}
        </div>

    )
}