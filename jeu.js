//
let displaydee = document.querySelector('.displaydee')

//variables 
var diceresult = 0;

let btnewgame = document.querySelector('.newgame')
let btnrolldice = document.querySelector('.rolldicebutton')
let btnholdbutton = document.querySelector('.holdbutton')
//Interfaces Jeu 

let player1Interface = document.querySelector('.gameinterfaceone')
let player2Interface = document.querySelector('.gameinterfacetwo')

//scores Elements DOM
//player 1 
let point1 = document.querySelector('.gameinterfaceone span i')
let scoreround1 = document.querySelector('.scoreroundone')
let scoreglobal1= document.querySelector('.scoreglobalone p')

//player 2 
let point2 = document.querySelector('.gameinterfacetwo span i')
let scoreround2 = document.querySelector('.scoreroundtwo')
let scoreglobal2 = document.querySelector('.scoreglobaltwo p')
var NewNumbers1 = []
var NewNumbers = []
/*GlobalScore*/
var CurrentTab1 = []
var CurrentTab2 = []
var NbCurrentTab1;
var NbCurrentTab2;

// class
class Player {
    scoreround;
    scoreglobal;
    currentPlayer;
    id;
    constructor(scoreround,scoreglobal, currentPlayer, id){
        this.scoreround = scoreround
        this.scoreglobal = scoreglobal
        this.currentPlayer = currentPlayer;
        this.id = id;
    }


    throwDice(){
        let Deeresult;
        let NewDeeResultOne = [];
        let NewDeeResultTwo =[];
        btnrolldice.addEventListener('click', () => {
            //on lance le dé avec un résultat compris entre 1 et 6
                Deeresult = 1 + Math.floor(Math.random() * 6)
                Deeresult = parseInt(Deeresult);
            //aficher le dé avec switch 
        switch(Deeresult){
            case 1:
            displaydee.innerHTML = '';
            displaydee.innerHTML += '<i class="bi bi-dice-1" style="font-size:5em; margin:10px"></i>';
            break;
            case 2:
            displaydee.innerHTML = '';
            displaydee.innerHTML += '<i class="bi bi-dice-2" style="font-size:5em; margin:10px"></i>';
            break;
            case 3:
            displaydee.innerHTML = ' ';
            displaydee.innerHTML += '<i class="bi bi-dice-3" style="font-size:5em; margin:10px"></i>';
            break;
            case 4:
            displaydee.innerHTML = ' ';
            displaydee.innerHTML += '<i class="bi bi-dice-4" style="font-size:5em; margin:10px"></i>';
            break;
            case 5:
            displaydee.innerHTML = ' ';
            displaydee.innerHTML += '<i class="bi bi-dice-5" style="font-size:5em; margin:10px"></i>';
            break;
            case 6:
            displaydee.innerHTML = ' ';
            displaydee.innerHTML += '<i class="bi bi-dice-6" style="font-size:5em; margin:10px"></i>';
            break;
        }              
                try{
                    if(this.playerTour ===  1 ){
                        if(true){
                        NewDeeResultOne.push(Deeresult);
                        function sum1(arr1){
                        const reducer1 = (accumulator1, curr1) => accumulator1 + curr1;
                        NewNumbers1 = arr1.reduce(reducer1); 
                        }
                        sum1(NewDeeResultOne)
                        scoreround1.innerHTML = NewNumbers1
                        } 
                    } else if(this.playerTour === 2 ){
                        NewDeeResultTwo.push(Deeresult);
                        //fonction qui calcule les éléments du tableau 
                        function sum(arr){
                        const reducer = (accumulator, curr) => accumulator + curr;
                        NewNumbers = arr.reduce(reducer); 
                        }
                        sum(NewDeeResultTwo)
                        scoreround2.innerHTML = NewNumbers
                    }else {
                        return false;
                    }
                } catch(e){
                    console.log({cause:e})
                }
        })


        if(player1 && player2){
            return true
        }
        //Résulat du dé stocké dans une variable

        if(Deeresult === 1){
            this.scoreround.innerText = "0"
          }

        this.currentPlayer = false;
    }
     //permet de changer de Tour
     NextPlayerTour(){
        if(this.playerTour == 1){
            this.playerTour= 2
            point1.classList.remove('pointone')
            point2.classList.add('pointtwo')
            scoreround2.innerText = 0;
            scoreround1.innerText = 0;
            displaydee.innerText = '';
        } else if(this.playerTour == 2){
            this.playerTour = 1
            point1.classList.add('pointone')
            point2.classList.remove('pointtwo')
            scoreround1.innerText = 0;
            scoreround2.innerText = 0;
            displaydee.innerText = '';
        } else {
            console.log("Aucun joueur  interversé")
        }
    }
    //permet d’envoyer les points du ROUND vers le GLOBAL.
    Hold(){
        
            if(this.playerTour === 1) {
                
                btnholdbutton.addEventListener('click', () => {
                    scoreglobal1.innerText = 0;
                    scoreround1.innerText = 0;
                    point1.classList.add('pointone')
                    //Calculer le current et global
                    CurrentTab1.push(NewNumbers1)
                    function sum3(arr3){
                        const reducer3 = (accumulator3, curr3) => accumulator3 + curr3;
                        NbCurrentTab1 = arr3.reduce(reducer3); 
                        }
                        sum3(CurrentTab1)
                    this.NextPlayerTour();
                    scoreglobal1.innerText = NbCurrentTab1;
                })
            }else if(this.playerTour === 2){
                
                btnholdbutton.addEventListener('click', () => {
                    //calcul fait ok 
                    scoreglobal2.innerText = 0;
                    scoreround2.innerText = 0;
                    point2.classList.add('pointtwo')
                    CurrentTab2.push(NewNumbers)
                    function sum4(arr4){
                        const reducer4 = (accumulator4, curr4) => accumulator4 + curr4;
                        NbCurrentTab2 = arr4.reduce(reducer4); 
                        }
                        sum4(CurrentTab2)
                    console.log(CurrentTab2)
                    this.NextPlayerTour();
                    scoreglobal2.innerText = NbCurrentTab2;
                })
            }
            else {
                return false;
            }
        }
    }

