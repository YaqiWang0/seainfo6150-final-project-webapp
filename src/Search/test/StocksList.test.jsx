import React from "react";
import data from "./data";
import StocksList from "../Stocks/StockLists";

describe("StocksList test", () => {

    it('render successfully', function () {
        const {container} = render(
            <StocksList stocks = {data} test = {true}/>
        );
        expect(container).toMatchSnapshot();
    })
})