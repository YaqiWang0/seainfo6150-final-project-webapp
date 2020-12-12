import React from "react";
import NewsList from "../NewsList";
import data from "./data";

describe("NewsList test", () => {

    it('render successfully', function () {
        const {container} = render(
            <NewsList data = {Object.values(data)}/>
        );
        expect(container).toMatchSnapshot();
    })
})