# Props Contract

| Component | Expected Props | Example |
|---|---|---|
| Header | title, subtitle | title="Employee Directory" |
| EmployeeDirectory | employees | employees={employees} |
| EmployeeCard | name, role, department, email, location, status, avatar | name="Priya Sharma" |
| Avatar | initials, name | initials="PS" |
| StatusBadge | status | status="Active" |
| InfoRow | label, value, children | label="Email" value="..." |
| Footer | companyName | companyName="TechNova Solutions" |

## Why is a props contract useful?

A props contract describes what information a component expects. It makes components easier to understand, use, and maintain.

## What errors can happen with the wrong prop name?

If a component expects `name` but receives `employeeName`, the component will not automatically find the expected value. The UI may show missing or undefined content.

## Why should prop names be meaningful?

Meaningful prop names clearly communicate the data a component expects and reduce mistakes.
