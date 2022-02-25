import { useState } from "react";

// Components
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext, TransactionsProvider } from './hooks/useTransactions';

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
      <TransactionsProvider>
         <GlobalStyle />
         <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
         <Dashboard />
         <NewTransactionModal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal} 
         />
      </TransactionsProvider>
   );
}
