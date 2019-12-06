


// setTimeout(()=>{
//     console.log(1)
//     setTimeout(()=>{
//         console.log(2)
//         setTimeout(()=>{
//             console.log(3)
//             setTimeout(()=>{
//                 console.log(4)
//             },1000)
//         },1000)
//     },1000)
// },1000)



//为了方便封装
  function name(val){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(val)
            },1000)
        })
     }
async function nameC() {
    let k1=await name(1)
    console.log(k1)
    let k2=await name(2)
    console.log(k2)
    let k3=await name(3)
    console.log(k3)
    //不封
    let k4=await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4)
            reject("--4")
        },1000)
    })
    console.log(k4)
}
nameC()


