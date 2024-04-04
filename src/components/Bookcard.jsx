
// Hjelp fra ChatGPT med hvor jeg skulle kjoere if-testene med ternary operators. Samt if-test ved bilder og link for aa unngaa krasj.
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
                    <a href={item.id_amazon && item.id_amazon.length > 0 ? `https://www.amazon.com/s?k=${item.id_amazon[0]}` : `https://www.amazon.com`} target="_blank">
                        <button>Search Amazon.com</button>
                    </a>
                </article>)}
        </>
    )
}