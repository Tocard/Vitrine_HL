let array = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];

array.forEach(function(item) {
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
});