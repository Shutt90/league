import Nav from './header/Nav';
import Searchbar from './header/Searchbar';
import style from '/src/styles/header.module.css';
import logo from '/src/assets/images/mastery.jpg';

export default function Header() {
    return (
        <div class={style.header}>
            <img height="150" width="auto" class="header-image" src={logo} />
            <h1>League of Legends Mastery</h1>
            <div class={style.rightside}>
                <Nav/>
                <div class={style.spacer}>
                    <Searchbar/>
                </div>
            </div>
        </div>
    )

}
