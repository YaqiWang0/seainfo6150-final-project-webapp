import React from "react";
import data from "./data"
import RankingItem from "../RankingItem";

describe("RankingItem test", () => {
    const login = {
        login: true,
        userId: "12345",
        email: "test@test.com"

    }
    it('when the item is not clicked', function () {
        const {container} = render(<RankingItem isGainer={false} stock={data} key={data.ticker} login={login}/>);
        expect(container).toMatchSnapshot();
    })
})