import React, { Component } from "react";

import headerStyles from "./Header.scss";

class Header extends React.Component {
    render() {
        return (
            <header className={headerStyles.navBar}>
                <a className={headerStyles.headerLogo} href=''>
                    <img />
                </a>
                <span className={headerStyles.hamburgerIcon} />
            </header>
        );
    }
}

export default Header;
