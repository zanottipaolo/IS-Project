# Configuration Management 📍 
Tutto il lavoro, sia in termini di codice che di documentazione, viene salvato su un repository GitHub in condivisione con tutti i membri del team.

## Struttura
Sono presenti 2 cartelle:

• Cartella `docs`: conterrà i vari file riguardanti la documentazione del progetto, partendo dal project plan a tutti i diagrammi UML.

• Cartella `src/frontend`: conterrà il codice front-end della piattaforma, creato attraverso React e NextJS.

• Cartella `src/backend`: conterrà il codice back-end della piattaforma, creato attraverso Python e il framework Django.

## Issue
Le diverse attività che vengono assegnate all'interno del team vengono create sotto forma di `issue` su GitHub, i quali possono trovarsi in diversi stati in base al loro avanzamento.
Per tenere traccia dello stato utilizziamo una board Kanban, suddivisa in 3 colonne: **Todo**,**In Progress**,**Done**.

•**Todo**: contiene gli issue che sono stati creati ma non ancora sviluppati.

•**In Progress**: contiene gli issue che si stanno sviluppando.

•**Done**: contiene gli issue che sono stati sviluppati e che sono terminati.

## Branch
Il branch principale è il `main`. Su questo ci sarà tutto il codice e tutta la documentazione creata.
Se un issue che fa riferimento alla creazione di documenti viene creato ed è nello stato di **Todo**, prima viene portato nello stato di **In Progress** e a quel punto viene sviluppato mantendosi sul branch principale `main`; una volta terminato il suo sviluppo viene creata una **Pull Request** che deve essere accettata dai membri del team: una volta revisionata l'issue passa nello stato di **Done** e termina.
Discorso a parte per quanto riguarda gli issue che fanno riferimento allo sviluppo di codice, sia backend che frontend: questi issue vengono creati e sviluppati un branch `develop`, a cui verrà fatto un **merge** con il branch `main` una volta completati tutti gli issue relativi al codice.
Anche per questa seconda tipologia di issue è presente il discorso della **Pull Request**.
