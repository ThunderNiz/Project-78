var img=
["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://i.postimg.cc/MKdhy06Z/father.jpg",
"https://i.postimg.cc/MKdhy06Z/bro.jpg",
"https://i.postimg.cc/MKdhy06Z/mother.jpg"];

var family =["Nisarg", "Nihaar", "Divyashree", "Prashanth"];
console.log(family);
document.getElementById("declaration_of_arrays").innerHTML=family;
    
var first_family=family[0];
console.log(first_family);
document.getElementById("access_first_element").innerHTML=first_family    

var second_family=family[1];
console.log(second_family);
document.getElementById("access_second_element").innerHTML=second_family;

var third_family=family[2]
console.log(third_family);
document.getElementById("access_third_element").innerHTML=third_family;

var length_of_the_array=family.length;
console.log(length_of_the_array);
document.getElementById("display_length_of_array").innerHTML=length_of_the_array;

var array_value="";
for (i=0; i<family.length; i++) {
console.log(family[i]);
array_value=array_value + family[i] + "<br>";
}
document.getElementById("loop_the_array").innerHTML=array_value;
    
family.push("Nisarg");
console.log(family);
document.getElementById(add_element_at_the_the_of_the_array).innerHTML=family;

family.push("Nihaar");
console.log(family);
document.getElementById(add_element_at_the_the_of_the_array).innerHTML=family;

    
var alphabets=["a", "d", "i", "q", "w", "c", "f", "v", "k", "g"];
console.log(alphabets);
document.getElementById("display_alphabets_array").innerHTML=alphabets;

var i=0;   
function update(){
i++;
var number_of_family_member_in_array=5
if(i > number_of_family_member_in_array)
{
    i=0;
}
var updatedImage=img[i];
var updatedName=family[i];
document.getElementById("family_member_image").src=updatedImage;
document.getElementById("family_member_name").src=updatedName;
}
