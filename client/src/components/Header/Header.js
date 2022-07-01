import React from 'react';
import "../../css/Header/Header.css";
import {strings} from '../../strings';

function Header() {
    return (
        <header>
          <h3>{strings.headerTitle}</h3>
        </header>
    )
}

export default Header