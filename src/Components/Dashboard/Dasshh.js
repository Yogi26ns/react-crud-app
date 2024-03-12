import React, { useState, Fragment, useEffect } from "react";
// import { nanoid } from "nanoid";
import "./Dashh.css";
import {mockdata} from "../../mock-data";
import ReadOnlyRow from "../tables/ReadOnlyRow";
import EditableRow from "../tables/EditableRow";
import Header from "./Header";
import Popup from "reactjs-popup";
import Add from "./Add";

      
const Dasshh = ({setIsAuthenticated}) => {
  const [contacts, setContacts] = useState(mockdata);
  
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

 
  localStorage.setItem('contacts',JSON.stringify(contacts))



  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();


    // const dat=fss.readFileSync('mock-data.json');
    // const jsonData=JSON.parse(dat);
    // const jsonString = JSON.stringify(jsonData);
    // fss.writeFileSync('mock-data.json',jsonString,'utf-8',(err)=>{
    //   if (err) throw err;
    //   console.log("added");
    // });
    // const update_data = fss.readFileSync("mock-data.json");
    // const updated_jsonData = JSON.parse(update_data);
    // console.log(JSON.stringify(updated_jsonData,null,4));
    const index =localStorage.getItem('contacts').length;
    console.log(index);
    const myArray = index.toString();
    console.log(myArray);
    var Array = myArray.split("");
    // var index_id = index.length + 2
    console.log(Array);
    const newContact = {
      
      id: parseInt(Array[0]) + 2,
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
   
    const newContacts = [...contacts, newContact];
    // const indeex = contacts.findIndex((contacts) => contacts.id===setContacts);
    // newContacts[indeex]=newContact;
    setContacts(newContacts);
    // setNewContactId(indeex+1);

  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };
  
  const [buttonPopup,setButtonPopup] = useState(false);
  const [timedPopup,setTimedPopup] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   },3000);
  // },[]);


  // const popupbuttn = () => {
  //   setButtonPopup(buttonPopup)
    
  // }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  
  return (
    <div className="container-md ">
      <div style={{paddingBottom:'40px'}}><Header 
         setIsAuthenticated={setIsAuthenticated}/>
              <div style={{paddingRight:'60px'}}> <button className="btn btn-danger" style={{background:'#122d4c',border:'0',fontSize:'10px',float:'right',fontFamily:'monospace'}} onClick={() => setButtonPopup(true)} >Add + </button> </div>
</div>
      <form onSubmit={handleEditFormSubmit}>
        <table style={{fontFamily:'monospace',justifyContent:'center'}} className="table table-striped table-dark">
          <thead class="thead-dark" style={{justifyContent:'center'}}>
            <tr style={{width:'90px'}}>
              <th scope="col-auto" style={{width:'90px',justifyContent:'center'}} >Name</th>
              <th scope="col-auto" style={{width:'90px',justifyContent:'center'}}>Address</th>
              <th scope="col-auto" style={{width:'90px',justifyContent:'center'}}>Phone Number</th>
              <th scope="col-auto" style={{width:'90px',justifyContent:'center'}}>Email</th>
              <th scope="col-auto" style={{width:'110px',justifyContent:'center'}}>Actions</th>
            </tr>
          </thead>
          <tbody className="container-sm" style={{width:'90px'}}>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <><ReadOnlyRow
                                contact={contact}
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick} /></>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div className="App">
          <Add trigger={buttonPopup} setTrigger={setButtonPopup}>
            
            <form onSubmit={handleAddFormSubmit}>
              <input
                type="text"
                style={{fontSize:'15px',border:'solid 1px white',fontFamily:'monospace',color:'#e6edf3'}}
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                style={{fontSize:'15px',border:'solid 1px white',fontFamily:'monospace',color:'#e6edf3'}}
                name="address"
                required="required"
                placeholder="Enter an addres..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                style={{fontSize:'15px',border:'solid 1px white',fontFamily:'monospace',color:'#e6edf3'}}
                name="phoneNumber"
                required="required"
                placeholder="Enter a phone number..."
                onChange={handleAddFormChange}
              />
              <input
                type="email"
                style={{fontSize:'15px',fontFamily:'monospace',border:'solid 1px white',color:'#e6edf3'}}
                name="email"
                required="required"
                placeholder="Enter an email..."
                onChange={handleAddFormChange}
              />
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><button className="btn btn-primary" style={{ marginTop: '12px', background:'#122d4c',fontFamily:'monospace',fontSize:'16px',border:'0' }}  >Add</button></div>
            </form> 
          </Add>
      </div>
      {/* <button onClick={popupbuttn} className="btn btn-primary" style={{color:'#e6edf3',fontFamily:'monospace',fontSize:'10px'}}  >Add a Contact</button>
      <Add trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h4>Adding a contact</h4>
      </Add> */}
      {/* <Add trigger={timedPopup} setTrigger={setTimedPopup}>
        <h4>Timed popup</h4>
        <p>this is timed popup</p>
      </Add> */}
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
        </div>
  );
};

export default Dasshh;
