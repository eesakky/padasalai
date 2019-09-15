import React, { Component } from "react";
import SearchBar from "./SearchBar";

import headerStyles from "./Header.scss";

class Header extends React.Component {
    render() {
        return (
            <header className={headerStyles.navBar}>
                <div className={headerStyles.logoContainer}>
                    <span className={headerStyles.headerLogo} />
                    <span className={headerStyles.hamburgerIcon} />
                </div>
                <SearchBar />
            </header>
        );
    }
}

export default Header;
