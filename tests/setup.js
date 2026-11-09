import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  configurable: true,
  value: vi.fn(),
});
Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
  configurable: true,
  value() {
    this.setAttribute("open", "");
    this.querySelector("[autofocus]")?.focus();
  },
});
Object.defineProperty(HTMLDialogElement.prototype, "close", {
  configurable: true,
  value() {
    this.removeAttribute("open");
  },
});

beforeEach(() => {
  window.history.replaceState(null, "", "/");
  document.body.style.overflow = "";
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
  document.body.style.overflow = "";
});
