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
      <p className="w-full mb-4 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit rounded-xl border bg-gray-200 p-3 dark:bg-zinc-800/30 font-mono font-bold">Percentage of the day that has elapsed</p>
      <div style={styles.progressBarContainer} className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
        <div
          style={{...styles.progressBar, width: `${percentage}%`}}
        />
        <div style={styles.progressText}>{percentage.toFixed(3)}%</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
    backgroundColor: "rgb(39 39 42 / 0.9)",
    transition: "width 0.5s ease-in-out"
  },
  progressText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
} as const;


export default ProgressBar;
