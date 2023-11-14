import { API_SERVICE } from "./api-requests";
import { bestSellersMarkup } from "./best-sellers";

const apiByCategory = new API_SERVICE();
const topBooksByCategories = document.querySelector('.best-sellers-books');
// const bestSellersRef = document.querySelector('.best-sellers');
const titleRef = document.querySelector('.home-page-title');
// const homePageTitleAccent = document.querySelector('.home-page-title-accent');



function updatePageTitle(categoryTitle) {

    const titleWords = categoryTitle.split(' ');
  const accentWord = titleWords.pop();
  const blackWords = titleWords.join(' ');
  const markup = `${blackWords} <span class="home-page-title-accent">${accentWord}</span>`;
  if (categoryTitle === 'All categories'){
    return `
    Best Sellers <span class="home-page-title-accent">Books</span>`
  }
 return markup;
}

function selectedCategory(event){
    event.preventDefault();
    
    // this.classList.add('active');

      if (event.target.dataset.categoryName === 'All categories') {
        bestSellersMarkup();
        // titleRef.innerHTML = `
        // Best Sellers <span class="home-page-title-accent">Books</span>`;
      }
      const categoryName = this.getAttribute('data-category-name');
// console.log(categoryName);

titleRef.innerHTML = updatePageTitle(categoryName);

topBooksByCategories.innerHTML ='';
onCategoryMarkup(categoryName);

}

async function onCategoryMarkup(selectedOption){
 let result = await apiByCategory
 .fetchBooksByCategory(selectedOption)
 .then((categoryBooks)=>{
    // console.log(categoryBooks)
    const booksArr = categoryBooks.data.map((book)=>
             `<li class="category-book js-open-modal" data-book-id="${book._id}">
             <img class="best-sellers-book-img" src="${book.book_image}" alt="${book.title}" />
             <p class="best-sellers-book-title">${book.title}</p>
             <p class="best-sellers-book-author">${book.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`
            ).join('');
            topBooksByCategories.classList.replace("best-sellers-books","category-books")
            topBooksByCategories.innerHTML = booksArr;
 })
}


// function setActive(event) {
//   console.log([event.currentTarget]);
//   const allCategories = [...event.target.parentElement];
// console.log(allCategories);

  // allCategories.forEach(liItem => {
  //   console.log(liItem);
  //   liItem.classList.remove('active');
  // });
//   event.target.classList.add('active');

// }




export {selectedCategory};