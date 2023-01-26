const form = document.querySelector("form")
const resultList = document.querySelector("#result")


// Insert
const ul = document.createElement('ul')
ul.id = 'list'

const li1 = document.createElement('li')
li1.className = 'li1'
const li2 = document.createElement('li')
li2.className = 'li2'
const li3 = document.createElement('li')
li3.className = 'li3'
const li4 = document.createElement('li')
li4.className = 'li4'
const li5 = document.createElement('li')
li5.className = 'li5'
const li6 = document.createElement('li')
li6.className = 'li6'
const li7 = document.createElement('li')
li7.className = 'li7'
const li8 = document.createElement('li')
li8.className = 'li8'



function calculator() {
    const cat1 = document.querySelector('#cat1').value
    const cat2 = document.querySelector('#cat2').value
    const hip = document.querySelector('#hip').value

    let ca = 0
    let co = 0
    let hi = 0
    let result = 0


    if (cat1 == "?") {
        hi = hip ** 2 
        ca = cat2 ** 2

        result = Math.sqrt((hi - ca))

        li1.innerText = ('h² = c² + c²')
        li2.innerText = hip+'²'+' =  c² + ' + cat2 + '²'
        li3.innerText = hip**2 + ' =  c² + ' + cat2**2
        li4.innerText = 'c² = ' + hip**2 + ' - ' + cat2**2
        li5.innerText = 'c² = ' + (hip**2 - cat2**2)
        li6.innerText = 'c = √'+ (hip**2 - cat2**2)
        li7.innerText = 'c = ' + result
        li8.innerText = 'Resposta: O valor do cateto em falta é ' + result

    }
    else if(cat2 == "?") {
        hi = hip ** 2
        ca = cat1 ** 2

        result = Math.sqrt((hi - ca))

        li1.innerText = 'h² = c² + c²'
        li2.innerText = hip+'²'+' = ' + cat1 + '² + c²'
        li3.innerText = hip**2 + ' = ' +  cat1**2 + ' + c²'
        li4.innerText = 'c² = ' + hip**2 + ' - ' + cat1**2
        li5.innerText = 'c² = ' + (hip**2 - cat1**2)
        li6.innerText = 'c = √'+ (hip**2 - cat1**2)
        li7.innerText = 'c = ' + result
        li8.innerText = 'Resposta: O valor do cateto em falta é ' + result
    }
    else if(hip == "?") {
        result = Math.hypot(cat1, cat2)

        li1.innerText = 'h² = c² + c²'
        li2.innerText = 'h² = ' + cat1 + '² + ' + cat2 + '²'
        li3.innerText = 'h² = ' + cat1**2 + ' + ' + cat2**2
        li4.innerText = 'h² = ' + (cat1**2 + cat2**2)
        li5.innerText = 'h = √' + (cat1**2 + cat2**2)
        li6.innerText = 'h = ' + (result)
        li8.innerText = 'Resposta: O valor do cateto em falta é ' + result
    }

            resultList.appendChild(ul)
            ul.append(li1, li2, li3, li4, li5, li6, li7, li8)
        }


form.addEventListener("submit", function (ev) {
    ev.preventDefault()
    calculator()
})