/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";

import { afterEach } from "vitest";
import { RenderWrapper } from "../components/RenderWrapper";

afterEach(() => {
  cleanup;
});

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: RenderWrapper, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
