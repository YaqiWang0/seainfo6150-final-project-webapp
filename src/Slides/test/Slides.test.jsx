import React from "react";
import data from "./data"
import Slides from "../Slides";
import {fireEvent} from "@testing-library/react";

describe("Slides test", () => {

    it('render successfully', function () {
        const {container} = render(
            <Slides news = {data}/>
        );
        expect(container).toMatchSnapshot();
    })

    it('render successfully when click left arrow', function () {
        const {container, getByRole} = render(
            <Slides news = {data}/>
        );
        fireEvent.click(getByRole("left"));
        expect(container).toMatchSnapshot();
    })

    it('render successfully when click right arrow', function () {
        const {container, getByRole} = render(
            <Slides news = {data}/>
        );
        fireEvent.click(getByRole("right"));
        expect(container).toMatchSnapshot();
    })

    it('render successfully when click dot', function () {
        const {container, getByRole} = render(
            <Slides news = {data}/>
        );
        fireEvent.click(getByRole("dot"));
        expect(container).toMatchSnapshot();
    })
})