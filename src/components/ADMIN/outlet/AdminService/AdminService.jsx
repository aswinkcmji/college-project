import React from 'react';
import { Icon } from '@iconify/react'
const AdminService = () => {
    return (
        <div className='container-fluid p-4'>
            <h2 className='text-danger'>SERVICE TABLE</h2>
           <div className="admin-page-table">
                    <table className=' table table-bordered table-hover'>
                        <thead className=' bg-danger text-light'>
                            <tr >
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>District</th>
                                <th>Service</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tr className=' table-danger text-dark'>
                            <td>{1}</td>
                            <td>{2}</td>
                            <td>{3}</td>
                            <td>{4}</td>
                            <td>{5}</td>
                            <td><Icon className='text-danger mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" /></td>
                        </tr>
                        <tr className=' table-danger text-dark'>
                            <td>{1}</td>
                            <td>{2}</td>
                            <td>{3}</td>
                            <td>{4}</td>
                            <td>{5}</td>
                            <td><Icon className='text-danger mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" /></td>
                        </tr>
                        <tr className=' table-danger text-dark'>
                            <td>{1}</td>
                            <td>{2}</td>
                            <td>{3}</td>
                            <td>{4}</td>
                            <td>{5}</td>
                            <td><Icon className='text-danger mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" /></td>
                        </tr >
                    </table>
                </div>
        </div>
    );
}

export default AdminService;
