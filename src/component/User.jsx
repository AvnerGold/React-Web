import React from 'react'
import { Link } from 'react-router-dom'

export default function User({id, name,familyName,email,password}) {
  return (
    <>
<div class="container d-flex justify-content-center align-items-center ">      
  <div class="card">

    <div class="upper">

      <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"/>
                
    </div>

    <div class="user text-center">

      <div class="profile">

        <img src="https://i.imgur.com/p81Eh87b.jpg" class="rounded-circle" width="80"/>
                  
      </div>

    </div>


    <div class="mt-5 text-center">

      <h4 class="mb-0">{name} {familyName}</h4>
      <span class="text-muted d-block mb-2">Los Angles</span>

      <button class="btn btn-primary btn-sm follow"><Link to="/"></Link>Disconnect</button>


      <div class="d-flex justify-content-between align-items-center mt-4 px-4">

        <div class="stats">
          <h6 class="mb-0">ID</h6>
          <span>{id}</span>

        </div>


        <div class="stats">
          <h6 class="mb-0">Email</h6>
          <span>{email}</span>

        </div>


        <div class="stats">
          <h6 class="mb-0">Password</h6>
          <span>{password}</span>

        </div>
                  
      </div>
                
    </div>
               
  </div>

</div>

    </>
  )
}
