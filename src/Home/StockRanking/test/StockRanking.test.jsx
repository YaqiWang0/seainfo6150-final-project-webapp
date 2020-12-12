import React from "react";
import data from "./GainerAndLoserData"
import StockRanking from "../StockRanking";

describe("StockRanking test", () => {
    const login = {
        login: true,
        userId: "12345",
        email: "test@test.com"

    }
    it('when the item is not clicked', function () {
        const {container} = render(<StockRanking gainer = {data.gainer} loser = {data.loser} login = {login}/>);
        expect(container).toMatchSnapshot();
    })
})