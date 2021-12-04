import React, { useState, useEffect } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import JobInputComponent from "../components/JobInputComponent";
import { Job } from "../utils/jobModel";

const Home = () => {
  const [values, setValues] = React.useState({
    jobs: [
      new Job(1, 5, 12, 3),
      new Job(2, 3, 9, 7),
      new Job(3, 1, 4, 9),
      // {
      //   jobID: 1,
      //   arrivalTime: 5,
      //   burstTime: 12,
      //   priority: 3,
      // },
      // {
      //   jobID: 2,
      //   arrivalTime: 3,
      //   burstTime: 9,
      //   priority: 7,
      // },
      // {
      //   jobID: 3,
      //   arrivalTime: 1,
      //   burstTime: 4,
      //   priority: 9,
      // },
    ],
    quantumTime: 0,
    jobCount: 1,
  });

  const removeItem = (item) => {
    console.log("item", item);
    const data = values.jobs.filter((job) => job.jobID !== item.jobID);
    data.forEach((x, index) => {
      x.jobID = index + 1;
      console.log(`${x.jobID} : priority ${x.priority}`);
    });

    setValues({
      ...values,
      jobs: data,
    });
  };

  const updateJob = (item) => {
    let data = values.jobs;

    //console.log("update item", item);

    const tmp = data.map((_, i) => {
      if (_.jobID === item.jobID) {
        _ = item;
        return _;
      } else {
        return _;
      }
    });

    console.log(tmp);

    setValues({
      ...values,
      jobs: tmp,
    });
  };

  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "10%",
      }}
    >
      <Form
        style={{
          borderRadius: 5,
          padding: 20,
          borderWidth: "thin",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Form.Group
          style={{
            marginBottom: "15px",
          }}
          controlId="formBasicPassword"
        >
          <Row>
            <Col md={2}>
              <h5
                style={{
                  marginTop: 5,
                  marginRight: 15,
                }}
              >
                Algorithm
              </h5>
            </Col>
            <Col mr={1} md={4}>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <div className="d-grid gap-2">
                <Button variant="primary">Add Job</Button>
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
              //console.log(x);
              return (
                <JobInputComponent
                  key={Math.random()}
                  job={x}
                  //update={(data) => updateJob()}
                  onClick={() => removeItem(x)}
                  formTest={(_) => {
                    let tmp = values.jobs.find((x) => x.jobID == _.jobID);
                    updateJob(_);
                    return console.log("from test", _);
                  }}
                />
              );
            })}
          </tbody>
        </Table>
        <Form.Group
          style={{
            paddingRight: "80%",
            marginBottom: 20,
            // paddingTop: "10%",
          }}
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

export default Home;
