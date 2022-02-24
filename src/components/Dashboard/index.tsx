//Components
import { Summary } from "../Summary";
import { TransactionsTable } from '../TransactionsTable'

//Styles
import { Container } from "./styles";

export function Dashboard(){
   return(
      <Container>
         <Summary />
         <TransactionsTable />
      </Container>
   );
}