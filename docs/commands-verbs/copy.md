---
sidebar_position: 2
---

# Copy

Copies photos into new folder hierarchy with given arguments using photograph's taken date and coordinate address (reverse geocode).

```
photo-cli help copy
```

```
  -o, --output                      (MUST) File system path to create new
                                    organized folder. A new folder hierarchy
                                    will be created on that location with new
                                    file names. (will create folder if not
                                    exist)

  -s, --naming-style                (MUST) Naming strategy of newly copied file
                                    name. ( Numeric: 1, Day: 2,
                                    DateTimeWithMinutes: 3, DateTimeWithSeconds:
                                    4, Address: 5, DayAddress: 6,
                                    DateTimeWithMinutesAddress: 7,
                                    DateTimeWithSecondsAddress: 8, AddressDay:
                                    9, AddressDateTimeWithMinutes: 10,
                                    AddressDateTimeWithSeconds: 11 )

  -f, --process-type                (MUST) Reading photos strategy from input
                                    folder. ( Single: 1,
                                    SubFoldersPreserveFolderHierarchy: 2,
                                    FlattenAllSubFolders: 3 )

  -n, --number-style                (MUST) Number naming strategy when using
                                    `NamingStyle` as `Numeric` or using to
                                    numbering the possible same names. (
                                    AllNamesAreSameLength: 1,
                                    PaddingZeroCharacter: 2,
                                    OnlySequentialNumbers: 3 )

  -x, --invalid-format              (Optional) Action to do when a photo format
                                    is invalid. ( Continue: 0 [default],
                                    PreventProcess: 1, DontCopyToOutput: 2,
                                    InSubFolder: 3 )

  -t, --no-taken-date               (Optional) Action to do when a photo with a
                                    no taken date. ( Continue: 0 [default],
                                    PreventProcess: 1, DontCopyToOutput: 2,
                                    InSubFolder: 3, AppendToEndOrderByFileName:
                                    4, InsertToBeginningOrderByFileName: 5 )

  -c, --no-coordinate               (Optional) Action to do when a photo with a
                                    no coordinate. ( Continue: 0 [default],
                                    PreventProcess: 1, DontCopyToOutput: 2,
                                    InSubFolder: 3 )

  -i, --input                       (Default current executing folder) File
                                    system path to read & copy photos from. (
                                    there will be no modification on the input
                                    path )

  -d, --dry-run                     (Optional) Simulate the same process without
                                    writing to the output folder. (no extra
                                    parameter needed)

  -g, --group-by                    (Optional) Strategy to group photos into
                                    folders. [Can't use with `FolderProcessType`
                                    is `SubFoldersPreserveFolderHierarchy`] (
                                    YearMonthDay: 1, YearMonth: 2, Year: 3,
                                    AddressFlat: 4, AddressHierarchy: 5 )

  -a, --folder-append               (Optional) Appending name strategy to folder
                                    names cloned from source folder hierarchy.
                                    [Can use with `FolderProcessType` as
                                    `SubFoldersPreserveFolderHierarchy`] (
                                    FirstYearMonthDay: 1, FirstYearMonth: 2,
                                    FirstYear: 3, DayRange: 4,
                                    MatchingMinimumAddress: 5 )

  -p, --folder-append-location      (Optional) Append location for
                                    `FolderAppendType`. [Can use with
                                    `FolderProcessType` as
                                    `SubFoldersPreserveFolderHierarchy`] (
                                    Prefix: 1, Suffix: 2 )

  -v, --verify                      (Optional) Verify that all photo files
                                    copied successfully by comparing file
                                    hashes. (no extra parameter needed)

  -w, --expected-day-range          (Optional) Provide a maximum expected day
                                    difference as number for your photos to
                                    prevent processing if it's exceeding the
                                    range

  -e, --reverse-geocode             (Optional) Third-party provider to resolve
                                    photo taken address by photo's coordinates.
                                    ( Disabled: 0 [default], BigDataCloud: 1,
                                    OpenStreetMapFoundation: 2, GoogleMaps: 3,
                                    LocationIq: 5 )

  -b, --bigdatacloud-key            (Optional) API key needed to use
                                    BigDataCloud.
                                    https://www.bigdatacloud.com/geocoding-apis/
                                    reverse-geocode-to-city-api/ (Instead of
                                    using this option, environment name:
                                    PHOTO_CLI_BIG_DATA_CLOUD_API_KEY can be used
                                    or `BigDataCloudApiKey` key can be set via
                                    settings command. )

  -u, --bigdatacloud-levels         (Optional) Admin levels separated with
                                    space. ( To see which level correspond to
                                    which address level, you may use `photo-cli
                                    address` to see the full response returned
                                    from BigDataCloud. )

  -m, --googlemaps-types            (Optional) GoogleMaps address types
                                    separated with space. ( To see which level
                                    correspond to which address level, you may
                                    use `photo-cli address` to see the full
                                    response returned from GoogleMaps. )

  -k, --googlemaps-key              (Optional) API key needed to use GoogleMaps.
                                    https://developers.google.com/maps/documenta
                                    tion/geocoding/overview/ (Instead of using
                                    this option, environment name:
                                    PHOTO_CLI_GOOGLE_MAPS_API_KEY can be used or
                                    `GoogleMapsApiKey` key can be set via
                                    settings command. )

  -r, --openstreetmap-properties    (Optional) OpenStreetMap properties
                                    separated with space. ( To see which level
                                    correspond to which address level, you may
                                    use `photo-cli address` to see the full
                                    response returned from OpenStreetMap
                                    provider. )

  -q, --locationiq-key              (Optional) API key needed to use LocationIq.
                                    https://locationiq.com/docs/ (Instead of
                                    using this option, environment name:
                                    PHOTO_CLI_LOCATIONIQ_API_KEY can be used or
                                    `LocationIqApiKey` key can be set via
                                    settings command. )

  -h, --has-paid-license            (Optional) Bypass the free rate limit if you
                                    have paid license. ( For LocationIq. )

  -l, --language                    (Optional) Language/culture value to get
                                    localized address result for BigDataCloud (
                                    https://www.bigdatacloud.com/supported-langu
                                    ages/ ) and GoogleMaps
                                    (https://developers.google.com/maps/faq#lang
                                    uagesupport ).

  -z, --missing-reverse-geocode     (Optional) Action to do when any of the
                                    photo has missing reserver geocode
                                    information( Continue: 0 [default],
                                    PreventProcess: 1 )

  --help                            Display this help screen.

  --version                         Display version information.

NOTES:
- Instead of option names (for ex: DateTimeWithMinutes), you may use options
values too. (for ex: 3)
- You can use relative folder paths. If you use the input folder as the working
directory, you don't need to use the input argument.

EXAMPLE USAGES:
- Preserve same folder hierarchy, copy photos with sequential number ordering by
photo taken date.

Example with long argument names;
photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --input
(input-folder) --number-style PaddingZeroCharacter --output (output-folder)
--naming-style Numeric

Example with short argument names;
photo-cli copy -f SubFoldersPreserveFolderHierarchy -i (input-folder) -n
PaddingZeroCharacter -o (output-folder) -s Numeric

- Groups photos by photo taken year, month, day than copy on
(year)/(month)/(day) directory with a file name as photo taken date.

Example with long argument names;
photo-cli copy --process-type FlattenAllSubFolders --group-by YearMonthDay
--input (input-folder) --number-style OnlySequentialNumbers --output
(output-folder) --naming-style DateTimeWithSeconds

Example with short argument names;
photo-cli copy -f FlattenAllSubFolders -g YearMonthDay -i (input-folder) -n
OnlySequentialNumbers -o (output-folder) -s DateTimeWithSeconds

- Adding day range as a prefix to existing folder names and photos copied with a
file name as address and day.

Example with long argument names;
photo-cli copy --folder-append DayRange --no-coordinate InSubFolder
--reverse-geocode GoogleMaps --process-type SubFoldersPreserveFolderHierarchy
--input (input-folder) --googlemaps-key google-api-key --googlemaps-types
administrative_area_level_1 administrative_area_level_2
administrative_area_level_3 --number-style AllNamesAreSameLength --output
(output-folder) --folder-append-location Prefix --naming-style AddressDay
--no-taken-date InSubFolder --invalid-format PreventProcess

Example with short argument names;
photo-cli copy -a DayRange -c InSubFolder -e GoogleMaps -f
SubFoldersPreserveFolderHierarchy -i (input-folder) -k google-api-key -m
administrative_area_level_1 administrative_area_level_2
administrative_area_level_3 -n AllNamesAreSameLength -o (output-folder) -p
Prefix -s AddressDay -t InSubFolder -x PreventProcess

- Preserve the same folder hierarchy while copying photos with filenames
consisting of the photo-taken date, time, and address (with possible number
suffixes), and copy photos without coordinates or photo-taken dates into a
relative subfolder.

Example with long argument names;
photo-cli copy --no-coordinate InSubFolder --reverse-geocode
OpenStreetMapFoundation --process-type SubFoldersPreserveFolderHierarchy --input
(input-folder) --number-style AllNamesAreSameLength --output (output-folder)
--openstreetmap-properties country city town suburb --naming-style
AddressDateTimeWithSeconds --no-taken-date InSubFolder --invalid-format
PreventProcess

Example with short argument names;
photo-cli copy -c InSubFolder -e OpenStreetMapFoundation -f
SubFoldersPreserveFolderHierarchy -i (input-folder) -n AllNamesAreSameLength -o
(output-folder) -r country city town suburb -s AddressDateTimeWithSeconds -t
InSubFolder -x PreventProcess

- Groups photos by photo-taken year, month, and day, then copies them into a
year/month/day directory structure with filenames as the photo-taken date, while
photos without coordinates are copied into a relative subfolder.

Example with long argument names;
photo-cli copy --no-coordinate InSubFolder --reverse-geocode BigDataCloud
--process-type FlattenAllSubFolders --group-by AddressHierarchy --input
(input-folder) --number-style OnlySequentialNumbers --output (output-folder)
--naming-style DayAddress --bigdatacloud-levels 2 4 6 8 --invalid-format
PreventProcess

Example with short argument names;
photo-cli copy -c InSubFolder -e BigDataCloud -f FlattenAllSubFolders -g
AddressHierarchy -i (input-folder) -n OnlySequentialNumbers -o (output-folder)
-s DayAddress -u 2 4 6 8 -x PreventProcess
```
