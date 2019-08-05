import React, { Component } from "react"

import Travel from "./Travel"

const travelsData = [
    {
        destination: "Tokyo",
        country: "Japan",
        photo: "https://cdn.welcometothejungle.co/uploads/article/image/5685/154538/bohdan-maylove-1206995-unsplash.jpg",
        distance: 9717
    },
    {
        destination: "New York",
        country: "United States of America",
        photo: "https://hospitality-on.com/sites/default/files/2019-01/times_square_new_york_city_hdr.jpg",
        distance: 5836
    },
    {
        destination: "Montreal",
        country: "Canada",
        photo: "https://www.omnihotels.com/-/media/images/globals/cityshots/montreal-downtown-fall-515441828.jpg?h=660&la=fr-CA&w=1170",
        distance: 5502
    },
    {
        destination: "Los Angeles",
        country: "United States of America",
        photo: "https://cdn.vox-cdn.com/thumbor/qMZyneh3UjnE03c90wHGDb6M0FE=/0x0:6000x4000/1200x675/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/55813197/LA_Skyline_Shutterstock.1529084988.jpg",
        distance: 9084
    },
    {
        destination: "Rome",
        country: "Italy",
        photo: "https://www.ramcotravel.com/medias/Colosseum_cs.jpg",
        distance: 1430
    }
];

class Travels extends Component {
    render() {
        return (
            <div>
                {travelsData.map(
                    travel => (
                        <Travel travelData={travel} />
                    )
                )}
            </div>
        )
    }
}

export default Travels