// @ts-nocheck
import { FixedSizeGrid as Grid } from "react-window";
import HeroCard from "../hero-card/hero-card.component";
import { forwardRef } from "react";
import { IGridList } from "../../interfaces/interfaces";
import './grid-list.styles.css'


const GridList = (props: IGridList) => {

    const GUTTER_SIZE = 35;
    const COLUMN_WIDTH = 285;
    const ROW_HEIGHT = 35;
    const ROW_COUNT = props.displayList.length / 4;
    const COLUMN_COUNT = 4


    const Cell = ({ columnIndex, rowIndex, style }) => {
        if ((props.displayList.length>0)&&(props.displayList.length>Math.round( rowIndex * 1 + columnIndex))){
        console.log (rowIndex * 1 + columnIndex)
        debugger;
        const hero = props.displayList[Math.round( rowIndex * 1 + columnIndex)]
        return (
                <HeroCard key={hero.id} {...hero} onLiked={props.likeFunction} />
        )}
        return <div></div>
    };


    const innerElementType = forwardRef(({ style, ...rest }, ref) => (
        <div ref={ref}
            style={{
                ...style,
                paddingLeft: GUTTER_SIZE,
                paddingTop: GUTTER_SIZE
            }}
            {...rest}
        />
    ));
    console.log(props.displayList)
    return <Grid
        className="Grid"
        columnCount={COLUMN_COUNT}
        columnWidth={COLUMN_WIDTH + GUTTER_SIZE}
        height={window.innerHeight - 20}
        innerElementType={innerElementType}
        rowCount={ROW_COUNT}
        rowHeight={ROW_HEIGHT + GUTTER_SIZE}
        width={window.innerWidth - 20}
    >
        {Cell}
    </Grid>
}

export default GridList