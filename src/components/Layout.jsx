import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout( {children, setQuery} ) {
    return (
        <div id="container">
        <Header />
        <Navigation setQuery={setQuery}/>
        <Main>{children}</Main>
        <Footer />
      </div>
    )
}