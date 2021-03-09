import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

export function LineChart({ dailyData }) {

    // console.log(dailyData);
    // console.log(dailyData[1][0]);
    if (dailyData[1][0].length === 1) {
        return ' ';
    }

    const dataBarChart = {
        labels: dailyData[1][0].map((e) => e.reportDate),
        datasets: [
            {
                label: 'Infected',
                fill: true,
                borderColor: '#3333ff',
                data: dailyData[1][0].map((e) => e.confirmed.total)
            },
            {
                label: 'Deaths',
                fill: true,
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                data: dailyData[1][0].map((e) => e.deaths.total)
            },
        ]
    };

    const dataLineChart = {
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: 'People',
                backgroundColor: [
                    'rgba(0,0,255,0.5)',
                    'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)',
                ],
                data: [dailyData[2][0].confirmed, dailyData[2][0].recovered, dailyData[2][0].death],
            }
        ],

    };


    return (
        <div>
            {dailyData[0][0] === 'dummy'
                ?
                <Line data={dataBarChart} />
                :
                <Bar
                    data={dataLineChart}
                    width={100}
                    height={50}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Country:  ${dailyData[0][0]}` }
                    }}
                />
            }
        </div>
    );
};