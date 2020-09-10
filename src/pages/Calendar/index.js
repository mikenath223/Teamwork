import React, { Component } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Wrapper, Instructions, Text } from './Calendar.styled';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import SweetAlert from 'react-bootstrap-sweetalert';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from "moment";
import defaultEvents from "./defaultEvents";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class Cal extends Component {
  state = {
    events: [],
    popAlert: {},
    editEvent: {}
  };

  componentDidMount() {
    this.setState((state) => ({
      ...state,
      ...this.initializeState()
    }))
  }


  initializeState() {
    return {
      events: defaultEvents
    }
  }

  popAlert = (event) => {
    let { start, end } = event;
    start = moment(start).calendar();
    end = moment(end).calendar();
    this.setState((state) => ({ events: state.events, popAlert: { ...event, start, end } }));
    setTimeout(() => {
      console.log(this.state);
    }, 2000);
  };

  handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  handleEventDropAndResize = ({ start, end, event: { id } }) => {
    this.setState((state) => {
      state.events[id].start = start;
      state.events[id].end = end;
      return { ...state, events: state.events };
    });
  };

  render() {
    const { popAlert: { title, start, end } } = this.state

    return (
      <Wrapper>
        <DnDCalendar
          selectable
          resizable
          popup
          onSelectEvent={event => this.popAlert(event)}
          onSelectSlot={this.handleSelectSlot}
          localizer={localizer}
          defaultDate={moment().toDate()}
          defaultView="month"
          onEventDrop={this.handleEventDropAndResize}
          onEventResize={this.handleEventDropAndResize}
          events={this.state.events}
          style={{ height: "80vh" }}
        />
        <Instructions>
          <Text as="h2">Instructions</Text>
          <ul>
            <Text as="li">Select dates and you will be prompted to create a new event</Text>
            <Text as="li">Drag, drop, and resize events</Text>
            <Text as="li">Click an event to View and Edit/Delete it</Text>
          </ul>
        </Instructions>
        {title &&
          <SweetAlert
            showCancel={false}
            showCloseButton
            showConfirm
            confirmBtnText="Edit"
            confirmBtnBsStyle="warning"
            title={title}
            onConfirm={() => this.setState({ ...this.state, popAlert: {} })}
            onCancel={() => this.setState({ ...this.state, popAlert: {} })}>
            <p>From: {start}</p>
            <p>To: {end}</p>
          </SweetAlert>}
      </Wrapper>
    );
  }
}

export default Cal;
