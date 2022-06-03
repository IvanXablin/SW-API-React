import React from 'react';
import styles from './Select.module.css';

interface SelectProps {
    filterItem: string;
    changeItem(s : string): void;
}

export default function Select ({filterItem, changeItem} : SelectProps)  {
    return (
        <select
            value={filterItem}
            onChange={event => changeItem(event.target.value)}
            className={styles.Select}
        >
            <option disabled>Gender</option>
            <option key="01" value="all">All</option>
            <option key="01" value="male">Male</option>
            <option key="03" value="female">Female</option>
            <option key="02" value="n/a">N/A</option>
        </select>
    );
}