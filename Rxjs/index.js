// Observable
var numberGenerator = Rx.Observable.create((observer) => {
    setInterval(() => {
        observer.next(Math.floor(Math.random() * 1000));
    }, 1000)
})

var currentTime = Rx.Observable.create((xyz) => {
    setInterval(() => {
        xyz.next(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`);
    }, 1000)
})

function getData() {
    return "10";
}

numberGenerator.subscribe((data) => {
    document.getElementById("root").innerHTML = `Random Data: ${data}`;
})

numberGenerator.subscribe((data) => {
    document.getElementById("dsfdjf").innerHTML = `Random Data: ${data}`;
})

numberGenerator.subscribe((data) => {
    document.getElementById("root").innerHTML = `Random Data: ${data}`;
})

currentTime.subscribe((data) => {
    document.getElementById("time").innerHTML = `Time is: ${data}`;
})