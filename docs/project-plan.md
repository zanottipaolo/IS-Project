# Project Plan

## 1. Introduzione
Siamo un gruppo di studenti di ingegneria informatica dell'università di Bergamo: Samuel Gherardi, Matteo Soldini e Paolo Zanotti. Abbiamo deciso di realizzare questo progetto in quanto sentiamo l'esigenza di poter tener traccia delle spese e pianificare la gestione delle entrate (budgeting) in modo facile e veloce. Le applicazione attualmente sul mercato non soddisfano completamente le nostre esigenze. Il nostro progetto consiste in una applicazione web che permette di gestire le entrate ed uscite personali tramite interfaccia web.

## 2. Modello di processo
Abbiamo deciso di sviluppare il sofrware secondo il metodo Agile, tramite gli issue forniti da Github.

## 3. Organizzazione del progetto
In quanto il team è composto solamente da 3 persone, non riteniamo necessaria la figura del project manager. Per questo motivo abbiamo adottato una suddivisione equa dei ruoli. Quindi le decisioni relative alla gestione dello sviluppo del progetto verranno prese congiuntamente. Inoltre, abbiamo deciso che il team si dividerà i ruoli, come spiegato al punto 7 del project plan.

## 4. Standard, linee guida, procedure
Abbiamo deciso di suddividere il progetto in 2 componenti che comunicano tramite API Rest

### Frontend
L'interfaccia grafica che verrà esposta all'utente.
Abbiamo deciso di utilizzare NodeJS, React e TailwindCSS.

### Backend
Il componente responsabile della gestione dei dati e loro distribuzione.
Comunica con un database SQLite.
Abbiamo deciso di svilupparlo con Python e il framework Django

 ### Deploy
 Per quanto riguarda la distribuzione del software, abbiamo deciso che il progetto finale verrà hostato su servizio Heroku.
 Per semplificare il processo di deployment della applicazione, abbiamo deciso di utilizzare i container Docker.

## 5. Attività di gestione
Per quanto riguarda l'attività di organizzazione, abbiamo deciso di incontrarci settimanalmente. Durante gli incontri documentiamo il lavoro fatto ed organizziamo le attività che ognuno dovrà svolgere la settimana successiva. Ad ogni incontro produciamo un documento che riassume gli argometi trattati. Ci siamo posti l'obiettivo di terminare il progetto entro 4 settimane lavorative. Daremo priorità alla documentazione del software rispetto allo sviluppo.

## 6. Rischi
Abbiamo considerato i seguenti rishi:
- Finire in ritardo, per questo motivo abbiamo deciso di cominciare con largo anticipo rispetto alla consegna dell'elaborato
- Il progetto non viene utilizzato, ad esempio per il prezzo dell'abbonamento. Per questo motivo abbiamo deciso di rilasciarlo in 2 versioni: una gratis con funzionalità limitate ed una a pagamento con tutte le funzionalità

## 7. Personale
Abbiamo deciso i seguenti ruoli:
- Database Architect: Gherardi Samuel
- Backend Developer: Soldini Matteo
- Frontend Developer: Zanotti Paolo
- Tester: Gherardi Samuel
Il Database Architect inizierà a lavorare prima degli altri, per poter rendere disponibile lo schema delle API su cui si baserà il backend. Seguirà poi il lavoro dei developer per poi finire con il testing del software.

## 8. Metodi e tecniche
Potremmo estrarre i requisiti della nostra applicazione da un'utenza base tramite indagini di mercato e verificarli successivamente con dei diagrammi UML. In particolare tramite:
- USE-CASE DIAGRAM
- UML-CLASS DIAGRAM
- ER DIAGRAM

Per il versioning del codice invece utilizzeremo Git tramite la piattaforma Github. Verificheremo poi il tutto tramite testing del software.

## 9. Garanzia di qualità
Abbiamo deciso di seguire il modello di McCall per garantire che il software in fase di sviluppo soddisfi i seguenti requisiti di qualità:
1. Correttezza
2. Affidabilità
3. Integrità
4. Manutenibilità
5. Usabilità
6. Riutilizzabilità
Garantiamo i precedenti requisiti sfruttando le tecnologie più moderne, ad esempio React ci permette il riutilizzo del codice tramite l'uso di componenti. Inoltre adottiamo le best practices del web development.

## 10. Pacchetti di lavoro
Abbiamo deciso di seguire il pattern MVC (Model View Controller). Nel nostro caso il backend gestirà la parte di Model e Controller esponendo delle API Restful, le quali possono essere consumate dal frontend realizzato con React.

## 11. Risorse
Il progetto verrà realizzato tramite i laptop degli sviluppatori. Per la messa in produzione decidiamo di usare Heroku che ci fornirà uno spazio per caaricare la nostra immagine Docker. Inoltre avremo bisogno di SmartPhone per il testing del responsiveness della applicazione.

## 12. Budget
Dato che il progetto nasce da una nostra esigenza e lo sviluppo non richiede grandi risorse economiche, non abbiamo un budget prefissato. Tuttavia possiamo stimare il costo dello sviluppo con un costo orario di 17€/h e 120h (40h * 3 sviluppatori) di sviluppo per un totale di 2040€. Per rientrare nei costi entro 1 anno, supponendo un costo dell'abbonamento di 10€/mese, è necessaria l'attivazione di 17 abbonamenti.

## 13. Cambiamenti
Gli issue riportati dagli utenti forniranno una base per la roadmap dello sviluppo di nuove funzioni. Questo approccio è reso più facile dal fatto che seguiamo il modello di McCall per la garanzia di qualità (vedi punto 9), in particolare la parte di riutilizzabilità e manutenibilità.

## 14. Consegna
Seguendo il modello git-flow, ad ogni nuova funzionalità verrà creato un nuovo branch su github. Dopo averla implementata il branch viene mergiato in development, dove verrà verificata la stabilità dell'applicazione. Una volta terminati i test, development verrà mergiato in main e verrà rilasciata una nuova release.
