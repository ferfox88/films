import React from "react";
import Star from './Star';
import {v4 as uuid} from "uuid";

const Stars = ({count}) => {
    const stars = [];
    for (let i = 0; i < count; i += 1) {
        stars.push(<Star key={(uuid())}/>); 
    }
    if (count < 1 || count > 5) {
        return;
    }

    return (
        <ul class="card-body-stars u-clearfix">
            {stars}
        </ul>
    );
}

export default Stars;