---
sidebar_position: 90
---

# Command Line Arguments

### Common Arguments Used Across Verbs (Command Type) in Same Purpose

#### Input Path ( -i, --input )

Optional use for `copy`, `archive`, `info` verb. Must be used on `address` verb. File system path to read & copy photos from. If not given, the current executing folder will be used. There will be no
modification on input path.

#### Output Path ( -o, --output )

Must be used on `copy`, `archive`, `info` verbs. File system path to write output. For `copy`, new folder hierarchy created on that location with new file names. It will create folder if not exists. For `info`, report csv file path to write.

#### Is Dry Run ( -d, --dry-run )

Optional use for `copy`, `archive` verb. Simulate the same process without writing to output folder. No extra parameter needed.

#### Reverse Geocode Provider ( -e, --reverse-geocode )

Optional use for `copy`, `archive`, `info` verb. Must be used on `address` verb. Third-party provider to resolve photo taken address by photo's coordinates.

| Option                  | Value |
|-------------------------|-------|
| BigDataCloud            | 1     |
| OpenStreetMapFoundation | 2     |
| GoogleMaps              | 3     |
| LocationIq              | 5     |

#### ( -z, --missing-reverse-geocode )

Optional use for `copy`, `archive`, `info` verb.

#### ( -w, --expected-day-range )

#### Big Data Cloud API Key ( -b, --bigdatacloud-key )

Sets [Big Data Cloud reverse geocode](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/) API key. Alternatively, you may use the environment variable `PHOTO_CLI_BIG_DATA_CLOUD_API_KEY`.

#### Google Maps API Key ( -k, --googlemaps-key )

Sets [Google Maps reverse geocode](https://developers.google.com/maps/documentation/geocoding/overview/) API key. Alternatively, you may use the environment variable `PHOTO_CLI_GOOGLE_MAPS_API_KEY`.

#### Location Iq API Key ( -q, --locationiq-key )

Sets [Location Iq reverse geocode](https://locationiq.com/sandbox/geocoding/reverse/) API key. Alternatively, you may use the environment variable `PHOTO_CLI_LOCATIONIQ_API_KEY`.

#### BigDataCloud Admin Levels ( -u, --bigdatacloud-levels )

Must be used when `BigDataCloud` is selected as reverse geocode provider. Big Data Cloud admin levels are separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see the full response returned from BigDataCloud. )

#### OpenStreetMap Properties ( -r, --openstreetmap-properties )

Must be used when any of `OpenStreetMapFoundation`, `LocationIq` is selected as reverse geocode provider. OpenStreetMap properties separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see the full response returned from OpenStreetMap provider. )

#### Google Maps Address Types ( -m, --googlemaps-types )

Must be used when `GoogleMaps` selected as reverse geocode provider. Google Maps address types separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full the response returned from GoogleMaps. )

#### Has Paid License ( -h, --has-paid-license )

Bypass the free rate limit if you have paid license. (For `LocationIq` reverse geocode provider)

### Archive Verb Arguments

#### ( -y, --album-type )

Whether you want to link photos as album by picking the album type.

| Option                   | Value |
|--------------------------|-------|
| NoAlbumLinking (default) | 0 |
| Individual               | 1 |
| DateRange                | 2 |

#### ( -a, --album-name )
#### ( -p, --update-album )
#### ( -s, --auto-reverse-geocode-album )
#### ( -f, --delete-on-source )

#### No Photograph Taken Date Action [for `archive` command ] ( -t, --no-taken-date )

Optional action to do when a photograph with a no taken date. Default is `Continue`.

| Option                           | Value       |
|----------------------------------|-------------|
| Continue (default)               | 0 (default) |
| PreventProcess                   | 1           |

#### No Coordinate Action [for `archive` command ] ( -c, --no-coordinate )

Optional action to do when a photo with a no coordinate.

| Option           | Value |
|------------------|-------|
| Continue         | 0     |
| PreventProcess   | 1     |

### Copy Verb Arguments

#### Folder Process Type ( -f, --process-type )

