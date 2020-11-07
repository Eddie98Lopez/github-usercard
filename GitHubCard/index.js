/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Eddie98Lopez')
  .then(res=>{console.log(res)})
  .catch(err=>console.log('Something didnt go right this is an error message!'))

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

const followersArray = [];

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
function userCard (object){


  //make the card container div, set attribute, append to html container
  const cardContainer = document.createElement('div')
  cardContainer.setAttribute('class','card')

  const usersContainer = document.querySelector('.cards')
  usersContainer.appendChild(cardContainer)

  //img 

  const userImg = document.createElement('img')
  const imgSrc = object.data.avatar_url

  userImg.src = imgSrc
  userImg.setAttribute('alt', 'user profile pic')

  cardContainer.appendChild(userImg)

  //card info div

  const userInfo = document.createElement('div')
  userInfo.setAttribute('class', 'card-info')
  cardContainer.appendChild(userInfo);

  // card info h3
  const cardInfoH3 = document.createElement('h3')
  cardInfoH3.className = "name"
  userInfo.appendChild(cardInfoH3)
  cardInfoH3.textContent = object.data.name

  // username <p>

  const userNameP = document.createElement('p')
  userNameP.className = 'username'
  userNameP.textContent = object.data.login
  userInfo.appendChild(userNameP)

  //location <p>

  const userLocation= document.createElement('p')
  userLocation.textContent = `Location: ${object.data.location}`
  userInfo.appendChild(userLocation)

  //profile link p,a

  const profileP = document.createElement('p')
  const profileLink = document.createElement('a')

  profileLink.href = object.data.html_url
  profileLink.textContent = object.data.html_url

  profileP.textContent = 'Profile:'
  profileP.appendChild(profileLink)

  //user's Followers

  const followers = document.createElement('p')
  followers.textContent = `Follower: ${object.data.followers}`
  userInfo.appendChild(followers)

  // # of ppl User follows

  const following = document.createElement('p')
  following.textContent = `Following: ${object.data.following}`
  userInfo.appendChild(following)

  //user Bio

  const userBio = document.createElement('p')
  userBio.textContent = `Bio: ${object.data.bio}`

  return cardContainer


  //




};


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
