import React, { Component, PropTypes } from 'react';


export default class EventItem extends Component {
  static propTypes = {
    event: PropTypes.shape({
      eventId: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.string,
      image: PropTypes.string,
      venue: PropTypes.string,
      city: PropTypes.string
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    console.log(this.state);
    return (
      <li><img alt={this.state.event.image} src={this.state.event.image} />
        {this.state.event.name}
        {this.state.event.date}
        {this.state.event.venue}
        {this.state.event.city}
      </li>
    );
  }
}
