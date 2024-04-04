
// Hjelp fra ChatGPT med hvor jeg skulle kjøre if-testene med ternary operators. 
// Hjelp/tips fra ChatGPT med hvor jeg skulle finne bildene hen, siden dette ikke var nevnt i oppgaveteksten. 

export default function Bookcard({books, bookSearch}){
    return (
        <>
            {
            (bookSearch.length > 0 ? bookSearch : books).map(item => 
                <article key={item.cover_edition_key}>
                    <img src={item.isbn && item.isbn.length > 0 ? `https://covers.openlibrary.org/b/isbn/${item.isbn[0]}.jpg` : 'defaultImageURL'} />
                    <h3>{item.title}</h3>
                    <p>Published: {item.first_publish_year}</p>
                    <p>Author: {item.author_name}</p>
                    <p>Rating: {item.ratings_average}</p>
                    <a href={`https://www.amazon.com/s?k=${item.id_amazon}`} target="_blank">
                        <button>Search Amazon.com</button>
                    </a>
                </article>)}
        </>
    )
}