
import React from 'react'
import SearchBar from "../SearchBar/SearchBar";


describe("SearchBar test", () => {

    it('render successfully', function () {
        const {container} = render(
            <SearchBar/>
        );
        expect(container).toMatchSnapshot();
    })
})