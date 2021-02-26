import React from 'react'
import './../App.css'



function Trangle() {

const [firstVal, setFirst] = React.useState(50)
const [secondtVal, setSecond] = React.useState(20)
const [thirdtVal, setThird] = React.useState(60)
const [trueE, setTrueE] = React.useState(true)

const set = (start, end, init, setFirst)=>{

    firstVal > end && setTrueE(false)
    firstVal < start && setTrueE(true)
 

    trueE 
    ? setFirst(firstVal + 1)
    : setFirst(firstVal - 1)

    // if (firstVal < end){
    //     console.log("firstVal", firstVal);
    //     setFirst(firstVal+1)
    // }
    // if(firstVal === end){
    //     setFirst(start)
    // }
    // console.log('uuuuu', start, end, init,);
    

}



// set(30, 70, firstVal, setFirst)

React.useEffect(()=>{
    setTimeout( ()=> set(30, 75, firstVal, setFirst), 100)
    setTimeout( ()=> set(10, 90, firstVal, setSecond), 100)
    // setTimeout( ()=> set(10, 70, firstVal, setThird), 200)
    // setInterval( ()=> console.log("kkkkk"), 1000)
}, [firstVal])




    return (
        <div>
            <div 
            style={{clipPath:` polygon(${firstVal}% 0%, ${secondtVal}% 90%, 20% ${firstVal}%)`}}
            // style={{clipPath:" polygon(50% 0%, 20% 90%, 60% 100%)"}}
             className={"trangle"}>

            </div>
        </div>
    )
}

export default Trangle
