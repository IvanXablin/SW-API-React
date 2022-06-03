import React from 'react'
import {IPeople} from "../../../types/IPeople";
import styles from "./PeopleItem.module.css"

interface PeopleItemProps {
    people: IPeople;
}

export default function PeopleItem({people} : PeopleItemProps) {
    return (
        <div className={styles.content}>
            <div className={styles.contentItem}>
                <h3>{people.name }</h3>
                <p>Gender: {people.gender} </p>
                <p>Height: {people.height} </p>
                <p>Mass: {people.mass} </p>
                <p>Hair color: {people.hair_color} </p>
                <p>Skin color: {people.skin_color} </p>
            </div>
        </div>
    );
}