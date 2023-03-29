document.getElementById("input").addEventListener("input", function() {
    var input = this.value;
    localStorage.setItem("input", input);
});

window.onload = function() {
    var previousInput = localStorage.getItem("input");
    if (previousInput !== null) {
        document.getElementById("input").value = previousInput;
    }
}

var savedInputsList = document.getElementById("savedInputs");
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.startsWith("input_")) {
        var listItem = document.createElement("li");
        listItem.innerText = localStorage.getItem(key);
        savedInputsList.appendChild(listItem);
    }
    console.log(listItem)
}