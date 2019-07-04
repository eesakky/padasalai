import React from "react";
import Styles from "./SearchBar.scss";
import TextInput from "../controls/TextInput";

class Searchbar extends React.Component {
    render() {
        return (
            <ul className={Styles.navBar}>
                <li>
                    <span className={Styles.iconSearch} />
                    <TextInput type='text' />
                </li>
            </ul>
        );
    }
}

export default Searchbar;
