import { useState } from "react";

// Components
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';

// Styles
import { GlobalStyle } from "./styles/global";

export function App() {

   const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

   function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
   }

   function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
   }

   return (
      <>
         <GlobalStyle />
         <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
         <Dashboard />
         <NewTransactionModal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal} 
         />
      </>
   );
}
