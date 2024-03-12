import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Contactus.css'
import { Card } from 'react-bootstrap'
function Contactus() {
  const navigate = useNavigate();
  const handleCllick = () => {
    navigate('/login');
  };
  const handleClliick = () => {
    navigate('/home');
  };
  return (
    <div className='container-md hello'>
      <h3 style={{fontWeight:'900',display:'flex',justifyContent:'center',paddingBottom:'19px'}}>You can contatct us through these details</h3>
      <div className='cards'>
        <Card style={{width:'auto',marginRight:'4px',background:'#343434',color:'#fff'}}>
          <Card.Body>
            <Card.Title ><div style={{fontFamily:'monospace',fontSize:'21px',fontWeight:'800'}}>Support🤝</div></Card.Title>
            <Card.Text>You can mail to us if you have any queries.!<div className='buttn'><button  style={{background:'#445499',border:'none',borderRadius:'10px',fontSize:'10px'}}><a href='mailto:nsyogi.2603@gmail.com' style={{textDecoration:'none',fontSize:'10.5px',color:'white'}}>Email Us📧</a></button></div> </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width:'auto',marginRight:'4px',background:'#343434',color:'#fff'}}>
          <Card.Body>
            <Card.Title><div style={{fontFamily:'monospace',fontSize:'16px',fontWeight:'800'}}>Customer Care📞</div></Card.Title>
            <Card.Text>You can call to us if you have any queries.! <p className='buttn' style={{fontSize:'14px', fontWeight:'800'}}>Toll free no🤳</p><p className='buttn' style={{fontFamily:'monospace',fontSize:'16px'}}>18002344537</p> </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width:'auto',marginRight:'4px',background:'#343434',color:'#fff'}}>
          <Card.Body>
            <Card.Title><div style={{fontFamily:'monospace',fontSize:'21px',fontWeight:'800'}}>ChatBot🤖</div></Card.Title>
            <Card.Text>You can chat with our ai chatbot here!<div className='buttn'><button style={{background:'#445499',border:'none',borderRadius:'10px',fontSize:'11px'}}>ChatBot</button></div> </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
      <div className='container-md hel' style={{alignItems:'center',display:'flex',textAlign:'center'}}>
        <div style={{paddingRight:'10px'}}>
          <button onClick={handleCllick} className='btn btn-secondary'>Login</button>
        </div>
        <div>
          <button onClick={handleClliick} className='btn btn-secondary'>Register</button>
        </div>
      </div>
      

    </div>
  )
}

export default Contactus
