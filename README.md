# ESERCIZIO : Autocomplete

## Consegna:

#### Premessa:

Stai sviluppando un campo di ricerca intelligente simile a quello di Amazon. Quando l'utente digita, una tendina di suggerimenti mostra i prodotti corrispondenti alla ricerca. Per evitare richieste API eccessive, devi ottimizzare la ricerca con il debounce.

### Milestone 1: Creare un campo di ricerca e mostrare la lista dei suggerimenti

1. Crea un campo di input (<input type="text">) in cui l’utente può digitare.

2. Effettua una chiamata API a:
   https://boolean-spec-frontend.vercel.app/freetestapi/products?search=[query]

3. La query deve essere sostituita con il testo digitato.
   Mostra i risultati API sotto l'input in una tendina di suggerimenti.

4. Se l'utente cancella il testo, la tendina scompare.

#### Obiettivo: Mostrare suggerimenti dinamici in base alla ricerca dell'utente.

### Milestone 2: Implementare il Debounce per Ottimizzare la Ricerca

1. Attualmente, ogni pressione di tasto esegue una richiesta API. Questo è inefficiente!

2. Implementa una funzione di debounce per ritardare la chiamata API fino a quando l’utente smette di digitare per un breve periodo (es. 300ms)

3. Dopo l’implementazione, verifica che la ricerca non venga eseguita immediatamente a ogni tasto premuto, ma solo dopo una breve pausa.

#### Obiettivo: Ridurre il numero di richieste API e migliorare le prestazioni.

### Bonus: Caricare i Dettagli del Prodotto Selezionato

1. Quando l’utente clicca su un prodotto nella tendina, nascondi la tendina e carica i dettagli completi del prodotto sotto il campo di ricerca.

2. Effettua una richiesta API per ottenere i dettagli completi:
   https://boolean-spec-frontend.vercel.app/freetestapi/products/{id}

3. Mostra i dettagli del prodotto selezionato (es. image, name, description, price).

#### Obiettivo: Aggiungere interattività permettendo di visualizzare le informazioni complete di un prodotto.
