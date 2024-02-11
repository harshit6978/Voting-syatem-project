import React, { useEffect, useRef, useState } from 'react'
import "./Party.css"
import { useDispatch, useSelector } from 'react-redux';
import { PARTY_DELETE_PROGRESS, PARTY_GET_PROGRESS, PARTY_POST_PROGRESS } from '../../../../Redux-saga/Admin/Action/Party/Action';
import Swal from 'sweetalert2';
const Party = () => {

  const [isSignUp, setIsSignUp] = useState(false);
  const [update, setupdate] = useState([])

  const pName = useRef();
  const Profile = useRef();
  const shortCode = useRef();

  const Party = useSelector((state) => state.PReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PARTY_GET_PROGRESS });
  }, []);


  const handleButtonClick = () => {
    setIsSignUp(!isSignUp);
  };

  const addData = () => {
    setIsSignUp(!isSignUp);
    const datee = {
      pName: pName.current.value,
      Profile: URL.createObjectURL(Profile.current.files[0]),
      shortCode: shortCode.current.value
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Data has been Added",
      showConfirmButton: false,
      timer: 1500
    });
    dispatch({ type: PARTY_POST_PROGRESS, payload: datee });
  }

  const DeleteParty = (val) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: PARTY_DELETE_PROGRESS, payload: val })
        Swal.fire({
          title: "Deleted!",
          text: "Your Data has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const UpdateParty = (val) => {
    setupdate(val);
    setIsSignUp(true);
  }

  const HandleChange = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
  }

  return (
    <>
      <button className='Data' onClick={handleButtonClick}>
        Add
      </button>

      <div className='color'>
        {isSignUp && (
          <div className='manage'>
            <div className='boxParty'>
              <div className='election'>create Party</div>
              <div className='lable'>Party Name</div>
              <input type='text' name='PartyName' className='name' value={update.pName} placeholder='Enter an Election Name' ref={pName} onChange={HandleChange} />
              <div className='lable'>Party Date</div>
              <input type='file' name='Profile' className='name' placeholder='Enter an Election Date' ref={Profile} onChange={HandleChange} />
              <input type='text' name='Shortcode' className='name' value={update.shortCode} placeholder='Enter an Short code' ref={shortCode} onChange={HandleChange} />
              <br />
              <button className='Add' onClick={addData}>
                Add
              </button>
              <button className='Addd' >
                Update
              </button>
            </div>
          </div>
        )}
      </div>




      <table id="keywords" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            {/* <th><span>id</span></th> */}
            <th><span>Party Name</span></th>
            <th><span>Short Code</span></th>
            <th><span>Profile</span></th>
            <th><span>Button</span></th>
          </tr>
        </thead>
        <tbody>

          {
            Party.election.map((val) => {
              return (
                <>
                  <tr>
                    <td class="card-title" > {val.pName}</td>
                    <td class="card-text">{val.shortCode}</td>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="userProfile">
                        <img alt="" src={val.Profile} id='photo' />
                      </div>
                    </div>
                    <td>
                      <button onClick={() => DeleteParty(val)} className='delete'>Delete</button>
                      <button onClick={() => UpdateParty(val)} className='view'>View</button>
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

export default Party