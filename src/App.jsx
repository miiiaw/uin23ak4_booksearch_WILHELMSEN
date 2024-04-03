
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

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
        <Route path="/" element={<Home books={books} bookSearch={bookSearch}/>}/>
        <Route path="home" element={<Home books={books} bookSearch={bookSearch}/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
