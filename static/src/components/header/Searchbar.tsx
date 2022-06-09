import axios from "axios"

export default function Searchbar() {

    async function getSummoner(e: Event) {
        e.preventDefault();
        const summoner = document.getElementById("summoner").value;
        await axios.get('http://localhost:8080/getSumm/' + summoner)
    }

    return (
        <form method="post">
            <input type="text" id="summoner" placeholder="Search..." />
            <input type="submit" onclick={() => getSummoner()}/>
        </form>
    )
}