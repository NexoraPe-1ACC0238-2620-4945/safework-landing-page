# SafeWork landing page

Static, bilingual product site for NexoraPe's Android workplace-safety project (UPC 1ACC0238, 202620). English is the default; the language switch selects Latin American Spanish and remembers the selection when browser storage is available.

## Local preview

Serve this directory over HTTP; translation files are fetched from the same origin. No backend, npm installation, API credentials or build step is required:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`. Edit `index.html`, `styles.css`, `site.js` and the matching keys in `i18n/en.json` and `i18n/es.json`. `translate.js` applies text and accessible labels without injecting HTML. The existing three plan URLs remain available, describing conceptual proposals rather than active subscriptions.

## Publishing

This repository currently has only `main`. Use `feature/...` -> PR to `main`, with review and checks before integration. Existing GitHub Pages settings are preserved: **main, repository root (`/`), legacy Pages build**. No hosting settings or deployment workflow were replaced.

Public site: https://nexorape-1acc0238-2620-4945.github.io/safework-landing-page/

## Product scope and APK status

The page distinguishes the current Android workflow (invitation registration, session/profile, incident reporting/query, employer self-assignment, start/close and recipient notifications) from future product proposals. It does not promise offline synchronization, iOS, push delivery, automatic invitation emails, Google Play availability or commercial subscriptions.

The tested app version is **0.1.0**, minimum **Android 8.0 / API 26**, installed manually as an APK. Registration requires a company invitation; EMPLOYER is granted administratively. The public download remains **pending**: the owner chose to publish the matching mobile source changes before creating a GitHub Release. The highlighted download control is disabled and its status is explicit. No placeholder release URL or APK has been published by this landing delivery.

When that prerequisite is complete, publish the exact verified artifact in the mobile repository, verify its release/code provenance and hash, then replace the disabled control with the actual HTTPS asset link in both languages. Do not bundle credentials or invitations. The landing never contacts the API itself.

## Assets and validation

See [asset provenance and licenses](assets/README.md) and [validation record](docs/landing-validation.md). Existing assets and the product video are retained. Screens show synthetic test data. No fabricated testimonials, customer metrics or contact addresses are used.
