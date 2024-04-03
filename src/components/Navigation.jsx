import { useState } from "react"

export default function Navigation( {setQuery}) {
  const [search, setSearch] = useState ("")
  
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault()
    setQuery(search)
  } 

  const handleChange = (changeEvent) => {
    setSearch(changeEvent.target.value)
  }

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a book...</label>
        <input type="text" id="search" placeholder="Type your search here, please" onChange={handleChange}></input>
        <input type="submit" id="search_button" value="Search"></input>
      </form>
    </nav>
  );
}
