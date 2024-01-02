import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("EventsClass - clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
            EventsClass - click
        </button>
      </div>
    )
  }
}

export default EventsClass