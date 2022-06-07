interface Props {
    champion: string;
    mastery: string;
}

export default function Champion({champion, mastery}: Props) {

    return (
        <p>{champion}: {mastery}</p>
    )

}