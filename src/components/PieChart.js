import React, { useContext, useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { MissionContext } from "../App";

/**
 * PieChart component displays a pie chart representing the success rate of space missions.
 * It uses mission data from the MissionContext to dynamically update the chart options.
 */
const PieChart = () => {
  // Access mission data from the MissionContext
  const missionData = useContext(MissionContext);

  // State to store chart options
  const [options, setOptions] = useState({
    data: [
      { asset: "Successful", amount: 0 },
      { asset: "Unsuccessful", amount: 0 },
    ],
    title: {
      text: "Mission Success Rate",
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },
    ],
  });

  /**
   * useEffect hook updates chart options when missionData changes.
   * It calculates the count of successful and unsuccessful missions
   * and updates the data array accordingly.
   */
  useEffect(() => {
    const successfulMissions = missionData?.filter(
      (mission) => mission.successful
    ).length;
    const unsuccessfulMissions = missionData?.length - successfulMissions;

    setOptions({
      ...options,
      data: [
        { asset: "Successful", amount: successfulMissions },
        { asset: "Unsuccessful", amount: unsuccessfulMissions },
      ],
    });
  }, [missionData]);

  // Render the pie chart using AgChartsReact with the updated options
  return <AgChartsReact options={options} />;
};

export default PieChart;
