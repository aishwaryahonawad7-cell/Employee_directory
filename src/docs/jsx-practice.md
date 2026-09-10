# JSX Practice

## 1. Heading containing a name

```jsx
<h1>Your Name</h1>
```

## 2. Variable inside a paragraph

```jsx
const department = "Engineering";

<p>Department: {department}</p>
```

## 3. Button

```jsx
<button className="primary-button">Click Me</button>
```

## 4. Image

```jsx
<img
  src="https://via.placeholder.com/100"
  alt="Employee profile"
/>
```

## 5. Two sibling elements

```jsx
<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>
```

## 6. Correct invalid JSX

```jsx
<div className="employee-card">
  <h2>Employee</h2>
  <p>Department: Engineering</p>
</div>
```

## 7. Why className?

JSX uses the DOM property name `className` for CSS classes rather than the HTML attribute spelling `class`.

## 8. Why must JSX elements be closed?

JSX must form a valid element tree, so elements need matching closing tags or must be self-closing.
