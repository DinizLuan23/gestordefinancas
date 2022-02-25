import { FormEvent, useState, useContext } from "react";

// Components
import Modal from "react-modal";

// Styles
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

// Assets
import closeImg from "../../assets/fechar.svg";
import entradas from "../../assets/entradas.svg";
import saidas from "../../assets/saidas.svg";

// Services
import { api } from "../../services/api";

//Context
import { TransactionsContext } from "../../hooks/useTransactions";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function NewTransactionModal({
   isOpen,
   onRequestClose,
}: NewTransactionModalProps) {

   const { createTransaction } = useContext(TransactionsContext);

   const [title, setTitle] = useState('');
   const [category, setCategory] = useState('');
   const [amount, setAmount] = useState(0);
   const [type, setType] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();

      await createTransaction({
         title,
         amount,
         category,
         type
      })

      setTitle('');
      setAmount(0);
      setCategory('');
      setType('deposit');

      onRequestClose();
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <RadioBox
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
         >
            <img src={closeImg} alt="Fechar Modal" />
         </RadioBox>
         <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input 
               placeholder="Título" 
               value={title}
               onChange={event => setTitle(event.target.value)}
            />
            
            <input 
               placeholder="Valor" 
               type="number" 
               value={amount}
               onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
               <RadioBox
                  type="button"
                  onClick={()=> setType('deposit')}
                  isActive={type === 'deposit'}
                  activeColor="green"
               >
                  <img src={entradas} alt="Entrada" />
                  <span>Entrada</span>
               </RadioBox>

               <RadioBox
                  type="button"
                  onClick={()=> setType('withdraw')}
                  isActive={type === 'withdraw'}
                  activeColor="red"
               >
                  <img src={saidas} alt="Saida" />
                  <span>Saida</span>
               </RadioBox>
            </TransactionTypeContainer>

            <input 
               placeholder="Categoria" 
               value={category}
               onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
         </Container>
      </Modal>
   );
}
