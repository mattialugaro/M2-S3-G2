const petSchedati = [];

class Utente {
    constructor(firstName, lastName, age, location) {
        this.name = firstName;
        this.surname = lastName;
        this.age = age;
        this.location = location;
    }

    static differenceAgeStatic(ageA, ageB) {
        return ageA.age > ageB.age ? ageA.name + " e' piu' grande di  " + ageB.name :
            ageA.name + " e' piu' piccolo di  " + ageB.name;
    }
}

const myUtente = new Utente("Mattia", "Lugaro", "26", "Bologna");
const myUtente2 = new Utente("Luca", "Rossi", "29", "Ancona");
const myUtente3 = new Utente("Davide", "Verdi", "24", "Livorno");
const myUtente4 = new Utente("Francesco", "Bianchi", "31", "Palermo");

console.log(myUtente);
console.log(Utente.differenceAgeStatic(myUtente, myUtente3));
console.log(Utente.differenceAgeStatic(myUtente2, myUtente4));
console.log(Utente.differenceAgeStatic(myUtente3, myUtente2));
console.log(Utente.differenceAgeStatic(myUtente4, myUtente));



class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static sameOwnerStatic(ownerNameA, ownerNameB) {
        return ownerNameA.ownerName === ownerNameB.ownerName
        // return ownerNameA.ownerName == ownerNameB.ownerName ?
        //     ownerNameA.ownerName + " possiede un " + ownerNameA.species + " di nome " + ownerNameA.petName + " e un " + ownerNameB.species + " di nome " + ownerNameB.petName :
        //     ownerNameA.ownerName + " ha un " + ownerNameA.species + " di nome " + ownerNameA.petName + " invece " + ownerNameB.ownerName + " ha un " + ownerNameB.species + " di nome " + ownerNameB.petName;
    }
}

const myPet = new Pet("Menny", "Mattia", "Tartaruga", "Trachemys scripta elegans");
const myPet2 = new Pet("Fluffy", "Giovanni", "Gatto", "Maine Coon");
const myPet3 = new Pet("Fido", "Francesco", "Cane", "Labrador");
const myPet4 = new Pet("Pablo", "Luca", "Pappagallo", "Cacatua galerita");
const myPet5 = new Pet("Silvano", "Davide", "Cavallo", "Mustang");
const myPet6 = new Pet("Leo", "Francesco", "Camaleonte", "Chamaeleo calyptratus");
const myPet7 = new Pet("Bolo", "Giovanni", "Cane", "Bolognese");


console.log(myPet)
console.log(Pet.sameOwnerStatic(myPet2, myPet7));
console.log(Pet.sameOwnerStatic(myPet3, myPet4));
console.log(Pet.sameOwnerStatic(myPet5, myPet6));
console.log(Pet.sameOwnerStatic(myPet3, myPet6));
console.log(Pet.sameOwnerStatic(myPet, myPet4));


window.onload = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const petName = document.getElementById("petName");
        const ownerName = document.getElementById("ownerName");
        const species = document.getElementById("species");
        const breed = document.getElementById("breed");

        const nuovoPet = new Pet(
			petName.value,
			ownerName.value,
			species.value,
			breed.value
		);
		petSchedati.push(nuovoPet);
		console.log(petSchedati);
		const listaPets = document.getElementById("listaPets");
		const mioDiv = document.createElement("div");
		mioDiv.classList.add("pet");
		const mioSpan = document.createElement("span");
		mioSpan.classList.add(
			"text-center",
            
		);
		mioSpan.innerHTML = `<div><span><b>Nome:</b> </span>${petName.value} <span>
                                        <b>Proprietario:</b> </span>${ownerName.value} <span>
                                        <b>Specie:</b> </span>${species.value} <span>
                                        <b>Razza:</b> </span>${breed.value}  &nbsp; 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-x-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                        </svg></div>
                                        `;
		petName.value = "";
		ownerName.value = "";
		species.value = "";
		breed.value = "";
		mioDiv.appendChild(mioSpan);
		listaPets.appendChild(mioDiv);

        const allIcons = document.getElementsByTagName("svg");
		for (let i = 0; i < allIcons.length; i++) {
			const element = allIcons[i];
			element.addEventListener("click", function (event) {
				event.currentTarget.parentElement.parentElement.remove();
			});
		}

        // showPet(petName.value, ownerName.value, species.value, breed.value);
    })
}



//const showPet = (petName, ownerName, species, breed) => {
//    const animals = document.getElementById("pet");
//    const pet = documet.createElement("div");
//    pet.innerHTML = `
//    <ul class="">
//    <li>${petName}</li>
//    <li>${ownerName}</li>
//    <li>${species}</li>
//    <li>${breed}</li>
//    </ul>
//    `;
//    animals.appendChild(pet);
//}

