import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "./Admin.css"
import { Icon } from '@iconify/react';

function Admin() {


    


const [usersCount, setusersCount] = useState([])

const [userDetails,setuserDetails] = useState([])




// alert(Counts.users)
//     const onChange = (e) => {
//         const newUserMail = {...userMail}
//         newUserMail[e.target.name] = e.target.value
//         setuserMail(newUserMail)
//         console.log(newUserMail)
//          };

const readCount = () => {
    axios.get('http://localhost:5000/readCount')       
    .then(res => {      
       setusersCount(res.data) 
    })

}

  const  readDetails = () => {
    axios.get('http://localhost:5000/readUser')
    .then(res => {
        setuserDetails(res.data)
        
    })
  }
 
       useEffect(() => {
    readCount();
    readDetails();
  

    


       
        
       }, [])

       console.log(usersCount)
       console.log(userDetails.name)
       


    // setUsersCount(usersCount.service = newUserMail.service, usersCount.users = newUserMail.users)
            
  const deleteUser = (id) => {
    
console.log(id)
    
        axios.delete(`http://localhost:5000/delete/${id}`)
 

    
      
  }



    return (
        <div>
            <div className="admn">

           
           
                {/* <h1 >Admin  </h1>

                 <button onClick={clicks}>nothing</button>
                   <p value="users" className=""></p>

                   <input type="text" onChange={onChange} name="email" value={userMail.email} ></input>
                     */}

                    <div className="container-fluid">
                    <div className='panel row'>
                        <div className="left-panel col-lg-2 col-md-4  col-3">
                            <div classname="admin-title row col-12">
                            <h3>Admin panel</h3>
                            </div>
                            <div className="">
                                <div className="user-tab col-12 bg-success p-5"></div>
                                <div className="service-tab col-12 bg-warning p-5"></div>
                                <div className="col-12 bg-light p-5"></div>
                            </div>
                            </div>
                         <div  className="right-panel col-9 col-md-8 col-lg-10 container">
                             <div className="count row ">   
                                 <div className="users "><div className="user-count"><h1>{usersCount.users}</h1></div></div>
                                 <div className="services"><div className="service-count"><h1>{usersCount.service}</h1></div></div>
                                 </div>
                                 <div className="details">
                                        {userDetails.map((user ,key) => {
                                            return(
                                                <div className="container-fluid" key={key}>
                                                          <div className="details-panel ">
                                                          <div className="panel-left">
                                                          <p>{user.name}</p>
                                                              </div>
                                                              <div className="panel-right">
                                                                  <div className='btn-delete' onClick={(e) => deleteUser(user._id)}><Icon icon="fa6-solid:trash-can" /></div>
                                                              </div>

                                                              
                                                          </div>                
                                                                    
                                                </div>
                                            )
                                        })}
                                 </div>


                        </div> 
    
                     </div>
                    </div>
                    


                     








            </div>

        </div>
    );
}

export default Admin;