import React,{useState} from 'react';
import './display.css';

const Display = ({id, image, info, name, price, deletelist}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="display">
            <img src={image} alt={name} />
            <div className="footer">
                <div className="infoname">
                    <h4>{name}</h4>
                    <h4 className="price">${price}</h4>
                </div>
                <p>
                    {readMore ? info: `${info.substring(0, 190)}...`}
                    <button onClick={()=> setReadMore(!readMore)}>
                        {readMore?'show less' : ' read more'}
                    </button>
                </p>
                <button className="delete-btn" onClick={()=> deletelist(id)}>
                    not interested
                </button>
            </div>
        </div>
    )
}

export default Display;
