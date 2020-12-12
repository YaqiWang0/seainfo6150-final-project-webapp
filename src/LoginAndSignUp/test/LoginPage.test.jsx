import React from "react";
import LoginPage from "../LoginPage";

describe("Footer test", () => {

    it('render successfully', function () {
        const {container} = render(
            <LoginPage/>
        );
        expect(container).toMatchSnapshot();
    })
})