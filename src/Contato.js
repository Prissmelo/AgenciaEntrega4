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

            
                <div className="pacote1">
            
                    <h1>Deixe sua mensagem</h1>
                    <br/>
                    <h5>Entre em contato com a nossa equipe, através do preenchimento desse formulário abaixo:</h5>
                    <br/>
          
                    <form>
                        <div className="mb-3">
                            <div className = "form-group col-md-7 col-offset-4">                        
                                <label> Email </label>
                                <input placeholder="name@example.com" name="nome" className="form-control" 
                                  />
                            </div>
                        </div> 
                        <div className="mb-3">
                            <div className = "form-group col-md-8 col-offset-4">
                                <label> Mensagem </label>
                                <textarea className='form-control' rows="5"> "Digite suas dúvidas, sugestões, reclamações aqui"</textarea>
                                
                            </div>

                          <button className="btn btn-success" >Enviar</button>  
                        </div>   
                           
                    </form>                    
       
                </div>
           
         )
    }
}



export default Contato