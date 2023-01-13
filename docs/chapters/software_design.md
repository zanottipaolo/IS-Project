# Software Design ✍🏻 
Per quanto riguarda il software design il team si è preposto di scrivere codice basandosi sui principi di progettazione di **modularità** e **complessità**.

In questo modo ciò che si ottiene è un sistema che ha:

• **Alta coesione**, ossia avere una alta correlazione tra le fuzionalità che sono definite all'interno di uno stesso modulo. 

• **Basso accoppiamento**: ossia avere una forte indipendenza dei moduli tra di loro.

# Design Pattern
Durante lo svilippo del codice il team ha deciso di utilizzare i design pattern `Observer` e `Adapter`. (serializer)

Per quanto riguarda l'Observer pattern, in particolare lato front-end, lo abbiamo applicato attraverso lo strumento React degli *Hooks*.

Il pattern Observer permette di definire una dipendenza uno a molti fra oggetti, in modo tale che se un oggetto cambia il suo stato interno, ciascuno degli oggetti dipendenti da esso viene notificato e aggiornato automaticamente. 
L’Observer nasce dall’esigenza di mantenere un alto livello di consistenza fra classi correlate, senza produrre situazioni di forte dipendenza e di accoppiamento elevato.

Ma cosa è un Hook? Gli Hooks sono funzioni che ti permettono di “ancorarti” all'interno delle funzioni di React state e lifecycle da componenti funzione. Gli Hooks ti permettono di usare React senza classi.


Invece riguardo l'Adapter pattern, utilizzato lato back-end, lo abbiamo realizzato grazie allo strumento *serializer* di Django.

L’Adapter è un Design Patten di tipo strutturale che è utilizzato quando si ha la necessità di rendere  compatibili  due interfacce che di fatto non lo sono, senza modificarne il codice.

I Serializer consentono di convertire dati complessi come set di query e istanze di modelli in tipi di dati Python nativi che possono quindi essere facilmente resi in JSON , XML o altri tipi di contenuto. 
Inoltre i Serializer forniscono anche la deserializzazione, consentendo la riconversione dei dati analizzati in tipi complessi, dopo aver prima convalidato i dati in ingresso.
