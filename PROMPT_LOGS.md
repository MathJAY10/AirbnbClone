# AI Prompt History & Development Logs

This document contains the chronological record of AI prompts, refinement iterations, and instructions used during the development of the **Airbnb Listing Page Clone**.

---

## 📌 Project Overview
- **Project**: Airbnb Listing Clone 
- **Tech Stack**: Next.js 16 (App Router), TypeScript, CSS Modules (Vanilla CSS)
- **Core Focus**: Pixel-perfect visual fidelity, fluid micro-interactions, sticky boundary scroll dynamics, and responsive design.

---

## 🛠️ Chronological Prompt Logs

### Phase 1: Project Scaffolding & Component Architecture
#### Prompt 1: Foundation & Data Setup
> "Set up a pixel-perfect clone of the Airbnb listing page for 'Amor de Goa' in Candolim using Next.js, TypeScript, and CSS Modules. Structure components cleanly: Header, Hero Photo Gallery, Overview, Amenities, Availability Calendar, Booking Sidebar, Reviews, Location, Host, House Rules, and Nearby Stays."

#### Prompt 2: Desktop Sticky Booking Sidebar Scroll Behavior
> "Fix the desktop Booking/Reserve sidebar scroll behavior to match the reference exactly.
> 
> **Requirements**:
> 1. Inspect the parent two-column layout where `BookingCard` is rendered.
> 2. Keep the booking sidebar inside the main content column/grid so `position: sticky` is constrained by the correct parent height.
> 3. Do NOT use `position: fixed`.
> 4. Do NOT hardcode JavaScript scroll-position calculations.
> 5. Use CSS sticky behavior with the correct parent/container structure.
> 6. Check for parent `overflow`, `height`, `align-items`, and positioning rules that may prevent sticky from working properly."

---

### Phase 2: Visual Accuracy & UI Polish (Header, Guest Favourite & Reviews)
#### Prompt 3: Header Menu & Icons Alignment
> "Make changes like this exactly in screenshots:
> - Header: 3 lines for login/signup hamburger menu button and Airbnb logo and globe logo.
> - Guest Favourite card: Make it match the reference with dual laurel branch framing, 4.95 rating, and vertical rating/reviews dividers."

#### Prompt 4: Reviews Section Hero Rating
> "Implement the 4.95 Guest Favourite hero card in the Reviews section matching the reference screenshot, with category rating progress bars and authentic guest review cards."

---

### Phase 3: Photo Gallery & Interactive Photo Tour Modal
#### Prompt 5: Photo Tour Modal Navigation
> "Fix the Photo Tour behavior to match the reference Airbnb page exactly.
> 
> **Requirements**:
> - Sticky top header (64px).
> - Sticky horizontal category/room navigation bar.
> - Clicking a room smoothly scrolls internal `.body` container to the corresponding section.
> - Active room category highlights automatically while scrolling using `IntersectionObserver`."

#### Prompt 6: Photo Thumbnail Preview Strip
> "Add a PHOTO THUMBNAIL STRIP at the top of the Photo Tour, matching the reference screenshot.
> 
> The final structure should be:
> 1. Photo Tour header
> 2. Photo thumbnail strip (approx 140px wide thumbnails, 8px radius, with labels)
> 3. Room category navigation
> 4. Scrollable room sections
> 
> Reuse existing local images and connect thumbnail clicks to the existing room scroll function."

#### Prompt 7: Scroll-Dependent Category Navigation
> "Modify the Photo Tour navigation behavior:
> - **Initial State**: When Photo Tour is opened at the top, the top room navigation bar should NOT be visible (only header + thumbnail strip + first room section).
> - **Scroll State**: Once the user scrolls DOWN past the thumbnail strip, the category navigation should smoothly slide in and stick below the 64px header.
> - **Scroll to Top**: When scrolling back to the top, hide the navigation bar again.
> - Use `.body` internal scroll container / IntersectionObserver with smooth CSS transition."

---

### Phase 4: Location & Neighbourhood Section
#### Prompt 8: Neighbourhood Highlights Refinement
> "Update the Neighbourhood highlights section to visually match the reference screenshot:
> - Heading: 'Neighbourhood highlights' (22px semibold #222).
> - Description: 'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.'
> - Show more: Add 'Show more >' action with SVG right chevron and interactive toggle to reveal full text.
> - Match spacing and horizontal divider below."

---

### Phase 5: Smooth Carousel Animation & Optimizations
#### Prompt 9: Nearby Stays Smooth Sliding Transition
> "Fix the transition/animation of the 'More stays nearby' carousel.
> 
> **Current Issue**: Clicking next/previous instantly replaces cards without animation.
> **Required**: Implement a CSS transform-based horizontal carousel track (`translateX(0%)` to `translateX(-50%)`) with 380ms smooth cubic-bezier easing. Keep both pages mounted inside `.carouselViewport` to prevent flash or layout shifts."

---

### Phase 6: Code Cleanup & Version Control
#### Prompt 10: Repository Cleanup for Git Push
> "Clear all trash, scratch, and temporary files (large recordings, raw scraped JSONs/HTMLs, duplicate asset folders), create a proper `.gitignore`, verify production build, and prepare clean commit for GitHub."

---

## 💡 Prompting Strategy & Best Practices Followed
1. **Constraint-Driven Prompting**: Specifying exact CSS requirements (`position: sticky` vs `fixed`, avoiding hardcoded JS scroll timers, preserving DOM hierarchy).
2. **Visual Reference Alignment**: Iteratively matching layout, typography, laurel branches, and spacing against provided screenshot frames.
3. **Progressive Enhancement**: Building features modularly (first core layout, then sticky behaviors, then animations, then performance optimizations).
4. **Zero-Regression Mandate**: Explicit instructions to preserve existing functionality (Escape key listeners, body scroll locking, responsive media queries) on every edit.
