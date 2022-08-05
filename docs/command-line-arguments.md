---
sidebar_position: 7
---

# Command Line Arguments

### Input Path ( -i, --input )

Optional use for `copy`, `info` verb. Must be used on `address` verb. File system path to read & copy photos from. If not given, the current executing folder will be used. There will be no modification on input path.

### Output Path ( -o, --output )

Must be used on `copy`, `info` verbs. File system path to write output. For `copy`, new folder hierarchy created on that location with new file names. It will create folder if not exists. For `info`, report csv file path to write.

### Folder Process Type ( -f, --process-type )

Must be used on `copy` verb. You must select folder process behavior to whether use original folder hierarchy or flatten into single folder/grouped folder by [Group By Folder](#group-by-folder---g---group-by-).

| Option                            | Name |
|-----------------------------------|------|
| Single                            | 1    |
| SubFoldersPreserveFolderHierarchy | 2    |
| FlattenAllSubFolders              | 3    |

### Naming Style ( -s, --naming-style )

Must be used on `copy` verb. While copying to a new organized folder, you must select one of these file naming strategies for a newly copied photo file name.

| Option                     | Value |
|----------------------------|-------|
| Numeric                    | 1     |
| Day                        | 2     |
| DateTimeWithMinutes        | 3     |
| DateTimeWithSeconds        | 4     |
| Address                    | 5     |
| DayAddress                 | 6     |
| DateTimeWithMinutesAddress | 7     |
| DateTimeWithSecondsAddress | 8     |
| AddressDay                 | 9     |
| AddressDateTimeWithMinutes | 10    |
| AddressDateTimeWithSeconds | 11    |

### Folder Append Type ( -a, --folder-append )

Optional use for `copy` verb. While copying to a new organized folder (you should select [Folder Process Type](#folder-process-type---f---process-type-) as `SubFoldersPreserveFolderHierarchy` ), you may select one of these file folder naming strategies. Must used with [Folder Append Location Type](#folder-append-location-type---p---folder-append-location-)

| Option                 | Value |
|------------------------|-------|
| FirstYearMonthDay      | 1     |
| FirstYearMonth         | 2     |
| FirstYear              | 3     |
| DayRange               | 4     |
| MatchingMinimumAddress | 5     |

### Folder Append Location Type ( -p, --folder-append-location )

Optional use for `copy` verb. While copying to a new organized folder (you should select [Folder Process Type](#folder-process-type---f---process-type-) as `SubFoldersPreserveFolderHierarchy` ), you may select one of these file folder naming strategies. Must used with [Folder Append Location](#folder-append-type---a---folder-append-)

| Option | Value |
|--------|-------|
| Prefix | 1     |
| Suffix | 2     |

### Group By Folder ( -g, --group-by )

Optional use for `copy` verb. If you want to group photos by EXIF data, you may select one of these strategies.

| Option       | Value |
|--------------|-------|
| YearMonthDay | 1     |
| YearMonth    | 2     |
| Year         | 3     |
| Address      | 4     |

### Number Naming Text Style ( -n, --number-style )

Must be used on `copy` verb. Number naming strategy when using [Naming Style](#naming-style---s---naming-style-) as `Numeric` or using to numbering the possible same names.

| Option                | Value |
|-----------------------|-------|
| AllNamesAreSameLength | 1     |
| PaddingZeroCharacter  | 2     |
| OnlySequentialNumbers | 3     |

### Is Dry Run ( -d, --dry-run )

Optional use for `copy` verb. Simulate the same process without writing to output folder. No extra parameter needed.

### Reverse Geocode Provider ( -e, --reverse-geocode )

Third-party provider to resolve photo taken address by photo's coordinates.

| Option                  | Value |
|-------------------------|-------|
| BigDataCloud            | 1     |
| OpenStreetMapFoundation | 2     |
| GoogleMaps              | 3     |
| MapQuest                | 4     |
| LocationIq              | 5     |

### Big Data Cloud API Key ( -b, --bigdatacloud-key )

Sets [Big Data Cloud reverse geocode](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/) API key. Alternatively, you may use the environment variable `PHOTO_CLI_BIG_DATA_CLOUD_API_KEY`.

### Google Maps API Key ( -k, --googlemaps-key )

Sets [Google Maps reverse geocode](https://developers.google.com/maps/documentation/geocoding/overview/) API key. Alternatively, you may use the environment variable `PHOTO_CLI_GOOGLE_MAPS_API_KEY`.

### Map Quest API Key ( -u, --mapquest-key )

Sets [Map Quest reverse geocode](https://developer.mapquest.com/documentation/open/nominatim-search/reverse/) API key. Alternatively, you may use the environment variable `PHOTO_CLI_MAPQUEST_API_KEY`.

### Location Iq API Key ( -q, --locationiq-key )

Sets [Location Iq reverse geocode](https://locationiq.com/sandbox/geocoding/reverse/) API key. Alternatively, you may use the environment variable `PHOTO_CLI_LOCATIONIQ_API_KEY`.

### BigDataCloud Admin Levels ( -v, --bigdatacloud-levels )

Must be used when `BigDataCloud` is selected as reverse geocode provider. Big Data Cloud admin levels are separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see the full response returned from BigDataCloud. )

### OpenStreetMapProperties ( -r, --openstreetmap-properties )

Must be used when any of `OpenStreetMapFoundation`, `MapQuest`, `LocationIq` is selected as reverse geocode provider. OpenStreetMap properties separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see the full response returned from OpenStreetMap provider. )

### Google Maps Address Types ( -m, --googlemaps-types )

Must be used when `GoogleMaps` selected as reverse geocode provider. Google Maps address types separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full the response returned from GoogleMaps. )

### Has Paid License ( -h, --has-paid-license )

Bypass the free rate limit if you have paid license. (For `MapQuest` and `LocationIq` reverse geocode providers)

### No Photograph Taken Date Action [for `copy` command ] ( -t, --no-taken-date )

Optional use for `copy` verb. Action to do when a photograph with a no taken date. Default is `Continue`.

| Option                           | Value       |
|----------------------------------|-------------|
| Continue (default)               | 0 (default) |
| PreventProcess                   | 1           |
| DontCopyToOutput                 | 2           |
| InSubFolder                      | 3           |
| AppendToEndOrderByFileName       | 4           |
| InsertToBeginningOrderByFileName | 5           |

### No Coordinate Action [for `copy` command ] ( -c, --no-coordinate )

Optional use for `copy` verb. Action to do when a photo with a no coordinate.

| Option           | Value |
|------------------|-------|
| Continue         | 0     |
| PreventProcess   | 1     |
| DontCopyToOutput | 2     |
| InSubFolder      | 3     |

### All Folders ( -a, --all-folders )

Optional use for `info` verb. Read & list all photos in all subfolders.

### No Photograph Taken Date Action [for `info` command ] ( -t, --no-taken-date )

Optional use for `info` verb. Action to do when a photograph with a no taken date. Default is `Continue`.

| Option                           | Value       |
|----------------------------------|-------------|
| Continue (default)               | 0 (default) |
| PreventProcess                   | 1           |

### No Coordinate Action [for `info` command ] ( -c, --no-coordinate )

Optional use for `info` verb. Action to do when a photo with a no coordinate.

| Option           | Value |
|------------------|-------|
| Continue         | 0     |
| PreventProcess   | 1     |