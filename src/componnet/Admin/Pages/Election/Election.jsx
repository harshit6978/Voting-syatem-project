import React, { useRef, useState } from 'react';
import './Election.css';

const Election = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleButtonClick = () => {
        setIsSignUp(!isSignUp);
    };

    const handleButtonCencal = () => {
        setIsSignUp(!isSignUp);

    }
    const Ename = useRef();
    const Date = useRef();


    const dataAdd = () => {
        const election = {
            ElectionName: Ename.current.value,
            DateOfElec: Date.current.value,
        }
        console.log(election, "kjhg");
    }



    return (
        <>
            <button className='Data' onClick={handleButtonClick} >
                Add
            </button>

            {isSignUp &&
                <div className='box'>
                    <div className='election'>
                        create Election
                    </div>
                    <div className='lable'>Election Name</div>
                    <input type='text' className='name' placeholder='Enter a Election Name' ref={Ename}></input>
                    <div className='lable'>Election Date</div>
                    <input type='date' className='name' placeholder='Enter a Election Name' ref={Date}></input><br />


                    <button className='Add' onClick={dataAdd}>Add</button>
                    <button className='Addd' onClick={handleButtonCencal}>Cencal</button>
                </div>
            }
        </>
    );
};

export default Election;
