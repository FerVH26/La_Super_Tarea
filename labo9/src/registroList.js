import React from 'react';
import registro from './registro';

class registroList extends React.Component {

    renderHeader() {
        return Object.keys(new registro()).map((key, index) => {
            return (
                <th key={index}>
                    {key.substring(1)}
                </th>
            );
        });
    }

    renderBody(registro) {
        return registro.map(({ carnet, horario, tarde }) => {
            return (
                <tr key={carnet}>
                    <td>{carnet}</td>
                    <td>{horario}</td>
                    <td>{tarde}</td>
                    <td>
                        <button  onClick={() => {this.props.onDelete(carnet)}}>Delete</button>
                    </td>
                </tr>
            );
        });
      
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {this.renderHeader()}
                            <th> actions</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.renderBody(this.props.registro)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default registroList;