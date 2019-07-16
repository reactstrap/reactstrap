import React from "react";
import {
  render,
  fireEvent,
  waitForDomChange,
  cleanup
} from "@testing-library/react";
import { UncontrolledCollapse } from "../";
import { toHaveClass } from "@testing-library/jest-dom";

expect.extend({ toHaveClass });

describe("UncontrolledCollapse", () => {
  let toggler;
  let togglers;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <button id="toggler">Click Me</button>
        <button class="toggler">Toggler 1</button>
        <button class="toggler">Toggler 2</button>
      </div>`;
    toggler = document.getElementById("toggler");
    togglers = document.getElementsByClassName("toggler");
  });

  afterEach(() => {
    if (jest.isMockFunction(UncontrolledCollapse.prototype.toggle)) {
      UncontrolledCollapse.prototype.toggle.mockRestore();
    }
    document.body.innerHTML = "";
    toggler = null;
    togglers = null;
    cleanup();
  });

  it("should be collapsed by default", () => {
    const { getByText } = render(
      <UncontrolledCollapse defaultOpen={false} toggler="#toggler">
        Yo!
      </UncontrolledCollapse>
    );

    const el = getByText("Yo!");
    expect(el).toHaveClass("collapse");
  });

  it("should trigger Collapse to expand when it is clicked", async () => {
    const { getByText } = render(
      <UncontrolledCollapse defaultOpen={false} toggler="#toggler">
        Yo!
      </UncontrolledCollapse>
    );

    fireEvent.click(toggler);

    const el = getByText("Yo!");

    expect(el).toHaveClass("collapsing");

    await waitForDomChange(el);
    expect(el).toHaveClass("collapse show");
  });

  it("should toggle for multiple togglers", async () => {
    const { getByText } = render(
      <UncontrolledCollapse defaultOpen={false} toggler=".toggler">
        Yo!
      </UncontrolledCollapse>
    );

    const el = getByText("Yo!");

    fireEvent.click(togglers[0]);

    await waitForDomChange(el);
    expect(el).toHaveClass("collapse show");

    fireEvent.click(togglers[1]);

    await waitForDomChange(el);
    expect(el).toHaveClass("collapse");
  });
});
