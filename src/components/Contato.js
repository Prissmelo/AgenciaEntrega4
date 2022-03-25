import React, { Component } from 'react'

import '../Promocao.css';



class Contato extends Component {
    constructor(props) {
        super(props)



        this.state = {

        }
    }



    render() {
        return (

           <div>
                <div className="pacote1">
            
                    <h1>Deixe sua mensagem</h1>
                    <br/>
                    <h5>Entre em contato com a nossa equipe, através do preenchimento desse formulário abaixo:</h5>
                    <br/>
          
                    <form>
                            <div className = "form-group">                        
                                <label> Email </label>
                                <input placeholder="name@example.com" name="nome" className="form-control" 
                                  />
                            </div>
                            <div className = "form-group">
                                <label> Mensagem </label>
                                <input placeholder="Digite suas dúvidas, sugestões, reclamações aqui" name="cpf" className="form-control" 
                                    />
                            </div>
                    </form>                    
       
                </div>
           </div>
         )
    }
}



export default Contato