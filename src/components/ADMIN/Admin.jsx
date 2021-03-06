import React from 'react';
import './Admin.css'
import { Outlet,Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import logo from './assets/Screenshot from 2022-06-06 23-19-10.png'
const Admin = () => {
    const [isLoggedin, setIsLoggedin] = React.useState(false);
    const [log,setLog] = React.useState({
        username:"",
        password:""
    })

    const logChange = (e) =>{
        
        const newLog = {...log}
        newLog[e.target.name] = e.target.value
        setLog(newLog)
    }

    const logSubmit = (e) =>{

        if(log.username === "admin@123"&& log.password === "123"){
            e.preventDefault();
            localStorage.setItem('token-info', JSON.stringify(log.username));
            setIsLoggedin(true);
            setLog({})
        }

    }
    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };

    const change = (e) =>{
        let greet,recipt
       if(e ==='greet'){
           greet = prompt()
           localStorage.removeItem('greet')
           localStorage.setItem('greet', JSON.stringify(greet))
           window.location.reload()
           
       }
       else if(e ==='recipt'){
           recipt = prompt()
           localStorage.removeItem('recipt')
           localStorage.setItem('recipt', JSON.stringify(recipt))
           window.location.reload()
       }
       console.log(isLoggedin);
    
    }
    return (
        <>
        { !JSON.parse(localStorage.getItem('token-info')) ?

            <div className='adminlog container-fluid p-4'>
            <div className="adminlog-div bg-light">
                <h2 className='text-danger'>Admin Log...</h2>
                <div className="adminlog-form-div">
                    <form action=""  className="admin-form" onSubmit={logSubmit}>
                        <label htmlFor="">UserName</label>
                        <input className='form-control' onChange={(e) =>logChange(e)}  type="text" name="username" value={log.username} /><br />
                        <label htmlFor="">Password</label>
                        <input  className='form-control' onChange={(e) =>logChange(e)} type="password" name="password" value={log.password} /><br />
                        <input className='btn btn-danger' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
            :
        <div className='admin bg-dark'>
            
            <div className="admin-sidebar bg-danger">
                <div className="admin-logo">
                    <img className='mt-2 mr-2' src={logo} alt="" srcset="" />
                    <h3 className='text-light mt-1 text-center border-bottom pt-3'>EMERGENCY NOW</h3>
                </div>
                <div className="contents">
                    <Link to="/" onClickCapture={logout} className='mt-5 btn admin-content-btn bg-danger text-light'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="ant-design:logout-outlined" />
                        <span>Logout</span>
                    </Link><br />
                    <Link to="" className=' btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="ant-design:home-filled" />
                        <span>Home</span>
                    </Link><br />
                    <Link to="/admin/user" className='btn admin-content-btn bg-danger  text-light  mt-1'>
                        <Icon className=' text-light mr-3 sidebar-icons' fontSize={20} icon="bxs:user" />
                        <span>User</span><br />
                    </Link>
                    <Link to="/admin/service" className='btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="fa6-solid:screwdriver-wrench" />
                        <span>Service</span><br />   
                    </Link>
                    <Link to="/admin/trash" className='btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="bi:trash-fill" />
                        <span>Trash</span><br />
                    </Link>
                    <button id='admin-btn' onClick={(e) =>change(e.target.value)} value='recipt' className='btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="ant-design:eye-filled" />
                        <span>Recipients</span>
                    </button>
                    <button id='admin-btn' onClick={(e) =>change(e.target.value)} value='greet' className='btn admin-content-btn bg-danger text-light mt-1'>
                        <Icon className='text-light mr-3 sidebar-icons' fontSize={20} icon="ic:baseline-celebration" />
                        <span>Greetings</span>
                    </button>
                </div>
            </div>
            <div className="admin-page container-fluid"> 
                <h3 className='text-light border-bottom p-3'>Admin Page</h3>
                <div className="admin-topbar row">
                    <div className="admin-topbar-divs col-4 col-md-2">
                        <Icon className='text-light admin-topbar-icons' icon="bxs:user" />
                        <h6 className='text-light pt-2' >Total User</h6>
                        <h4 className='text-light'>{15}</h4>
                    </div>
                    <div className="admin-topbar-divs col-4 col-md-2">
                        <Icon className='text-light admin-topbar-icons' icon="fa6-solid:screwdriver-wrench" />
                        <h6 className='text-light pt-2' >Total Services</h6>
                        <h4 className='text-light'>{20}</h4>
                    </div>
                    <div className="admin-topbar-divs col-5 col-md-2">
                        <Icon className='text-light admin-topbar-icons' icon="ant-design:eye-filled" />
                        <h6 className='text-light pt-2' >Recipients</h6>
                        <h4 className='text-light'>{
                            JSON.parse(localStorage.getItem('recipt'))
                        }</h4>
                    </div>
                    <div className="admin-topbar-divs col-5 col-md-2">
                        <Icon className='text-light admin-topbar-icons' icon="ic:baseline-celebration" />
                        <h6 className='text-light pt-2' >Greetings</h6>
                        <h4 className='text-light'>{
                            JSON.parse(localStorage.getItem('greet')) 
                        }</h4>
                    </div>
                </div>
                <div className="admin-outlet bg-light">
                    <Outlet/>
                </div>
            </div>
            </div>
        }
        </>
    );
}

export default Admin;
