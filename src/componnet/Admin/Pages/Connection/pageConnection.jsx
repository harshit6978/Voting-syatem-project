import React, { useEffect, useState } from 'react'
import "../Dashboard/Dashboard.css"
import { useDispatch, useSelector } from 'react-redux';
import { PARTY_GET_PROGRESS } from '../../../../Redux-saga/Admin/Action/Party/Action';
import { ELECTION_GET_PROGRESS } from '../../../../Redux-saga/Admin/Action/Election/Action';
import Swal from 'sweetalert2';
import { DELETE_CONNECT_PROGRESS, GET_CONNECT_PROGRESS, POST_CONNECT_PROGRESS } from '../../../../Redux-saga/Admin/Connection/action';

const PageConnection = () => {

    const [Data, setData] = useState({
        election: "",
        party: "",
    });
    const dispatch = useDispatch();


    const Party = useSelector((state) => state.PReducer);
    const Election = useSelector((state) => state.Ereducer);
    const Connect = useSelector((state) => state.CReducer);

    // console.log(Connect, "c");
    // console.log(Party, "p");
    // console.log(Election, "e");
    // console.log(Election

    useEffect(() => {
        dispatch({ type: PARTY_GET_PROGRESS });
        dispatch({ type: ELECTION_GET_PROGRESS });
        dispatch({ type: GET_CONNECT_PROGRESS });
    }, [])

    const handleConnect = () => {
        if (Data.election && Data.party) {
            const partyconnect = {
                Election: Data.election,
                Party: Data.party,
            };
            // console.log(partyconnect);
            dispatch({ type: POST_CONNECT_PROGRESS, payload: partyconnect });
            setData((prevData) => ({ ...prevData, party: "", election: "" }));

            Swal.fire({
                title: "Connected!",
                text: "Party connected successfully",
                icon: "success",
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "Please select both election and party",
                icon: "error",
            });
        }
    };

    const handleDelete = (val) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            dispatch({ type: DELETE_CONNECT_PROGRESS, payload: val })
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Data has been deleted.",
                    icon: "success"
                });
            }
        });
    }


    return (
        <div>

            <div className='elction'>Select election</div>
            <select name='election' onChange={(e) => setData({ ...Data, [e.target.name]: e.target.value })} >
                <option value={""} selected>
                    Open this select menu
                </option>
                {Election.election?.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.ElectionName}
                    </option>
                ))}
            </select>

            <div className='elction'>Select Party</div>
            <select name='party' onChange={(e) => setData({ ...Data, [e.target.name]: e.target.value })} >
                <option value={""} selected>
                    Open this select menu
                </option>
                {Party.election?.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.pName}
                    </option>
                ))}
            </select>

            <button className='connect' onClick={handleConnect}>Connect</button>




            <table id="keywords" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th><span>ElectionName</span></th>
                        <th><span>RegisterDate</span></th>
                        <th><span>Party Name</span></th>
                        <th><span>Logo</span></th>
                        <th><span>ShortCode</span></th>
                        <th><span>Button</span></th>

                    </tr>
                </thead>
                <tbody>

                    {
                        Connect && Connect.election && Connect.election.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td className="card-title">{val.Election && val.Election.ElectionName}</td>
                                    <td className="card-title">{val.Election && val.Election.RegisterDate}</td>
                                    <td className="card-title">{val.Party && val.Party.pName}</td>
                                    <td tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="userProfile">
                                            <img alt="" src={val.Party && val.Party.Profile} id='photo' />
                                        </div>
                                    </td>
                                    <td className="card-title">{val.Party && val.Party.shortCode}</td>
                                    <td>
                                        {/* <button onClick={() => handleView(val)}>View</button> */}
                                        <button onClick={() => handleDelete(val)} className='delete'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default PageConnection
