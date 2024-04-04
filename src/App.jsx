
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Bookcard from "./components/Bookcard";

function App() {

  const [books, setBooks] = useState([])

  const [bookSearch, updateBooks] = useState ([])

  const getData = async() => {
    try{
      const response = await fetch(`https://openlibrary.org/search.json?author=ian+fleming`)
      const data = await response.json()
      setBooks(data.docs)
    } catch (error) {
      console.error("Upsie, something went wrong!")
    }
  }

  useEffect(() => {
      getData();
  }, []);


  return (
    <Layout books={books} updateBooks={updateBooks}>
      <Routes>
        <Route index element={<Bookcard books={books} bookSearch={bookSearch}/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
