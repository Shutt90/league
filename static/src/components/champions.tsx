import { For } from 'solid-js';
import Champion from './Champion';
import styles from '../styles/champions.module.css';
import { champs } from './header/Searchbar';

export default function Champions() {
    return (
        <div class={styles.champions_container}>
            <h3>Champion Mastery</h3>
            <For each={champs()}>
                {(champion, i) =>
                <div class="champions_container">
                    <Champion data-index={i} champion={champion.Champion} mastery={champion.Points} />
                </div>}
            </For>
        </div>
    )
}
