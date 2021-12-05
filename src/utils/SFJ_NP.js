export default class SFJ_NP {
  constructor(data) {
    this.data = data;
  }
  static calculateWaitingTime(params) {
    const { jobs } = params;

    const arr = jobs.sort(
      (firstItem, secondItem) => firstItem.burstTime - secondItem.burstTime
    ).reverse();

    let waitingTimes = jobs.map((x, index) => {
      const time = this.reducerSum(
        arr.slice(0, index + 1).map((x) => x.burstTime)
      );

      return {
        index: index,
        waitingTime: time,
      };
    });

    const result = {
      averageTime: this.calculateAverageTime(jobs.map((x) => x.burstTime)),
      waitingTimes: [
        ...waitingTimes,
        {
          index: arr.length,
          waitingTime:
            waitingTimes.slice(-1)[0].waitingTime + arr.slice(-1)[0].burstTime,
        },
      ],
    };

    return result;
  }

  static reducerSum = (arr) => {
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    return arr.reduce(reducer, -1 * arr.slice(-1));
  };

  static calculateAverageTime = (arr) => {
    return arr.reduce((a, b) => a + b) / arr.length;
  };
}
