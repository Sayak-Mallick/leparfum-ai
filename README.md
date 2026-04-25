# leparfum.ai

Landing page for [leparfum.ai](https://leparfum.ai) — a platform that generates personalised fragrances through AI conversations.

**Live:** https://leparfum-ai.vercel.app/

---

## Stack

- **Next.js** + **TypeScript**
- **Tailwind CSS**
- **GSAP** + **ScrollTrigger** — scroll-driven animations
- **Lenis** — smooth scroll

---

## What I worked on

Frontend only. I built the full landing page from the provided designs — markup, styling, animations, and making it work across screen sizes.

A few things that took more thought than expected:

**Animations without fighting the layout** — sections like `HowItWorks` use a scroll-driven vertical timeline where a line fills as you scroll and each step animates in from the side. Getting GSAP's `ScrollTrigger` to play nicely with Lenis required making sure Lenis ticks before ScrollTrigger on every frame, otherwise scroll positions would drift.

**The bottle orbit** — 12 bottles arranged in a circle, rotating continuously using CSS `animation: spin`. The tricky part was the orbit radius: a hardcoded `translateY` value breaks at different viewport sizes. Ended up using a CSS custom property with `clamp()` so the radius scales with the viewport without any JS resize logic.

**Responsive without breaking the desktop** — most components were designed desktop-first with fixed pixel values and absolute positioning. Making them mobile-responsive meant rethinking the layout structure (stacked vs side-by-side, fixed heights vs fluid) while keeping the desktop output pixel-perfect. The testimonials slider, FAQ accordion, and orbit section each needed a different approach.