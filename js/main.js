
var blueberries ={
    firstName: "Blueberries",
    name: "Vaccinium corymbosum",
   growsOnShrub: true,
    energy: "240 kj",
    carbohydrates: "14.49 g",
    protein: "0.74 g"
}; 

var grapes ={
    firstName: "Grapes",
     name: "Vitis vinifera",
   growsOnShrub: false,
    energy: "288 kj",
    carbohydrates: "18.1 g",
    protein: "0.72 g"
}; 

var redCurrent ={
    firstName: "Red Current",
    name: "Ribes rubrum",
   growsOnShrub: true,
    energy: "232 kj",
    carbohydrates: "13.8 g",
    protein: "1.4 g"
}; 


var berries = function (allberries) {
allberries.forEach(function (item) {
     document.write("<dl>");
    document.write("<h2>" + item.firstName + "</h2>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Latin Name:</dt>");
    document.write("<dd>" + item.name + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Grows On Shrubs:</dt>");
    document.write("<dd>" + item.growsOnShrub + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Energy:</dt>");
    document.write("<dd>" + item.energy + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Carbohydrates:</dt>");
    document.write("<dd>" + item.carbohydrates + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Protein:</dt>");
    document.write("<dd>" + item.protein + "</dd>");
    document.write("</dl>");
});
};



berries( [blueberries, grapes, redCurrent] );
