---
sidebar_position: 6
---

# Settings

User can customize & set these options via `settings` command.

- All date & time formats. Reference values: [MSDN Date Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
- File & folder naming separators
- Report file names
- `No Photo Taken Date Action` folder name.
- `No Address Action` folder name.
- Third-party reverse geocode API keys.
- Change [maximum concurrent connection limit](https://docs.microsoft.com/en-us/dotnet/api/System.Net.ServicePointManager.DefaultConnectionLimit?view=net-6.0) to connect third-party reverse geocode provider.

## Listing All Settings

```
photo-cli settings
```

```
LogLevel=Error
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
NoPhotoTakenDateFolderName=no-photo-taken-date
NoAddressFolderName=no-address
NoAddressAndPhotoTakenDateFolderName=no-address-and-no-photo-taken-date
CsvReportFileName=photo-cli-report.csv
DryRunCsvReportFileName=photo-cli-dry-run.csv
ConnectionLimit=4
BigDataCloudApiKey=
GoogleMapsApiKey=
MapQuestApiKey=
LocationIqApiKey=
```

## Getting a Single Value

```
photo-cli settings --key YearFormat
```

```
YearFormat=yyyy
```

## Setting a Single Value

```
photo-cli settings --key YearFormat --value y
```

```
No output when successful.
```

## Resetting All Values To Defaults

```
photo-cli settings --reset
```

```
No output when successful
```