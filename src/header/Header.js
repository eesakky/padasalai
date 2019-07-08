import React, { Component } from "react";
import SearchBar from "./SearchBar";

import headerStyles from "./Header.scss";

class Header extends React.Component {
    render() {
        return (
            <header className={headerStyles.navBar}>
                <div className={headerStyles.logoContainer}>
                    <a className={headerStyles.headerLogo} href=''>
                        <img src='../assets/logo.png' />
                    </a>
                    <span className={headerStyles.hamburgerIcon} />
                </div>
                <SearchBar />
            </header>
        );
    }
}

export default Header;
