import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import SearchFilter from "./Components/SearchFilter";
import './App.css'

function App() {

  const [results, setResults] = React.useState([])

  const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=200')
    const data = await response.json();
    setResults(data.results)
    
  }

  React.useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="app-container">
      <Header />

      <SearchFilter />

      {results.map((result, index) => {
            return <Card 
            key = {index}
            id = {index}
            Image = {result.picture.large}
            Name = {result.name.first}
            Email = {result.email}
            Phone = {result.phone}
            Age = {result.dob.age}
          />
      })}
    </div>
  );
}

export default App;
