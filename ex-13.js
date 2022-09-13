// callback function
// function that can pass as an argument to an another 
// functino is called callback function

function sampleFun(callback) {
    callback();
}

sampleFun(function () {
    console.log("Message...");
});