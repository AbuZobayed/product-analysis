import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
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
       <div className='dashboard'>
            <div className='line-chart'>
            <LineChart width={600} height={500} data={data}>
            <Line dataKey={'price'} stroke="#8884d8"></Line>
            <Line dataKey={'sell'}></Line>
            <Line dataKey={'revenue'}stroke="#82ca9d"></Line>
            <XAxis dataKey={'month'} ></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </LineChart>
        </div>
        <div className='bar-chart'>
            <BarChart width={800} height={500} data={data}>

                <Bar dataKey={'price'} fill="#8884d8"></Bar>
                <Bar dataKey={'sell'}></Bar>
                <Bar dataKey={'revenue'} ></Bar>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>


            </BarChart>
        </div>
       </div>
    );
};

export default Dashboard;