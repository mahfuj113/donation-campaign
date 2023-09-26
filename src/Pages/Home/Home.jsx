import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import { useState } from "react";

const Home = () => {
    const [query, setQuery] = useState('');
    const [result,setResult] = useState([]);
    const categories = useLoaderData();
    const handleSearch = () => {
         const filterData = categories.filter(item => item.category_name.toLowerCase().includes(query.toLowerCase()))
        setResult(filterData)
    }

    return (
        <div>
            <Banner query={query} setQuery={setQuery} handleSearch={handleSearch}></Banner>
            <Categories result={result} categories={categories}></Categories>
        </div>
    );
};

export default Home;