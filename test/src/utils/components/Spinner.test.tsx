import React from "react"

import { render } from "@testing-library/react"
import {CustomSpinner} from "../../../../src/utils/components/spinner/Spinner"

describe("CUSTOM SPINNER",()=>{
    it("should render custom spinner",()=>{
        render(<CustomSpinner/>)
    })
})