import "./Block.css";

import React, { useEffect, useState } from "react";
import { colors } from "../../Constants";

export const Block = (props) => {
  const { count, mod, waitingTimes } = props;

  const [state, setState] = useState([]);

  useEffect(() => {
    let arr = new Array(count).fill("").map((_, i) => i + 1);
    setState(arr);
  }, [count]);

  const setColor = (data) => {
    const result = {
      color: "",
      name: "",
    };

    for (let i = 0; i < waitingTimes.length - 1; i++) {
      if (
        data < waitingTimes[i + 1].waitingTime &&
        data >= waitingTimes[i].waitingTime
      ) {
        return {
          color: colors[i],
          name: `JOB${i + 1}`,
        };
      }
    }
    return {
      color: colors[waitingTimes.length - 1],
      name: `JOB${waitingTimes.length}`,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {state?.map((x, index) => {
        return (
          <div
            style={{
              borderRadius:15,
              width: 50,
              height: 100,
              marginTop: 10,
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              background: setColor(index).color,
              color: "black",
              marginLeft: 5,
            }}
          >
            <p
              style={{
                marginTop:"auto",
                marginBottom:"auto",
                textAlign: "center",
              }}
            >
              {`${x - 1}-${x}`}
              <br />
              {`${setColor(index).name}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};
