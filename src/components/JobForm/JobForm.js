import React, { useState, useEffect } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import JobInput from "../JobInput/JobInput";
import "./JobForm.css";

const JobForm = () => {
  const [values, setValues] = React.useState({
    jobs: [
      {
        id: Math.random(),
        jobName: 1,
        arrivalTime: 5,
        burstTime: 12,
        priority: 3,
      },
      {
        id: Math.random(),
        jobName: 2,
        arrivalTime: 3,
        burstTime: 9,
        priority: 7,
      },
      {
        id: Math.random(),
        jobName: 3,
        arrivalTime: 1,
        burstTime: 4,
        priority: 9,
      },
    ],
    quantumTime: 0,
    jobCount: 1,
  });

  const addItem = () => {
    const data = {
      id: Math.random(),
      jobName: values.jobs.length + 1,
      arrivalTime: "",
      burstTime: "",
      priority: "",
    };

    setValues({
      ...values,
      jobs: [...values.jobs, data],
    });
  };

  const deleteItem = (id) => {
    const newArray = values.jobs.filter((job) => {
      return job.id !== id;
    });

    newArray.forEach((job, index) => {
      const data = {
        jobName: index + 1,
        ...job,
      };
      return data;
    });

    console.log(newArray);

    setValues({
      ...values,
      jobs: newArray,
    });
  };

  return (
    <div className="root">
      <Form className="job-form">
        <Form.Group className="form-group" controlId="formBasicPassword">
          <Row>
            <Col md={2}>
              <div className="col-div">
                <h5 className="h5">Algorithm</h5>
              </div>
            </Col>
            <Col md={4}>
              <Form.Select aria-label="Default select example">
                <option value="1">FSFJ</option>
                <option value="2">SFJ</option>
                <option value="3">SFJ P</option>
                <option value="3">Round Robin</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={addItem}>
                  Add Job
                </Button>
              </div>
            </Col>
          </Row>
        </Form.Group>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Job</th>
              <th>Arrival Time</th>
              <th>Burst Time</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {values.jobs?.map((x) => {
              return (
                <JobInput key={x.id} job={x} onClick={() => deleteItem(x.id)} />
              );
            })}
          </tbody>
        </Table>
        <Form.Group
          className="form-input-quantum-time"
          controlId="formBasicPassword"
        >
          <Form.Label>Quantum Time</Form.Label>
          <Form.Control
            min={0}
            max={6}
            defaultValue={0}
            onChange={(e) =>
              setValues({ ...values, quantumTime: e.target.value })
            }
            type="number"
            placeholder="ms"
          />
        </Form.Group>
        <div className="d-grid">
          <Button variant="success">Calculate</Button>
        </div>
      </Form>
    </div>
  );
};

export default JobForm;
