import React from 'react'

const Home = () => {

  const user = {
    "userId": 123,
    "username": "Kiran",
    "accessDuration": 3600,
    "refreshExpiration": 1296000,
    "authenticated": false,
    "role": ""
}

  let role = user.role;
  let auth = user.authenticated;

  return (
    <div>
      Home

      {(role==="" && auth===true)&& <p>SellerDashboard</p>}
    </div>
  )
}

export default Home
