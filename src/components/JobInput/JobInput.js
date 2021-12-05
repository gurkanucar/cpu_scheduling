import React, { Component, useState, useEffect, useRef } from "react";
import { Col, Form, Button, Row, Table } from "react-bootstrap";

function MyTextInput(props) {
  function handleChange(event) {
    if (props.onChange) props.onChange(event);
  }
  return (
    <Form.Group controlId="formBasicPassword">
      <Form.Control
        type="number"
        ref={props.inputRef}
        onChange={handleChange}
        value={props.value}
        // defaultValue={
        //   this.props?.job?.burstTime ? this.props?.job?.burstTime : 0
        // }
        name={props.name}
        //onChange={this.handleChange}
        placeholder={props.placeholder}
      />
    </Form.Group>
    //  <p>
    //      <input type='email' value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} />
    //  </p>
  );
}

class JobInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.job.id,
      jobName: this.props.job.jobName,
      arrivalTime: this.props.job.arrivalTime,
      burstTime: this.props.job.burstTime,
      priority: this.props.job.priority,
    };

    this.arrivalTimeRef = React.createRef();
    this.burstTimeRef = React.createRef();
    this.priorityRef = React.createRef();
  }

  onClick = () => {
    this.props.onClick(this.state.id);
  };

  handleInputChange = (event) => {
    //console.log(event.target.value);
    event.preventDefault();
    this.props.inputChangeHandler({
      ...this.state,
      [event.target.name]: event.target.value,
    });
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <tr>
        <td
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
          }}
        >
          <Button variant="danger" onClick={this.onClick}>
            {this.props?.job?.jobName}
          </Button>
        </td>
        <td>
          <MyTextInput
            onChange={this.handleInputChange}
            name="arrivalTime"
            placeholder="arrival time"
            value={this.state.arrivalTime}
          />
        </td>
        <td>
          <MyTextInput
            onChange={this.handleInputChange}
            name="burstTime"
            placeholder="burst time"
            value={this.state.burstTime}
          />
        </td>
        <td>
          <MyTextInput
            onChange={this.handleInputChange}
            name="priority"
            placeholder="priority"
            value={this.state.priority}
          />
        </td>
      </tr>
    );
  }
}

export default JobInput;
