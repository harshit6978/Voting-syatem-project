import React, { useEffect, useRef, useState } from 'react'
import './Dashboard.css';
import { USER_DELETE_PROGRESS, USER_GET_PROGRESS } from '../../../../Redux-saga/Admin/Action/User/Action';
import { useDispatch, useSelector } from 'react-redux';


function Dashboard() {


    const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    console.log(user);

    useEffect(() => {
        dispatch({ type: USER_GET_PROGRESS })
    }, [])

    const handleButtonClick = () => {

    }

    const handleDelete = (val) => {
        dispatch({ type: USER_DELETE_PROGRESS, payload: val })
        console.log(val);
    }
  
    return (
        <>
            <button className='Data' onClick={handleButtonClick}>
                Add
            </button>

            <table id="keywords" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        {/* <th><span>id</span></th> */}
                        <th><span>Name</span></th>
                        <th><span>Email</span></th>
                        {/* <th><span>id</span></th> */}
                        <th><span>Card Number</span></th>
                        <th><span>Profile</span></th>
                        <th><span>Role</span></th>
                        <th><span>Phone</span></th>
                        <th><span>BUtton</span></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        user.election.map((val) => {
                            return (
                                <>
                                    <tr>
                                        <td class="card-title" > {val.Name}</td>
                                        <td class="card-title" > {val.Email}</td>
                                        {/* <td class="card-title" > {val._id}</td> */}
                                        <td class="card-text">{val.CardNumber}</td>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="userProfile">
                                                <img alt="" src={val.Profile} id='photo' />
                                            </div>
                                        </div>
                                        <td class="card-title" > {val.Role}</td>
                                        <td class="card-title" > {val.Phone}</td>
                                        <td>
                                            <button onClick={() => handleDelete(val)}>Delete</button>
                                            <button onClick={""}>View</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>


    )
}

export default Dashboard
