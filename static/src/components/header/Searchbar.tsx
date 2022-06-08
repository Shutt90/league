export default function Searchbar() {
    return (
        <form method="post">
            <input type="text" placeholder="Search..." />
            <input type="submit" onclick={(e) => e.preventDefault()}></input>
        </form>
    )
}