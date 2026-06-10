# Pet Care Landing Page Moodboard

## Overview

A premium, friendly, and emotionally engaging Pet Care Landing Page focused on trust, comfort, safety, and happiness.

The visual language should combine:

* Modern SaaS aesthetics
* Premium veterinary branding
* Organic shapes
* Warm photography
* Large rounded elements
* Soft illustrations
* Playful microinteractions

Design references:

* Airbnb
* Headspace
* BarkBox
* Chewy
* Modern Veterinary Clinics

---

# Tech Stack

## Styling

* Tailwind CSS v4
* BEM Methodology

Example:

```html
<section class="hero">
  <div class="hero__container">
    <div class="hero__content"></div>
    <div class="hero__media"></div>
  </div>
</section>
```

---

## Animations

### GSAP

Installation:

```bash
npm install gsap
```

Plugins:

```javascript
ScrollTrigger
```

Animations:

* Fade In
* Fade Up
* Scale In
* Floating Elements
* Stagger Cards
* Count Up Statistics
* Scroll Reveal
* Horizontal Carousel
* Hover Microinteractions

---

# Layout System

## Container

Default:

```css
max-width: 1440px;
padding-inline: 24px;
margin-inline: auto;
```

Large Screens:

```css
max-width: 1600px;
```

---

## Responsive Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## Mobile First

Base viewport:

```css
375px
```

Design must scale progressively.

---

# Color Palette

## Primary

```css
--color-primary: #173f43;
--color-primary-light: #245c61;
```

Usage:

* Headings
* Navigation
* CTA Buttons
* Footer
* Icons

---

## Secondary

```css
--color-secondary: #f3a18c;
```

Usage:

* Highlights
* Decorative Shapes
* Hover States
* Secondary CTAs

---

## Accent

```css
--color-accent: #f2c66d;
```

Usage:

* Statistics
* Badges
* Metrics
* Decorative Circles

---

## Mint

```css
--color-mint: #d9efeb;
```

Usage:

* Background Shapes
* Soft Sections
* Icon Containers

---

## Background

```css
--color-background: #faf8f5;
--color-surface: #ffffff;
```

No gray colors should be used throughout the design.

---

# Typography

## Heading Font

Font Family:

```css
Fraunces
```

Weights:

```css
700
800
```

Hero Title:

```css
font-size: clamp(3.5rem, 7vw, 6.5rem);
line-height: 1;
```

Section Titles:

```css
font-size: clamp(2rem, 4vw, 4rem);
```

---

## Body Font

Font Family:

```css
Poppins
```

Weights:

```css
400
500
600
```

Body:

```css
font-size: 1rem;
line-height: 1.8;
```

---

# Spacing System

```css
4px
8px
12px
16px
24px
32px
48px
64px
80px
120px
160px
```

---

# Radius System

## Buttons

```css
999px
```

---

## Inputs

```css
999px
```

---

## Cards

```css
24px
```

---

## Images

```css
32px
```

---

## Organic Shapes

```css
40% 60% 55% 45%
```

---

# Shadow System

## Card

```css
0 12px 32px rgba(23,63,67,.08)
```

---

## Hover

```css
0 20px 40px rgba(23,63,67,.12)
```

---

# Favicon

## Primary Version

Dog Paw

Style:

* Minimal
* Rounded
* Single Color

Color:

```css
#173f43
```

---

## Alternative Version

Heart + Paw

Color:

```css
#f3a18c
```

---

## Export Sizes

```text
16x16
32x32
48x48
64x64
180x180
192x192
512x512
```

---

# Visual Shapes System

The design should heavily rely on organic shapes.

---

## Blob A

Hero Background

```css
background: #d9efeb;
```

Size:

```css
500px - 700px
```

Radius:

```css
55% 45% 60% 40%;
```

---

## Blob B

Adoption Background

```css
background: #f3a18c;
```

Radius:

