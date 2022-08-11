import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ThemeConsumer } from '../../../components/Theme';

const logos = {
    'white': require('./../../../images/logos/lg_platform.png'),
    'primary': require('./../../../images/logos/lg_platform.png'),
    'success': require('./../../../images/logos/lg_platform.png'),
    'warning': require('./../../../images/logos/lg_platform.png'),
    'danger': require('./../../../images/logos/lg_platform.png'),
    'info': require('./../../../images/logos/lg_platform.png'),
    'indigo': require('./../../../images/logos/lg_platform.png'),
    'purple': require('./../../../images/logos/lg_platform.png'),
    'pink': require('./../../../images/logos/lg_platform.png'),
    'yellow': require('./../../../images/logos/lg_platform.png')
}

const getLogoUrl = (style, color) => {
    return logos[color];
}

// Check for background
const getLogoUrlBackground = (style, color) => {
    if (style === 'color') {
        return logos['white'];
    } else {
        return getLogoUrl(style, color);
    }
}

const LogoThemed = ({ checkBackground, className, ...otherProps }) => (
    <ThemeConsumer>
    {
        ({ style, color }) => (
            <img
                src={
                    checkBackground ?
                        getLogoUrlBackground(style, color) :
                        getLogoUrl(style, color)
                }
                className={ classNames('d-block', className) }
                alt="hh"
                { ...otherProps }
            />
        )
    }
    </ThemeConsumer>
);
LogoThemed.propTypes = {
    checkBackground: PropTypes.bool,
    className: PropTypes.string,
};

export { LogoThemed };
