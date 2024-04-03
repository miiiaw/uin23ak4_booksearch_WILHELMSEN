import Header from "./Header";
import Navigation from "./Navigation";
import Searchresults from "./Searchresults"
import Footer from "./Footer";

export default function Layout( {children, books, updateBooks} ) {
    return (
        <div id="container">
        <Header />
        <Navigation books={books} updateBooks={updateBooks}/>
        <Searchresults>{children}</Searchresults>
        <Footer />
      </div>
    )
}