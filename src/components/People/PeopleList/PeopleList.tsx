import React from 'react'
import {IPeople} from "../../../types/IPeople";
import PeopleItem from "../PeopleItem/PeopleItem";

interface PeopleListProps {
    people: IPeople[];
}

export default function PeopleList({people} : PeopleListProps) {
    return (
        <div>
            {people.map(p =>
                <PeopleItem people={p}/>
            )}
        </div>
    );
}