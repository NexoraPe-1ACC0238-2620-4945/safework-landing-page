# Landing redesign validation

Prepared on 2026-10-10 from `main` at `9d489dd5caf65669c37de2daa3ad29f788cda74f`, in an isolated clone on `feature/landing-redesign`. Existing mobile worktrees and uncommitted Android changes were preserved. This delivery modifies only the landing repository.

## Scope

The owner authorized using the HTML as a visual guide when the originally mentioned ZIP was unavailable. The redesign uses separate source files, retains the existing resources/video and adopts the SafeWork violet/dark identity. It adds responsive navigation, actual app reference screens, interactive incident-state explanations, roles, installation guidance, conceptual plans and bilingual FAQs. Prices remain labeled proposals with no checkout or payment claims.

## Executed checks

Local checks ran in real headless Chrome through Playwright, with browser-generated screenshots:

- **14 viewport/language combinations passed**: widths 1440, 1024, 900, 768, 390, 360 and 320 px, each in English and Spanish. No horizontal overflow was detected after the tablet adjustment.
- Internal anchors, mobile menu expansion/Escape dismissal, incident/notification screen switching, all four incident-state controls, FAQ expansion and the explicitly disabled pending-download control passed.
- Language switching and persistence after reload/across all three plan pages passed. Both translation dictionaries contain every markup key.
- Requested stylesheet/scripts, displayed screen/icon/logo assets and the retained product video returned HTTP 200. Images decoded successfully and video metadata loaded. This does not claim a complete audiovisual content review.
- No browser JavaScript exceptions or HTTP error responses were observed during the run.
- Seven axe-core checks reported **0 detected violations** for the selected WCAG A/AA rules: desktop and mobile home pages in both languages, plus the three English plan pages. This is an automated check, not a full accessibility certification.
- SHA-256 comparison confirmed all **18 pre-existing assets are unchanged**. Planned public text files were checked against the private demo credential values without printing them; no matches were found. Tools, private fixtures, APKs and ZIPs are outside the landing source set.

Visual inspection of real desktop/mobile browser captures confirmed the hierarchy, screen framing, readable contrast and stacked mobile sections. A contrast issue and language persistence bug found during preparation were corrected before publication. There is no application build step for this static site. Git whitespace checks are run before committing.

Publication uses a feature PR to main because no test branch exists in this repository. Main protection/rules and the existing Pages source were inspected; no protections or hosting settings were changed. The deployment owner authorized standard PR integration. The published page and resources must be checked after Pages reports the integrated main commit; that deployment result is reported in the delivery/PR follow-up rather than assumed from local tests.

## Explicit pending checks

- APK publication/download: deliberately deferred by the owner until the matching mobile source changes are published. The exact previously tested APK was not rebuilt or replaced; no public download success is claimed.
- Physical browser testing on an actual phone, screen-reader testing and a full manual accessibility audit are not claimed by automated viewport checks.
- Caption/transcript review of the retained project video and a supplied team video remain pending. No transcript was invented.
- Render's free-service cold-start behavior is outside this static landing delivery; no availability or response-time guarantee is made.

No Android/backend source, database, Render configuration, credentials, invitations or private fixtures are included. No Resend integration, public administrator registration, automatic email delivery or Google Play distribution was added.
