import './Example2.css'
import React from "react";

class Example2 extends React.Component{
    render() {
        return (
            <div className="Example2">
            <h2>Grocery table</h2>
            <table>
            <tr>
                <th>{this.props.c1}</th>
                <th>{this.props.c2}</th>
                <th>{this.props.c3}</th>
            </tr>
            <tr>
                <td>1</td>
                <td>rice</td>
                <td>5 Kg</td>
            </tr>
            <tr>
                <td>2</td>
                <td>suger</td>
                <td>1.5 Kg</td>
            </tr>
        </table>
        <h2>Fruits list</h2>
        <ol>
                <li>Apple</li>
                <li>Banana</li>
                <li>cherry</li>
            </ol>
            </div>
          
        );
    }
}

export default Example2;