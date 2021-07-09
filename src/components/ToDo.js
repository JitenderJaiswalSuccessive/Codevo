import React from 'react'

const ToDo = ({index, id, createdAt}) => {
    return (
    <tr>
       <td><label>{index}</label></td>
       <td><label>{id}</label></td>
       <td><input /></td>
       <td><label>{createdAt.toLocaleTimeString()}</label></td>
  </tr>
    );
}

export default ToDo;