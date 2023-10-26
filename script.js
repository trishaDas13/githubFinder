let form = document.querySelector('form');
let details = document.querySelector('#details');
let toggle = document.querySelector('#toggle');
console.log(toggle);

function createProfile(input){
    details.innerHTML = "Loading please wait...";
    setTimeout(async() => {
        
        //* fetching API here ....
        let data = await fetch(`https://api.github.com/users/${input}`);
        let res = await data.json();
        details.innerHTML = "";
        
        //* appending child here ....
        let contain = document.createElement('div');
        contain.innerHTML = `
            <div class="profileInfo">
            <div class="info">
                    <img src="${res.avatar_url}" alt="">
                    <div class="names">
                        <p>${res.name}</p>
                        <a href="${res.html_url}">@${res.login}</a>
                    </div>
                </div>
                <div class="date"> joined  ${new Date(res.created_at).toLocaleDateString('en-US')}</div>
            </div>
            <p style=" margin-top: 1rem;">${res.bio}</p>
            <div class="misc">
                <div class="repo misc-item">
                    <p>Repos</p>
                    <p>${res.public_repos}</p>
                </div>
                <div class="follower misc-item">
                    <p>Followers</p>
                    <p>${res.followers}</p>
                </div>
                <div class="following misc-item">
                    <p>Following</p>
                    <p>${res.following}</p>
                </div>
            </div>
            <div class="links">
                <div class="left">
                    <p>
                        <i class="fa-solid fa-map"> - </i>
                        <span>${res.location}</span>
                    </p>
                    <p>
                        <i class="fa-solid fa-link"> - </i>
                        <span>${res.email}</span>
                    </p>
                </div>
                <div class="right">
                    <p>
                        <i class="fa-brands fa-twitter">-</i>
                        <span>${res.twitter_username}</span>
                    </p>
                    <p>
                        <i class="fa-solid fa-building">-</i>
                        <span>${res.company}</span>
                    </p>
                </div>
            </div>
        `
        details.appendChild(contain); 
    }, 1000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = e.target.children[1].value;
    createProfile(input);
});
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});