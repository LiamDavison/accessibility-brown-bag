import React from "react";
import JestAxe from "./index";
import {render} from "@testing-library/react";

const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

describe("JestAxe", () => {
    it("should not have any violations", async () => {
        const {container} = render(<JestAxe/>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    })
})