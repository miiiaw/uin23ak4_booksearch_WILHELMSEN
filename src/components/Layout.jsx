import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout( {children, books, updateBooks} ) {
    return (
        <div id="container">
        <Header />
        <Navigation books={books} updateBooks={updateBooks}/>
        <Main>{children}</Main>
        <Footer />
      </div>
    )
}