# BlackInSTEMM Website

This repository is for the BlackInSTEMM website. To build it, we used Claude to put together a plain HTML/CSS/JS website for the BlackInSTEMM collective network. No build tools, no frameworks — just files you can open, edit, and re-upload.

## General Website Description

This is a **single-page site** — everything lives in one file, [index.html](index.html), as a series of sections stacked top to bottom:

1. **Hero + Member Organizations grid** — the welcome banner, plus a grid of all member organizations (logo, name, social links)
2. **Mission** (`id="mission"`)
3. **Values** (`id="values"`)
4. **Events** (`id="events"`) — currently just one image, not individual event listings
5. **Contact** (`id="contact"`) — contact info + form

The nav bar at the top links to these sections with anchor links (e.g. `href="#mission"`), which jump down the page instead of loading a new file. To reorder sections, cut and paste the whole `<section>...</section>` block to a new spot in `index.html`.

## Previewing the site on your computer

The Member Organizations grid is built with JavaScript, and some browsers block that when you just double-click the HTML file (it'll look broken — empty where the grid should be). To preview the site properly:

1. Open a terminal in this folder.
2. Run:
   ```bash
   python3 -m http.server 5544
   ```
3. Open `http://localhost:5544` in your browser.
4. When you're done, go back to the terminal and press Ctrl+C to stop it.

## How to change the color scheme

Open [css/style.css](css/style.css) and look at the very top of the file, in
the `:root { ... }` block (Section 1, "THEME VARIABLES"). Every color used
anywhere on the site is defined once there as a line like:

```css
--color-accent-gold: #D9A441; /* gold — primary buttons, active nav underline, highlights */
```

Change the hex code (e.g. `#D9A441`) to a new color and the whole site updates
automatically. The comment next to each variable tells you what it controls.
This is a warm, light theme: `--color-bg` and `--color-bg-alt` are the two
background shades, `--color-primary` is the deep green used for the nav/
footer/headings, and `--color-accent-gold`/`--color-accent-red` are the two
accent colors.

Fonts work the same way, a few lines below the colors (`--font-heading` and
`--font-body`) — "Fraunces" (headings) and "Inter" (body/UI), loaded from
Google Fonts via the `<link>` tags in `index.html`'s `<head>`.

## How to edit page text

Open [index.html](index.html) in any text editor and edit the text between
tags directly. You don't need to touch anything inside `< >` angle brackets
— those are HTML tags that control layout/structure, not visible text.

The Member Organizations grid is the exception — that content lives in
`js/main.js` instead (see the next section).

## How to add a new member organization

Open [js/main.js](js/main.js) and find the `memberOrganizations` list near
the top. Copy an existing entry — the whole block from `{` to `},` — paste
it as a new entry in the list, and fill in the values:

```js
{
  name: "Acme STEM Society",
  logo: "images/organizations/acme-logo.png",
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/acmestem" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/acmestem" }
  ]
}
```

- `logo` should point to a file you've dropped into `images/organizations/`.
- `socialLinks` can have as many entries as the organization has — or be an
  empty list (`socialLinks: []`) if they have none.
- Save the file and refresh the page — no other steps needed.

## How to swap in new images

- **Logo:** replace `images/logo/blackinstemm-logo.png` with your new file.
  If the new file has a different name or file type, update the `<img src="...">`
  path in `index.html`'s header to match.
- **Events image:** replace `images/events/events-roadmap.png` with your new
  file, and update the `<img src="...">` path in the Events section of
  `index.html` to match if the filename changes.
- **Organization logos:** drop exported images into `images/organizations/`
  and point to them from the `logo` field of that organization's entry in
  `js/main.js` (see above).

## Setting up the contact form

The contact form has no backend of its own (this is a plain static site), so
it needs a free form service to actually deliver submissions to your inbox:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form — it gives you a URL like `https://formspree.io/f/abcd1234`.
3. Open `index.html`, find the `<form ...>` tag in the Contact section, and
   replace `REPLACE-ME-FORM-ID` in its `action` attribute with your real form URL.

Until that's done, submitting the form will show a Formspree error page.
Real contact info (the `mailto:` email link) works immediately — just
replace any remaining `REPLACE-ME@example.org` placeholders in the Contact
section and footer.

If you'd rather not use a form service at all, you can delete the entire
`<form class="contact-form">...</form>` block and rely on just the
"Prefer Email?" mailto link next to it.

## File structure

```
index.html             The entire site — hero/orgs, mission, values, events, contact
css/style.css          All styling (colors, fonts, layout)
js/main.js             Mobile nav menu + Member Organizations data & rendering
images/logo/           Site logo
images/organizations/  Organization logos — drop new ones in here
images/events/         The Events section image
```