```css
40% 60% 45% 55%;
```

Rotation:

```css
transform: rotate(-12deg);
```

---

## Blob C

Statistics Badge

```css
background: #f2c66d;
border-radius: 50%;
```

Size:

```css
120px
```

---

# Navigation

## Desktop

Structure:

```text
Logo | Menu | CTA
```

Height:

```css
88px
```

Items:

* Home
* Services
* Adoption
* Testimonials
* Blog
* Contact

CTA:

```text
Book a Visit
```

---

## Sticky State

```css
backdrop-filter: blur(12px);
background: rgba(250,248,245,.85);
```

---

## Mobile Navigation

Type:

```text
Slide Drawer
```

Direction:

```text
Right to Left
```

Width:

```css
320px
```

Contains:

* Logo
* Navigation Links
* CTA Button
* Social Media Icons

---

# Button System

## Primary Button

Height:

```css
56px
```

Desktop Padding:

```css
padding-inline: 32px;
```

Mobile Padding:

```css
padding-inline: 24px;
```

Background:

```css
#173f43
```

Text:

```css
#ffffff
```

Radius:

```css
999px
```

Icon:

```text
Arrow Right
```

Hover:

```css
transform: translateY(-2px) scale(1.03);
```

---

## Secondary Button

Background:

```css
transparent
```

Border:

```css
2px solid #173f43
```

Hover:

```css
background: #173f43;
color: white;
```

---

# Sections

# 01 Hero

## Layout

Desktop

```text
┌────────────────────────────┬────────────────────────────┐
│                            │                            │
│ Headline                   │                            │
│ Description                │      Hero Pet Image       │
│ CTA Group                  │                            │
│ Statistics                 │                            │
│                            │                            │
└────────────────────────────┴────────────────────────────┘
```

Grid:

```css
1fr 1.1fr
```

Minimum Height:

```css
850px
```

Content:

* Headline
* Supporting Text
* Primary CTA
* Secondary CTA
* Statistics

Statistics:

```text
10K+ Happy Pets
500+ Adoptions
98% Satisfaction Rate
```

---

## Hero Image Treatment

Container Radius:

```css
48px
```

Behind Image:

* Large Mint Blob
* Floating Decorative Shapes
* Paw Icons

Image Style:

```css
object-fit: cover;
width: 100%;
height: 100%;
```

---

# 02 Services

Grid:

Desktop:

```css
grid-template-columns: repeat(5,1fr);
```

Tablet:

```css
grid-template-columns: repeat(3,1fr);
```

Mobile:

```css
grid-template-columns: repeat(2,1fr);
```

---

## Service Card

Structure:

```text
Icon
Title
Description
```

Card:

```css
padding: 32px;
border-radius: 24px;
background: white;
```

Icon Container:

```css
72px
72px
border-radius: 999px;
background: #d9efeb;
```

Services:

* Wellness Checkups
* Grooming & Spa
* Boarding & Daycare
* Training Programs
* Nutrition Guidance

---

# 03 Why Choose Us

Layout:

```text
Image | Benefits
```

Benefits:

* Certified Specialists
* Personalized Care
* Emergency Support
* Daily Updates
* Safe Facilities

---

# 04 Adoption Section

Background:

Mint Blob Container

Radius:

```css
120px
```

Content:

* Headline
* Description
* CTA
* Featured Pets

Pet Card:

```text
Image
Name
Breed
Age
Button
```

---

# 05 Testimonials

Component:

Carousel

Card Layout:

```text
Quote Icon
Review
Avatar
Name
Role
```

Card Style:

```css
padding: 40px;
border-radius: 32px;
background: white;
```

Shadow:

```css
0 20px 60px rgba(23,63,67,.08);
```

---

# 06 Blog

Layout:

3 Columns Desktop

1 Column Mobile

---

## Blog Card

Structure:

```text
Image
Category
Date
Title
Description
Read More
```

