import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Lista de Clientes</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nome Completo: </label>
                            <div> { this.state.employee.nome }</div>
                        </div>
                        <div className = "row">
                            <label> CPF: </label>
                            <div> { this.state.employee.cpf }</div>
                        </div>
                        <div className = "row">
                            <label> Endereço: </label>
                            <div> { this.state.employee.endereco }</div>
                        </div>
                        <div className = "row">
                            <label> Número: </label>
                            <div> { this.state.employee.numero }</div>
                        </div>
                        <div className = "row">
                            <label> Complemento: </label>
                            <div> { this.state.employee.complemento }</div>
                        </div>
                        <div className = "row">
                            <label> Cidade: </label>
                            <div> { this.state.employee.cidade }</div>
                        </div>
                        <div className = "row">
                            <label> Estado: </label>
                            <div> { this.state.employee.estado}</div>
                        </div>
                        <div className = "row">
                            <label> Telefone: </label>
                            <div> { this.state.employee.telefone }</div>
                        </div>
                        <div className = "row">
                            <label> Email : </label>
                            <div> { this.state.employee.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent