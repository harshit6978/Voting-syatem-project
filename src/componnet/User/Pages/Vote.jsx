import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_CONNECT_PROGRESS } from '../../../Redux-saga/Admin/Connection/action';

const Vote = () => {

    // const [vote, setvote] = useState({});
    // const [checkVote, setcheckVote] = useState(false);

    // const userId = Cookies.get("_id");
    const dispatch = useDispatch();
    const connection = useSelector((state) => state.CReducer);
    console.log(connection, "kjhgfcvgbhjnk");

    useEffect(() => {
        dispatch({ type: GET_CONNECT_PROGRESS })
    }, [])


    return (
        <>

            <h1 className='vote'>Please Enter a vote</h1>

            <table id="keywords" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th><span>Party Name</span></th>
                        <th><span>Short code</span></th>
                        <th><span>logo</span></th>
                        <th><span>vote</span></th>
                        <th><span>Button</span></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        connection.election.map((val) => {
                            return (
                                <>
                                    <tr>
                                        <td class="card-title" > {val.Party.pName}</td>
                                        <td class="card-text">{val.Party.shortCode}</td>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="userProfile">
                                                <img alt="" src={val.Party.Profile} id='photo' />
                                            </div>
                                        </div>
                                        <td>
                                            <input
                                                type="radio"
                                                name="party"
                                            // onChange={() => fetchData(ind)}
                                            />
                                        </td>
                                        <td>
                                            <button>Vote</button>
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

export default Vote