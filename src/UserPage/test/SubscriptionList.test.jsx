import React from "react";

import Firebase from "../../Firebase";
import SubscriptionList from "../UserInfo/SubscriptionList";

describe("SubscriptionList test", () => {

    const login = {
        login: true,
        userId: "NOFjyl43m1Xy3rB4umSRERq8M2z1",
        email: "123456@test.com"
    }

    it('render successfully', () => {
        const firebase = new Firebase();
        const {container} = render(
            <SubscriptionList login = {login} firebase = {firebase}/>
        );
        expect(container).toMatchSnapshot();
    })
})