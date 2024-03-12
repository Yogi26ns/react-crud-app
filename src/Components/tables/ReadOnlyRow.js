import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="container-md" style={{justifyContent:'center'}}>
      <td style={{justifyContent:'center'}}>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button className="btn btn-primary"
          type="button" style={{background:'#3f2d4b', border:'0',fontSize:'10px', marginRight:'3px', display:'inline-block',justifyContent:'space-between' }}
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" style={{background:'#3f2d4b',border:'0',fontSize:'10px', marginRight:'3px'}} className="btn btn-primary" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
