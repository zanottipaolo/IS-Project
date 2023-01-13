# Testing

Durante lo sviluppo del backend sono stati implementati dei test di unità tramite il modulo `TestCase` incluso in `Django`.
In modo particolare abbiamo analizzato la classe `Transactions` e abbiamo individuato i seguenti test da effettuare dal punto di vista delle api:

| Descrizione del test                                                      | Risultato aspettato |
| -----------                                                               | ------------------- |
| Visualizzare tutte le transazioni                                         | Successo            |
| Visualizzare una transazione che non appartiene all'utente                | Fallito             |
| Creare una transazione                                                    | Successo            |
| Creare una transazione con un campo mancante                              | Fallito             |
| Creare una transazione con una valuta inesistente                         | Fallito             |
| Creare una transazione con account bancario che non appartiene all'utente | Fallito             |
| Creare una transazione con una categoria che non appartiene all'utente    | Fallito             |
| Aggiornare un campo di una transazione                                    | Successo            |
| Aggiornare un campo inesistente di una transazione                        | Fallito             |
| Aggiornare un campo di una transazione inesistente                        | Fallito             |
| Eliminare una transazione                                                 | Successo            |
| Eliminare una transazione di un'altro utente                              | Fallito             |
