"use client";
import React, { useState, useEffect } from "react";

function ProgressBar(): JSX.Element {
  const [percentage, setPercentage] = useState<number>(0);

  const getPourcentageOfDayElapsed = () => {
    const now:Date = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const secondsSinceStartOfDay = (now.getTime() - startOfDay.getTime()) / 1000;
    const totalSecondsInDay = 24 * 60 * 60; // total number of seconds in a day
    return (secondsSinceStartOfDay / totalSecondsInDay) * 100;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage(getPourcentageOfDayElapsed());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.progressBarContainer} className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
        <div
          style={{...styles.progressBar, width: `${percentage}%`}}
        />
        <div style={styles.progressText}>Percentage of the day that has elapsed {percentage.toFixed(3)}%</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    width: "100%",
  },
  progressBarContainer: {
    height: 30,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#e0e0de",
    overflow: "hidden"
  },
  progressBar: {
    height: "100%",
    borderRadius: 15,
    backgroundColor: "#70a1ff",
    transition: "width 0.5s ease-in-out"
  },
  progressText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 16,
    color: "#444",
    fontWeight: "bold"
  },
} as const;


export default ProgressBar;
