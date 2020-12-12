
import React from 'react'
import Logo from "../Logo/Logo";


describe("Logo test", () => {

    it('render successfully', function () {
        const {container} = render(
            <Logo />
        );
        expect(container).toMatchSnapshot();
    })
})