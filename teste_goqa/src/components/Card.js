// Image
import CubeImg from '../img/teste_img/cube-svgrepo-com.svg'

// Css
import './Card.css'


const Card = (props) => {
    return ( 
        <div className='divServicos__container__card'>
            <div className='divServicos__conteudo__card'>
                
                <img src={props.img} alt={props.h2} />
                
                <div className='divServicos__conteudo__card__title'>
                    <h2>{props.h2}</h2>
                </div>

                <div className='divServicos__conteudo__subTitle__card'>
                    <h3 className='divServicos__conteudo__subTitle__card__item'>{props.p}</h3>
                </div>  
                
                <div className='divServicos__conteudo__tle__card'>

                    <div className='ul__deviServicos__conteudo__tle__card'>
                        <p className='ul__deviServicos__conteudo__tle__card__content'>{props.li1}</p>
                        <p className='ul__deviServicos__conteudo__tle__card__content'>{props.li2}</p>
                        <p className='ul__deviServicos__conteudo__tle__card__content'>{props.li3}</p>
                    </div>
    
                </div>
                            
            </div>
        </div> 
     );
}
 
export default Card;