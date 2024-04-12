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
} else if(notDefault === 3){

  let searchType = [];
  let searchInput = [];

  if(nameDefault){
    if(typeDefault){
      if(muscleDefault){
        searchInput.push(name,type,muscle);
        searchType.push("name","type","muscle");
      }else if(difficultyDefault){
        searchInput.push(name,type,difficulty);
        searchType.push("name","type","difficulty");
      }
    } else if(muscleDefault){
      if(difficultyDefault){
        searchInput.push(name,muscle,difficulty);
        searchType.push("name","muscle","difficulty");
      }
    }
  } else if(typeDefault){
    if(muscleDefault){
      if(difficultyDefault){
        searchInput.push(type,muscle,difficulty);
        searchType.push("type","muscle","difficulty");
      }
    }
  }

  await fetch (`/api/workout/${searchType[0]}/${searchInput[0]}/${searchType[1]}/${searchInput[1]}/${searchType[2]}/${searchInput[2]}`)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    document.querySelector("#chosen-workout").innerHTML = ""

   response.forEach((exercise, index) => {
      const card = exerciseCard(exercise, index);
      document.querySelector("#chosen-workout").insertAdjacentHTML("afterbegin", card)
    })
});

} else if(notDefault === 4){
  const searchInput = [name,type,muscle,difficulty];
  const searchType = ["name","type","muscle","difficulty"];

  await fetch (`/api/workout/${searchType[0]}/${searchInput[0]}/${searchType[1]}/${searchInput[1]}/${searchType[2]}/${searchInput[2]}/${searchType[3]}/${searchInput[3]}`)
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



