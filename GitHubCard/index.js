import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/eddie98lopez')
  .then(res=>console.log(res))
  .catch(err=>console.log('error message'))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['Eddie98Lopez',"tetondan","dustinmyers","justsml","luishrd","bigknell"];

followersArray.forEach(item=>{

  axios.get(`https://api.github.com/users/${item}`)
  .then(res=>gitHubCard(res))
  .catch(err=>console.log(err))

})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const gitHubCard= (obj)=>{


// Container Div
const cardContainer = document.createElement('div')
cardContainer.className= 'card'
const cards =document.querySelector('.cards')
cards.appendChild(cardContainer)

//Img
const profilePic = document.createElement('img')
cardContainer.appendChild(profilePic)
profilePic.src = obj.data['avatar_url']
profilePic.setAttribute('alt',"User Profile Picture")

//Info Container
const infoPortion = document.createElement('div')
cardContainer.appendChild(infoPortion)
infoPortion.className = 'card-info'

//H3
const name = document.createElement('h3')
name.className = 'name'
name.textContent=obj.data.name
infoPortion.appendChild(name)

//username
const userName = document.createElement('p')
userName.className = 'username'
userName.textContent = obj.data.login
infoPortion.appendChild(userName)

//Location
const location = document.createElement('p')
location.textContent = `Location: ${obj.data.location}`
infoPortion.appendChild(location)

//profile URL
const profileURL = document.createElement('p')
const profileURLLink = document.createElement('a')
profileURLLink.setAttribute('href', obj.data.url)
profileURL.appendChild(profileURLLink)
infoPortion.appendChild(profileURL)

//Followers
const followers = document.createElement('p')
followers.textContent = `Followers: ${obj.data.followers}`
infoPortion.appendChild(followers)

//Following
const following = document.createElement('p')
following.textContent = `Following: ${obj.data.following}`
infoPortion.appendChild(following)

//Bio 
const bio = document.createElement('p')
bio.textContent = obj.data.bio
infoPortion.appendChild(bio)


//Return

return cardContainer

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
