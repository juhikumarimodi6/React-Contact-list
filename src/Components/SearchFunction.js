const SearchFunction = (results, nameSearch) => {
    return (results.filter(
        user => user.name.first.toLowerCase().includes(nameSearch.toLowerCase()) 
                || user.email.toLowerCase().includes(nameSearch.toLowerCase()) 
    ))
}

export default SearchFunction;
