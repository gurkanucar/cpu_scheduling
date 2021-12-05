import "./GantChart.css";

import React, { useEffect, useState } from "react";
import { Block } from "../Block/Block";

export const GantChart = (props) => {
  const { waitingTimes } = props.data;
  const [sum, setSum] = useState(0);

  useEffect(() => {
    console.log(waitingTimes);
    if (waitingTimes?.length > 0) {
      setSum(calcCount());
    }
  }, [waitingTimes]);

  const calcCount = () => {
    return waitingTimes.slice(-1)[0].waitingTime;
  };

  return (
    <div>
      <Block
        count={sum}
        waitingTimes={waitingTimes}
        mod={waitingTimes?.length}
      />
    </div>
  );
};
