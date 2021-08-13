//@ts-nocheck
import { FixedSizeGrid as Grid } from "react-window";
import HeroCard from "../hero-card/hero-card.component";
import { forwardRef } from "react";
import { IGridList } from "../../interfaces/interfaces";
import { ICellIndex } from "../../interfaces/interfaces";
import './grid-list.styles.css'


const GridList = (props: IGridList) => {


    const GUTTER_SIZE = 25;
    const COLUMN_WIDTH = props.appConfig.cardWidth * 1.05;
    const ROW_HEIGHT = 174;
    const ROW_COUNT = Math.ceil(props.displayList.length / props.appConfig.columnCount);
    const COLUMN_COUNT = props.appConfig.columnCount;


    const Cell = (cellProps: ICellIndex) => {
        if ((props.displayList.length > 0) && (props.displayList.length > cellProps.rowIndex * props.appConfig.columnCount + cellProps.columnIndex)) {
            const hero = props.displayList[cellProps.rowIndex * props.appConfig.columnCount + cellProps.columnIndex]
            return (
                <HeroCard key={hero.id} {...hero} onLiked={props.likeFunction} cardWidth={props.appConfig.cardWidth} />
            )
        }
        return <div></div>
    };


    const innerElementType = ({ ...rest }) => (
        <div className='content-wrapper'
            style={{
                paddingLeft: GUTTER_SIZE,
                paddingTop: GUTTER_SIZE,
            }}
            {...rest}
        />
    );

    return <Grid
        className="Grid"
        columnCount={COLUMN_COUNT}
        columnWidth={COLUMN_WIDTH + GUTTER_SIZE}
        height={500}
        innerElementType={innerElementType}
        rowCount={ROW_COUNT}
        rowHeight={ROW_HEIGHT + GUTTER_SIZE}
        width={window.innerWidth}
    >
        {Cell}
    </Grid>
}

export default GridList