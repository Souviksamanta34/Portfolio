# Portfolio verification

## Commands

- `npm test`: Vitest + Testing Library component and interaction checks.
- `npm run build`: production asset compilation.
- `npm run test:e2e`: Playwright tests using installed Google Chrome.
- `npm run check`: all three steps in sequence.

Playwright builds and previews the production bundle on `http://127.0.0.1:4174`, reusing an existing server when available. Browser projects cover desktop 1440 Ã— 1000, mobile 390 Ã— 844, and narrow mobile 320 Ã— 740. On a machine without Google Chrome, install Chrome or intentionally change the browser channel after provisioning Playwright Chromium. No browser download is performed automatically by this repository.

## Automated cases

| Area | Checks |
| --- | --- |
| Professional content | One H1, current engineering role, two years of experience, employer and working email destination |
| Public project policy | Explicit allowlist of three verified public project URLs; category filters, selection state and result count |
| Case studies | Correct content, contributions and evaluation; real native dialog opening, close button, cancel/Escape, restored focus and restored body scrolling |
| Keyboard | Enter activates case study, focus remains in the modal, Escape returns focus, mobile-menu Escape behavior |
| Clipboard | Correct address is copied; success is announced; denied permission has a useful fallback; feedback clears |
| Mobile navigation | Menu state, visible links, toggle, Escape, section navigation and closing after selection |
| Old bookmarks | Previous hash routes map to current sections, including initial load and subsequent hash changes |
| Links and downloads | Internal anchors resolve; external destinations use HTTPS and opener protection; rÃ©sumÃ© download returns actual PDF bytes |
| Responsive layout | No horizontal document overflow at each major section across 1440, 390 and 320 pixel widths; case-study tags and actions align at 850 and 1200 pixel widths |
| Reduced motion | Preference is respected for smooth scrolling and case studies remain usable |
| Accessibility | Axe WCAG A/AA checks on the page and open dialog, failing on critical or serious violations |
| Runtime | No uncaught browser errors while loading and traversing the portfolio |

## Scope and limitations

Component tests run in jsdom; native dialog and scrolling methods are mocked there. Playwright independently verifies genuine browser Escape, focus, dialog and layout behavior. Clipboard permission outcomes are simulated so both paths are deterministic; operating-system permissions vary.

External social/repository URLs are checked for structure and safe attributes. These tests do not authenticate to LinkedIn, exercise third-party sites, send email, verify employer claims, or guarantee the future availability of external URLs. GitHub visibility was checked during research; the public allowlist should be reviewed if repository visibility changes. Automated accessibility checks supplement visual and keyboard review and do not establish complete WCAG conformance.

The professional case-study claims come from the supplied CV and public profile. The limited document-extraction experiment is explicitly described as a 10-record evaluation, not a production-wide accuracy guarantee.

## Execution record

Record actual command results in the delivery report. This file documents the cases and does not itself claim that a test run passed.

Latest execution: 23 component tests and 26 browser tests passed; 1 desktop skip for a mobile-only case. See docs/VERIFICATION.md.
