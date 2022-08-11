import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink
} from './../../components';
function Logout(){
    return function(){
    console.log('cancellato value');
    }
}
const NavbarUser = (props) => (
    <NavItem { ...props }>
            <NavLink tag={ Link } to="/pages/login" >
            <i className="fa fa-power-off" onClick={Logout()}></i>
        </NavLink>
    </NavItem>
);
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
