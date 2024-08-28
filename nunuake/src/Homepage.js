import React from 'react'
import logo from './logos/logo3bg.png'



function Homepage() {
  return (
    <div>
      <h1>Nunua Kenya</h1>

      <img src={logo} style={{height:'350px', padding:'15px',marginTop:'-80px'}} className='logo'/>
      <div className='container'>
      <div className='buttons1'>

            <button style={{backgroundColor: '#0000FF'}}>LOGIN</button> <br/>
            <button style={{backgroundColor: '#FFA500'}}>SIGN UP</button> <br/>
            <button style={{backgroundColor: '#800080'}}>QUICK SALE</button> <br/>
            <button style={{backgroundColor: '#008000'}}>QUICK BUY</button> <br/>

            

        </div>

      </div>
        
    </div>
  )
}

export default Homepage
