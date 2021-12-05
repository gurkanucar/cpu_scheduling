import React, { useState, useEffect } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FCFS from "../../utils/FCFS";
import { GantChart } from "../GantChart/GantChart";
import JobInput from "../JobInput/JobInput";
import "./JobForm.css";

const JobForm = () => {
  const [chartData, setChartData] = useState([]);

  const [values, setValues] = React.useState({
    jobs: [
      {
        id: Math.random(),
        jobName: 1,
        arrivalTime: 0,
        burstTime: 12,
        priority: 3,
      },
      {
        id: Math.random(),
        jobName: 2,
        arrivalTime: 5,
        burstTime: 8,
        priority: 2,
      },
      {
        id: Math.random(),
        jobName: 3,
        arrivalTime: 12,
        burstTime: 4,
        priority: 1,
      },
      {
        id: Math.random(),
        jobName: 4,
        arrivalTime: 13,
        burstTime: 8,
        priority: 2,
      },
      {
        id: Math.random(),
        jobName: 5,
        arrivalTime: 15,
        burstTime: 5,
        priority: 0,
      },
    ],
    quantumTime: 0,
  });

  const calculate = () => {
    const result = FCFS.calculateWaitingTime(values);
    setChartData(result);
    sortJobs(values.jobs);
  };

  const sortJobs = (data) => {
    let arr = data;
    arr = arr.sort((a, b) => (a.jobName > b.jobName ? 1 : -1));

    setValues({
      ...values,
      jobs: arr,
    });
    console.log("after calculate", values.jobs);
  };

  const addItem = () => {
    if (values.jobs.length < 4) {
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
    }
  };

  useEffect(() => {
    console.log("after update", values.jobs);
  }, [values.jobs]);

  const updateItem = (item) => {
    let data = values.jobs;

    const arr = data.map((x) => {
      if (item.id == x.id) {
        const tmp = {
          ...x,
          arrivalTime: Number(item.arrivalTime),
          burstTime: Number(item.burstTime),
          priority: Number(item.priority),
        };
        return tmp;
      }
      return x;
    });

    // console.log("JOBS DEGISTI", arr);

    setValues({
      ...values,
      jobs: arr,
    });
  };

  const deleteItem = (id) => {
    const newArray = values.jobs.filter((job) => {
      return job.id !== id;
    });

    const arr = newArray.map((job, index) => {
      const data = {
        ...job,
        jobName: index + 1,
      };
      return data;
    });

    console.log(arr);

    setValues({
      ...values,
      jobs: arr,
    });
  };

  useEffect(() => {
    // console.log(chartData.waitingTimes);
  }, [chartData]);

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
                <option value="1">FCFS</option>
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
            <tr className="table-tr">
              <th>Job</th>
              <th>Arrival Time (ms)</th>
              <th>Burst Time (ms)</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {values.jobs?.map((x) => {
              return (
                <JobInput
                  inputChangeHandler={(data) => {
                    return updateItem(data);
                  }}
                  key={x.id}
                  job={x}
                  onClick={() => deleteItem(x.id)}
                />
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
          <Button variant="success" onClick={calculate}>
            Calculate
          </Button>
        </div>
      </Form>
      <GantChart data={chartData} />
    </div>
  );
};

export default JobForm;
