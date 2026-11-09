import React from "react";
import { describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src-next/App.jsx";
import { caseStudies, certifications, profile } from "../src-next/content.js";

describe("Professional content and usable destinations", () => {
  it("presents one primary heading, current employment, experience and contact", () => {
    render(<App />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "AI systems.Built for real work.",
    );
    expect(screen.getByText("2 years")).toBeInTheDocument();
    expect(screen.getByText(/production incidents and document intelligence/)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "System Engineer" }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText("Tata Consultancy Services").length,
    ).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /Get in touch/ })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
    expect(
      screen.getByRole("link", { name: "Skip to content" }),
    ).toHaveAttribute("href", "#main");
  });

  it("shows verified professional certification links", () => {
    render(<App />);
    const links = certifications.map((certification) =>
      screen.getByRole("link", { name: new RegExp(certification.name) }),
    );
    expect(links).toHaveLength(5);
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", certifications[index].url);
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  it("provides internal anchors that resolve, usable external URLs and local résumé downloads", () => {
    const { container } = render(<App />);
    for (const link of container.querySelectorAll('a[href^="#"]')) {
      expect(
        document.getElementById(link.getAttribute("href").slice(1)),
        link.outerHTML,
      ).not.toBeNull();
    }
    for (const link of container.querySelectorAll('a[target="_blank"]')) {
      expect(new URL(link.href).protocol).toBe("https:");
      expect(link.rel.split(" ")).toEqual(
        expect.arrayContaining(["noopener", "noreferrer"]),
      );
    }
    expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
      "href",
      profile.linkedin,
    );
    const downloads = [...container.querySelectorAll("a[download]")];
    expect(downloads).toHaveLength(3);
    for (const link of downloads)
      expect(link.getAttribute("href")).toBe(profile.resume);
  });
});

describe("Public project discovery", () => {
  it("shows the three vetted public projects and never exposes private project links", () => {
    render(<App />);
    const region = screen.getByRole("region", {
      name: "More things I’ve made.",
    });
    expect(within(region).getAllByRole("article")).toHaveLength(3);
    const repos = within(region)
      .getAllByRole("link", { name: /View .* on GitHub/ })
      .map((a) => a.getAttribute("href"));
    expect(repos.sort()).toEqual(
      [
        "https://github.com/Souviksamanta34/Breast_Cancer_Classification_Using_NN",
        "https://github.com/Souviksamanta34/demo-001",
        "https://github.com/Souviksamanta34/gruham",
      ].sort(),
    );
  });

  it.each([
    ["Web", "Gruham"],
    ["Mobile", "StokiGen"],
    ["ML", "Neural classification"],
  ])("filters %s projects and restores all results", async (category, name) => {
    const user = userEvent.setup();
    render(<App />);
    const region = screen.getByRole("region", {
      name: "More things I’ve made.",
    });
    const filter = screen.getByRole("button", { name: category, exact: true });
    await user.click(filter);
    expect(filter).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: "All", exact: true }),
    ).toHaveAttribute("aria-pressed", "false");
    expect(within(region).getAllByRole("article")).toHaveLength(1);
    expect(within(region).getByRole("heading", { name })).toBeInTheDocument();
    expect(within(region).getByRole("status")).toHaveTextContent(
      "1 projects shown",
    );
    await user.click(screen.getByRole("button", { name: "All", exact: true }));
    expect(within(region).getAllByRole("article")).toHaveLength(3);
  });
});

describe("Case-study dialogs", () => {
  it.each(caseStudies.map((s) => [s.shortTitle]))(
    "opens %s, contains its contribution and restores focus/scroll on close",
    async (title) => {
      const user = userEvent.setup();
      render(<App />);
      const trigger = screen.getByRole("button", { name: `View ${title}` });
      document.body.style.overflow = "auto";
      await user.click(trigger);
      const dialog = screen.getByRole("dialog", { name: title });
      expect(dialog).toHaveAttribute("open");
      expect(
        within(dialog).getByRole("heading", { name: "My contribution" }),
      ).toBeInTheDocument();
      expect(within(dialog).getAllByRole("listitem")).toHaveLength(3);
      expect(
        within(dialog).getByRole("heading", { name: "Outcome & evaluation" }),
      ).toBeInTheDocument();
      expect(document.body.style.overflow).toBe("hidden");
      await user.click(
        within(dialog).getByRole("button", { name: "Close case study" }),
      );
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(document.body.style.overflow).toBe("auto");
      expect(trigger).toHaveFocus();
    },
  );

  it("handles the browser cancel event and restores focus", async () => {
    const user = userEvent.setup();
    render(<App />);
    const trigger = screen.getByRole("button", {
      name: "Read case study: Agentic incident remediation",
    });
    await user.click(trigger);
    fireEvent(
      screen.getByRole("dialog"),
      new Event("cancel", { bubbles: false, cancelable: true }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe("");
  });

  it("restores page scrolling when the application unmounts with a dialog open", async () => {
    const user = userEvent.setup();
    const view = render(<App />);
    await user.click(
      screen.getByRole("button", { name: "View Agentic incident remediation" }),
    );
    view.unmount();
    expect(document.body.style.overflow).toBe("");
  });
});

describe("Copy contact address", () => {
  it("copies the actual address and announces success", async () => {
    const user = userEvent.setup();
    const copy = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue(undefined);
    render(<App />);
    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );
    expect(copy).toHaveBeenCalledWith(profile.email);
    expect(screen.getByText("Email copied")).toHaveAttribute("role", "status");
  });

  it("announces a rejected clipboard request and keeps email links available", async () => {
    const user = userEvent.setup();
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
      new Error("Permission denied"),
    );
    render(<App />);
    await user.click(
      screen.getByRole("button", { name: "Copy email address" }),
    );
    expect(
      screen.getByText("Copy unavailable. Use the email link to get in touch."),
    ).toHaveAttribute("role", "status");
    expect(screen.getByRole("link", { name: /Get in touch/ })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
  });

  it("clears success feedback after five seconds", async () => {
    vi.useFakeTimers();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
    render(<App />);
    await act(async () => {
      fireEvent.click(
        screen.getByRole("button", { name: "Copy email address" }),
      );
    });
    expect(screen.getByText("Email copied")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.queryByText("Email copied")).not.toBeInTheDocument();
  });
});

describe("Navigation and legacy URLs", () => {
  it("toggles the mobile navigation and closes on Escape, restoring toggle focus", async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole("button", { name: /Open menu/ });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("closes the mobile navigation when following a section link", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: /Open menu/ }));
    await user.click(
      within(
        screen.getByRole("navigation", { name: "Main navigation" }),
      ).getByRole("link", { name: "Selected work" }),
    );
    expect(screen.getByRole("button", { name: /Open menu/ })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it.each([
    ["/projects", "work"],
    ["/experience", "experience"],
    ["/education", "about"],
    ["/opensource", "projects"],
    ["/contact", "contact"],
    ["/home", "home"],
    ["/splash", "home"],
  ])("redirects old #%s bookmarks to #%s", (oldHash, newId) => {
    window.history.replaceState(null, "", `#${oldHash}`);
    render(<App />);
    expect(window.location.hash).toBe(`#${newId}`);
    expect(document.getElementById(newId)).not.toBeNull();
  });

  it("supports legacy hash changes after initial load", () => {
    render(<App />);
    window.history.replaceState(null, "", "#/projects");
    fireEvent(window, new HashChangeEvent("hashchange"));
    expect(window.location.hash).toBe("#work");
  });
});
