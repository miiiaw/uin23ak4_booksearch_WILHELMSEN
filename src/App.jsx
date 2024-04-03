
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {

  const [books, setBooks] = useState([])

  const [query, setQuery] = useState("")

  const getData = async() => {
    try{
      const response = await fetch(`https://openlibrary.org/search.json?author=${query}`)
      const data = await response.json()
      setBooks(data.docs)
    } catch (error) {
      console.error("Ups, something went wrong!")
    }
  }

  useEffect(() => {
    if (query) { 
      getData();
    }
  }, [query]);


  return (
    <Layout setQuery={setQuery}>
      <Routes>
        <Route path="/" element={<Home books={books}/>}/>
        <Route path="home" element={<Home books={books}/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
