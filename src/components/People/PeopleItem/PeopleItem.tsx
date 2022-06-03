import React from 'react'
import {IPeople} from "../../../types/IPeople";
import styles from "./PeopleItem.module.css"

interface PeopleItemProps {
    people: IPeople;
}

export default function PeopleItem({people} : PeopleItemProps) {
    return (
        <div className={styles.content}>
            <p>{people.name }</p>
            <span>Gender: {people.gender} </span>
            <span>Height: {people.height} </span>
            <span>Mass: {people.mass} </span>
            <span>Hair color: {people.hair_color} </span>
            <span>Skin color: {people.skin_color} </span>
        </div>
    );
}