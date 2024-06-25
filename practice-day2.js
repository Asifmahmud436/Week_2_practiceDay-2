const handleSearch = () =>{
    const container = document.getElementById("search-box").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${container}`)
        .then(res=>res.json())
        .then(data=>{
            displayData(data);
        })
}

const displayData = (items) => {
    const container = document.getElementById("all-meals");
    const mealArray = items.meals;

    mealArray.forEach(meal => {
        const div = document.createElement("div");
        div.classList.add("meal-info");
        div.innerHTML = `
        <div onclick="handleDetails(${meal.idMeal})">
            <img src="${meal.strMealThumb}" alt="">
            <h3>${meal.strMeal.slice(0,7)}<h3>
        </div>
        `;
        container.appendChild(div);
    });
}

const handleDetails = (details) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`)
    .then(res=>res.json())
    .then(data=>displayData_two(data))
}

const displayData_two = (item) =>{
    const container_two = document.getElementById("details-part");
    const detailArray = item.meals;
    console.log(detailArray);

    detailArray.forEach(meal => {
        const div = document.createElement("div");
        div.classList.add("detail-info");
        div.innerHTML = `
        <img src="${meal.strMealThumb}" alt="">
        <h5>${meal.strMeal.slice(0,7)}<h3>
        <h4>Ingrediants<h2>
        <ul>
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
            
        </ul>
        `;
        container_two.appendChild(div);
    });
}