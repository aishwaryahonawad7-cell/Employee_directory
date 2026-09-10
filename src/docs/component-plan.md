# Component Architecture Plan

| Component | Responsibility | Props Received | Passes Props Further? | Reusable? |
|---|---|---|---|---|
| App | Main application composition | None | Yes | Yes |
| PageLayout | Provides page layout | children | No | Yes |
| Header | Displays page title and subtitle | title, subtitle | No | Yes |
| EmployeeDirectory | Renders employee list | employees | Yes | Yes |
| EmployeeCard | Displays one employee | name, role, department, email, location, status, avatar | Yes | Yes |
| Avatar | Displays initials avatar | initials, name | No | Yes |
| StatusBadge | Displays employment status | status | No | Yes |
| InfoRow | Displays a labeled value/custom content | label, value, children | No | Yes |
| Footer | Displays footer information | companyName | No | Yes |
| DepartmentBadge | Displays a department | department | No | Yes |
| CompanyInfo | Displays company location | company | No | Yes |
| EmployeeBio | Displays optional employee bio | name, bio, experience | No | Yes |
| Card | Reusable wrapper and rest-prop forwarding | children, className, rest props | No | Yes |

## Component Tree

```text
App
├── PageLayout
│   ├── Header
│   ├── Main
│   │   └── EmployeeDirectory
│   │       ├── EmployeeCard
│   │       │   ├── Avatar
│   │       │   ├── StatusBadge
│   │       │   └── InfoRow
│   │       └── EmployeeCard (repeated)
│   └── Footer
```
