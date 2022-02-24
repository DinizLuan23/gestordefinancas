import entradasImg from '../../assets/entradas.svg';
import saidas from '../../assets/saidas.svg';
import total from '../../assets/total.svg';

import { Container } from './styles';

export function Summary(){
   return(
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={entradasImg} alt="Entradas" />
            </header>
            <strong>
               R$1000,00
            </strong>
         </div>
         <div>
            <header>
               <p>Saidas</p>
               <img src={saidas} alt="Saidas" />
            </header>
            <strong>
               - R$500,00
            </strong>
         </div>
         <div className='highlight-background'>
            <header>
               <p>Total</p>
               <img src={total} alt="Total" />
            </header>
            <strong>
               R$500,00
            </strong>
         </div>
      </Container>
   )
}