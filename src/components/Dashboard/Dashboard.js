import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "price": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "price": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "price": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "price": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "price": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "price": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='line-chart'>
            <LineChart width={400} height={500} data={data}>
            <Line dataKey={'price'}></Line>
            <Line dataKey={'sell'}></Line>
            <Line dataKey={'revenue'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </LineChart>
        </div>
    );
};

export default Dashboard;