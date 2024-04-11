async function selectOne(event){

event.preventDefault();

const name = document.querySelector("#search").value;
const difficulty = document.querySelector("#difficulty").textContent.trim();
const muscle = document.querySelector("#muscle").textContent.trim();
const type = document.querySelector("#type").textContent.trim();

let searchType = "";
let searchInput = "";

console.log(`Name: ${name}, Difficulty: ${difficulty}, Muscle: ${muscle}, Type: ${type}`);

if(name){
  searchType = "name";
  searchInput = name;
} else if(difficulty !== "Difficulty" && difficulty !== "none"){
  searchType = "difficulty";
  searchInput = difficulty;
} else if(muscle !== "Muscle" && muscle !== "none"){
  searchType = "muscle";
  searchInput = muscle;
} else if(type !== "Type" && type !== "none"){
  searchType = "type";
  searchInput = type;
}

console.log(`SearchType: ${searchType}, SearchInput: ${searchInput}`)

await fetch (`/api/workout/${searchType}/${searchInput}`)
.then(response => response.json())
.then(response => {
    console.log(response)
    document.querySelector("#chosen-workout").innerHTML = ""

   response.forEach((exercise, index) => {
      const card = exerciseCard(exercise, index);
      document.querySelector("#chosen-workout").insertAdjacentHTML("afterbegin", card)
    })
});

}



document.querySelector("#searchBtn").addEventListener("click", selectOne)



