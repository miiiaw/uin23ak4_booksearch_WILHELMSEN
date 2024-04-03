import { useState } from "react"

export default function Navigation({books, setBooks}) {
  const [search, setSearch] = useState ("")
  
  const handleChange = (changeEvent) => {
    setSearch(changeEvent.target.value)
  }

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault()
    const filteredBooks = books.filter(book => book.title.includes(search))
    setBooks(filteredBooks)
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
