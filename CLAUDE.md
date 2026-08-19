# Hoops Link Prep — Project Context

This file gives Claude Code full context on the Hoops Link Prep website project. Read this before making changes.

## What This Is

Website for Hoops Link Prep, a post-grad basketball prep program in Trinity, FL / greater Tampa Bay area, founded by Coach Kaine McColley. The site also covers in-person and online individual/group training, and links out to Hoops Link Media (social).

Live site: hoopslinkprep.com
Repo: this folder, deployed via Render (static site), connected to GitHub at github.com/hoopslinkprep/hoopslinkprep
Deployment: any push to `main` auto-deploys on Render. No build step (plain HTML/CSS/JS, one file: `index.html`).

## Brand Identity

**Origin story:** The name and original logo concept ("Hoops-Link", hyphenated) was created by Kaine's father around 2013–2014, whose slogan was "Giving back to the game." Kaine's father passed away during Kaine's senior year of high school. This is referenced in the About section with a legacy photo and italicized slogan quote. IMPORTANT: everywhere else on the site, the brand name is written as "Hoops Link" (no hyphen) — the hyphenated "Hoops-Link" only appears once, in quotes, specifically in that legacy callout.

**Color palette:** Pulled directly from the father's original design and translated to web:
- Background: `#0A0908` (near-black, warm undertone)
- Elevated surface: `#171310` / `#1F1A15`
- Cream (primary text): `#EDE3D0`
- Muted text: `#A79B87`
- Line/border: `#332A20`
- Gold: `#D4A73C`, Gold bright: `#F2C94C`, Gold dark: `#8C6D1F`
- Maroon (small accents): `#5C1210`
- Note: the site's accent color was originally red/maroon, then was globally switched to gold (see git history) to unify with the separate "Hoops Link Media" gold sub-brand, which uses gold/black consistently on Instagram.

**Fonts:** Anton (display headers), Manrope (body), JetBrains Mono (labels/stats/eyebrows). For standalone social graphics built with Python/PIL, use Big Shoulders Bold (headlines), IBM Plex Serif Bold Italic (pull quotes), Instrument Sans Regular (subtitles/credentials — NOT JetBrains Mono, which reads as "AI-generated" for body-length credential text per explicit user feedback).

**Design note:** Avoid the "//" code-comment prefix convention and heavy monospace font use on captions/subtitles — user explicitly flagged this as looking AI-generated. Monospace is fine for short stat labels, eyebrows, and price tags, not for sentence-length captions.

## Site Structure (current section order, top to bottom)

1. Hero — headline, countdown clock (currently set to Aug 31 enrollment deadline, update as needed), CTAs
2. Post-Grad Program — the core offer, pain-point framing, housing (Trinity FL, max 3–4 out-of-state players/year, apartment complex is "Regatta at Trinity" — NOT currently named on site, kept vague intentionally), training area (greater Tampa Bay)
3. About / "Meet the Creator" — Coach Kaine's bio (playing career: Nature Coast Technical HS → Nova Southeastern under Jim Crutchfield, highest win % in NCAA history → Bluefield State under Devin Hoehn → Arkansas-Pine Bluff under Solomon Bozeman), legacy design callout
4. Testimonials — auto-advancing carousel (6s/slide, pauses on hover/interaction), mix of text-quote cards and full designed "graphic cards" (photo + quote baked into one image, built externally with PIL, stored as jpgs in /images). Currently: Shane Hunter, Coach Solomon Bozeman, Coach Jordan Fee, Rey Idowu (graphic card), Rey's highlight video (separate slide, Instagram embed), Jacob Yeager (marked "★ POST-GRAD PROGRAM ★", last slide)
5. "Real Next Level Exposure" — standalone photo section (Nature Coast Technical training photo)
6. Apply — application form (POSTs to Formspree, endpoint in the form's `action` attr), Calendly link for booking calls, Financial Aid Application (Google Form link)
7. Online Training — Silver/Gold tier cards, NO pricing shown publicly (pricing not finalized), both tiers link to Apply
8. Hoops Link Media — gold-themed section (scoped CSS override), Instagram (@hoopslinkmedia) and Twitter/X (@kainemccolley1) links, featured Instagram reel embed
9. In-Person Training — pricing IS shown here: Individual $75/session, Individual 3-pack $175, Group $30/session (3–5 players, MS/HS/Girls/Boys divisions), Group 3-pack $75. Square payment links on each button. Scarcity banner: "only 2 individual clients and 2 group sessions" currently available.

Footer: email (info@hoopslinkprep.com), WhatsApp link (wa.me/qr/2RAWRQTTPULUK1).

## Key Business Facts (for any new copy)

- Founder: Coach Kaine McColley — certified personal trainer, 4 years at Nova Southeastern (South Region champions), All-American Honorable Mention at Bluefield State, top-10 3pt shooter nationally, 2x HBCU graduate (Bluefield State + Arkansas-Pine Bluff)
- Training philosophy: mobility-first lower body (ATG/Athletic Truth Group + GOATA principles — Kaine trained directly with ATG founder Ben Patrick in 2017–18 pre-fame, and GOATA coach "Bam" in 2022), max-strength upper body (football-style), "Mental Flow Framework" = daily Morning Pages (from "The Artist's Way" by Julia Cameron) + affirmations + visualization
- "Academy of the Flow" is the program's philosophical identity/tagline family
- Coach Holmes / Pro Home Sports (Tampa Bay) — the post-grad program Kaine himself went through
- Online mentorship (Gold tier specifically) concept: 12-week program, includes "The Hoops Link Playbook" (a written manual — not yet written), personalized development plan, video library, alumni access
- Do NOT publish exact online tier pricing — still being finalized with Kaine's mentor as of last discussion (rough range was being discussed around $1,500–$3,000/12 weeks but explicitly NOT finalized or public)
- Housing cost (~$15K figure mentioned once) and apartment complex name ("Regatta at Trinity") — known internally, NOT to be published on site per Kaine's explicit instruction

## Testimonial Sourcing — IMPORTANT

- All testimonial quotes are real, given directly by the named people for this purpose.
- Photos used: verify before reusing/repurposing. Coach Bozeman and Coach Fee photos are personal/official photos provided directly by Kaine. Shane Hunter and Rey Idowu photos are personal photos Kaine confirmed ownership/rights to. **Never use a stock/press/Getty-style photo for a testimonial graphic** — this was explicitly flagged and declined once already (a Getty-watermarked image was correctly refused). If a new photo looks like professional press/wire photography without clear personal provenance, ask before using.

## Workflow Notes

- User is non-technical, works via Terminal copy-paste. Typical flow: edit `index.html` locally (or via Claude Code now), `git add . && git commit -m "..." && git push`, Render auto-deploys in ~1–2 min.
- Images live in `/images` relative to `index.html`.
- Google Analytics (GA4) is installed with custom event tracking on: Calendly clicks, Square payment link clicks, Financial Aid form clicks, Apply nav clicks, WhatsApp clicks, social link clicks, and successful form submissions.
- Instagram embeds use the official `<blockquote class="instagram-media">` + `embed.js` method — legitimate, not a copyright concern.
