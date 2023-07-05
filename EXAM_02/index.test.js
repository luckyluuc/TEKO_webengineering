import {sum} from "./index.js";
import {expect, it} from "@jest/globals";

it('sum test', () => {
    expect(sum(1,1)).toBe(2);
});