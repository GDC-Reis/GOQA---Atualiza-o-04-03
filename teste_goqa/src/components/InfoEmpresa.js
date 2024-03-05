import './InfoEmpresa.css';

// import imgEmpresa from '../img/about.jpg';
// import imgEmpresa from '../img/new_img/imagem 1.png';
import ImgGOQA from '../img/new_img/GOQA.png';

const InfoEmpresa = () => {
    return (
        <div className='content_infoEmpresa'>
                
                {/* <img src={imgEmpresa} className='img_infoEmpresa'/> */}
                <img src={ImgGOQA} className='img_infoEmpresa'/>
 

                <div className='content_infoEmpresa__text'>
                    <h1 className='title__infoEmpresa'>SOBRE NÓS</h1>
                    <p className='text__infoEmpresa'>
                        Uma empresa focada em Qualidade de Software! <br/><br/>

                        Erros "Oh não!" são cometidos ao usar sites e aplicativos. Desistir! “Ninguém quer isso de um cliente." <br></br><br></br>

                        Para evitar isso, somos apaixonados em transformar os resultados do software para dar aos nossos usuários uma experiência positiva. <br></br><br></br>

                        No mercado há mais de 8 anos, nosso objetivo é alcançar a qualidade e confiabilidade dos produtos de nossos clientes, o que lhes permite obter os melhores resultados no desenvolvimento de softwares, sistemas e aplicativos. <br></br><br></br>

                        Fornecemos soluções personalizadas e atendemos vários setores, como: financeiro, industrial, varejo e etc. Trabalhamos presencialmente ou externamente e monitorizamos a atividade a todo o momento para garantir que os objetivos de cada projeto serão cumpridos.
                    </p>
                </div>
        </div>
     );
}
 
export default InfoEmpresa;