// Hjelp fra ChatGPT med aa huske hvordan disable knapp

export default function Navigation({ bookSearch, updateBooks }) {

  

  return (
    <nav>
      <form>
        <label htmlFor="search">Search for a book...</label>
        <input type="text" id="search" placeholder="Type your search here" onChange={(e) => {e.target.value.length >= 3 ? updateBooks(e.target.value) : null}}></input>
        <input type="submit" id="search_button" value="Search" disabled={bookSearch.length < 3}></input>
      </form>
    </nav>
  );
}