// const Calculate = document.getElementsByClassName(".calculator");
const formArea = document.querySelector(".form")
const Button = document.querySelectorAll(".btn")
const Equal = document.querySelector(".btn-equal")
const Clear = document.querySelector(".btn-clear")
const Delete = document.querySelector(".btn-delete")


    Button.forEach(button => {
        button.addEventListener("click", (e) => {
            let value = e.target.dataset.num;
            formArea.value += value;
            return
        });
    });
    Equal.addEventListener("click", (e) =>{
        if(formArea.value === ""){
            formArea.value = "";
        }
        else{
            let answer = eval(formArea.value);
            formArea.value = answer;
        }
        return 
    }) ;
    Clear.addEventListener("click", (e) =>{
        formArea.value = ""
    })
    Delete.addEventListener("click", (e) =>{
        delete formArea.value
        console.log("delete")
    });

