import style from './style.module.css';
import React, {useId, useState} from "react";
import classNames from "classnames";

export interface IInputProps {
    value: string;
    label: string;
    placeholder?: string;
    customClass?: string;
    onChange: (value: string) => void;
}

export const Input: React.FC<IInputProps> = ({value, placeholder = '', onChange, label, customClass}) => {
    const id = useId();
    return (<div className={classNames(style.wrapper, customClass)} data-type="input">
        <div className={style.heading}>
            <label htmlFor={id}>{label}</label>
            <span></span>
        </div>
        <input
            id={id}
            type="text"
            value={value}
            onChange={(e => onChange(e.target.value))}
            placeholder={placeholder}
        />
    </div>)
}