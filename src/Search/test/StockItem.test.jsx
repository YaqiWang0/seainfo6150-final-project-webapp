import React from "react";
import data from "./singleData";
import StockItem from "../Stocks/StockItem/StockItem";

describe("StockItem test", () => {

    it('render successfully', function () {
        const {container} = render(
            <StockItem stock = {data} test = {true}/>
        );
        expect(container).toMatchSnapshot();
    })
})