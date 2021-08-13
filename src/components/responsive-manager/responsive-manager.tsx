import { useState, useEffect } from "react";
import useWindowSize from "./resize-listener";

const useDimensionSet = () => {
    const [width, height] = useWindowSize();

    const [columnCount, setColumnCount] = useState<number>()
    const [cardWidth, setCardWidth] = useState<number>()

    const [searchBarSpace, setsearchBarSpace] = useState<number>()
    const [titleFit, setTitleFit] = useState<boolean>() 
    const [titlePosition, setTitlePosition] = useState<number>()

    const getGridSizes = () => {
        if (width <= 600) {
            setColumnCount(1)
            setCardWidth((width / 100) * 77)
        }
        else if (width <= 700) {
            setColumnCount(1)
            setCardWidth((width / 100) * 60)
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

        if (width <= 400) {
            setTitleFit(true)
            setTitlePosition(((width/100)*50)-110)
            setsearchBarSpace(((width/100)*50)-180)
        }
        else if (width <= 619) {
            setTitleFit(true)
            setTitlePosition(((width/100)*50)-110)
            setsearchBarSpace(((width/100)*50)-180)
        }
        else if (width <= 950) {
            setTitleFit(true)
            setTitlePosition(((width/100)*50)-110)
            setsearchBarSpace(((width/100)*50)-180)
        }
        else if (width <= 1150) {
            setTitleFit(false)
            setTitlePosition(40)
            setsearchBarSpace((width/100)*50)
        }
        else {
            setTitleFit(false)
            setTitlePosition(40)
            setsearchBarSpace((width/100)*67)
        }
    }

    useEffect(() => {

        getGridSizes();
        getSearchbarSizes();

    }, [width, height])
    return {
        columnCount: columnCount,
        cardWidth: cardWidth,
        searchBarSpace: searchBarSpace,
        titlePosition:titlePosition,
        titleFit:titleFit
    }
}
export default useDimensionSet;