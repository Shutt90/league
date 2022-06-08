import { JSX } from "solid-js/jsx-runtime";

export default function NavItem({title, link}: {title: string, link: string}): JSX.Element {

    return (
        <a class="navitem" href={link}>{title}</a>
    )

}