import React, {Component} from "react"

class Travel extends Component {
    render() {
        return (
            <figure>
                <h2>Destination: {this.props.travelData.destination} - <span>{this.props.travelData.country}</span></h2>
                <img src={this.props.travelData.photo} alt={this.props.travelData.destination} />
                <figcaption>
                    <cite>{this.props.travelData.distance} kms from Paris</cite>
                </figcaption>
            </figure>
        )
    }
}

export default Travel