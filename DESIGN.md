---
name: JE Media
description: Cinematische Hochzeitsvideografie – emotional, persönlich, zeitlos.
colors:
  midnight-ink: "#0b0d12"
  screening-room: "#121722"
  deep-frame: "#1a2130"
  dark-border: "#252c3a"
  silver-grain: "#a7b0c0"
  soft-projection: "#f5f7fa"
  amber-filament: "#d7ad63"
typography:
  display:
    fontFamily: "'Cinzel', Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
  headline:
    fontFamily: "'Cinzel', Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.03em"
  title:
    fontFamily: "'Cinzel', Georgia, serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.02em"
  script:
    fontFamily: "'Great Vibes', cursive"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  pill: "999px"
  card: "16px"
  card-lg: "24px"
  input: "12px"
spacing:
  section: "5rem"
  card: "1.1rem"
  card-lg: "1.5rem"
  gap: "1.2rem"
components:
  button-primary:
    backgroundColor: "{colors.amber-filament}"
    textColor: "{colors.midnight-ink}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.amber-filament}"
    textColor: "{colors.midnight-ink}"
  button-ghost:
    backgroundColor: "rgba(215, 173, 99, 0.07)"
    textColor: "{colors.soft-projection}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1rem"
  button-ghost-hover:
    backgroundColor: "rgba(11, 13, 18, 0.65)"
    textColor: "{colors.soft-projection}"
  card:
    backgroundColor: "{colors.screening-room}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
---

# Design System: JE Media

## 1. Overview

**Creative North Star: "Amber Reel"**

