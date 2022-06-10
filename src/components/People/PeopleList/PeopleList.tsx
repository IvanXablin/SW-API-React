import React from 'react'
import {IPeople} from "../../../types/IPeople";
import PeopleItem from "../PeopleItem/PeopleItem";
import styles from './PeopleList.module.css';

interface PeopleListProps {
    people: IPeople[];
}

export default function PeopleList({people} : PeopleListProps) {
    return (
        <div className={styles.contentPeople}>
            {people.map(p =>
                <PeopleItem key={p.name} people={p}/>
            )}
        </div>
    );
}