import './Diferenciais.css';

const Diferenciais = (props) => {
    return ( 
        <section>
            <div className='container_title'>
                
                <div className='container_card_Diferenciais__content'>
                    <h2>{props.h2}</h2>
                    <p className='container_card_Diferenciais__content__p'>{props.p}</p>
                </div>

            </div>
        </section>
     );
}
 
export default Diferenciais;