import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [category, setCategory] = useState({});
    const {id} = useParams();
    const idInt = parseInt(id)

    const categories = useLoaderData();
    useEffect(() => {
        const findCategory = categories.find(category => category.id === idInt);
        setCategory(findCategory)
    },[idInt,categories])
    return (
        <div>
            <CategoryCard category={category}></CategoryCard>
        </div>
    );
};

export default Category;