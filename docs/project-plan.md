# Project Plan 📄


## 1. Introduzione
Siamo un gruppo di studenti di ingegneria informatica dell'università di Bergamo: Samuel Gherardi, Matteo Soldini e Paolo Zanotti. Abbiamo deciso di realizzare questo progetto in quanto sentiamo l'esigenza di tenere traccia delle spese fatte giornalmente e di pianificare la gestione delle entrate per il futuro (budget e obiettivi) in modo facile e veloce. Le applicazioni attualmente sul mercato non soddisfano completamente le nostre necessità, abbiamo quindi pensato di sviluppare una applicazione web che permetta di gestire le entrate ed uscite personali tramite interfaccia web.

## 2. Modello di processo
Come modello di processo abbiamo deciso di seguire il metodo Agile per lo sviluppo del software, sfruttando in particolare la funzione 'Projects' fornita da Github. In questo modo avremo a disposizione una Kanban intuitiva che ci permetterà di gestire i task come degli issues normali, dividendoli in TO DO, IN PROGRESS e DONE.

## 3. Organizzazione del progetto
Dato che il team è composto solo da 3 persone, non risulta necessaria la figura del Project Manager per coordinarci. Questo ci ha permesso di adottare una suddivisione equa dei ruoli decisionali e quindi le scelte relative alla gestione dello sviluppo del progetto verranno prese congiuntamente. Inoltre, abbiamo deciso che il team si dividerà in ruoli tecnici, come spiegato meglio al punto 7 del Project Plan.

## 4. Standard, linee guida, procedure
Il progetto verrà diviso in 2 componenti principali che comunicheranno tra loro tramite delle API rest. In particolare avremo il:

### Frontend
Si tratta dell'interfaccia grafica che verrà esposta all'utente dell'applicazione. Per svilupparla useremo [React](https://reactjs.org/) (Libreria JS) e [TailwindCSS](https://tailwindcss.com/) (Framework CSS).

