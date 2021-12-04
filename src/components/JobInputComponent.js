import React, { useState, useEffect } from "react";
import { Col, Form, Button, Row, Table } from "react-bootstrap";

const JobInputComponent = (props) => {
  const [values, setValues] = React.useState({
    jobID: props.job.jobID,
    arrivalTime: props.job.arrivalTime,
    burstTime: props.job.burstTime,
    priority: props.job.priority,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
   // const tmp = values;
    props.formTest({ ...values, [prop]: event.target.value });
  };


  return (
    <tr>
      <td
        style={{
          textAlign: "center",
          fontSize: "1.3rem",
        }}
      >
        <Button variant="danger" onClick={() => props.onClick()}>
          {props?.job?.jobID}
        </Button>
      </td>
      <td>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="number"
            value={values.arrivalTime}
            defaultValue={props?.job?.arrivalTime ? props?.job?.arrivalTime : 0}
            onChange={handleChange("arrivalTime")}
            placeholder="Arrival Time"
          />
        </Form.Group>
      </td>
      <td>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="number"
            value={values.burstTime}
            defaultValue={props?.job?.burstTime ? props?.job?.burstTime : 0}
            onChange={handleChange("burstTime")}
            placeholder="Burst Time"
          />
        </Form.Group>
      </td>
      <td>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="number"
            value={values.priority}
            defaultValue={props?.job?.priority ? props?.job?.priority : 0}
            onChange={handleChange("priority")}
            placeholder="Priority"
          />
        </Form.Group>
      </td>
    </tr>
  );
};

export default JobInputComponent;
