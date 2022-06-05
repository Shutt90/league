interface Props {
    champion: string;
    mastery: number
}

export default function Champion({champion, mastery}: Props) {

    return (
        <div class="champion_container">
            <h1>{champion}: {mastery}</h1>
        </div>

    )

}