var images =
[
    "https://w7.pngwing.com/pngs/435/813/png-transparent-mother-woman-mom-cooking-s-child-fictional-character-cartoon.png"
,"https://t4.ftcdn.net/jpg/01/38/71/15/240_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg",
"grandma.jpg",
"https://img.freepik.com/free-vector/cute-grandfather-character-cartoon-icon-illustration-design-isolated-flat-cartoon-style_422763-698.jpg?w=740"
];
var names = ["mother", "father", "grandmother", "grandfather"];

var i = 0;
function next()
{
    
    var nofmina = 3;
    if(i > nofmina)
{
    i = 0;
}
document.getElementById("image").src = images[i];
document.getElementById("name").innerHTML = names[i];
i++;
}


