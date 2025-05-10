console.log("je suis ");

let nom="Marie";
nom="Elom";
console.log(nom);
let prenom="Dela";

console.log(nom,prenom);

let concat=`je suis malade ${prenom}`;
console.log(concat);
let papa= prenom[0];
console.log(papa);

console.log(prenom.toUpperCase());//convertire en majuscule;
console.log(prenom.toLowerCase());//convertir en miniscule

//             Methode existant

let tata= 'assila';
console.log(tata.indexOf('s')); // recuperer un indice de symbole
console.log(tata.lastIndexOf('a')); // indice du dernier symbole

console.log(nom.slice(0,2)); // recuper le caractere entre 0 et 2
//substr(from, number)

console.log(nom.substring(1,2)); //recuper un certains nombre de caractere

//replace(this,with)
console.log(nom.replace('lo','tr'));

//concat(Str1,str2)

console.log(nom.concat(' ',prenom));
//trim()
let salutations= '           bonjourd je suis la                  '

console.log(salutations.trim());

//chartAt(index)
console.log(prenom.charAt(2));

//split(separateur)   sa permet de faire sa ['Hello', 'my', 'hus']
let lettre = 'Hello my hus';
let tmp = lettre.split(' ');
console.log(tmp);
//join(array)
console.log(tmp.join('-'));

//les operations arithmetique 
//+,-,*,/,%,**

//Array
let fruit =['Anna','Tomate','Banane'];
console.log(fruit);
fruit.pop();// sa retire le dernier element du tableu
fruit.push('popo');// sa ajoute un element a la dernier position dans l array 

//les variables de type NULL et UNDIFINED

let age;
console.log(`Mon age est: ${age}, et d'ici 5ans j'aurais: ${age + 5}`); // age=UNDIFINED n est pas assigne de valeur sa retour NaN(pour resoudre sa il faut remplacer age=null)
//Bonus NaN (Not a Number)

//Variable tu type booleans

console.log(true,false);
let mail ='yuyu12@gmail.com';
console.log(mail.includes('@')); //includes verifie s il y a un cafractere un ou mot dans un tableau

//operateurs de comparaisons
//==, !=,<,>,<=,>=, 

let agee =25;

console.log(age=='25'); // avec == il convertie la chaine de caractere en type donc cava retourner un true
console.log(age==='25'); //avec === sa prend le chaine de caractere donc retourne un faux 

//conversion des types de variables

let fage =25;
let numb= '26'
let number= Number(numb);
let fage_String= String(fage);
console.log(fage_String,typeof fage_String);
console.log(numb,typeof numb);

console.log(Boolean(fage)); // true
console.log(Boolean(0)); //False
 //Les FLUX de controle en Javascript ou Bouble

// Les Fonctions

function salo(){
    console.log('je me salutation');
}
salo();
////////////////////////////////

const salutation = function(){
console.log('salutation madame ')
};
salutation();
