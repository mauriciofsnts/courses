import React from 'react'

import Chart from "react-apexcharts"
import Badge from '../components/badge/Badge'
import Table from "../components/table/Table"
import { Link } from 'react-router-dom'

import statusCards from "../assets/JsonData/status-card-data.json"
import StatusCard from '../components/status-card/StatusCard'

import { useSelector } from 'react-redux'

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2890b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'users',
        'total orders',
        'total spending',
    ],
    body: [
        {
            'username': 'Itachi Uchiha',
            'order': '409',
            'price': '$15,870'
        },
        {
            'username': 'Kabuto Yakushi',
            'order': '250',
            'price': '$12,149'
        },  
        {
            'username': 'Kakashi Hatake',
            'order': '112',
            'price': '$9,100'
        },     
        {
            'username': 'Hashirama Senju',
            'order': '989',
            'price': '$65,001'
        },
        {
            'username': 'Madara Uchiha',
            'order': '115',
            'price': '$69,465'
        },
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}> {item} </th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    head: [
        'order id',
        'user',
        'total price',
        'date',
        'status'
    ],
    body: [
        {
            id: "#OD1711",
            user: "Itachi Uchiha",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "Hashirama Senju",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "Kabuto Yakushi",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1714",
            user: "Madara Uchiha",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1715",
            user: "Kakashi Hatake",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        },
        {
            id: "#OD1716",
            user: "Killer B",
            date: "27 Jun 2021",
            price: "$130",
            status: "paid"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}


const renderOrderHead = (item, index) => (
    <th key={index}> {item} </th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const Dashboard = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode);

    return (
        <div>
            <h2 className="page-header">
                Dashboards
            </h2>

            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    {/* status card here */}
                                    {item.title}

                                    <StatusCard
                                        icon={item.icon}
                                        title={item.title}
                                        count={item.count}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={themeReducer === "theme-mode-dark" ? 
                            {
                                ...chartOptions.options, 
                                theme: {mode: 'dark'}
                            } : 
                            {
                                ...chartOptions.options,
                                theme: {mode: 'light'}
                            }
                            }
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>

                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
