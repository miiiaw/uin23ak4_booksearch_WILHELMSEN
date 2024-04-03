import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout( {children, books, setBooks, bookSearch, updateBooks} ) {
    return (
        <div id="container">
        <Header />
        <Navigation books={books} setBooks={setBooks} bookSearch={bookSearch} updateBooks={updateBooks}/>
        <Main>{children}</Main>
        <Footer />
      </div>
    )
}