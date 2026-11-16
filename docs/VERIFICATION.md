# Verification report — 9 November 2026

- `npm run check`: passed against the production build.
- Component tests: 23 passed.
- Browser tests: 29 passed across desktop 1440px, mobile 390px and mobile 320px. One mobile-only test is intentionally skipped on desktop.
- Axe automated accessibility checks: no critical or serious findings on the main page or open case-study dialog in the three tested viewports.
- Manual visual review: desktop and 390px mobile hero/work layouts inspected.
- Tested native dialog Escape, keyboard focus loop and restoration, body-scroll cleanup, mobile menu, project filters, clipboard success/failure, legacy bookmarks, safe external-link attributes, valid PDF download bytes, reduced motion, horizontal overflow and uncaught browser errors.
- Production dependency audit: zero known vulnerabilities reported by npm at review time.
- Build: JavaScript about 76.5 KB gzip; CSS about 6.2 KB gzip. Includes a local copy of the supplied CV.

## Corrections found through tests

Adjusted several small-text colors to meet contrast checks. Added a modal focus loop and moved focus restoration until after React removes the dialog. Corrected two test-harness issues involving fake timers and the menu button's changing accessible name.

## Limits

LinkedIn returned HTTP 999; the CV link is present, but the profile contents could not be checked. Email links were verified without sending messages. Clipboard outcomes are simulated in automated tests. Docker is not installed, so the Docker configuration was reviewed but not executed. CI workflow is provided; its remote GitHub run is not claimed. Chrome was tested; Safari and Firefox were not. Accessibility automation does not establish complete WCAG conformance. External repository visibility can change.

## Security follow-up

The GitHub token previously committed to env.example must be revoked by the owner. The current file is sanitized; Git history still retains the original. A separate public Gruham repository contains a Stripe test secret in its payment function; rotate that credential too. No credential values are included in the new source or built website.

## Alignment correction - 9 November 2026

Aligned the two selected-work cards by giving each card a shared height and placing its tags at the bottom of the flexible description area. The tags, separator, recognition text, and case-study actions now share the same baseline at 850px and 1200px widths. Verified visually at the affected width, passed 23 component tests and 29 browser tests after the change (one desktop skip for a mobile-only case).

## Illustration label refinement - 9 November 2026

Removed the decorative “FIG. 01” label from the hero illustration after review. The production build passed. The prior 23 component and 29 browser tests remain the latest full suite; no interaction or layout behavior changed in this text-only edit.

Removed the decorative plus sign from the hero illustration after review because it resembled a button. This and the figure label are absent from the latest production build; no interactive behavior changed.

## Evidence and browser review — 9 November 2026

Revised the hero to name the work more directly, brought the two case studies' existing evidence into the cards, and added implementation details verified from the three public repositories. The financial extraction figure is explicitly limited to a 10-record experiment. No new employment impact numbers were introduced. The Gruham card links only to its GitHub source, per the owner's preference.

The updated site was reviewed visually at desktop 1440px and mobile 390px/320px. Firefox and WebKit smoke checks at 1440px and 390px confirmed the primary heading, no horizontal overflow or page errors, and case-study dialog open/Escape behavior. These were automated desktop-browser emulations, not physical-phone tests.

## Readability polish — 9 November 2026

Increased supporting copy, project descriptions, evidence text, tags, and award metadata for easier scanning on small screens. Removed the decorative arrows from the four non-interactive recognition rows. Shortened the public project summaries so the implementation detail adds information instead of repeating the opening sentence.

## Certification links — 9 November 2026

Added five issuer-verified professional credentials: Databricks Machine Learning Professional, Databricks Machine Learning Engineer Associate, Databricks Data Engineer Professional, Databricks Data Engineer Associate, and Anthropic's Claude Certified Developer — Foundations. The three professional or foundation credentials are featured as cards; the two associate credentials are shown as compact links.

## Certification layout refinement — 9 November 2026

Moved professional certifications out of the education column into a full-width section. The three featured credentials now share a row with aligned verification actions; the two associate credentials sit below in two columns. Education and awards occupy their own balanced row. On phones, the cards and supporting rows stack, with larger titles and date labels.

The production build, 24 component tests, and 29 Chrome browser tests passed (one desktop skip for a mobile-only test). Visual checks at 1440px, 850px, 390px, and 320px confirmed no horizontal overflow or clipped card text. Verification actions share the same baseline in both desktop layouts. All five official credential destinations are preserved.
