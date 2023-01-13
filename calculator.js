let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(e.target.innerHTML == "=") {
            string = eval(string);
            document.getElementById("input").value = string;
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.getElementById("input").value = string;
        } else {
            console.log(e.target);
            string += e.target.innerHTML;
            document.getElementById("input").value = string;
        }
    })
});