# Modello ER

## Schema ER

![Image not found](./images/er.svg)

## Modello logico

![Image not found](./images/logical_schema.svg)

## Descrizione

### `User`

Contiene le informazioni relative all'utente. In modo particolare verrà eseguito l'hashing della password prima di essere salvata. L'utente potrà impostare la valuta che desidera visualizzare.

### `Bank account`

Contiene le informazioni relative ai conti dell'utente.

### `Transaction`

Contiene le informazioni relative ai movimenti (entrate ed uscite) di un conto e divisi in categorie.

### `Category`

Contiene le informazioni relative alle categorie che raggruppano transazioni e budget (es. in Cibo, Auto, ecc).

### `Budget`

Contiene le informazioni utili per gestire la creazione di budget di spesa mensile per una specifica categoria.

### `Currency`

Contine le informazione relative alle valute disponibili. Viene usata dalle transazioni e viene scelta dall'utente.

### `Milestone`

Contiene le informazioni relative agli obiettivi che l'utente si pone di raggiungere entro un certo lasso di tempo (es. vacanza Budapest). Questo viene effettuato mettendo da parte una percentuale delle proprie entrate mensili (`monthly_saving`).
