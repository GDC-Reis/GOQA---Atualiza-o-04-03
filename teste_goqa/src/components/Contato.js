import { useState } from "react";
import './Contato.css'
import emailjs from '@emailjs/browser'

const Contato = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos do formulário.");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }

        emailjs.send("service_8vjbuk9", "template_s3kc99o", templateParams, "N7d3jmmCydWk0eFBs")
        .then((response) => {
            console.log("EMIAL ENVIADO", response.status, response.text);
            alert("E-MAIL ENVIADO COM SUCESSO !!")
            setName('');
            setEmail('');
            setMessage('');
        }, (err) => {
                console.log("ERRO: ", err);
        })
    }

    return ( 
        <div className="container_contato">
            
            <div className="container_contato_forms">
                
                <form className="form" onSubmit={sendEmail}>
                    
                    <h1 className="form__title">Contato</h1>
                    
                    <div className="form1_conteudo">
                        <input
                            className="input"
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <input
                            className="input"
                            type="text"
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <textarea
                            className="textarea"
                            placeholder=" Digite sua mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                    </div>
                    
                    <input className="button1" type="submit" value="Enviar" />
                </form>


                <div className="lista_contatos">
                    <div className="lista_contatos__conteudo">
                        
                        <h1 className="lista_contatos__title">Informações de Contato</h1>
                        
                        <ul className="lista_contatos__conteudo__endereco">
                            <h3>Endereço</h3>
                            <li><span>Rua : </span>Samuel Brasil Bueno - 445</li>
                            <li><span>Bairro : </span>Solidariedade</li>
                            <li><span>Cidade : </span>Araraquara - SP</li>
                        </ul>

                        <ul className="lista_contatos__conteudo__telefone">
                            <h3>Telefone</h3>
                            <li>+55 (16) 99773-2624</li>
                        </ul>
            
                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default Contato;