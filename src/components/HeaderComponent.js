import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../NavBar.css';



class HeaderComponent extends Component {
    constructor(props) {
        super(props)



        this.state = {

        }
    }



    render() {
        return (
           <div>
                <header>
                   <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="logo">
                            <img src="/img/Mapa2.ico" />
                            <img src="/img/logopequeno.png" />
                        </div>

                        <div className="navbar-container"> 
                            <ul className="inline"> 
                    
                                <a><Link to="/"><h4>Home</h4></Link> </a>  
                    
                               <a><Link to="/employees"><h4>Destino</h4></Link></a>   

                               <Link to="/add-employee/:id"><h4>Cadastro</h4></Link>

                              <Link to="/view-employee/:id"><h4>Lista</h4></Link>

                              <Link to="/Promocao"><h4>Promoção</h4></Link>
                    
                               <Link to="/Contato"><h4>Contato</h4></Link>
                    
                               

                            </ul>
                
                         </div>
                       <div><a href="https://recodepro.org.br" className="navbar-brand"></a></div>
                   </nav>
               </header>
           </div>
         )
    }
}



export default HeaderComponent