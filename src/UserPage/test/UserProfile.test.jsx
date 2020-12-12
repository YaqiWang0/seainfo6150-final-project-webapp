import React from "react";
import UserProfile from "../UserInfo/UserProfile";
import Firebase from "../../Firebase";

describe("UserProfile test", () => {

    const login = {
        login: true,
        userId: "eDTim61B16bVzVpItdODRzNGiEq1",
        email: "123456@test.com"
    }

    it('render successfully', () => {

        const firebase = new Firebase();
        const {container} = render(
            <UserProfile email={login.email} userId={login.userId} firebase = {firebase}/>
        );
        expect(container).toMatchSnapshot();
    })
})