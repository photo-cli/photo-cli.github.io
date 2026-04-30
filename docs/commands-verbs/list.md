---
sidebar_position: 3
---

# List

List & open photos from archive folders.

```
photo-cli help list
```

```
  -t, --type     (Optional) Listing type for archive folder( Summary: 0
                 [default], Albums: 1, PhotosByAlbum: 2, PhotosByDate: 3 )

  -i, --input    (Default current executing folder) Archive path to list & open
                 photos from

  -n, --id       (Optional) Album ID to be used while using the type of
                 PhotosByAlbum

  -y, --year     (Optional) Year as number to be used while using the type of
                 PhotosByDate

  -m, --month    (Optional) Month as number to be used while using the type of
                 PhotosByDate

  -d, --day      (Optional) Day as number to be used while using the type of
                 PhotosByDate

  -r, --raw      (Optional) Listing photo paths each on new line instead of
                 trying to open the default OS app while using the type of
                 PhotosByAlbum or PhotosByDate

  --help         Display this help screen.

  --version      Display version information.

NOTES:
- Instead of option names (for ex: DateTimeWithMinutes), you may use options
values too. (for ex: 3)
- You can use relative folder paths. If you use the input folder as the working
directory, you don't need to use the input argument.

EXAMPLE USAGES:
- List statistics of the archive folder

Example with long argument names;
photo-cli list --input (input-folder)

Example with short argument names;
photo-cli list -i (input-folder)

- List all the album information of the archive folder

Example with long argument names;
photo-cli list --input (input-folder) --type Albums

Example with short argument names;
photo-cli list -i (input-folder) -t Albums

- List paths (to be send as process arguments to photo viewers) or open (only
supporting in macOS , Preview app for now) for the given album id

Example with long argument names;
photo-cli list --input (input-folder) --id 1 --type PhotosByAlbum

Example with short argument names;
photo-cli list -i (input-folder) -n 1 -t PhotosByAlbum

- List paths (to be send as process arguments to photo viewers) or open (only
supporting in macOS , Preview app for now) for the given year

Example with long argument names;
photo-cli list --input (input-folder) --type PhotosByDate --year 2007

Example with short argument names;
photo-cli list -i (input-folder) -t PhotosByDate -y 2007

- List paths (to be send as process arguments to photo viewers) or open (only
supporting in macOS , Preview app for now) for the given year & month

Example with long argument names;
photo-cli list --input (input-folder) --month 8 --type PhotosByDate --year 2007

Example with short argument names;
photo-cli list -i (input-folder) -m 8 -t PhotosByDate -y 2007

- List paths (to be send as process arguments to photo viewers) or open (only
supporting in macOS , Preview app for now) for the given year, month & day

Example with long argument names;
photo-cli list --day 19 --input (input-folder) --month 8 --type PhotosByDate
--year 2007

Example with short argument names;
photo-cli list -d 19 -i (input-folder) -m 8 -t PhotosByDate -y 2007
```
