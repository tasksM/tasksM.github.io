let data = document.querySelector(".list");
let btn = document.querySelector(".save");
let task = document.querySelector(".tasks");
let cont2 = document.querySelector(".cont2");
let warp = document.querySelector(".warp");
let inpEdit = document.querySelector("#EditP");
let pdata;

btn.addEventListener('click', function () {
    addtask();
    data.value = "";
})


function addtask() {
    if (data.value === '') {
        alert("Bhai/Behan kuchhh to enter kar yaar")
    } else {
        let li = document.createElement('LI');
        let p = document.createElement('P');
        let remove = document.createElement('SPAN');
        let btn = document.createElement('BUTTON');
        btn.classList.add('btn');
        btn.innerHTML = "Edit";
        remove.innerHTML = "Remove";
        li.classList.add('panding');
        p.textContent = data.value;
        task.appendChild(li);
        li.appendChild(p);
        li.appendChild(remove);
        li.appendChild(btn);
        savetolDB();
        liLenth();
    }
}

task.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains("panding")) {
            e.target.classList.remove("panding");
            e.target.classList.toggle('complete');
            savetolDB();
            liLenth();
        }
        else {
            e.target.classList.toggle("panding");
            e.target.classList.remove('complete');
            savetolDB()
            liLenth();

        }

    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savetolDB();
        liLenth();
    }

    else if (e.target.tagName === "BUTTON") {
        cont2.style.display = 'flex';
        warp.style.display = 'block';

        
       

        let lidata = e.target.parentElement;
        pdata = lidata.querySelector("p");

        inpEdit.value = pdata.textContent;

        
    }
})

let btn2 = document.querySelector("#sbeS");

btn2.addEventListener('click', function () {

    pdata.textContent = inpEdit.value;
    savetolDB();

    cont2.style.display = 'none';
    warp.style.display = 'none';
})

function savetolDB() {
    localStorage.setItem("data", task.innerHTML);
}

function getdata() {
    task.innerHTML = localStorage.getItem("data");
    liLenth();
}

getdata()

function liLenth() {
    let lists = document.querySelectorAll("li");
    let compList = document.querySelectorAll(".complete");
    let panList = document.querySelectorAll(".panding");

    let top = document.querySelector(".top span");
    let com = document.querySelector(".com span");
    let pom = document.querySelector(".pom span");
    let per = document.querySelector(".per span");
    let fill = document.querySelector(".fill");
    top.textContent = lists.length;
    com.textContent = compList.length;
    pom.textContent = panList.length;

    if(lists.length === 0){
        per.textContent = 0 ;
        fill.style.width = 0 + "%";
    }
else{
    let persantage = Math.floor((compList.length / lists.length) * 100);
    per.textContent = persantage ;
    fill.style.width = `${persantage}%`
}
}