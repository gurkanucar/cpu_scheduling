import React, { useState, useEffect, useRef } from "react";
import { Col, Form, Button, Row, Table } from "react-bootstrap";

const JobInput = (props) => {
  const [values, setValues] = React.useState({
    id: props.job.id,
    jobName: props.job.jobName,
    arrivalTime: props.job.arrivalTime,
    burstTime: props.job.burstTime,
    priority: props.job.priority,
  });

  const onClick = () => {
    props.onClick(values.id);
  };

  useEffect(() => {
    console.log("update job input component", values);
  }, [values]);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setValues((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  return (
    <tr>
      <td
        style={{
          textAlign: "center",
          fontSize: "1.3rem",
        }}
      >
        <Button variant="danger" onClick={onClick}>
          {props?.job?.jobName}
        </Button>
      </td>
      <td>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="number"
            value={values.arrivalTime}
            defaultValue={props?.job?.arrivalTime ? props?.job?.arrivalTime : 0}
            name="arrivalTime"
            onChange={handleChange}
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
            name="burstTime"
            onChange={handleChange}
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
            name="priority"
            onChange={handleChange}
            placeholder="Priority"
          />
        </Form.Group>
      </td>
    </tr>
  );
};

export default JobInput;
