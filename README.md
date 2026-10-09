# Lawrence High School

Website for Lawrence High School ICSE in HSR Layout, Bengaluru. Page copy lives in JSON under `content/` and is edited with [TinaCMS](https://tina.io). The site is a [Next.js](https://nextjs.org) app.

## Pages

| Route | Content |
| --- | --- |
| `/` | Home |
| `/about` | About the school |
| `/about/campus` | Campus |
| `/about/facilities` | Facilities |
| `/academics/kindergarten` | Kindergarten |
| `/academics/primary` | Primary, Grades 1–4 |
| `/academics/middle-school` | Middle School, Grades 5–7 |
| `/academics/high-school` | High School, Grades 8–10 |
| `/beyond-books` | Activities beyond the classroom |
| `/admissions` | Admissions |
| `/news` | News, results, achievements, and events |
| `/alumni` | Alumni stories |
| `/alumni/engagement` | Alumni engagement form |
| `/contact` | Contact details and frequently asked questions |
| `/recruitment` | Staff recruitment form |

School-wide details such as the address, phone numbers, and footer live in `content/settings/site.json`.

## Requirements

- Node.js (an active LTS release)
- npm

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The visual editor is at [http://localhost:3000/admin](http://localhost:3000/admin).

Local editing works without TinaCloud credentials. Copy `.env.example` to `.env` and fill in `NEXT_PUBLIC_TINA_CLIENT_ID`, `NEXT_PUBLIC_TINA_BRANCH`, and `TINA_TOKEN` when editors should use Tina on the deployed site. Create those values at [app.tina.io](https://app.tina.io).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts Tina and the Next.js dev server |
| `npm run build` | Builds the Tina admin, then the Next.js site |
| `npm start` | Serves the production build |

## Content

Copy for each page is a JSON file in `content/`. Most pages are a single file, for example `content/contact/contact.json`. News achievements and events are one file per item:

- `content/achievements/`
- `content/events/`

Images live in `public/images/`. In a heading, wrap a phrase in `*asterisks*` to emphasise it. A new line in that same field becomes a line break.

Tina collections are defined in `tina/config.ts`. Page collections cannot be created or deleted from the editor. Achievements and events can.

### Schema changes

TinaCloud refreshes its schema only when `tina/tina-lock.json` changes. After you add or rename a field in `tina/config.ts`:

1. Run `npx tinacms dev --no-server` so the lock file is regenerated. `tinacms build` does not update it.
2. Commit `tina/config.ts` and `tina/tina-lock.json` together.
3. Push to the branch named in `NEXT_PUBLIC_TINA_BRANCH`.
4. Run `npx tinacms build` after TinaCloud finishes indexing.

If the lock file is left unchanged, `npx tinacms build` fails with `ERR_CLOUD_CHECK_FAILED` because the hosted schema does not include the new fields.

## Project layout

```
app/            Next.js routes
components/     Page sections and shared UI
content/        Editable JSON copy
lib/            Content loaders and site data
public/         Images and the built Tina admin
tina/           TinaCMS schema
```

`tina/__generated__` and `public/admin` are created by the Tina CLI and are not committed.

## Deploy

`npm run build` produces the Next.js site and the Tina admin. Cloudflare deployment uses [OpenNext](https://opennext.js.org/cloudflare) (`open-next.config.ts` and `wrangler.jsonc`). The worker name is `lawrence-academy`.
