import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AuthInput = ({ type, name, label, placeholder, icon, className, value, onChange }) => {
    const [inputType, setInputType] = useState(type);

    const togglePasswordVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <div className={`${className}`}>
            <div className="relative mt-1">
                {icon && <span className="absolute inset-y-0 left-0 pl-3 flex items-center">{icon}</span>}
                <input
                    type={inputType}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{ border: "1px solid #333" }}
                    className={`block w-full pl-10 pr-3 py-2 rounded-[8px] h-[56px] bg-transparent focus:outline-none focus:ring-indigo-500 sm:text-sm`}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                        {inputType === 'password' ? 'Show' : 'Hide'}
                    </button>
                )}
            </div>
        </div>
    );
};

AuthInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    icon: PropTypes.element,
};

AuthInput.defaultProps = {
    placeholder: '',
    icon: null,
};

export default AuthInput;
