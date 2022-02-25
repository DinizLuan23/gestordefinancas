import React, { useContext } from "react";

// Components
import entradasImg from "../../assets/entradas.svg";
import saidas from "../../assets/saidas.svg";
import total from "../../assets/total.svg";
import { TransactionsContext } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
   const { transactions } = useContext(TransactionsContext);

   const summary = transactions.reduce(
      (acc, transaction) => {
         if (transaction.type == "deposit") {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
         } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
         }

         return acc;
      },
      {
         deposits: 0,
         withdraws: 0,
         total: 0,
      }
   );

   return (
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={entradasImg} alt="Entradas" />
            </header>
            <strong>
               {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
               }).format(summary.deposits)}
            </strong>
         </div>
         <div>
            <header>
               <p>Saidas</p>
               <img src={saidas} alt="Saidas" />
            </header>
            <strong>
               -{" "}
               {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
               }).format(summary.withdraws)}
            </strong>
         </div>
         <div className="highlight-background">
            <header>
               <p>Total</p>
               <img src={total} alt="Total" />
            </header>
            <strong>
               {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
               }).format(summary.total)}
            </strong>
         </div>
      </Container>
   );
}