/*Problème lié au joueur courant, c'est à dire que il tient compte du joueur courant alors que nous on a définit  le tour d'un autre jour dans la partie 
stocker variable qui dit que la valeur change */

class Partie extends Player{
    players = []
    constructor(players, displaydee, winner, playerTour ){
        super();
        this.displaydee = displaydee;
        this.winner = winner;
        this.playerTour = playerTour;
    } 

    getPlayers(){
        return this.players
    }
    setPlayers(){
        //
    }
    getWinner(){
        return this.winner
    }
    setPlayers(){
        //
    }
    getDisplaydee(){
        return this.displaydee
    }
    setDisplaydee(){
        //
    }

    PlayerTourStart(){
            //s'il y a des joueurs alors sélectionner par l'id
        if(player1 && player2){
            //on génère un nombre aléatoire pour choisir en début de partie qui va jouer
            let IdSelected = 1 + Math.floor(Math.random() * 2);
            alert(`C'est au joueur ${IdSelected} de jouer`)
            this.playerTour = IdSelected;
            console.log(this.playerTour)
            try{
                if(IdSelected ===  1 ){
                    //modifier le point
                    point1.classList.add('pointone')
                    btnrolldice.style.color ="red";
                } else if(IdSelected == 2 ){
                    point2.classList.add('pointtwo')
                    btnrolldice.style.color ="blue";
                } 
            } catch(e){
                console.log({cause:e})
            }
        }
    }

        }
        // controler l'affichage 
        //Donner la possibilité où renvoyer le score du joueur en fonction du tour is this.playerTour (id)
        
    
    //Fonction qui affiche le gagnant 



//Création des joueurs affichage ok
const player1 = new Player(0,0,false,1)
const player2 = new Player(0,0,false,2)



// crée une fonction qui va lancer la partie à chaque page chargée
const NewGame = () => {
    window.addEventListener('load', () => {
        alert('jeu lancé');
        const newGame =  new Partie([player1, player2], 'Lancer le dé', null)
       // paramètres fonctionnels
       //Sélectionner le joueur Partie, afficher dans un alert
        newGame.PlayerTourStart()
        newGame.throwDice()
        newGame.Hold()
        //Modifier Point en fonction du tour du joueur  jouer OK





        //Pouvoir refaire une partie en cliquant 
        btnewgame.addEventListener('click', () => {
            scoreglobal1.textContent = 0;
           
            scoreglobal2.textContent = 0;
           
            scoreround1.textContent = 0;
          
            scoreround2.textContent = 0;
         
            displaydee.textContent ='';
            NewNumbers.innerText = 0;
            NewNumbers1.innerText = 0;
            alert("Nouvelle Partie")
    
            
        })

    })
       
}
NewGame()


