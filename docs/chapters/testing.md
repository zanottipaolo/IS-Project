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
| Eliminare una transazione di un altro utente                              | Fallito             |

I test di Django permettono di eseguire i test senza modificare il database principale. Quando si avvia un test, in automatico viene creato un database temporaneo che verrà successivamente eliminato. Prima di poter fare i test sopra citati è necessario creare dei dati fittizi. In modo particolare vengono creati 2 utenti: uno principale ed uno per testare i permessi.

In ogni `app` (es. transactions) di Django è presente un file `test.py` dove si possono sviluppare i test di unità.

L'esecuzione dei test può essere effettuata manualmente tramite il comando `python manage.py test`. In questo caso abbiamo implementato una Github Action che permette, ad ogni nuova push request nel repository, di eseguire i test in un ambiente controllato ed in caso di un test fallito notificare i contributori.