You must select folder process behavior to whether use original folder hierarchy or flatten into single folder/grouped folder by [Group By Folder](#group-by-folder---g---group-by-).

| Option                            | Name |
|-----------------------------------|------|
| Single                            | 1    |
| SubFoldersPreserveFolderHierarchy | 2    |
| FlattenAllSubFolders              | 3    |

#### Naming Style ( -s, --naming-style )

While copying to a new organized folder, you must select one of these file naming strategies for a newly copied photo file name.

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

#### Folder Append Type ( -a, --folder-append )

Optional use for `copy` verb. While copying to a new organized folder (you should select [Folder Process Type](#folder-process-type---f---process-type-) as `SubFoldersPreserveFolderHierarchy` ), you may select one of these file folder naming strategies. Must used with [Folder Append Location Type](#folder-append-location-type---p---folder-append-location-)

| Option                 | Value |
|------------------------|-------|
| FirstYearMonthDay      | 1     |
| FirstYearMonth         | 2     |
| FirstYear              | 3     |
| DayRange               | 4     |
| MatchingMinimumAddress | 5     |

#### Folder Append Location Type ( -p, --folder-append-location )

While copying to a new organized folder (you should select [Folder Process Type](#folder-process-type---f---process-type-) as `SubFoldersPreserveFolderHierarchy` ), you may select one of these file folder naming strategies. Must used with [Folder Append Location](#folder-append-type---a---folder-append-)

| Option | Value |
|--------|-------|
| Prefix | 1     |
| Suffix | 2     |

#### Group By Folder ( -g, --group-by )

If you want to group photos by EXIF data, you may select one of these strategies.

| Option       | Value |
|--------------|-------|
| YearMonthDay | 1     |
| YearMonth    | 2     |
| Year         | 3     |
| Address      | 4     |

#### Number Naming Text Style ( -n, --number-style )

Number naming strategy must be selected when using [Naming Style](#naming-style---s---naming-style-) as `Numeric` or using to numbering the possible same names.

| Option                | Value |
|-----------------------|-------|
| AllNamesAreSameLength | 1     |
| PaddingZeroCharacter  | 2     |
| OnlySequentialNumbers | 3     |

#### Verify ( -v, --verify)

Verify that all photo files copied successfully by comparing file hashes. (no extra parameter needed)

#### No Photograph Taken Date Action [for `copy` command ] ( -t, --no-taken-date )

Optional action to do when a photograph with a no taken date. Default is `Continue`.

| Option                           | Value       |
|----------------------------------|-------------|
| Continue (default)               | 0 (default) |
| PreventProcess                   | 1           |
| DontCopyToOutput                 | 2           |
| InSubFolder                      | 3           |
| AppendToEndOrderByFileName       | 4           |
| InsertToBeginningOrderByFileName | 5           |

#### No Coordinate Action [for `copy` command ] ( -c, --no-coordinate )

Optional action to do when a photo with a no coordinate.

| Option           | Value |
|------------------|-------|
| Continue         | 0     |
| PreventProcess   | 1     |
| DontCopyToOutput | 2     |
| InSubFolder      | 3     |

### Info Verb Arguments

#### All Folders ( -a, --all-folders )

Optional behavior to read & list all photos in all subfolders. Default behavior is to read & list only photos in current working folder. (no extra parameter needed)

#### No Photograph Taken Date Action [for `info` command ] ( -t, --no-taken-date )

Optional action to do when a photograph with a no taken date. Default is `Continue`.

| Option                           | Value       |
|----------------------------------|-------------|
| Continue (default)               | 0 (default) |
| PreventProcess                   | 1           |

#### No Coordinate Action [for `info` command ] ( -c, --no-coordinate )

Optional action to do when a photo with a no coordinate.

| Option           | Value |
|------------------|-------|
| Continue         | 0     |
| PreventProcess   | 1     |

## Settings

User can customize & set these options via `settings` command.

- All date & time formats. Reference values: [MSDN Date Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
- File & folder naming separators
- Report file names
- `No Photo Taken Date Action` folder name.
- `No Address Action` folder name.
- Third-party reverse geocode API keys.
- Change [maximum concurrent connection limit](https://docs.microsoft.com/en-us/dotnet/api/System.Net.ServicePointManager.DefaultConnectionLimit?view=net-6.0) to connect third-party reverse geocode provider.

### Listing All Settings

```
photo-cli settings
```

```
LogLevel.Default=Error
LogLevel.Microsoft=Warning
LogLevel.PhotoCli=Warning
LogLevel.PhotoCli.Services.Implementations.ReverseGeocodes=Warning
LogLevel.Polly=Warning
LogLevel.System.Net.Http.HttpClient=Warning
YearFormat=yyyy
MonthFormat=MM
DayFormat=dd
DateFormatWithMonth=yyyy.MM
DateFormatWithDay=yyyy.MM.dd
DateTimeFormatWithMinutes=yyyy.MM.dd_HH.mm
DateTimeFormatWithSeconds=yyyy.MM.dd_HH.mm.ss
AddressSeparator=-
FolderAppendSeparator=-
DayRangeSeparator=-
SameNameNumberSeparator=-
PhotoFormatInvalidFolderName=invalid-photo-format
NoPhotoTakenDateFolderName=no-photo-taken-date
NoAddressFolderName=no-address
NoAddressAndPhotoTakenDateFolderName=no-address-and-no-photo-taken-date
CsvReportFileName=photo-cli-report.csv
DryRunCsvReportFileName=photo-cli-dry-run.csv
ConnectionLimit=4
BigDataCloudApiKey=
GoogleMapsApiKey=
LocationIqApiKey=
CoordinatePrecision=4
ArchivePhotoTakenDateHashSeparator=-
SupportedExtensions=jpg,jpeg,heic,png,hif
CompanionExtensions=mov
LogCategoryNameOutput=False
MacOsCommand=open
MacOsArgumentPrefix=-a Preview
```

### Getting a Single Value

```
photo-cli settings --key YearFormat
```

```
YearFormat=yyyy
```

### Setting a Single Value

```
photo-cli settings --key YearFormat --value y
```

```
No output when successful.
```

### Resetting All Values To Defaults

```
photo-cli settings --reset
```

```
No output when successful
```

## Exit Codes

Process exit codes listed below;

| Option                                          | Value |
|-------------------------------------------------|-------|
| Success                                         | 0     |
| ParseArgsFailed                                 | 1     |
| AppSettingsInvalidFile                          | 2     |
| UnexpectedError                                 | 3     |
| ApiKeyStoreValidationFailed                     | 10    |
| AddressOptionsValidationFailed                  | 11    |
| InfoOptionsValidationFailed                     | 12    |
| CopyOptionsValidationFailed                     | 13    |
| SettingsOptionsValidationFailed                 | 14    |
| ArchiveOptionsValidationFailed                  | 15    |
| InputFolderNotExists                            | 20    |
| NoPhotoFoundOnDirectory                         | 21    |
| OutputFolderIsNotEmpty                          | 22    |
| OutputPathIsExists                              | 23    |
| OutputPathDontHaveWriteFilePermission           | 24    |
| OutputPathDontHaveCreateDirectoryPermission     | 25    |
| InputFileNotExists                              | 26    |
| FileVerifyErrors                                | 27    |
| PhotosWithNoDatePreventedProcess                | 30    |
| PhotosWithNoCoordinatePreventedProcess          | 31    |
| PhotosWithNoCoordinateAndNoDatePreventedProcess | 32    |
| PhotosWithInvalidFileFormatPreventedProcess     | 33    |
| PhotosWithMissingReverseGeocodeInfoAsRequested  | 34    |
| PhotosWithUnexpectedDateRangePreventedProcess   | 35    |
| PropertyNotFound                                | 40    |
| InvalidSettingsValue                            | 41    |
| InvalidSettingsLogLevelChange                   | 42    |
| AlbumExist                                      | 50    |
| InvalidSettingsLogLevelChange                   | 50    |
| InconsistencyOnSavingPhotosToDatabase           | 51    |
| InconsistencyOnSavingUserDefinedAlbumToDatabase | 52    |
| AlbumNameMustBeUniqueWhileAddingOrUseUpdate     | 53    |
| AlbumNotFoundById                               | 54    |
| NoPhotosToAddInAlbum                            | 55    |
| NoDataRangeFoundOnPhotos                        | 56    |
| ExistingAlbumConfigurationNotValid              | 57    |
| NoArchiveDatabaseFound                          | 60    |
| NoPhotoFoundToList                              | 61    |
