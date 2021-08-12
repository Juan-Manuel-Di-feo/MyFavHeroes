import { useState, useEffect } from "react";



const useWidthDetector = () => {
    const [columnCount,setColumnCount] = useState<number>()
    const [cardWidth,setCardWidth] = useState<number>()
    debugger;
  
    useEffect(()=>{
        const getdata = async () =>{
        if(window.innerWidth <= 600){
           await setColumnCount(2)
           await setCardWidth((window.innerWidth / 100)* 45 )
        }
        else if(window.innerWidth <=991){
           await setColumnCount(3)
           await setCardWidth((window.innerWidth / 100)* 30 )
        }
        else{
        await setColumnCount(4)
        await setCardWidth((window.innerWidth / 100)* 22 )
        }
    }
    getdata();
    },[])
    return {
        columnCount: columnCount,
        cardWidth: cardWidth
    }
}
export default useWidthDetector;