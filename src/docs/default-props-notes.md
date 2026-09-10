# Default Props Notes

Default values make components safer because they provide fallback content when optional props are not supplied. This prevents missing information from producing undefined-looking UI. In EmployeeBio, `bio` defaults to "Bio not available" and `experience` defaults to "Experience not specified". This allows EmployeeBio to work even when optional information is missing. Default values also make components more reusable because callers do not always need to provide every optional prop.
