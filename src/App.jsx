import {useState, useEffect} from 'react'



function App() {


  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  function debounce(callback, delay) {
    let timer;
  
    return (value) => {
      clearTimeout(timer); // cancella il timeout precedente
      timer = setTimeout(() => {
        callback(value); // esegue la funzione solo dopo il delay
      }, delay);
    };
  }
  

  useEffect(() =>{
    const fetchSuggestions = async () => {

      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }
      const response = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/products?search=${query}`)
      const data = await response.json()
      setSuggestions(data)
      console.log(suggestions)
      console.log(suggestions[0].name)

    }
    fetchSuggestions();

  }, [query])

  
  return (
    <>
    <h1 className='title'>AUTOCOMPLETE</h1>
    <div className='container'>
      <input className= "searchbar"type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
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
