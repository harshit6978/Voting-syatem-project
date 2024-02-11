import React, { useEffect, useRef, useState } from 'react'
import './Dashboard.css';
import { USER_DELETE_PROGRESS, USER_GET_PROGRESS, USER_POST_PROGRESS } from '../../../../Redux-saga/Admin/Action/User/Action';
import { useDispatch, useSelector } from 'react-redux';


function Dashboard() {

    // const [isAdding, setIsAdding] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);

    const name = useRef();
    const CardNumber = useRef();
    const profile = useRef();
    const phone = useRef();
    const email = useRef();

    const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    console.log(user);

    useEffect(() => {
        dispatch({ type: USER_GET_PROGRESS })
    }, [])

    const handleButtonClick = () => {
        setIsSignUp(!isSignUp);
    }

    const handleAdd = () => {
        const formdata = {
            Name: name.current.value,
            CardNumber: CardNumber.current.value,
            Phone: phone.current.value,
            Email: email.current.value,
            Profile: profile.current.files[0],
        }
        dispatch({ type: USER_POST_PROGRESS, payload: formdata })   
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

            {isSignUp && (
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">
                                Create User
                            </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleButtonClick} style={{ cursor: "pointer" }}>x</button>
                        </div>

                        <div className="modal-body">
                            <form encType="multipart/form-data">
                                User Name:
                                <br />
                                <input className="mb-3 fild" type="text" id="name" ref={name} name="Name" style={{ width: "100%" }} /> <br />
                                Card Number:
                                <br />
                                <input className="mb-3 fild" type="password" id="password" ref={CardNumber} name="Password" style={{ width: "100%" }} /> <br />
                                Profile:
                                <br />
                                <input className="mb-3 fild" type="file" id="profile" ref={profile} name="Profile" style={{ width: "100%" }} /> <br />
                                Phone:
                                <br />
                                <input className="mb-3 fild" type="tel" id="phone" ref={phone} name="Phone" style={{ width: "100%" }} /> <br />
                                Email:
                                <br />
                                <input className="mb-3 fild" type="email" id="email" ref={email} name="Email" style={{ width: "100%" }} /><br />
                                <button onClick={handleAdd}>Add</button>
                                <button>update</button>
                            </form>
                        </div>
                    </div>
                </div>

            )}


            <table id="keywords" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th><span>Name</span></th>
                        <th><span>Email</span></th>
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
