import Nav from './header/Nav';
import Searchbar from './header/Searchbar';
import style from '/src/styles/header.module.css';
import logo from '/src/assets/images/mastery.jpg';

export default function Header() {
    return (
        <div class={style.header}>
            <img height="150" width="auto" class="header-image" src={logo} />
            <Nav/>
            <Searchbar/>
        </div>
    )

}