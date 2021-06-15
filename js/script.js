const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

let cat = {
    complain: () => {
        console.log("Meow!");
    }
}

// Question 2 

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// question 3 

heading.style.fontSize = '2em';

// Question 4 

heading.classList.add('subheading');

// Question 5 

const paragraph = document.querySelectorAll("p");

for(i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}

// Question 6 

const resultsContainer = document.querySelector(".results");

const createPara = document.createElement("p");
let text = document.createTextNode("New paragraph");
createPara.appendChild(text);
resultsContainer.appendChild(createPara);
createPara.style.backgroundColor = "yellow";

// Question 7 

function loopList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}

loopList(cats)

const createCats = (cats) => {
    for(let i = 0; i < cats.length; i++) {
        let catContainer = document.querySelector(".cat-container")
        // create div-/Paragraph and filter out undefined age
        let div = document.createElement("div");
        let h5 = document.createElement("h5");
        let h5text = document.createTextNode(`${cats[i].name}`);
        h5.appendChild(h5text);
        div.appendChild(h5);
        catContainer.appendChild(div)

        // create Paragraph
        let age = "Age unkown";
        if(cats[i].age !== undefined) {
            age = cats[i].age;
        }
        let p = document.createElement("p");
        let paraText = document.createTextNode(`${age}`);
        p.appendChild(paraText);
        div.appendChild(p)
        // 
    }
}

createCats(cats)


