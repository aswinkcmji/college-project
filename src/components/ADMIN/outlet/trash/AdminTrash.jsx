import React from 'react';

const AdminTrash = () => {
    const [data,setData] = React.useState([
        "arun",
        "varun",
        "manu",
        "radha",
        "rani"
    ])
    const clear = ( ) => {

        setData([])
        

    }
    return (
        <div className='container-fluid p-4'>
            <h2 className='text-danger'>Trash</h2>
            <ul className='list-group '>
                {data.map((item,index) => <li key={index} className='list-group-item list-group-item-danger'>
                    {item===""?null:item}
                </li>
                )}
            </ul>
            <button className='btn btn-danger ' onClick={clear}>Clear</button>
            <button className='btn btn-danger'>Restore</button>

        </div>
    );
}

export default AdminTrash;
