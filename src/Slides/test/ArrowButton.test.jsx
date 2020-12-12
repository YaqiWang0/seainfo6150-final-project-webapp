import React from "react";
import ArrowButton from "../ ArrowButton";

describe("ArrowButton test", () => {

    it('render successfully', function () {
        const {container} = render(
            <ArrowButton />
        );
        expect(container).toMatchSnapshot();
    })
})