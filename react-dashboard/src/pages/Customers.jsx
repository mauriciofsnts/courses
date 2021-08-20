import React from 'react'

import Table from "../components/table/Table"
import customers_list from "../assets/JsonData/customers-list.json"

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location' 
]

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>        
        <td>{item.name}</td>        
        <td>{item.email}</td>        
        <td>{item.phone}</td>        
        <td>{item.total_orders}</td>        
        <td>{item.total_spend}</td>        
        <td>{item.location}</td>        
    </tr>
)


const Customers = () => {
    return (
        <div>
            <h2 className="page-header">Customers</h2>


            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customers_list}
                                renderBody={(item, index) => renderBody(item, index)}
                                limit='11'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
