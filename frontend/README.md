# PROGETTO PRATICO - Comparatore di records 💿🎵  
**VinylMatch**, un progetto finale sviluppato in React JS che consente all’utente di esplorare, confrontare e salvare in preferiti una collezione di vinili.  
L'app simula l’esperienza di un utente non autenticato.

## Funzionalità principali
- Visualizzazione della libreria di vinili
- Ricerca per titolo
- Filtro per genere musicale
- Ordinamento alfabetico A-Z / Z-A per titolo e genere
- Pagina dettaglio del singolo vinile con informazioni complete
- Comparatore affiancato di 2 vinili
- Sistema di preferiti accessibile da ogni sezione
  
L’utente non può creare, modificare o cancellare record.  
  
## Tecnologie utilizzate  
- React JS  
- Bootstrap + CSS  

Il [backend](https://github.com/boolean-it/progetto-finale-spec-frontend-back) era stato già realizzato.  

## Tematica  
Data la mia grande passione per la musica ed il collezionismo di vinili ho scelto di realizzare una web app che permettesse di confrontare una libreria di dischi in vinile.  

## Requisiti minimi (obbligatori)  
- Risorsa definita nel file types.ts posizionato nella cartella *backend*  
- Home page con la lista di tutti i vinili con:
    - dettaglio delle proprietà *title* e *category*  
    - barra di ricerca (per *title*)  
    - filtro per *category*  
    - ordinamento per *title* e *category* dall A-Z e dalla Z-A  
- Pagina dettaglio con tutte le proprietà del vinile selezionato  
- Pagina comparatore di 2 vinili (affiancati)  
- Pagina dei preferiti, sempre accessibile  
  
## Requisiti consigliati (facoltativi)
- Preferiti persistenti con *localStorage*