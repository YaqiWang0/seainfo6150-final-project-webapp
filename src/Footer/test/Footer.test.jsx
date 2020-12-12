import React from "react";
import Footer from "../Footer";

describe("Footer test", () => {

    it('render successfully', function () {
        const {container} = render(
            <Footer/>
        );
        expect(container).toMatchSnapshot();
    })
})