async function selectOne(event){

event.preventDefault();

const name = document.querySelector("#search").value;
const difficulty = document.querySelector("#difficulty").textContent.trim();
const muscle = document.querySelector("#muscle").textContent.trim();
const type = document.querySelector("#type").textContent.trim();

let nameDefault = 0;
let difficultyDefault = 0;
let muscleDefault = 0;
let typeDefault = 0;

console.log(`Name: ${name}, Difficulty: ${difficulty}, Muscle: ${muscle}, Type: ${type}`);

if(name){
  nameDefault = 1;
} 
if(difficulty !== "Difficulty" && difficulty !== "none"){
  difficultyDefault= 1;
} 
if(muscle !== "Muscle" && muscle !== "none"){
  muscleDefault = 1;
} 
if(type !== "Type" && type !== "none"){
  typeDefault = 1;
}

const notDefault = nameDefault + difficultyDefault + muscleDefault + typeDefault

if(notDefault === 1){

let searchType = "";
let searchInput = "";

if(nameDefault){
  searchInput = name;
  searchType = "name";
} else if(difficultyDefault){
  searchInput = difficulty
  searchType = "difficulty";
} else if(muscleDefault){
  searchInput = muscle;
  searchType = "muscle"
} else if(typeDefault){
  searchInput = type;
  searchType = "type"
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
} else if(notDefault === 2){

  let searchType = [];
  let searchInput = [];

  if(nameDefault){
    if(typeDefault){
      searchInput.push(name, type);
      searchType.push("name", "type");
    } else if(muscleDefault){
      searchInput.push(name, muscle);
      searchType.push("name", "muscle");
    } else if(difficultyDefault){
      searchInput.push(name,difficulty);
      searchType.push("name", "difficulty");
    }
  } else if(typeDefault){
    if(muscleDefault){
      searchInput.push(type,muscle);
      searchType.push("type","muscle");
    } else if(difficultyDefault){
      searchInput.push(type, difficulty);
      searchType.push("type","difficulty");
    } 
  } else if(muscleDefault){
    if(difficultyDefault){
      searchInput.push(muscle, difficulty);
      searchType.push("muscle", "difficulty");
    }
  }

console.log(`${searchType[0]},${searchType[1]},${searchInput[0]},${searchInput[1]}`)

await fetch (`/api/workout/${searchType[0]}/${searchInput[0]}/${searchType[1]}/${searchInput[1]}`)
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
}



document.querySelector("#searchBtn").addEventListener("click", selectOne)



