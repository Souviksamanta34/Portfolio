# Certification collection

The homepage shows three featured credentials and a **View all certifications** link with no count. The full collection currently contains ten unique credentials and lives at `#/certifications`; the hash route supports direct links and refreshes on static hosting without rewrite rules.

Maintain credentials in `src-next/content.js`. Each entry has a name, issuer, public verification URL, and featured flag. Keep three entries featured. Optional dates use `Issued Mon YYYY · Expires Mon YYYY`. The collection orders featured entries first, then known issue dates newest first. Undated entries follow in their configured order. Unknown dates are never inferred; visitors can check the issuer page. Month-only expiry labels switch to Expired after the final day of that month.

The public Credly pages confirmed Souvik Samanta as the recipient of Claude Developer Professional and Claude Architect Professional. The previously verified Credly pages also confirm Claude Associate Foundations, Claude Architect Foundations, AWS Developer Associate, and Claude Developer Foundations. Their static page metadata did not expose dates, so these were omitted. LinkedIn returned an access restriction; no additional LinkedIn credentials were imported. The Databricks credentials retain their existing metadata.

## Verification — 16 November 2026

- Production build and 26 component tests passed.
- Existing browser suite: 29 passed, one intentional desktop mobile-menu skip.
- New collection browser tests passed at 1440, 390, and 320 pixels after fixing the shared brand link's accessible name.
- Tests cover all eight credential destinations, three homepage cards, a count-free link, direct entry, refresh, page title, focus on navigation, return anchor, browser Back/Forward, expiry logic, horizontal overflow, and an automated accessibility scan.

No search or filters are needed for this collection size. Future entries are added to the shared data without expanding the homepage.
