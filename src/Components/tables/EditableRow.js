import React,{useRef} from "react";
import './edit.css'
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const namee = useRef();
  const addresss = useRef();
  const phonenumb = useRef();
  const mailid = useRef();
  const handleLogin = e => {
    e.preventDefault();
    console.log(mailid.current.value,"emailID")
        localStorage.setItem("Name",JSON.stringify(namee.current.value))
        localStorage.setItem("addressdata",JSON.stringify(addresss.current.value))
        localStorage.setItem("Phone",JSON.stringify(phonenumb.current.value))
        localStorage.setItem("emailID",JSON.stringify(mailid.current.value))
  }
  return (
    <tr onChange={handleLogin}>
        <td>
          <input
            type="text"
            style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3',width:'100px',border:'1px solid black',height:'10px'}}
            required="required"
            placeholder="Enter a name..."
            name="fullName"
            value={editFormData.fullName}
            onChange={handleEditFormChange}
            ref={namee}
          ></input>
        </td>
        <td>
          <input
            type="text"
            style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3',width:'80px',border:'1px solid black',height:'10px'}}
            required="required"
            placeholder="Enter an address..."
            name="address"
            value={editFormData.address}
            onChange={handleEditFormChange}
            ref={addresss}
          ></input>
        </td>
        <td>
          <input
            type="text"
            style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3',border:'1px solid black',height:'10px',width:'80px'}}
            required="required"
            placeholder="Enter a phone number..."
            name="phoneNumber"
            value={editFormData.phoneNumber}
            onChange={handleEditFormChange}
            ref={phonenumb}
          ></input>
        </td>
        <td>
          <input
            type="email"
            style={{fontSize:'10px',fontFamily:'monospace',color:'#e6edf3',width:'130px',border:'1px solid black',height:'10px'}}
            required="required"
            placeholder="Enter an email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
            ref={mailid}
          ></input>
        </td>
        <td>
          <button type="submit" className="btn btn-primary" style={{background:'#3f2d4b', border:'0',fontSize:'10px',display:'inline-block',marginRight:'3px'}}>Save</button>
          <button className="btn btn-primary" type="button" style={{background:'#3f2d4b', border:'0',fontSize:'10px'}} onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
    </tr>
  );
};

export default EditableRow;
