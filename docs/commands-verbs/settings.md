---
sidebar_position: 5
---

# Settings

List, save and get settings.

```
photo-cli help settings
```

```
  -k, --key      (Optional) Setting property name to change.

  -v, --value    (Optional) Setting value to set.

  -r, --reset    (Optional) Reset all settings value to default ones. (no extra parameter needed)

  --help         Display this help screen.

  --version      Display version information.

NOTES:
- Instead of option names (for ex: DateTimeWithMinutes), you may use options values too. (for ex: 3)
- You can use relative folder paths. If you use input folder as working directory, you don't need to use input argument.

EXAMPLE USAGES:
- List all settings

Example with long argument names;
photo-cli settings

Example with short argument names;
photo-cli settings

- Get a setting

Example with long argument names;
photo-cli settings --key YearFormat

Example with short argument names;
photo-cli settings -k YearFormat

- Save a setting

Example with long argument names;
photo-cli settings --key YearFormat --value yyyy

Example with short argument names;
photo-cli settings -k YearFormat -v yyyy

- Reset all settings

Example with long argument names;
photo-cli settings --reset

Example with short argument names;
photo-cli settings -r
```