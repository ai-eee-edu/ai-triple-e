# AI Triple E · Website 2.0 Design Prototype

This is the **high-fidelity design and working interaction prototype** for the next design milestone of the AI Triple E teacher-facing website. It is intentionally **not a claim of an approved or validated final toolkit**.

## What is new

- Brand styling based on the supplied AI Triple E logo (teal, greenish teal, warm orange, white).
- Clean homepage with separate entry points for teachers and visitors.
- Six module cards and a reusable, task-specific module page.
- Bangla-first, mobile-responsive guided form, with an English toggle inside the module page.
- Stage 1: classroom context. Stage 2: task-specific RCTC fields, resources, constraints and optional details. Stage 3: editable RCTC prompt and ARR teacher review.
- Conditional module-specific fields across all six teaching modules.
- Editable prompt, Copy, TXT download, no AI key or database.
- Real logo, brief written module instructions and truthful 'video not yet published' status.
- Modern responsive styles, keyboard labels and visible validation.
- Added explanatory visitor page without unsupported impact statistics.

## Preview

Open `index.html` directly or, ideally, run `python -m http.server 8000` from the folder and visit `http://localhost:8000/`.

To test the complete interaction:

1. Open Teacher Toolkit → Lesson Planning.
2. Fill in the topic and learning outcome (or go to Stage 2 and use **Fill sample**).
3. Choose task, classroom resources, internet/printing, and optionally advanced details.
4. Generate the prompt. It opens `result.html` and shows the editable RCTC prompt and ARR checklist.
5. Copy or download the prompt. ARR is a manual teacher decision.

Use the **Sample** button for a demonstration only. Its learning outcome is **not** an official NCTB outcome.

## Folder map

- `index.html` Homepage design.
- `toolkit.html` All six tasks.
- `module.html?module=lesson-plan` Reusable module page. Other IDs: `teaching-methods`, `materials`, `reading`, `learner-support`, `assessment`.
- `result.html` Copyable editable prompt and ARR decision support.
- `initiative.html` Concept-stage project showcase.
- `assets/css/site.css` Design tokens, layout and responsiveness.
- `assets/js/data.js` Module-specific fields and preliminary roles/tasks.
- `assets/js/module.js` Teacher form, RCTC draft generation and navigation.
- `assets/js/result.js` Prompt editing, copy/download and manual ARR.
- `assets/js/legacy-module-instructions.js` Prompt rules copied from the earlier website's drafts, **not verified approved toolkit text**.
- `assets/js/ui.js` Common menu, iconography and module cards.
- `assets/img/` Supplied team logo assets.
- `docs/` Design previews and tests.

## Crucial content limitations

The team's approved toolkit files were not provided as accessible local sources for this build. Therefore, **RCTC ordering, prompt instructions, task-specific fields and ARR questions must be compared and corrected against the authorised toolkit** before public or pilot use. They are explicitly **design-stage scaffolding**.

The visitor page does not include published learning-poverty statistics, policy authorities or specific pilot timelines because the exact verified proposal materials have not been supplied here. Add those when finalised.

There are no tutorial videos in this package. The module makes that clear instead of linking to fictional content.

## Privacy and technical notes

The website is static HTML/CSS/JavaScript, with no paid dependency and no AI API. Inputs are processed locally. It uses the browser's **sessionStorage** to carry the generated prompt to the ARR result page and enable editing. Session storage is on the device and can persist within the current browser session; avoid sharing devices with confidential information. No child identifying information should be provided to this or external AI tools.

You may deploy this package to GitHub Pages without any build step. Use a stable deployment URL before printing QR codes. Pilot testing with school participants requires necessary institutional permission and safeguards.

## Next development steps

1. Verify exact RCTC templates and choose the authoritative wording for all six modules.
2. Conduct a practical teacher walkthrough and simplify questions where needed.
3. Upload real tutorial videos and create permanent module QR codes.
4. Connect the final policy proposal, verified references and team materials to the visitor page.
5. Test on actual low-end Android phones and slow networks before release.
