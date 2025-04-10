import {useState, useEffect, useCallback} from 'react'

/* 
La funzione debounce limita la frequenza con cui una funzione può essere chiamata
in un certo intervallo di tempo. In questo caso, limita la chiamata alla funzione
di ricerca per evitare che venga chiamata ad ogni pressione di tasto
La funzione debounce accetta una funzione di callback e un ritardo in millisecondi
e restituisce una nuova funzione che può essere chiamata più volte, ma eseguirà
la funzione di callback solo dopo che il ritardo è scaduto dall'ultima chiamata
Questo è utile per evitare chiamate API eccessive mentre l'utente sta digitando
Ad esempio, se l'utente digita "a", "b", "c" in rapida successione, la funzione
di ricerca verrà chiamata solo una volta dopo che l'utente ha smesso di digitare
per il tempo specificato dal ritardo*/

//N.B. Debounce fuori dal componente!!!
function debounce(callback, delay) {
  let timer;

  return (value) => {
    clearTimeout(timer); // cancella il timeout precedente
    timer = setTimeout(() => {
      callback(value); // esegue la funzione solo dopo il delay
    }, delay);
  };
}

function App() {


  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])


  const handleInputChange = (e) => {
    setQuery(e.target.value)
    handleSearch(e.target.value)
  }

  const handleSearch = useCallback( debounce((newQuery) => {
    const fetchSuggestions = async () => {

      if (newQuery.trim() === "") {
        setSuggestions([]);
        return;
      }
      const response = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${newQuery}`)
      const data = await response.json()
      setSuggestions(data)
      console.log(data)
      console.log(suggestions)
  

    }
    fetchSuggestions();
  }, 500), [])


  

  // useEffect(() =>{
  //   const fetchSuggestions = async () => {

  //     if (query.trim() === "") {
  //       setSuggestions([]);
  //       return;
  //     }
  //     const response = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${query}`)
  //     const data = await response.json()
  //     setSuggestions(data)
  //     console.log(suggestions)
  //     console.log(suggestions[0].name)

  //   }
  //   fetchSuggestions();

  // }, [query])

  
  return (
    <>
    <h1 className='title'>AUTOCOMPLETE</h1>
    <div className='container'>
      <input className= "searchbar"type="text" value={query} onChange={handleInputChange} />
      {suggestions.length > 0 && (
        <ul className='suggestions'>
          {suggestions.map((suggestion) => (
            <li className= "single-suggestion" key={suggestion.id}>{suggestion.name}</li>
          ))}
        </ul>
      )}
    </div>
    </>

  )
}

export default App
