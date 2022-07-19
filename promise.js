const displayContainer = document.querySelector('.displayContainer');

//learn and make Promise

let x = new Promise((resolve, reject)=>{
    //define condiiton of promise
    let a = 1 + 1;
    //promise statement
    if(a === 2){
        resolve('success')
    } else{
        reject('wrong')
    }
    //deside the move if success and wrong
    x.then((message)=>{
        console.log('congrats its'+ message)
    }).catch((message)=>{
        console.log(message)
    })
})
console.log(x);

//make function promise
const makeRequest = ((location)=>{
    return new Promise((resolve,reject)=>{
       console.log(`make request to' + ${location}`)
       if(location === 'Google'){
        resolve('Google says Hi')
       } else{
        reject('we can only talk to Google')
       }
    });
});

const processRequest = ((response)=>{
    return new Promise((resolve, reject )=>{
        console.log('processing Response')
            resolve(`extra information + ${response}`)
    })
})

//makeRequest('Facebook').then(response =>{
    //console.log('request received')
    //return processRequest(response)
//}).then(processedResponse =>{
    //console.log(processedResponse)
//}).catch(err =>{
    //console.log(err)
//})

async function doWork() {
    try{
        const response = await makeRequest('Google')
        console.log('Request Receive')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch(err){
        console.log(err)
    }
}
doWork()