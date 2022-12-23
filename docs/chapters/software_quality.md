# Software Quality 💎 
Il team ha scelto di seguire i parametri di qualità defniti da **MCall**, bbiamo assegnati seguendo le possibilità di ciascuno. Di seguito la descrizione dettagliata.

## Parametri riguardanti l'operatività del software

• **Correttezza**: il software rispetta tutte le specifiche che ci siamo preposti di seguire per le nostre esigenze.

• **Affidabilità**: il software è sicuramente affidabile in quanto revisionato più volte dai membri del team e poi sottoposto ad una fase di testing.

• **Efficienza**: essendo un'applicazione web, per poterla utilizzare occorre una connessione ad internet ed un browser attraverso il quale inviare le richieste al server.

• **Integrità**: il nostro software è sicuro:
	1) La gestione delle password degli utenti che si registrano nel sistema viene effettuato attraverso SHA-256 e token JWT. Grazie a SHA-256 le password vengono crittografate, quindi non vengono rese visibili a chi ha accesso al database. JWT, acronimo di JSON Web Token, è un sistema di cifratura e di contatto in formato JSON per lo scambio di informazioni tra i vari servizi di un server. Si genera così un token che può essere cifrato e firmato tramite una chiave disponibile solo a colui che lo ha effettivamente generato.
	2) Il protocollo HTTPS (HyperText Transfer Protocol over Secure Socket Layer), consiste nella comunicazione tramite il protocollo HTTP (Hypertext Transfer Protocol) all'interno di una connessione criptata, tramite crittografia asimmetrica, dal Transport Layer Security (TLS).

• **Usabilità**: il prodotto è assolutamente semplice da utilizzare, in quanto non servono particolari abilità nel poterlo comprendere.

## Parametri riguardanti la transizone verso un nuovo ambiente

• **Portabilità**: la ricerca di errori è facilitata dalla separazione che abbiamo effettuato tra la gestione dei dati, back-end, e la rappresentazione dei dati, il front-end.

• **Riusabilita**: il template dell'applicazione sarà sicuramente riutilizzabile in futuro, in quanto si tratta di una base grafica.

• **Interoperabilità**: sicuramente il nostro prodotto software potà essere integrato ad altri servizi, in quanto è presente una netta separazione tra il lato front-end e back-end.
