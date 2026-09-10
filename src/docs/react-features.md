# React Features and JSX

## JSX

JSX is a syntax extension that allows JavaScript to describe UI using an HTML-like syntax. JavaScript expressions can be placed inside curly braces.

```jsx
<h1>Employee Directory</h1>
<p>{employee.name}</p>
```

## Components

Components are reusable pieces of UI. They improve maintainability by giving each part of the interface a focused responsibility.

## Reusability

A component can be reused with different props:

```jsx
<EmployeeCard name="Priya Sharma" />
<EmployeeCard name="Rahul Verma" />
```

## One-Way Data Flow

Data normally moves from parent to child through props:

```text
App → EmployeeDirectory → EmployeeCard
```

## Declarative UI

Declarative UI describes what the interface should look like from the current data rather than manually describing every DOM operation.

## Component Composition

Component composition means combining smaller components to build a complete page:

```text
PageLayout
├── Header
├── EmployeeDirectory
└── Footer
```

This project demonstrates all of these concepts without using hooks, routing, APIs, or backend integration.
