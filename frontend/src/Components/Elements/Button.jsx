import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon, children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={className}
            style={{
                height: '52px',
                padding: '10px 16px',
                gap: '10px',
                borderRadius: '8px',
                border: '1px solid #5C2289',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {icon && <span style={{ marginRight: '10px' }}>{icon}</span>}
            {children}
        </button>
    );
};

Button.propTypes = {
    icon: PropTypes.element,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    icon: null,
    onClick: () => {},
};

export default Button;


