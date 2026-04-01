# TMDB search (UI + BFF)

React UI that talks to a small GraphQL BFF, which proxies [The Movie Database (TMDB)](https://www.themoviedb.org/) API v3.

**Configuration:** TMDB credentials live in a **`.env`** file at the **repository root** (same level as `bff/` and `ui/`). That file is listed in `.gitignore` and is not committed—create or edit `.env` on your machine before running the BFF.

## Prerequisites

- **Node.js** (LTS recommended)
- **pnpm** (`npm install -g pnpm`)

## TMDB credentials

1. Open [TMDB](https://www.themoviedb.org/) and sign in.
2. Go to **Settings → API** (or [direct link](https://www.themoviedb.org/settings/api)).

Use **either** auth style in `.env` (the BFF prefers `TMDB_API_KEY` when it is set):

- **`TMDB_API_KEY`** — TMDB **API Key (v3)**; sent as the `api_key` query parameter on each request (typical setup).
- **`TMDB_ACCESS_TOKEN`** — **API Read Access Token**; sent as `Authorization: Bearer …` (used only if `TMDB_API_KEY` is not set).

## Environment file (`.env`)

At the **repository root** (next to the `bff` and `ui` folders), use a `.env` like:

```env
TMDB_API_KEY=your_v3_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3
PORT=4000
```

- **`TMDB_BASE_URL`** — Optional. Defaults to `https://api.themoviedb.org/3` if omitted.
- **`PORT`** — Optional. BFF listen port; defaults to **4000** if unset or invalid.
- **`TMDB_API_KEY`** or **`TMDB_ACCESS_TOKEN`** — At least one must be correct or TMDB will respond with **401**.

If you change **`PORT`**, point the UI at the same origin: update `uri` in `ui/src/apollo.ts` (for example `http://localhost:YOUR_PORT/graphql`).

## Install

From the repository root:

```bash
pnpm install
```

## Run

**UI and BFF together** (recommended):

```bash
pnpm dev
```

This runs the `start` script in both workspace packages in parallel (`pnpm --parallel --filter ui --filter bff start`).

**Separately** (from the repo root, one terminal each):

```bash
pnpm --filter bff start   # GraphQL at http://localhost:PORT/graphql (default PORT=4000)
pnpm --filter ui start    # Parcel dev server at http://localhost:3000
```

Same thing via root shortcuts: `pnpm bff` and `pnpm ui` (they call the filters above).

Open **http://localhost:3000** in a browser. The UI is configured to call the BFF at `http://localhost:4000/graphql` (see `ui/src/apollo.ts`).

If Parcel fails with **port 3000 could not be used**, something else is already bound to that port—stop that process or change the port in `ui/package.json` (`parcel --port …`).

## Project layout

| Package | Role |
|--------|------|
| `ui` | React + Apollo Client + Parcel |
| `bff` | Apollo Server + TMDB HTTP client |
