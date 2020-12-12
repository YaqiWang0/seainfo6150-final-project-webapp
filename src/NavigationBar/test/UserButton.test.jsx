
import React from 'react'
import UserButton from "../UserButton/UserButton";


describe("UserButton test", () => {

    it('render successfully', function () {
        const {container} = render(
            <UserButton text = {"login"}/>
        );
        expect(container).toMatchSnapshot();
    })
})