# Reusability Notes

InfoRow reduces repeated code by providing one reusable structure for employee information. Instead of writing separate markup for every field, EmployeeCard can reuse InfoRow with different labels and values. Department, Email, Location, and other information can therefore use the same component. This keeps EmployeeCard shorter and more consistent. If the design of an information row changes, the change can be made in one component instead of many repeated sections. InfoRow also accepts children so custom content such as a status badge can be inserted.
