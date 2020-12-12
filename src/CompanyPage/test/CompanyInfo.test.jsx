import React from "react";
import data from "./data"
import CompanyInfo from "../CompanyDetail/CompanyInfo";
import Firebase from "../../Firebase/firebase";

describe("CompanyInfo test", () => {
    const login = {
        login: true,
        userId: "NOFjyl43m1Xy3rB4umSRERq8M2z1",
        email: "123456@test.com"
    }

    it('render successfuLly', function () {
        let firebase = new Firebase();
        const {container} = render(
                <CompanyInfo info = {data} firebase = {firebase} login = {login}/>
        );
        expect(container).toMatchSnapshot();
    })
})