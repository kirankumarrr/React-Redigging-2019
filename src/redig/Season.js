import React from "react";
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        //Northan hemisphere
        return lat > 0 ? "summer" : "winter";
    } else {
        //Southern hemisphere
        return lat > 0 ? "winter" : "summer";
    }
};
const Season = props => {
    const { lat } = props;
    const season = getSeason(props.lat, new Date().getMonth);
    console.log(getSeason(props.lat, new Date().getMonth));
    return (
        <div>
            <h1> season:</h1>
            {season}
            <h1> {lat}</h1>
        </div>
    );
};
export default Season;