Image Ratio:

```css
aspect-ratio: 4 / 3;
```

Radius:

```css
24px;
```

---

# 07 Newsletter

Background:

```css
#173f43
```

Radius:

```css
32px
```

Padding:

```css
48px
```

Desktop Layout:

```text
Content | Form
```

Mobile Layout:

```text
Content
Form
```

Contains:

* Icon
* Heading
* Description
* Input
* Subscribe Button

---

# 08 Trust Badges

Layout:

```text
4 Columns
```

Items:

* Loving Environment
* Experienced Team
* Safe Facilities
* Open 7 Days

Icons Above Text

---

# 09 Footer

Desktop:

```text
Logo | Company | Services | Resources | Social
```

Mobile:

```text
Stacked Layout
```

Columns:

### Company

* About
* Careers
* Contact

### Services

* Grooming
* Boarding
* Training

### Resources

* Blog
* FAQ
* Adoption

### Social

* Instagram
* Facebook
* TikTok
* YouTube

---

# Background Decorations

Decorative Elements:

* Paw Prints
* Hearts
* Leaves
* Hand Drawn Lines
* Organic Blobs

Opacity:

```css
0.15 - 0.25
```

Positioning:

* Hero
* Services
* Adoption
* Newsletter
* Footer

---

# Icon Library

Preferred:

* Lucide
* Phosphor

Icons:

```text
PawPrint
Heart
ShieldCheck
Calendar
Mail
Phone
MapPin
Scissors
Stethoscope
GraduationCap
Home
Star
Bone
Cat
Dog
ArrowRight
```

---

# Photography Direction

Requirements:

* Real Photography
* Natural Lighting
* Warm Tones
* Happy Pets
* Human Interaction
* Premium Interior Spaces
* Clean Backgrounds
* High Resolution

Avoid:

* Artificial Stock Photos
* Harsh Shadows
* Dark Environments
* Overedited Images

---

# Image Suggestions

## Hero

https://images.unsplash.com/photo-1517849845537-4d257902454a

https://images.unsplash.com/photo-1548199973-03cce0bbc87b

---

## Adoption

https://images.unsplash.com/photo-1518717758536-85ae29035b6d

https://images.unsplash.com/photo-1574158622682-e40e69881006

---

## Grooming

https://images.unsplash.com/photo-1516734212186-a967f81ad0d7

---

## Veterinary

https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def

---

## Blog

https://images.unsplash.com/photo-1587300003388-59208cc962cb

https://images.unsplash.com/photo-1573865526739-10659fec78a5

https://images.unsplash.com/photo-1591768793355-74d04bb6608f

---

# GSAP Motion System

## Hero Entrance

```javascript
duration: 1.2
y: 50
opacity: 0 → 1
```

---

## Floating Shapes

```javascript
repeat: -1
yoyo: true
y: -20
duration: 4
```

---

## Service Cards

```javascript
stagger: 0.1
```

Trigger:

```javascript
ScrollTrigger
```

---

## Statistics

```javascript
Count Up Animation
```

---

## Testimonials

```javascript
Horizontal Carousel
```

---

## CTA Buttons

Hover:

```javascript
scale: 1.05
```

---

# Accessibility

Requirements:

* Semantic HTML
* Keyboard Navigation
* Visible Focus States
* Reduced Motion Support
* ARIA Labels
* Alt Text For All Images

---

# Performance

Target:

```text
95+ Lighthouse Score
```

Optimization:

* Lazy Loading
* Responsive Images
* WebP/AVIF
* Deferred Scripts
* Optimized GSAP Usage
* Font Preloading

---

# UX Principles

* One Primary CTA Per Section
* Large Touch Targets
* Mobile First
* Strong Visual Hierarchy
* Minimal Text Blocks
* Clear Navigation
* Emotional Storytelling
* Fast Interactions
* Accessible Components
* Fully Responsive
