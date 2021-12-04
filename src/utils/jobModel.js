export class Job {
  constructor(jobID, arrivalTime, burstTime, priority) {
    this.jobID = jobID;
    this.arrivalTime = arrivalTime;
    this.burstTime = burstTime;
    this.priority = priority;
  }
}
