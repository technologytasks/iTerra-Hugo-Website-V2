# iTerra ThermoVolt — Hugo + Decap CMS

A fully editable Hugo site for iTerra ThermoVolt. Every section, heading, body text, image, stat, card, and team member is editable through the Decap CMS admin interface at `/admin`.

---

## Project Structure

```
iterra-hugo/
├── hugo.toml                  ← Hugo site config
├── netlify.toml               ← Netlify build + redirect config
├── content/
│   └── _index.md              ← ALL page content lives here (CMS-editable)
├── static/
│   ├── admin/
│   │   ├── index.html         ← Decap CMS entry point
│   │   └── config.yml         ← CMS field definitions (every editable field)
│   └── images/                ← Drop your images here
└── themes/
    └── iterra/
        ├── theme.toml
        ├── layouts/
        │   ├── index.html          ← Homepage layout (assembles partials)
        │   └── partials/
        │       ├── head.html
        │       ├── nav.html
        │       ├── mobile-menu.html
        │       ├── hero.html
        │       ├── marquee.html
        │       ├── heat-battery.html
        │       ├── charge.html
        │       ├── materials.html
        │       ├── field-validation.html
        │       ├── safety.html
        │       ├── gateway.html
        │       ├── products.html
        │       ├── industrial.html
        │       ├── market.html
        │       ├── compare.html
        │       ├── team.html
        │       ├── partners.html
        │       ├── contact.html
        │       └── footer.html
        └── static/
            ├── css/main.css
            └── js/main.js
```

---

## Local Development

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) v0.110+
- Node.js (for local CMS testing, optional)

### Run locally
```bash
hugo server -D
```
Site runs at `http://localhost:1313`

### Test CMS locally (optional)
```bash
npx decap-server
```
Then in `static/admin/config.yml`, uncomment `local_backend: true`.
Open `http://localhost:1313/admin` to edit content locally without Git.

---

## Deploying to Netlify

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Connect it to [Netlify](https://netlify.com) — build settings auto-detected from `netlify.toml`.
3. In Netlify dashboard → **Identity** → Enable Identity.
4. Under Identity → **Services** → Enable **Git Gateway**.
5. Invite yourself as a user (Identity → Invite users).
6. Visit `https://yoursite.netlify.app/admin` and log in.

---

## Adding Your Images

Copy your images into `static/images/`. The CMS will also let you upload images directly through the media picker in the admin interface.

Required images referenced in default content:
- `static/images/iterra-logo.png`
- `static/images/bg.jpeg`
- `static/images/material_photo1.jpeg`
- `static/images/material_photo2.jpeg`
- `static/images/thermovolt_field_trial_data.jpeg`
- `static/images/reto.jpeg`
- `static/images/farhana.jpeg`
- `static/images/irfan.jpeg`

---

## CMS Editable Sections

Every section of the page is editable through `/admin`:

| Section | What you can edit |
|---|---|
| Hero | Eyebrow, title, subtitle, background image, 3 stats, scale items |
| Marquee | All scrolling text items |
| Heat Battery | Title, body, flow card, 3 use-case cards |
| Charge Sources | Title, body, 2 charge cards, 3 stats |
| Materials | Title, body, 2 columns with bullets, 2 photos |
| Field Validation | Title, body, chart image, chart caption, 5 feature cards |
| Safety | Title, body, 3 feature cards |
| Smart Gateway | Title, body, 4 flow steps |
| Products | Title, body, 4 product cards (kWh, name, desc, status badge) |
| Industrial | Title, body, 4 sector cards |
| Market | Title, body, 4 stat boxes |
| Comparison Table | Title, body, all table rows |
| Team | Title, team members (name, role, photo, bio) |
| Partners | Title, body, partner cards |
| Contact | Title, subtitle, email, button text, locations |
| Footer | Copyright notice, trademark notice |
