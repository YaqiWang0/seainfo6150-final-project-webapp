import React from "react"
import data from "./data";
import Gainer from "../Gainer";

describe("Gainer test", () => {
    const login = {
        login: true,
        userId: "12345",
        email: "test@test.com"

    }
    it('when the item is not clicked', function () {
        const {container} = render(<Gainer data={Object.values(data)} login = {login}/>);
        expect(container).toMatchSnapshot();
    })
})
