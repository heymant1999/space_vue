import React, { useContext, useEffect, useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { MissionContext } from '../App';

/**
 * BarChart component displays a bar chart representing the success and failure counts of space missions.
 * It uses mission data from the MissionContext to dynamically update the chart options.
 */
const BarChart = () => {
    // Access mission data from the MissionContext
    const missionData = useContext(MissionContext);

    // State to store chart options
    const [options, setOptions] = useState({
        title: {
            text: "Mission Success Rate",
        },
        data: [
            {
                quarter: "Q1'18",
                successful: 130,
                unsuccessful: 16,
            },
        ],
        series: [
            {
                type: 'bar',
                xKey: 'quarter',
                yKey: 'successful',
                yName: 'successful',
            },
            {
                type: 'bar',
                xKey: 'quarter',
                yKey: 'unsuccessful',
                yName: 'unsuccessful',
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
                {
                    quarter: "Q1'18",
                    successful: successfulMissions,
                    unsuccessful: unsuccessfulMissions,
                },
            ],
        });
    }, [missionData]);

    // Render the bar chart using AgChartsReact with the updated options
    return <AgChartsReact options={options} />;
};

export default BarChart;
