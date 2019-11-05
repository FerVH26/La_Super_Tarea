import React from 'react';
import Registro from './registro';

class registroForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {carnet: '', horario:'',tarde:''}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let registro = new Registro(this.state.carnet, this.state.horario, this.state.tarde);
        this.props.onSave(registro);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    renderInput(name,placeholder, type) {
        return (
            /* Se un fragmento React, para establecer que este código se hijo directo en el resultado */
            <fieldset>
                <label htmlFor={name}>{name}</label>
                <input
                    type={type}
                    name={name} id={name}
                    value={this.state[name]}
                    placeholder= {placeholder}
                    onChange={this.handleInputChange} />
            </fieldset>
        );
    }
    renderSelect(name){
        return(
            <fieldset>
                <label htmlFor={name}>Seleccione el horario:</label>
                <select name={name}>
                    <option>Martes de 13:30 a 15:30</option>
                    <option>Lunes de 9:00 a 11:00</option>
                    <option>Miercoles de 9:00 a 11:00</option>
                    <option>Jueves de 13:30 a 15:30</option>
                    <option>Viernes de 9:00 a 11.00</option>
                    <option>Viernes de 15:30 a 17:30</option>
                </select>
            </fieldset>
        )
    }

    render() {
        return (
            <form id="contact" action="" onSubmit={this.handleSubmit}>
                <h3>Student Form</h3>
                {this.renderInput("carnet","carnet","text")}
                {this.renderSelect("Schedule")}
                {this.renderInput("lastname","Lastname","checkbox")}
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        );
    }
}
export default registroForm;