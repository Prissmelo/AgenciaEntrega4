import React, { Component } from 'react'

import '../Promocao.css';



class Promocao extends Component {
    constructor(props) {
        super(props)



        this.state = {

        }
    }



    render() {
        return (

           <div>
                <h1>Passagens Aéreas</h1>

                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> </h3>
                    <div className = "card-body">
                        <div className = "row">
                          <img src="/img/veneza.png" alt=""/> 
                          <br/>
                          <br/>
                          <h3>Pacote Tour por Veneza</h3>
                          <p>O melhor museu a céu aberto, um dos destinos românticos da Europa.</p>
                            <div className = "row">
                                
                                <a href="/employees" ><h5> Pacotes Simples + Voo</h5></a>
                                <h6><strike>R$4.900 </strike></h6>
                                <h5> R$3.580</h5>
                               
                            </div>
                            <div className='botao'>
                                <button className="btn btn-primary" onClick={this.addEmployee} > Comprar Pacote</button>
                                <br/>
                                <small className="text-muted">Preço por pessoa</small>
                            </div>
                        </div>
                    </div>
                </div>  
                <br/>
                
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> </h3>
                    <div className = "card-body">
                        <div className = "row">
                          <img src="/img/novayork.png" alt=""/> 
                          <br/>
                          <br/>
                          <h3>Pacote Tour por Veneza</h3>
                          <p>O destino mais badalado para compras, conhecida como a cidade que nunca dorme.</p>
                            <div className = "row">
                                
                                <a href="/employees" ><h5> Pacotes Transl/Hospedagem + Voo</h5></a>
                                <h6><strike>R$6.800 </strike></h6>
                                <h5> R$4.350</h5>
                               
                            </div>
                            <div className='botao'>
                                <button className="btn btn-primary" onClick={this.addEmployee} > Comprar Pacote</button>
                                <br/>
                                <small className="text-muted">Preço por pessoa</small>
                            </div>
                        </div>
                    </div>
                </div>  

                <br/>
                
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> </h3>
                    <div className = "card-body">
                        <div className = "row">
                          <img src="/img/brazil.png" alt=""/> 
                          <br/>
                          <br/>
                          <h3>Pacote Brasil</h3>
                          <p>Ofertas arrasadoras para curtir o Carnaval e suas férias de verão.</p>
                            <div className = "row">
                                
                                <a href="/employees" ><h5> Pacotes Hospedagem + Voo</h5></a>
                                <h6><strike>R$2.550 </strike></h6>
                                <h5> R$2.150</h5>
                               
                            </div>
                            <div className='botao'>
                                <button className="btn btn-primary" onClick={this.addEmployee} > Comprar Pacote</button>
                                <br/>
                                <small className="text-muted">Preço por pessoa</small>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>    
           </div>
         )
    }
}



export default Promocao