import { useState } from "react"

export default function Navigation({books, updateBooks}) {
  const [search, setSearch] = useState ("")
  
  const handleChange = (changeEvent) => {
    setSearch(changeEvent.target.value)
  }

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault()
    if (search.length > 3) {
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    updateBooks(filteredBooks)
}} 



  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a book...</label>
        <input type="text" id="search" placeholder="Type your search here, please" onChange={handleChange}></input>
        <input type="submit" id="search_button" value="Search" disabled={search.length < 3}></input>
      </form>
    </nav>
  );
}
