import React, {useState} from "react";
import styles from './style.module.css';
import classNames from "classnames";

export interface IGroupSelectProps {
    values: Array<string>;
    options: {[key: string]: string}
    onChange: (value: any) => void;
    customClass?: string;
    label: string;
    placeholder?: string;
}

export const GroupSelect: React.FC<IGroupSelectProps> = ({values, options, onChange, customClass, label, placeholder}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleValue = (value: string) => {
        const nextValues = values.includes(value) ?
            values.filter(item => item !== value) :
            [...values, value];
        onChange(nextValues);
    }

    return (<div className={classNames(styles.wrapper, customClass)} data-type="group-select">
        <div className={styles.header}>
            <p>{ label }</p>
            <span></span>
        </div>
        <div className={styles.fieldWrapper} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.valuesWrapper}>
                {
                    values.length ?
                    values.map(value =>
                        <p
                            key={value}
                            className={styles.value}
                        >
                            {options[value]}
                            <span onClick={() => toggleValue(value)} className={styles.removeValue}/>
                        </p>
                    ) : <span className={styles.placeholder}>{ placeholder }</span>
                }
            </div>
            {
                isOpen && <div className={styles.optionsWrapper}>
                    {
                        Object.entries(options).map(([value, label]) =>
                            <p key={value} onClick={() => toggleValue(value)}>{ label }</p>
                        )
                    }
                </div>
            }
        </div>
    </div>)
}