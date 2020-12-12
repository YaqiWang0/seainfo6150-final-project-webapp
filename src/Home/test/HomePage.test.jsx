import React from "react";
import HomePage from "../HomePage";
import data from "../test/data";


describe("Home Page test", () => {
    it("render correctly when login", () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
            useParams: () => ({
                userId: '12345',
                login: true,
                email: 'test@gmail.com'
            }),
            useRouteMatch: () => ({ url: '/' }),
        }));
        const { container  } = render(<HomePage fetchedData = {data.news} gainer = {data.gainer} loser = {data.loser}/>);
        expect(container ).toMatchSnapshot();
    })
    it("render correctly when logout", () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
            useParams: () => ({
                login: false
            }),
            useRouteMatch: () => ({ url: '/' }),
        }));
        const { container  } = render(<HomePage fetchedData = {data.news} gainer = {data.gainer} loser = {data.loser}/>);
        expect(container ).toMatchSnapshot();
    })
})