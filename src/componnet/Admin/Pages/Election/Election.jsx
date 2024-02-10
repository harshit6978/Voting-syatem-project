import React, { useRef, useState, useEffect } from 'react';
import './Election.css';
import { useDispatch, useSelector } from 'react-redux';
import { ELECTION_DELETE_PROGRESS, ELECTION_GET_PROGRESS, ELECTION_POST_PROGRESS, ELECTION_UPDATE_PROGRESS } from '../../../../Redux-saga/Admin/Action/Election/Action';

const Election = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [update, setUpdate] = useState({
        ElectionName: '',
        RegisterDate: '',
    });

    const Ename = useRef();
    const Date = useRef();

    const vote = useSelector((state) => state.Ereducer);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        setIsSignUp(!isSignUp);
        setUpdate({
            ElectionName: '',
            RegisterDate: '',
        });
    };

    useEffect(() => {
        dispatch({ type: ELECTION_GET_PROGRESS });
    }, [dispatch]);

    const dataAdd = () => {
        setIsSignUp(!isSignUp);
        const election = {
            ElectionName: Ename.current.value,
            RegisterDate: Date.current.value,
        };
        dispatch({ type: ELECTION_POST_PROGRESS, payload: election });
    };

    const DeleteData = (val) => {
        console.log(val);
        dispatch({ type: ELECTION_DELETE_PROGRESS, payload: val });
    };

    const ViewData = (val) => {
        setUpdate(val);
        setIsSignUp(true);
    };

    const HandleChange = (e) => {
        setUpdate((prevUpdate) => ({
            ...prevUpdate,
            [e.target.name]: e.target.value,
        }));
    };

    const handleButtonUpdate = () => {
        setIsSignUp(!isSignUp);
        dispatch({ type: ELECTION_UPDATE_PROGRESS, payload: update });
        console.log(update);
    };

    return (
        <>
            <button className='Data' onClick={handleButtonClick}>
                Add
            </button>

            <div className='color'>
                <div className='hover'>
                    {isSignUp && (
                        <div className='box'>
                            <div className='election'>create Election</div>
                            <div className='lable'>Election Name</div>
                            <input
                                type='text'
                                name='ElectionName'
                                className='name'
                                placeholder='Enter an Election Name'
                                value={update.ElectionName}
                                ref={Ename}
                                onChange={HandleChange}
                            />
                            <div className='lable'>Election Date</div>
                            <input
                                type='date'
                                name='RegisterDate'
                                className='name'
                                placeholder='Enter an Election Date'
                                value={update.RegisterDate ? update.RegisterDate.split('T')[0] : ''}
                                ref={Date}
                                onChange={HandleChange}
                            />
                            <br />
                            <button className='Add' onClick={dataAdd}>
                                Add
                            </button>
                            <button className='Addd' onClick={handleButtonUpdate}>
                                Update
                            </button>
                        </div>
                    )}
                </div>
            </div>


            <table id="keywords" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th><span>Party Name</span></th>
                        <th><span>Short Code</span></th>
                        <th><span>Button</span></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        vote.election.map((val) => {
                            return (
                                <>
                                    <tr>
                                        <td class="card-title" > {val.ElectionName}</td>
                                        <td class="card-text">{val.RegisterDate}</td>
                                        <td>
                                            <button onClick={() => DeleteData(val)}>Delete</button>
                                            <button onClick={() => ViewData(val)}>View</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    );
};

export default Election;
