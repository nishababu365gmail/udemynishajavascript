const addMovieModal = document.getElementById('add-modal')
const startAddMovieButton = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelMovieButton = addMovieModal.querySelector('.btn--passive')
const addMovieButton=cancelMovieButton.nextElementSibling
const userInputs=document.querySelectorAll('input')
const entryTextSection=document.getElementById('entry-text')
const movie=[]

const removeEntryTextSection=()=>{
    if(movie.length===0){
        entryTextSection.style.display='block'
    }

    else{
        entryTextSection.style.display='none'
    }
}

const addMoviesToTheScreen=(title,imageUrl,rating)=>{
const newMovieElement=document.createElement('li');
newMovieElement.className='movie-element'
newMovieElement.innerHTML=`
<div class="movie-element__image">
<img src="${imageUrl}" alt="${title}">

</div>
<div class="movie-element__info">
<h2>${title}</h2>
<p>${rating}/5 star</p>
</div>

`;
const movieroot=document.getElementById('movie-list')
movieroot.append(newMovieElement)
}
const toggleAddMovieVisibilityHandler = () => {

    addMovieModal.classList.toggle('visible')
    toggleBackdropVisibilityHandler()
}
const toggleBackdropVisibilityHandler = () => {
    backdrop.classList.toggle('visible')
}

const CancelButtonHandler = () => {
    toggleAddMovieVisibilityHandler()
    clearMovieInputs()
}
const clearMovieInputs=()=>{
    for(const userinput of userInputs){
        userinput.value='';
    }
}
const addMovieHandler=()=>{
    
    const titleValue=userInputs[0].value
    const imageUrlValue=userInputs[1].value
    const ratingValue=userInputs[2].value
    if(titleValue.trim()===''||
     imageUrlValue.trim()===''||
     ratingValue.trim()==='' ||
     +ratingValue<1 ||
     +ratingValue>5){
alert("Pls enter a valid data")
return;
     }

     const newMovie={
         title:titleValue,
        imageurl:imageUrlValue,
        rating:ratingValue
     }
     movie.push(newMovie)
     console.log(movie)
     clearMovieInputs()
     toggleAddMovieVisibilityHandler()
     addMoviesToTheScreen(newMovie.title,newMovie.imageurl,newMovie.rating);
     removeEntryTextSection();

}
startAddMovieButton.addEventListener('click', toggleAddMovieVisibilityHandler)
backdrop.addEventListener('click', CancelButtonHandler)
cancelMovieButton.addEventListener('click', CancelButtonHandler)
addMovieButton.addEventListener('click',addMovieHandler)