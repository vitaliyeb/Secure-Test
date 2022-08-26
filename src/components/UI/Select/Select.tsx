import React, {useState} from "react";
import styles from './style.module.css';

export interface ISelectProps {
    label: string;
    value: string;
    options: { [key: string]: string }
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Select: React.FC<ISelectProps> = ({options, value, onChange, label, placeholder}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (<div className={styles.wrapper} data-type="select">
        <div className={styles.header}>
            <p>{label}</p>
            <span></span>
        </div>
        <div className={styles.fieldWrapper} onClick={() => setIsOpen(!isOpen)}>
            <p>{options[value] || <span className={styles.placeholder}>{placeholder}</span>}</p>
            {
                isOpen &&
                <div className={styles.optionsWrapper}>
                    <div className={styles.optionsPadding}>
                        <div>
                            {
                                Object.entries(options).map(([value, label]) =>
                                    <p key={value} onClick={() => onChange(value)}>{label}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>)
}