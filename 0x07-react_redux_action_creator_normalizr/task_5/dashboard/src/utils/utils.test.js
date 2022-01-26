/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the year 2021", () => {
  act(() => {
    render(getFullYear(), container);
  });
  expect(container.textContent).toBe("2021");
});

it("checks getFooterCopy returns the correct string when true", () => {
  act(() => {
    render(getFooterCopy(true), container);
  });
  expect(container.textContent).toBe("Holberton School");
});

it("checks getFooterCopy returns the correct string when false", () => {
  act(() => {
    render(getFooterCopy(false), container);
  });
  expect(container.textContent).toBe("Holberton School main dashboard");
});

it("checks getLatestNotification returns the correct string", () => {
  act(() => {
    render(getLatestNotification(), container);
  });
  expect(container.textContent).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