The JE Media design system is the space before the film begins: dark, warm, expectant. Every surface is a screening room waiting for images that carry more weight than any interface element ever could. Amber Filament (#d7ad63) is not a brand accent in the conventional sense; it is atmospheric light, the glow of a projector aperture, the only warm source in a deliberately dark room. It appears sparingly, never decoratively.

Typography carries a deliberate tension. Cinzel's Roman-carved geometry anchors headings in something timeless, while Great Vibes script eyebrows breathe warmth and human presence into the hierarchy. The body type (Inter) stays completely out of the way: neutral, clear, invisible. This three-voice system signals that Joel is both the craftsman and the person, simultaneously professional and intimate.

The system rejects two failure modes by name: the generic videographer website (harsh black, high-voltage yellow, action-hero energy) and the corporate agency surface (cold grid, transactional tone, zero human presence). Every spacing, typographic, and color decision leans against both. Couples arriving here should feel invited, not processed.

**Key Characteristics:**
- Dark-first: cinema darkness as focus, never as trend
- Gold as warmth, not luxury signaling; rarity is the point
- Three-voice typography: Roman gravitas + calligraphy warmth + humanist clarity
- Generous whitespace; the eye rests, imagery breathes
- Personal singular: no "our team", no enterprise grid, no conversion-rate urgency

## 2. Colors: The Amber Reel Palette

A restrained five-value dark palette with a single gold source of warmth.

### Primary
- **Amber Filament** (#d7ad63): The sole chromatic voice in the system. Used for interactive states, process step numbers, FAQ toggles, accent eyebrow color, CTA buttons, and any UI element that carries the brand forward. Never used for decorative fills of large surfaces. If you see it everywhere, it is wrong.

### Neutral
- **Midnight Ink** (#0b0d12): The base surface. Page background, footer, main canvas. Not pure black; carries a slight blue-black cast (like film unexposed, like a room before the projector warms up).
- **Screening Room** (#121722): Slightly lifted surface for cards, section backgrounds (home-about), and any contained UI element that needs to sit above the base. The difference from Midnight Ink is intentional and visible; don't collapse them.
- **Deep Frame** (#1a2130): Navigation backgrounds on mobile, tab/chip backgrounds. One step lifted above Screening Room.
- **Dark Border** (#252c3a): Structural borders only. Divides, card outlines, input strokes. Not a design statement; a quiet separator.
- **Silver Grain** (#a7b0c0): Secondary text, muted body copy, captions, placeholder text. Named for the granular texture of analog film. It reads comfortably on all dark surfaces without competing with the primary text.
- **Soft Projection** (#f5f7fa): Primary text. Warm white with a faint blue cast, the color of projected light on a screen. Never pure white; the slight warmth is intentional.

### Named Rules
**The One Source Rule.** Amber Filament is the only chromatic color in the system. It earns its impact through rarity. If two things are gold on the same screen, one of them shouldn't be. Remove it until it means something again.

**The Warm Black Rule.** Never use #000 or pure #fff. Midnight Ink and Soft Projection are the absolute extremes. They are already chosen; do not collapse them to pure values.

## 3. Typography

**Display Font:** Cinzel (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, -apple-system, sans-serif fallback)
**Accent/Script Font:** Great Vibes (with cursive fallback)

**Character:** Cinzel's Roman stone-cut geometry and Great Vibes' flowing calligraphy are an unusual pairing that earns its tension: one reads like an inscription meant to last centuries, the other like a handwritten note slipped under a door. Together they define Joel as simultaneously serious craftsman and warm human presence. Inter disappears intentionally; it is the neutral glass the content shows through.

### Hierarchy
- **Display** (Cinzel, 700, clamp(2rem, 5vw, 3.4rem), lh 1.2, ls 0.03em): Hero headlines only. The primary emotional statement on any page. H1 in the hero section.
- **Headline** (Cinzel, 600, clamp(1.5rem, 3vw, 2.2rem), lh 1.3, ls 0.03em): Section headings (h2). FAQ page title, pricing page title, about page title.
- **Title** (Cinzel, 700, 1.1rem, lh 1.4, ls 0.02em): Card headings, process step titles (h3). The third tier of the hierarchy.
- **Script** (Great Vibes, 400, 2rem, lh 1.2): Section eyebrows only ("Meine Arbeit", "Was Paare sagen", "Euer großer Tag"). Appears as a `<span>` above each headline. Never used as a standalone heading; always paired with a Cinzel headline immediately below.
- **Body** (Inter, 400, 1rem, lh 1.65): All prose, card descriptions, FAQ answers. Maximum line length 65–75ch. Color: Silver Grain on cards, Soft Projection on open surfaces.
- **Label** (Inter, 600, 0.88rem, ls 0.05em, uppercase): Process step numbers, badge text, pricing add-on labels, "Coming Soon" caption under the Showreel animation.

### Named Rules
**The Script-Is-A-Whisper Rule.** Great Vibes only appears as a pre-heading eyebrow, never as a standalone heading, never in navigation, never in body copy. It is the human voice before the formal statement begins. Using it anywhere else breaks the system.

**The Scale Minimum Rule.** Never use fewer than three distinct weights in a section that has a heading + body structure. If there's only one typographic voice, the hierarchy has collapsed.

## 4. Elevation

This system uses **tonal layering**, not shadows. Depth is expressed through the stepped surface values (Midnight Ink → Screening Room → Deep Frame), not through box-shadow. The exception is interactive elements: buttons carry a subtle lift on hover (`transform: translateY(-1px)` only, no shadow), and Amber Filament CTA buttons over video backgrounds use a text-shadow for legibility rather than surface shadow.

The sticky header uses `backdrop-filter: blur(14px)` over a semi-transparent Midnight Ink. This is the only glassmorphism in the system, and it is structural (scrolling legibility), never decorative.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Motion on hover signals interactivity; it does not elevate the surface visually. Do not add `box-shadow` to cards, FAQ items, or pricing panels.

## 5. Components

### Buttons
The system has two button variants. Neither has a border-radius smaller than 999px (pill).

- **Shape:** Full pill (999px). No soft corners; pill only.
- **Primary:** Amber Filament fill (#d7ad63), Midnight Ink text. Padding 0.55rem 1rem. Font-weight 600. `transition: transform 0.2s ease`. Hover: `translateY(-1px)`.
- **Ghost:** rgba(215, 173, 99, 0.07) background, Soft Projection text, 1px Amber Filament border. Hover: rgba(11, 13, 18, 0.65) background. Backdrop-filter blur(14px) active on ghost buttons over imagery.
- **Disabled state:** opacity 0.65, cursor not-allowed, no transform.

### Chips / Tabs
Used in FAQ categories and similar filters.

- **Default:** #1a2130 background, #2d3648 border, #d5dbea text, 600 weight.
- **Active:** Amber Filament fill, Amber Filament border, Midnight Ink text, `box-shadow: 0 14px 30px rgba(215, 173, 99, 0.35)`.
- **Hover:** border-color rgba(215, 173, 99, 0.6).
- **Shape:** 999px pill.

### Cards
Cards in this system are content containers, not structural defaults. Use them only when content genuinely needs containment.

- **Corner Style:** Gently rounded (16px). Large feature cards (showreel box): 24px.
- **Background:** `linear-gradient(155deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))` over Screening Room base.
- **Border:** 1px #252c3a default. On open/active state: 1px rgba(215, 173, 99, 0.7).
- **Shadow Strategy:** None. Tonal layering only.
- **Internal Padding:** 1.1rem standard; 1.5rem for testimonial cards and feature containers.

### Inputs / Form Fields
- **Style:** 1px #252c3a border, #131926 background, 12px radius.
- **Focus:** border-color rgba(215,173,99,0.9) + box-shadow 0 0 0 3px rgba(215,173,99,0.18).
- **Placeholder:** rgba(167, 176, 192, 0.7).
- **Error:** border-color rgba(255,100,100,0.7). Error text: #ff9f9f, 0.88rem, 600.

### Navigation
The site header is a centered-logo split nav: two links left of the logo, two links right. The logo drops below the nav bar on load, then rises flush on scroll (CSS transition, 320ms cubic-bezier(0.2, 0.8, 0.2, 1)).

- **Desktop:** Sticky, backdrop-filter blur(14px), rgba(11,13,18,0.8) background. All nav links: Silver Grain default, Soft Projection on active/hover. Logo: 122px at rest, 86px scrolled.
- **Mobile:** Logo moves to left, hamburger menu button appears right. Mobile nav expands below header as a vertical link list with Screening Room card-style links.
- **No CTA button in header.** The primary conversion action lives in the Footer CTA section at page bottom, not in the nav.

### Accordion (FAQ / Pricing)
The system's primary interactive disclosure pattern. Used for FAQ items and pricing packages.

- **Closed:** 1px Dark Border, Screening Room base, +/- toggle icon (Amber Filament) at right.
- **Open:** border-color rgba(215,173,99,0.7), gradient-tinted background (amber 9%), panel animates open via max-height + opacity transition.
- **Toggle icon:** Circular badge, 1.4rem, 1px rgba(215,173,99,0.45) border, rgba(215,173,99,0.08) fill.

### Footer CTA (Signature Component)
A full-bleed cinematic section above the copyright footer. Video background (Hochzeit.mp4) with 90-70% Midnight Ink gradient overlay. Content centered. Script eyebrow + Cinzel headline + body line + action buttons. Minimum height 500px. This is the sole location for the primary "Anfrage stellen" CTA on marketing pages.

## 6. Do's and Don'ts

### Do:
- **Do** use Amber Filament on interactive states and essential UI affordances only. Its rarity is its power; the moment it appears, the eye should go there because nothing else is competing.
- **Do** pair every Cinzel headline with a Great Vibes script eyebrow when there is a section title structure. The script-then-Cinzel rhythm is the typographic identity of the system.
- **Do** give imagery breathing room. When a photo or video is present, reduce surrounding UI to its minimum. The work speaks; the interface steps back.
- **Do** use `transform: translateY(-1px)` as the exclusive hover motion for buttons. Consistent, minimal, purposeful.
- **Do** maintain the stepped dark surfaces: Midnight Ink for base, Screening Room for lifted cards, Deep Frame for navigation chips. Collapse any two and the spatial depth disappears.
- **Do** keep all body text at Silver Grain (#a7b0c0) inside cards and Soft Projection (#f5f7fa) on open dark surfaces. Never reverse this.

### Don't:
- **Don't** use gradient text (`background-clip: text` with gradient fill). This is the first reflex of generic AI design. Every heading in this system is solid color.
- **Don't** reproduce the generic videographer website: no high-contrast yellow-on-black, no action-hero energy, no "capture moments" slogans in stacked uppercase. The system is warm and specific, not loud and generic.
- **Don't** add agency-feeling UI: no multi-column feature grids with icon-heading-text cards, no "Our Services" section headers, no enterprise pricing tables. One person, one voice, one invitation.
- **Don't** use Great Vibes in navigation, buttons, body copy, or as a standalone heading. It is an eyebrow-only voice. Used anywhere else, it reads as decoration.
- **Don't** add glassmorphism surfaces decoratively. The only permitted blur-glass element is the sticky header (structural legibility). A blurred card or modal panel is not in this system.
- **Don't** add `box-shadow` to cards, FAQ items, or pricing panels. They are flat. Hover states use transform, not shadow.
- **Don't** place two Amber Filament elements in the same visual area when neither is interactive. The color signals interactivity or brand identity; never both at once and never decoratively.
- **Don't** use pure `#000` or pure `#fff`. The absolute extremes are Midnight Ink (#0b0d12) and Soft Projection (#f5f7fa). This is non-negotiable.
