import React from "react";
import NavigationBar from "../NavigationBar";

describe("NavigationBar test", () => {

    it('render successfully when login true', function () {
        const login = {
            login: true,
            userId: "NOFjyl43m1Xy3rB4umSRERq8M2z1",
            email: "123456@test.com"
        }
        const {container} = render(
            <NavigationBar login={login}/>
        );
        expect(container).toMatchSnapshot();
    })

    it('render successfully when login false', function () {
        const login = {
            login: false,
            userId: "NOFjyl43m1Xy3rB4umSRERq8M2z1",
            email: "123456@test.com"
        }
        const {container} = render(
            <NavigationBar login={login}/>
        );
        expect(container).toMatchSnapshot();
    })
})