import React from "react";
import data from "./singleData";
import NewsItem from "../NewsItem/NewsItem";

describe("NewsItem test", () => {

    it('render successfully', function () {
        const {container} = render(
            <NewsItem data = {data}/>
        );
        expect(container).toMatchSnapshot();
    })
})