document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.querySelector("#avatar")
  const name = document.querySelector("#name")
  const username = document.querySelector("#username")
  const repositorios = document.querySelector("#repositorios")
  const seguidores = document.querySelector("#seguidores")
  const seguindo = document.querySelector("#seguindo")
  const link = document.querySelector("#link")

  fetch('https://api.github.com/users/ogiansouza').then((res) => {
    return res.json()
  }).then((json) => {
    avatar.src = json.avatar_url
    name.innerHTML = json.name
    username.innerHTML = json.login
    repositorios.innerHTML = json.public_repos
    seguidores.innerHTML = json.followers
    seguindo.innerHTML = json.following
    link.href = json.html_url
  })
})
