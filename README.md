# Employee Directory

A responsive static Employee Directory built for the React Fundamentals Assignment using React, Vite, JSX, functional components, props, and CSS.

## Technologies

- React
- Vite
- JSX
- JavaScript
- CSS

## Installation and Run

```bash
npm install
npm run dev
```

Create a project from scratch with:

```bash
npm create vite@latest employee-directory -- --template react
```

## Folder Structure

```text
src/
├── components/
├── data/
├── docs/
├── App.jsx
├── main.jsx
└── index.css
```

## Component Hierarchy

```text
App
└── PageLayout
    ├── Header
    ├── Main
    │   └── EmployeeDirectory
    │       └── EmployeeCard
    │           ├── Avatar
    │           ├── StatusBadge
    │           └── InfoRow
    └── Footer
```

## Props Flow

```text
App
 ↓ employees
EmployeeDirectory
 ↓ individual employee values
EmployeeCard
 ↓ smaller values
Avatar / StatusBadge / InfoRow
```

## Features Implemented

- Static employee data
- Five employee cards
- Functional components
- JSX
- Props and one-way data flow
- Props destructuring
- Internal and nested destructuring
- Default prop values
- `children` prop
- Rest props
- Conditional rendering
- `.map()` list rendering with stable keys
- Responsive CSS Grid
- Mobile, tablet, and desktop layouts
- Hover and keyboard focus styles

## Screenshots

Add your own screenshots of the running mobile and desktop views here before submission.

## Known Limitations

Static data only. This project intentionally does not use state, hooks, APIs, backend integration, routing, Context API, or state-management libraries.
