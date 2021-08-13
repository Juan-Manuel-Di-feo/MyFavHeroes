import { useState, useEffect } from "react";
import useWindowSize from "./resize-listener";

const useDimensionSet = () => {
    const [width, height] = useWindowSize();

    const [columnCount, setColumnCount] = useState<number>()
    const [cardWidth, setCardWidth] = useState<number>()

    const [searchBarSpace, setsearchBarSpace] = useState<number>()

    const getGridSizes = () => {
        if (width <= 600) {
            setColumnCount(1)
            setCardWidth((width / 100) * 77)
        }
        else if (width <= 991) {
            setColumnCount(2)
            setCardWidth((width / 100) * 38)
        }
        else if (width <= 1444) {
            setColumnCount(3)
            setCardWidth((width / 100) * 27)
        }
        else {
            setColumnCount(4)
            setCardWidth((width / 100) * 19)
        }
    }

    const getSearchbarSizes = () =>{
        debugger;
        if (width <= 400) {
            setsearchBarSpace(0)
        }
        else if (width <= 619) {
            setsearchBarSpace((width/100)*15)
        }
        else if (width <= 950) {
            setsearchBarSpace((width/100)*30)
        }
        else if (width <= 1150) {
            setsearchBarSpace((width/100)*50)
        }
        else {
            setsearchBarSpace((width/100)*67)
        }
    }

    useEffect(() => {

        getGridSizes();
        getSearchbarSizes();

        debugger;
    }, [width, height])
    return {
        columnCount: columnCount,
        cardWidth: cardWidth,
        searchBarSpace: searchBarSpace
    }
}
export default useDimensionSet;