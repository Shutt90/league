import axios from "axios"
import { createSignal } from 'solid-js';

const [champs, setChamps] = createSignal([{Champion: '', Points: ''}]);

async function getChamps(e: Event) {
    e.preventDefault();
    const summoner = document.getElementById("summoner").value;
    console.log(summoner)
    const res = await axios.get('http://localhost:8080/getsumm?summoner=' + summoner)
    const data = res.data;
    return data
}

export default function Searchbar() {
    return (
        <form method="post">
            <input type="text" id="summoner" name="summoner" placeholder="Search..." />
            <input type="submit" onclick={(e) => getChamps(e).then(champs => setChamps(champs)).catch(err => console.error(err)) }/>
        </form>
    )
}

export {
    champs,
} 