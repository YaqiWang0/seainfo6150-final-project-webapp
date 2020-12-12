import React from "react";

import Error from "../Error";

describe("Error test", () => {

    it('render successfully', function () {
        const {container} = render(
            <Error/>
        );
        expect(container).toMatchSnapshot();
    })
})