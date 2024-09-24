function add(num1:numOrsstring,num2:numOrsstring) {
    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2;
    }
    else if(typeof num1==='string' && typeof num2==='string'){
        return num1+' '+num2;
    };
}
console.log(add(4,5))

let numResult:number[]=[]
let stringResult:string[]=[]

type numOrsstring=number | string;

const num1element=document.getElementById('num1') as HTMLInputElement
const num2element=document.getElementById('num2') as HTMLInputElement

const buttonelement=document.querySelector('button') as HTMLButtonElement 

function printResult(resultObj:{val:number , timeStamp:Date}){
    console.log(resultObj.val,resultObj.timeStamp)
}
buttonelement.addEventListener('click',()=>{
    const num1=num1element.value;
    const num2=num2element.value;
    const result=add(+num1,+num2)

    console.log(result)
    printResult({val:result as number,timeStamp:new Date()})
    numResult.push(result as number)
    console.log(numResult)

    const strresult=add(num1,num2)
    console.log(strresult)
    stringResult.push(strresult as string)
    console.log(stringResult)
})

const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked')
    },1000)
})

myPromise.then(res=>{
    console.log(res.split('w'))
})