# Requirement Engineering 🖋️ 
Una delle parti più impotanti è quella di definire i requisiti funzionali (funzionalità del sistema) e non funzionali (vincoli imposti al sistema come ad esempio la scalabilità).                                                               

L'ingegneria dei requisiti è formata da 4 fasi, l'elicitazione dove si definiscono i requisiti del problema, poi la specifica in cui si formalizzano i requisiti raccolti nell'elicitazione, dopodichè è presente la validazione all'interno della quale si verifica la correttezza della specifica dei requisiti cresta ed infine ci sarebbe la fase della trattativa, che serve per trovare un punto d'incontro con il cliente, ma nel nostro caso, dato che il cliente non è presente, viene saltata.
                                      
Abbiamo deciso di suddividere i diversi requisiti secondo il modello MoSCoW.

## Funzionali
**Must Have**

• Accesso degli utenti tramite e-mail e password.

• L'utente per poter utilizzare l'applicazione deve essere obbligatoriamente autenticato.

• Per ogni utente occorre memorizzare lo username, l'e-mail e la password.

• Un utente può registrare delle transazioni in ingresso o in uscita solamente se ha registrato un conto.

**Should Have**

• Ogni utente può visualizzare l'andamento delle sue spese/guadagni sulla base di grafici chiari ed esplicativi.

• Ogni utente può decidere di cambiare un budget creato in precedenza sulla base di ciò che ha realmente ottenuto.

**Won't**

• Recupero della password dimenticata da un utente.

• Doppia autenticazione da parte degli utenti.

## Non Funzionali
**Must Have**

• La password degli utenti deve essere memorizzata tramite cifratura hash a 256 bit (SHA-256);

• Il sistema viene progettato per poter utilizzato sia da personal computer che da smartphone.


**Should Have**

• Il tempo di risposta del sistema all'autenticazione degli utenti deve essere al massimo di 2 secondi.

• Il tempo di risposta del sistema alla creazione di un nuovo account deve essere al massimo di 2 secondi.

**Won't**

• Durante il recupero della password il sistema deve inviare la mail di conferma al massimo dopo 3 secondi.
