let a = document.getElementById("ID")
let b = document.getElementById("parol")
let c = document.getElementById("btn")
let s = document.getElementById("welcome")
let d = document.getElementById("remov")

a.style.width = "300px"
a.style.height = "50px"
a.style.border = "none"
a.style.paddingLeft = "50px"
a.style.backgroundColor = "#e8f0fe"
a.style.borderRadius = "15px"

b.style.width = "300px"
b.style.height = "50px"
b.style.border = "none"
b.style.paddingLeft = "50px"
b.style.backgroundColor = "#e8f0fe"
b.style.borderRadius = "15px"

c.style.width = "355px"
c.style.height = "50px"
c.style.border = "none"
c.style.backgroundColor = "#ef400f"
c.style.borderRadius = "15px"
c.style.color = "white"
c.style.fontSize = "15px"

s.style.textAlign = "center"
s.style.color = "#0e0d5d"
s.style.marginTop = "150px"


let form = document.getElementById("myform")
form.style.display = "block"
form.style.display = "flex"
form.style.flexDirection = "column"
form.style.alignItems = "center"
form.style.gap = "20px"


form.addEventListener("submit", function name(event) {
    event.preventDefault();
    let valuekod = a.value;
    let valuepass = b.value;

    if (valuekod === 'mmm' && valuepass === '123mmm') {
        alert("Siz platformaga kirdingiz")
        d.remove();

        let box = document.createElement("div")
        let savol = document.createElement("li")
        let inp = document.createElement("input")
        let clickMe = document.createElement("button")
        let bod = document.querySelector("body")

        box.appendChild(inp)
        box.appendChild(clickMe)

        bod.appendChild(box);

        
        box.style.display = "flex"
        box.style.justifyContent = "center"
        box.style.alignItems = "center"
        box.style.gap = "10px"
        box.style.marginTop = "150px"

        inp.style.width = "400px"
        inp.style.height = "40px"
        inp.style.borderRadius = "15px"
        inp.style.backgroundColor = "#e8f0fe"
        inp.style.border = "none"
        inp.style.paddingLeft = "15px"

        clickMe.style.width = "100px"
        clickMe.style.height = "40px"
        clickMe.style.borderRadius = "15px"
        clickMe.style.border = "none"


        savol.innerHTML = "savol kiritish"
        savol.style.listStyleType = "none"
        clickMe.appendChild(savol)

        clickMe.addEventListener("click", addTodo);

        function addTodo(event) {
            event.preventDefault();

            let todoDiv = document.createElement("div");

            todoDiv.style.marginTop = "30px"

            let check = document.createElement("input")
            check.setAttribute("type", "checkbox")
            todoDiv.appendChild(check);
            check.style.width = "20px"
            check.style.height = "20px"
            check.style.borderRadius = "30px"

            let text = document.createElement("li");
            text.innerHTML = inp.value;
            text.style.color = "black"
            text.style.listStyleType = "none"
            text.style.fontSize = "20px"
            todoDiv.appendChild(text)

            let btnTrash = document.createElement("button");
            btnTrash.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            btnTrash.style.border = "none"
            btnTrash.style.marginLeft = "320px"
            todoDiv.appendChild(btnTrash);
            todoDiv.style.width = "455px"
            todoDiv.style.marginInline = "auto"
            todoDiv.style.display = "flex"
            todoDiv.style.justifyContent = "center"
            todoDiv.style.alignItems = "center"
            todoDiv.style.gap = "10px"

            btnTrash.addEventListener("click", function trash(event) {
                todoDiv.remove();
            })

            bod.appendChild(todoDiv)
        }

    } else {
        alert("Noto'g'ri modem ID yoki parol. Iltimos, yana bir bor urinib ko'ring.")
    }

})


