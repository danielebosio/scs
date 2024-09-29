let people = [];

function aggiungiPersona() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthday").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let province = document.getElementById("province").value;

  
    if (!name || !surname || !email || !birthdate || !phone || !country || !province) {
        alert("Tutti i campi devono essere compilati!");
        return;
    }

    // Validazione email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Inserisci un'email valida!");
        return;
    }

    
    let person = {
        name: name,
        surname: surname,
        email: email,
        birthdate: birthdate,
        phone: phone,
        country: country,
        province: province
    };

    
    people.push(person);

    
    aggiornaTabella();

  
    document.getElementById("person-form").reset();
}

function aggiornaTabella() {
    let mostraDatiDiv = document.getElementById("mostraDati");
    mostraDatiDiv.innerHTML = ""; 

   
    people.forEach((person, index) => {
        let personaDiv = document.createElement("div");
        let rimuoviButton = document.createElement("button");

        rimuoviButton.textContent = "Rimuovi";
        rimuoviButton.onclick = function () {
            people.splice(index, 1);
            aggiornaTabella(); 
        };

        let personaInfo = document.createElement("span");
        personaInfo.innerHTML = `
            <strong>Nome: </strong>${person.name} ${person.surname}, 
            <strong>Email: </strong>${person.email}, 
            <strong>Data di nascita: </strong>${person.birthdate}, 
            <strong>Telefono: </strong>${person.phone}, 
            <strong>Paese: </strong>${person.country}, 
            <strong>Provincia: </strong>${person.province}
        `;

        personaDiv.appendChild(rimuoviButton);
        personaDiv.appendChild(personaInfo);

        mostraDatiDiv.appendChild(personaDiv);
    });
}

function rimuoviTutti() {
    people = [];
    aggiornaTabella();
}

function inviaModulo() {
    if (people.length === 0) {
        alert("Nessuna persona è stata aggiunta.");
        return false;
    }
    return true;
}