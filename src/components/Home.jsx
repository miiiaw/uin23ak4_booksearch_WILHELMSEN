
export default function Home({books}){
    console.log("Hjem", books)
    return (
        <>
            <h1>James Bond books</h1>
            {books?.map(item => 
                <article key={item.cover_edition_key}>
                    <h3>{item.title}</h3>
                    <h4>{item.first_publish_year}</h4>
                    <h4>{item.author_name}</h4>
                    <h4>{item.ratings_average}</h4>
                    <a href={`https://www.amazon.com/s?k=${item.id_amazon}`} target="_blank">
                        <button>click</button>
                    </a>
                </article>)}
        </>
    )
}