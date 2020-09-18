// import '../component/meal-lists.js';
// import '../component/search-bar.js';
// import DataSource from '../data/data-source.js';

// const main = () => {
//     const searchElement = document.querySelector("search-bar");
//     const mealListElement = document.querySelector("meal-lists");

//     const onButtonSearchClicked = async () => {
//         try{
//             const result = await DataSource.searchMeal(searchElement.value);
//             renderResult(result);
//         } catch (message) {
//             fallbackResult(message)
//         }
//     };

//     const renderResult =  results => {
//         mealListElement.meal = results;
//     };

//     const fallbackResult = message => {
//         mealListElement.renderError(message);
//     };

//     searchElement.clickEvent = onButtonSearchClicked;
// };

// export default main;

import '../component/meal-lists.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-lists");

    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;