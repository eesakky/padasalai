import React from "react";
import Styles from "./SearchBar.scss";
import TextInput from "../controls/TextInput";

class Searchbar extends React.Component {
    render() {
        return (
            <div className={Styles.navBar}>
                <span className={Styles.iconSearch} />
                <TextInput
                    type='text'
                    className={Styles.inputSearch}
                    placeholder='Find Something...'
                />
            </div>
        );
    }
}

export default Searchbar;
