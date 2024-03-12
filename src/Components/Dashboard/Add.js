import React from 'react';
import './Add.css';
function Add(props) {
  
  return (props.trigger)?(
    <div className='popupp'>
        <div className='container-md popupp-inner'>
          <h1>Add an Employee</h1>

            <button className='close-btn' style={{borderRadius:'9px',background:'none',border:'0',padding:'9px',width:'auto',fontSize:'20px',display:'inline'}} onClick={() => props.setTrigger(false)}>❎</button>
            {props.children}
        </div>
    </div>
  ):""; 
}

export default Add
{/* <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3'}}
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3'}}
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3'}}
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3'}}
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
      <button className="btn btn-primary" style={{ marginTop: '12px', background:'#122d4c',fontFamily:'monospace',fontSize:'10px',border:'0' }}  >Add</button>
        </form>  */}