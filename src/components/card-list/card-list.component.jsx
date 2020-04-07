import React from 'react';

import { Card } from "../card/card.component";

import './card-list.styles.css'

export const CardList = (props) => {
    // console.log(props.children)
    return (
        <div className="card-list">
            {
                props.monsters.map(
                    monsterlist =>
                        (
                            <Card key={monsterlist.id} monster={monsterlist}></Card>
                        )
                )
            }
        </div>
    )
}