---
sidebar_position: 2
---

# Copy

Copies photos into new folder hierarchy with given arguments using photograph's taken date and coordinate address (reverse geocode).

```
photo-cli help copy
```

```
  -o, --output                      (MUST) File system path to create new organized folder. A new folder hierarchy will be created on that location with new file names. (will create folder if not exists)

  -s, --naming-style                (MUST) Naming strategy of newly copied file name. ( Numeric: 1, Day: 2, DateTimeWithMinutes: 3, DateTimeWithSeconds: 4, Address: 5, DayAddress: 6, DateTimeWithMinutesAddress: 7, DateTimeWithSecondsAddress: 8, AddressDay: 9,
                                    AddressDateTimeWithMinutes: 10, AddressDateTimeWithSeconds: 11 )

  -f, --process-type                (MUST) Reading photos strategy from input folder. ( Single: 1, SubFoldersPreserveFolderHierarchy: 2, FlattenAllSubFolders: 3 )

  -n, --number-style                (MUST) Number naming strategy when using `NamingStyle` as `Numeric` or using to numbering the possible same names. ( AllNamesAreSameLength: 1, PaddingZeroCharacter: 2, OnlySequentialNumbers: 3 )

  -t, --no-taken-date               (MUST) Action to do when a photo with a no taken date. ( Continue: 0, PreventProcess: 1, DontCopyToOutput: 2, InSubFolder: 3, AppendToEndOrderByFileName: 4, InsertToBeginningOrderByFileName: 5 )

  -c, --no-coordinate               (MUST) Action to do when a photo with a no coordinate. ( Continue: 0, PreventProcess: 1, DontCopyToOutput: 2, InSubFolder: 3 )

  -i, --input                       (Default current executing folder) File system path to read & copy photos from. ( there will be no modification on input path )

  -d, --dry-run                     (Optional) Simulate the same process without writing to the output folder. (no extra parameter needed)

  -g, --group-by                    (Optional) Strategy to group photos into folders. [Can't use with `FolderProcessType` is `SubFoldersPreserveFolderHierarchy`] ( YearMonthDay: 1, YearMonth: 2, Year: 3, Address: 4 )

  -a, --folder-append               (Optional) Appending name strategy to folder names cloned from source folder hierarchy. [Can be with `FolderProcessType` is `SubFoldersPreserveFolderHierarchy`] ( FirstYearMonthDay: 1, FirstYearMonth: 2, FirstYear: 3, DayRange: 4,
                                    MatchingMinimumAddress: 5 )

  -p, --folder-append-location      (Optional) Append location for `FolderAppendType`. [Can be use with `FolderProcessType` is `SubFoldersPreserveFolderHierarchy`] ( Prefix: 1, Suffix: 2 )

  -v, --verify                      (Optional) Verify that all photo files copied successfully by comparing file hashes. (no extra parameter needed)

  -e, --reverse-geocode             (Optional) Third-party provider to resolve photo taken address by photo's coordinates. ( Disabled: 0 [default], BigDataCloud: 1, OpenStreetMapFoundation: 2, GoogleMaps: 3, LocationIq: 5 )

  -b, --bigdatacloud-key            (Optional) API key needed to use BigDataCloud. https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/ (Instead of using this option, environment name: PHOTO_CLI_BIG_DATA_CLOUD_API_KEY can be used. )

  -u, --bigdatacloud-levels         (Optional) Admin levels separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from BigDataCloud. )

  -m, --googlemaps-types            (Optional) GoogleMaps address types separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from GoogleMaps. )

  -k, --googlemaps-key              (Optional) API key needed to use GoogleMaps. https://developers.google.com/maps/documentation/geocoding/overview/ (Instead of using this option, environment name: PHOTO_CLI_GOOGLE_MAPS_API_KEY can be used. )

  -r, --openstreetmap-properties    (Optional) OpenStreetMap properties separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from OpenStreetMap provider. )

  -q, --locationiq-key              (Optional) API key needed to use LocationIq. https://locationiq.com/docs/ (Instead of using this option, environment name: PHOTO_CLI_LOCATIONIQ_API_KEY can be used. )

  -h, --has-paid-license            (Optional) Bypass rate limit if you have paid license. ( For LocationIq. )

  -l, --language                    (Optional) Language/culture value to get localized address result for BigDataCloud ( https://www.bigdatacloud.com/supported-languages/ ) and GoogleMaps (https://developers.google.com/maps/faq#languagesupport ).

  --help                            Display this help screen.

  --version                         Display version information.

NOTES:
- Instead of option names (for ex: DateTimeWithMinutes), you may use options values too. (for ex: 3)
- You can use relative folder paths. If you use the input folder as the working directory, you don't need to use the input argument.

EXAMPLE USAGES:
- By preserving existing folder hierarchy, photos copied with a file name as photo taken date and time. Photos taken on same date and time, will have a number suffix. Photos that don't have any coordinate or photo taken date will be copied in a relative sub folder.

Example with long argument names;
photo-cli copy --no-coordinate InSubFolder --process-type SubFoldersPreserveFolderHierarchy --input [input-folder] --number-style PaddingZeroCharacter --output [output-folder] --naming-style DateTimeWithMinutes --no-taken-date InSubFolder

Example with short argument names;
photo-cli copy -c InSubFolder -f SubFoldersPreserveFolderHierarchy -i [input-folder] -n PaddingZeroCharacter -o [output-folder] -s DateTimeWithMinutes -t InSubFolder

- Preserving folder hierarchy, photos copied with a sequential file name. Photos that don't have any coordinate or photo taken date won't be copied to output.

Example with long argument names;
photo-cli copy --no-coordinate DontCopyToOutput --process-type SubFoldersPreserveFolderHierarchy --input [input-folder] --number-style AllNamesAreSameLength --output [output-folder] --naming-style Numeric --no-taken-date DontCopyToOutput

Example with short argument names;
photo-cli copy -c DontCopyToOutput -f SubFoldersPreserveFolderHierarchy -i [input-folder] -n AllNamesAreSameLength -o [output-folder] -s Numeric -t DontCopyToOutput

- Grouping all photos in folders with a name photo taken year and month. Photos will be copied with a file name date, time, and address received from OpenStreetMap reverse geocode provider.

Example with long argument names;
photo-cli copy --reverse-geocode OpenStreetMapFoundation --process-type FlattenAllSubFolders --group-by YearMonth --input [input-folder] --number-style OnlySequentialNumbers --output [output-folder] --openstreetmap-properties country city town suburb --naming-style DateTimeWithSecondsAddress --no-taken-date AppendToEndOrderByFileName

Example with short argument names;
photo-cli copy -e OpenStreetMapFoundation -f FlattenAllSubFolders -g YearMonth -i [input-folder] -n OnlySequentialNumbers -o [output-folder] -r country city town suburb -s DateTimeWithSecondsAddress -t AppendToEndOrderByFileName

- Process single folder and copy photos with file names as their address which will get from BigDataCloud

Example with long argument names;
photo-cli copy --no-coordinate PreventProcess --reverse-geocode BigDataCloud --process-type Single --input [input-folder] --number-style AllNamesAreSameLength --output [output-folder] --naming-style Address --no-taken-date DontCopyToOutput --bigdatacloud-levels 2 4 6 8

Example with short argument names;
photo-cli copy -c PreventProcess -e BigDataCloud -f Single -i [input-folder] -n AllNamesAreSameLength -o [output-folder] -s Address -t DontCopyToOutput -v 2 4 6 8

- Adding year month day as a prefix to existing folder names and photos copied with a file name as day and address. The address will be built from Google Maps (need API key).

Example with long argument names;
photo-cli copy --folder-append FirstYearMonthDay --no-coordinate PreventProcess --reverse-geocode GoogleMaps --process-type SubFoldersPreserveFolderHierarchy --input [input-folder] --googlemaps-key google-api-key --googlemaps-types administrative_area_level_1 administrative_area_level_2 administrative_area_level_3 --number-style AllNamesAreSameLength --output [output-folder] --folder-append-location Prefix --naming-style DayAddress --no-taken-date PreventProcess

Example with short argument names;
photo-cli copy -a FirstYearMonthDay -c PreventProcess -e GoogleMaps -f SubFoldersPreserveFolderHierarchy -i [input-folder] -k google-api-key -m administrative_area_level_1 administrative_area_level_2 administrative_area_level_3 -n AllNamesAreSameLength -o [output-folder] -p Prefix -s DayAddress -t PreventProcess
```
