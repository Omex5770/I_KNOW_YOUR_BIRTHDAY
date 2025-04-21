//DOM - document --> html deerh bvh kod
/*console.log(document);
// document.getElementsByTagName()-> tag nereer handah
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// .innerText = "solih text bichne"-> tag todorh text solino
h1.innerText="Sian bnu";
// .style.styleName = "style utga" --> tag-d style uguh
h1.style.color="brown";

var h12 = document.getElementsByTagName('h12')[1];
h12.innerText="Saihan amarsan uu";
h12.style.color="red";

funcion click2(){
    p.innerText = "Click button daragdlaa";
    p.style color = "green";
} */
var ageInput = document.getElementsByTagName('input')[0];
var birthYear = document.getElementsByTagName('h4')[0];
var currentYear = 2025,myYear;
console.log(ageInput);
console.log(birthYear);
function age(){
	myYear = currentYear - ageInput.value;
	console.log(ageInput.value);
	birthYear.innerText = myYear;
}
