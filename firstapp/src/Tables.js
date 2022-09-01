import React from "react";
import { Table } from "reactstrap";

function Tables(){

    return(
        <React.Fragment>
        <h1>tables</h1><br/><br/><br/>

        <Table>
            <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Item
      </th>
      <th>
        Quantity
      </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Rice
      </td>
      <td>
        5 kg
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Suger
      </td>
      <td>
        1.5 kg
      </td>
    </tr>
   
  </tbody>
        </Table>
        </React.Fragment>
    )
}

export default Tables;