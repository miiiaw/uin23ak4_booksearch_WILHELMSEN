
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Bookcard from "./components/Bookcard";

function App() {

  const [books, setBooks] = useState([])
  const [bookSearch, updateBooks] = useState ("")


  const getData = async() => {
    let URL = `${bookSearch}` ? `https://openlibrary.org/search.json?author=ian+fleming&title=${bookSearch}` : `https://openlibrary.org/search.json?author=ian+fleming`  
    
    try{
      const response = await fetch(URL)
      const data = await response.json()
      setBooks(data.docs)
    } catch (error) {
      console.error("Upsie, something went wrong!")
    }
  }

  useEffect(() => {
      getData();
  }, [bookSearch]);


  return (
    <Layout bookSearch={bookSearch} updateBooks={updateBooks}>
      <Routes>
        <Route index element={<Bookcard books={books} bookSearch={bookSearch}/>}/>
      </Routes>
    </Layout>
  );
}

export default App;



