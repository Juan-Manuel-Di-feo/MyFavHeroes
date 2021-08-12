import { useState, useEffect } from "react";
import useWindowSize from "./resize-listener";



const useAppConfigurer = () => {
    const [width, height] = useWindowSize();

    const [columnCount,setColumnCount] = useState<number>()
    const [cardWidth,setCardWidth] = useState<number>()
    
    const getdata = async () =>{
        if(width <= 600){
           await setColumnCount(1)
           await setCardWidth((width / 100)* 80 )
        }
        else if(width <= 1100){
           await setColumnCount(2)
           await setCardWidth((width / 100)* 38 )
        }
        
        else{
        await setColumnCount(4)
        await setCardWidth((width / 100)* 19 )
        }}

    useEffect(()=>{
    getdata();
    },[width, height])
    return {
        columnCount: columnCount,
        cardWidth: cardWidth
    }
}
export default useAppConfigurer;