let card = document.querySelector('.main-playlist');
card.addEventListener("mouseover", function() {
    document.querySelector(".play-btn").style.opacity = 1;
});
card.addEventListener("mouseout", function() {
    document.querySelector(".play-btn").style.opacity = 0;
});

fetch('https://api.spotify.com/v1/artists/16ZNqMkDZrzd8fTXeN2kUH', {
    method: 'GET',
    headers: {
        "Authorization": `Bearer `
    }
})
  .then( (response) => {
      return response.json()
    })
  .then((data) => {
      console.log(data)
    });