### Backend
Sarà il componente responsabile della gestione dei dati e della loro distribuzione, utile per esporre le API al frontend e per le comunicazioni con il database tramite [SQLite](https://www.sqlite.org/index.html). Abbiamo deciso di svilupparlo con Python e il framework [Django](https://www.djangoproject.com/).

### Database
Per la gestione dei dati useremo un database relazionale, progettato tramite schema ER e modello logico. Concretamente lo realizzeremo con l'applicativo SQLite.

### Deploy
 Per quanto riguarda la distribuzione del software abbiamo deciso che il progetto finale verrà caricato su una nostra VPS. Questo ci permetterà di avere un maggiore controllo sulla gestione del sistema. Per semplificare il processo di deployment abbiamo inoltre deciso di utilizzare i Docker container.

## 5. Attività di gestione
Per quanto riguarda l'attività di organizzazione, abbiamo deciso di incontrarci con frequenza settimanale. Durante gli incontri documentiamo il lavoro fatto ed organizziamo le attività che ognuno dovrà svolgere durante la settimana successiva. Ad ogni incontro produciamo un documento che riassume gli argomenti trattati (Decision Making). Ci siamo posti l'obiettivo di terminare il progetto entro 4 settimane lavorative e daremo priorità alla documentazione del software rispetto al suo sviluppo.

## 6. Rischi
Dato che il progetto nasce da una nostra idea e non da una commissione da parte di un cliente, ci aspettiamo diversi rischi una volta messo in produzione. In particolare:
- Finire in ritardo lo sviluppo, per questo motivo abbiamo deciso di cominciare con largo anticipo rispetto alla consegna del Project Plan;
- Il progetto non verrà utilizzato, ad esempio per il prezzo dell'abbonamento. Per questo motivo abbiamo deciso di rilasciare il software in 2 versioni: una gratis con funzionalità limitate ed una a pagamento senza nessun limite.

## 7. Personale
Il team, specializzato su aree differenti, si dividerà nei seguenti ruoli:
- Database Architect: [Gherardi Samuel](https://github.com/SamuelGherardi)
- Backend Developer: [Soldini Matteo](https://github.com/MatteoSoldini)
- Frontend Developer: [Zanotti Paolo](https://github.com/zanottipaolo)
- Tester: [Gherardi Samuel](https://github.com/SamuelGherardi)

Il Database Architect inizierà a lavorare prima degli altri, per poter rendere disponibile lo schema delle API su cui si baserà il backend. Seguirà poi il lavoro dei developer per poi finire con il testing del software, documentando man mano il tutto.

## 8. Metodi e tecniche
Potremmo estrarre i requisiti della nostra applicazione da un'utenza base tramite indagini di mercato e verificarli successivamente con dei diagrammi UML. In particolare usando:
- USE-CASE DIAGRAM
- UML-CLASS DIAGRAM
- ER DIAGRAM
- STATE-CHART DIAGRAM
- ACTIVITY DIAGRAM
- SEQUENCE DIAGRAM

Per il versioning del codice invece utilizzeremo Git tramite la piattaforma Github. Verificheremo poi il tutto con il testing del software.

## 9. Garanzia di qualità
Abbiamo deciso di seguire il modello di McCall per garantire che il software in fase di sviluppo soddisfi i seguenti requisiti di qualità:
1. Correttezza
2. Affidabilità
3. Integrità
4. Manutenibilità
5. Usabilità
6. Riutilizzabilità
Garantiremo i precedenti requisiti sfruttando le tecnologie più moderne, ad esempio React permette il riutilizzo del codice tramite l'uso di componenti. Inoltre adotteremo le best practices del web development moderno, come ad esempio la sicurezza dei dati sensibili dell'utente, l'accessibilità del contenuto e una buona ottimizzazione dei contenuti per il posizionamento del sito sui motori di ricerca principali (SEO).

## 10. Pacchetti di lavoro
Il software sviluppato, in particolare, seguirà il pattern MVC (Model View Controller). Nel nostro caso il backend gestirà la parte di Model e Controller esponendo delle API Restful, le quali potranno essere consumate dal frontend realizzato con React.

## 11. Risorse
L'intero progetto verrà realizzato sfruttando l'attrezzatura personale del team, in quanto non siamo un'azienda ma 3 lavoratori autonomi che hanno deciso di collaborare. Nello specifico verranno utilizzati i laptop dei professionisti per lo sviluppo dell'applicativo e gli smartphone per il testing (aggiuntivo) della parte di responsive. Per la messa in produzione, come già accennato nel punto 4, useremo una VPS che ci fornirà uno spazio dove caricare la nostra immagine Docker. Come spazio di ritrovo/lavoro useremo principalmente le aule messe a disposizione dall'Università di Bergamo.

## 12. Budget
Dato che il progetto nasce da una nostra esigenza e lo sviluppo non richiede grandi risorse economiche, non partiamo da un budget prefissato. Tuttavia possiamo stimare il costo della realizzazione finale calcolando quanto tempo ci richiederà di lavoro.

Partendo da una tariffa oraria di 30€/ora e 120 ore di sviluppo (40 ore * 3 persone) si arriva ad un totale di 3600€. Per rientrare nei costi entro 1 anno, supponendo un costo dell'abbonamento di 5€/mese, è necessaria l'attivazione di 60 piani a pagamento.

## 13. Cambiamenti
Gli issue riportati dagli utenti (tramite relativa segnalazione) forniranno una base per la costruzione della roadmap per lo sviluppo di nuove funzioni. Questo approccio è reso più facile dal fatto che seguiremo il modello di McCall per la garanzia di qualità (vedi punto 9), in particolare la parte di riutilizzabilità e manutenibilità del codice. In questo modo non ci saranno problemi nell'aggiungere modifiche future.

## 14. Consegna
Seguendo il modello git-flow, ad ogni nuova funzionalità verrà creato un branch su Github. Dopo averla implementata, il nuovo branch verrà mergiato in Development (branch di sviluppo), dove verrà verificata la stabilità dell'applicazione. Una volta terminati i test, Development verrà mergiato in Main (branch principale) e a quel punto verrà rilasciata una nuova release disponibile a tutti gli utenti.
