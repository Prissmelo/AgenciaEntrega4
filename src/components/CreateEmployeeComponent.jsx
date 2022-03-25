import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nome: '',
            cpf: '',
            endereco: '',
            numero: '',
            complemento: '',
            cidade: '',
            estado: '',
            telefone: '',
            email: ''
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.changeEnderecoHandler = this.changeEnderecoHandler.bind(this);
        this.changeNumeroHandler = this.changeNumeroHandler.bind(this);
        this.changeComplementoHandler = this.changeComplementoHandler.bind(this);
        this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({nome: employee.nome,
                    cpf: employee.cpf,
                    endereco: employee.endereco,
                    numero: employee.numero,
                    complemento: employee.complemento,
                    cidade: employee.cidade,
                    estado: employee.estado,
                    telefone: employee.telefone,
                    email : employee.email
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {nome: this.state.nome, cpf: this.state.cpf, endereco: this.state.endereco, numero: this.state.numero, complemento: this.state.complemento, cidade: this.state.cidade, estado: this.state.estado, telefone: this.state.telefone, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeEnderecoHandler= (event) => {
        this.setState({endereco: event.target.value});
    }

    changeNumeroHandler= (event) => {
        this.setState({numero: event.target.value});
    }

    changeComplementoHandler= (event) => {
        this.setState({complemento: event.target.value});
    }

    changeCidadeHandler= (event) => {
        this.setState({cidade: event.target.value});
    }

    changeEstadoHandler= (event) => {
        this.setState({estado: event.target.value});
    }

    changeTelefoneHandler= (event) => {
        this.setState({telefone: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Clientes</h3>
        }else{
            return <h3 className="text-center">Atualizar Clientes</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nome Completo: </label>
                                            <input placeholder="Escreva seu nome completo" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CPF: </label>
                                            <input placeholder="000.000.000-00" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Endereço: </label>
                                            <input placeholder="Escreva endereço completo" name="endereco" className="form-control" 
                                                value={this.state.endereco} onChange={this.changeEnderecoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Número: </label>
                                            <input placeholder="00000" name="numero" className="form-control" 
                                                value={this.state.numero} onChange={this.changeNumeroHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Complemento: </label>
                                            <input placeholder="Escreva complemento do endereço se houver" name="complemento" className="form-control" 
                                                value={this.state.complemento} onChange={this.changeComplementoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Complemento: </label>
                                            <input placeholder="Escreva complemento do endereço se houver" name="complemento" className="form-control" 
                                                value={this.state.complemento} onChange={this.changeComplementoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cidade: </label>
                                            <input placeholder="Escreva a sua cidade" name="cidade" className="form-control" 
                                                value={this.state.cidade} onChange={this.changeCidadeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Estado: </label>
                                            <input placeholder="Escreva seu estado" name="estado" className="form-control" 
                                                value={this.state.estado} onChange={this.changeEstadoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telefone: </label>
                                            <input placeholder="(00) 00000-0000" name="telefone" className="form-control" 
                                                value={this.state.telefone} onChange={this.changeTelefoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email : </label>
                                            <input placeholder="Email " name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent