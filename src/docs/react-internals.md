# React Internals

React is a JavaScript library used to build user interfaces with reusable components. In this Employee Directory project, React is used to create components such as Header, EmployeeDirectory, EmployeeCard, Avatar, StatusBadge, InfoRow, and Footer.

The DOM, or Document Object Model, is the browser's representation of an HTML document. It represents elements as objects that JavaScript can interact with. The Real DOM is the actual document structure maintained by the browser.

The Virtual DOM is a lightweight JavaScript representation of the UI used by React when determining updates. It is not the browser's actual DOM. React can compare the previous UI representation with the new representation and determine which parts need to change.

When React renders a component, the component function runs and produces a description of the UI. React then compares the new result with the previous result. This comparison is part of reconciliation. React uses the result to apply the required changes to the browser UI.

Declarative programming means describing what the UI should look like based on data. For example, `<EmployeeCard name="Priya Sharma" />` describes the desired UI. Imperative programming focuses on the individual steps needed to make a change, such as manually finding a DOM element and changing its text.

React's component model and declarative approach allow developers to build maintainable interfaces without manually performing every DOM update.

## Workflow

Props/Data → React Component → Virtual DOM → Reconciliation → Real DOM Update → Browser UI
