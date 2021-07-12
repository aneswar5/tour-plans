import React from 'react';
import Display  from './Display';
import './tour.css';

export default function Tour({tour, deletelist}) {
    return (
        <div> 
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tour.map((loc)=>{
                    return(
                        <Display key={loc.id} {...loc} deletelist={deletelist} />
                    )
                })}
            </div>
        </div>
    )
}
