let myPromise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 6000);
}
);

function myPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
resolve("Promise 2 resolved");    },3000);
});}

myPromise1.then((successMessage) => {
    console.log("From Callback" + successMessage);
    return myPromise2();
}).then((successMessage) => {
    console.log("From Callback" + successMessage);
});