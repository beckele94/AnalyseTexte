let texte = "";
let nbrMots = 0;

function analyse(){ //click sur le bouton d'analyse
    //recupération du texte
    texte = document.querySelector(".texte").value; 
    texte = texte.toLowerCase();
    
    //creation et affichage du resultat
    let resultat = document.createElement('div');
    resultat.innerHTML = "Longueur du texte : " + texte.length + " caractère(s)";
    
    let mots = texte.split(' ');
    for(let i =0; i < mots.length; i++){
        if(mots[i] != ""){
            nbrMots++;
        }
    }
    resultat.innerHTML += "<br>Nombre de mots : " + nbrMots;

    let occurenceLettre = [];
    for(let i = 97; i < 97+26; i++){
        occurenceLettre[i] = nbrLettre(String.fromCharCode(i), texte);
        if(occurenceLettre[i] >= 1){
            resultat.innerHTML += "<br>Nombre de '" + String.fromCharCode(i) + "' : " + occurenceLettre[i];
        }
    }

    document.getElementById('resultat').appendChild(resultat);

}

function nbrLettre(lettre, texte){
    texte = texte.split('');
    let occurence = 0;
    for(let i = 0; i < texte.length; i++){
        if(lettre == texte[i]){
            occurence++;
        }
    }
    return occurence;
}