var clicks = 0;
var income = 0;


var worker1price = 100;
var worker2price = 200;
var worker3price = 300;
var worker4price = 400;
var worker5price = 500;
var worker6price = 600;

var worker1amount = 0;
var worker2amount = 0;
var worker3amount = 0;
var worker4amount = 0;
var worker5amount = 0;
var worker6amount = 0;

var worker1mod = 1;
var worker2mod = 2;
var worker3mod = 3;
var worker4mod = 4;
var worker5mod = 5;
var worker6mod = 6;

function refresh() {
    document.getElementById("counter").innerHTML = clicks;
    document.getElementById("worker1amount").innerHTML = worker1amount;
    document.getElementById("worker1price").innerHTML = worker1price;
    document.getElementById("worker2amount").innerHTML = worker2amount;
    document.getElementById("worker2price").innerHTML = worker2price;
    document.getElementById("worker3amount").innerHTML = worker3amount;
    document.getElementById("worker3price").innerHTML = worker3price;
    document.getElementById("worker4amount").innerHTML = worker4amount;
    document.getElementById("worker4price").innerHTML = worker4price;
    document.getElementById("worker5amount").innerHTML = worker5amount;
    document.getElementById("worker5price").innerHTML = worker5price;
    document.getElementById("worker6amount").innerHTML = worker6amount;
    document.getElementById("worker6price").innerHTML = worker6price;
    income = (worker1amount * worker1mod) + (worker2amount * worker2mod) + (worker3amount * worker3mod) + (worker4amount * worker4mod) + (worker5amount * worker5mod) + (worker6amount * worker6mod);
    document.getElementById("income").innerHTML = income;
    if(clicks >= worker1price * 0.7){
        document.getElementById("worker1").style.display = "block";
    }
    if(clicks >= worker2price * 0.7){
        document.getElementById("worker2").style.display = "block";
    }
    if(clicks >= worker3price * 0.7){
        document.getElementById("worker3").style.display = "block";
    }
    if(clicks >= worker4price * 0.7){
        document.getElementById("worker4").style.display = "block";
    }
    if(clicks >= worker5price * 0.7){
        document.getElementById("worker5").style.display = "block";
    }
    if(clicks >= worker6price * 0.7){
        document.getElementById("worker6").style.display = "block";
    }
}

function buy(id) {
    if(id == 1){
        workerprice = worker1price;
        if(clicks >= workerprice){
            worker1price = Math.round(workerprice * 1.15);
            worker1amount++;
            clicks -= workerprice;
            refresh();
        }
    }
    if(id == 2){
        workerprice = worker2price;
        if(clicks >= workerprice){
            worker2price = Math.round(workerprice * 1.15);
            worker2amount++;
            clicks -= workerprice;
            refresh();
        }
    }
    if(id == 3){
        workerprice = worker3price;
        if(clicks >= workerprice){
            worker3price = Math.round(workerprice * 1.15);
            worker3amount++;
            clicks -= workerprice;
            refresh();
        }
    }
    if(id == 4){
        workerprice = worker4price;
        if(clicks >= workerprice){
            worker4price = Math.round(workerprice * 1.15);
            worker4amount++;
            clicks -= workerprice;
            refresh();
        }
    }
    if(id == 5){
        workerprice = worker5price;
        if(clicks >= workerprice){
            worker5price = Math.round(workerprice * 1.15);
            worker5amount++;
            clicks -= workerprice;
            refresh();
        };
    }
    if(id == 6){
        workerprice = worker6price;
        if(clicks >= workerprice){
            worker6price = Math.round(workerprice * 1.15);
            worker6amount++;
            clicks -= workerprice;
            refresh();
        }
    }

}


function onTick() {
    clicks += income;
    refresh();
}

function clicked() {
    clicks++;
    refresh();
}
onTick();
setInterval(onTick, 1000);
buyworker1.addEventListener("click", () => buy(1))
buyworker2.addEventListener("click", () => buy(2))
buyworker3.addEventListener("click", () => buy(3))
buyworker4.addEventListener("click", () => buy(4))
buyworker5.addEventListener("click", () => buy(5))
buyworker6.addEventListener("click", () => buy(6))
clickobj.addEventListener("click", clicked)
refresh();