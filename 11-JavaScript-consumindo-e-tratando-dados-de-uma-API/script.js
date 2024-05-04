const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos") // fazer uma busca na api de vídeos
//console.log(api); // só pra verificar se a promessa no console.log está no status "fullfiled"
//then(res => console.log(res.json)); 
.then(res => res.json())
.then((videos) => {
    videos.forEach((video) => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="logo no canal">
                <h3 class="titulo-video">${video.titulo}</h3> 
                <p class="titulo-canal">${video.descricao }</p>
            </div>

        </li>
        `;    
    });
});
