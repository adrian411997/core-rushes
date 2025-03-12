import React from "react";

import { render } from "@testing-library/react";

import App from "../../src/App"

describe("Root Component",()=>{
    it("should be in the document",()=>{
        render(<App/>)
    })
})