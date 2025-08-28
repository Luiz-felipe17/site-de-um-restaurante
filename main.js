// fetch( "https://dog.ceo/api/breeds/image/random")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.error("erro ao buscar os dados", error))


// async function CarregarUsuarios() {
//     try{
//         let response =  fetch("https://dog.ceo/api/breeds/image/random");
//         let data =  response.json();
//         console.log(data)
//     }catch(error){
//         console.error("erro ao buscar os dados:", error)
//     }
// }

let botao = document.getElementById('lion')

botao.addEventListener('click',  async() => {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json()
    document.getElementById('fimose').src = data.message
})