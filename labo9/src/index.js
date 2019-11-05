import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registroForm from './registroForm';
import registroList from './registroList';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            registro: [],
            err: ''
        }
    }

    saveRegistro(registro) {
        const registros = this.state.registros.slice();
        if (!registros.find((current) => {
            return current.carnet === registro.carnet;
        })) {
            registro.push(registro);
            this.setState({ registros, err: '' });
        } else {
            this.setState({ err: "El estudiante ya existe" })
        }

    }

    deleteRegistro(carnet) {
        const registro = this.state.registro.filter(function (ele) {
            return ele.carnet !== carnet;
        });
        this.setState({ registro });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>{this.state.err}</div>
                    <registroForm onSave={(student) => {
                        this.saveStudent(student)
                    }} />
                </div>
                <registroList registro={this.state.registro} onDelete={(carnet) => {
                    this.deleteRegistro(carnet);
                }} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

