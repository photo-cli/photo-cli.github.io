---
sidebar_position: 0
---

# Intro - Examples

[![Nuget stable](https://img.shields.io/nuget/v/photo-cli)](https://www.nuget.org/packages/photo-cli/) [![.github/workflows/stable.yml](https://github.com/photo-cli/photo-cli/actions/workflows/stable.yml/badge.svg)](https://github.com/photo-cli/photo-cli/actions/workflows/stable.yml) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=coverage)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Nuget pre-release](https://img.shields.io/nuget/vpre/photo-cli)](https://www.nuget.org/packages/photo-cli/) [![.github/workflows/preview.yml](https://github.com/photo-cli/photo-cli/actions/workflows/preview.yml/badge.svg)](https://github.com/photo-cli/photo-cli/actions/workflows/preview.yml) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/photo-cli/photo-cli/blob/main/LICENSE)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=bugs)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![.github/workflows/CI.yml](https://github.com/photo-cli/photo-cli/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/photo-cli/photo-cli/actions/workflows/CI.yml)

`photo-cli` is [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tool (works on macOS & Windows & Linux) that extracts when and where ([reverse geocode](https://en.wikipedia.org/wiki/Reverse_geocoding)) your photographs are taken, copy into a new organized folder (not modifying source folder) with various [folder](/docs/command-line-arguments#folder-append-type---a---folder-append-) & [file naming](/docs/command-line-arguments#naming-style---s---naming-style-) strategies or export all data into [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) (can view on Microsoft Excel, Libre/OpenOffice Calc, Apple Numbers, Google Sheets) files. With this exported CSV file you can [navigate your photo locations on Google Maps & Earth with your custom label and pin style](#3-navigate-your-photo-locations-on-google-maps--earth).

## Features Explained With An Example

There is three main feature that can be explain better with examples.

1. [Copy into a new organized folder](#1-copy-into-a-new-organized-folder-example-with-photo-cli-copy-command)
2. [Export all extracted information into a CSV Report](#2-export-all-extracted-information-into-a-csv-report-with-photo-cli-info-command)
3. [Navigate Your Photo Locations on Google Maps & Earth](#3-navigate-your-photo-locations-on-google-maps--earth)

### 1. Copy Into a New Organized Folder Example With `photo-cli copy` Command

#### Folder & File Hierarchy Before -> After

<table>
<tr>
    <th>Original Folder Hierarchy</th>
    <th>After <b><i>photo-cli</i></b></th></tr><tr>
<td>
<pre>

├── DSC_5727.jpg
├── GOPR6742.jpg
├── Italy album
│   ├── DJI_01732.jpg
│   ├── DJI_01733.jpg
│   ├── DSC00001.JPG
│   ├── DSC03467.jpg
│   ├── DSC_1769.JPG
│   ├── DSC_1770.JPG
│   ├── DSC_1770_(same).jpg
│   ├── DSC_1771.JPG
│   ├── GOPR7496.jpg
│   ├── GOPR7497.jpg
│   ├── IMG_0747.JPG
│   └── IMG_2371.jpg
└── Spain Journey
    ├── DSC_1807.jpg
    ├── DSC_1808.jpg
    └── IMG_5397.jpg

2 directories, 17 files
</pre>
</td>
<td>
<pre>

├── 2005.08.13_09.47.23-Kenya.jpg
├── 2005.12.14-2008.10.22-Italy album
│   ├── 2005.12.14_14.39.47-Italia-Firenze-Quartiere 1.jpg
│   ├── 2008.10.22_16.28.39-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.29.49-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.38.20-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.43.21-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.44.01-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.46.53-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.52.15-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.55.37-Italia-Arezzo.jpg
│   ├── 2008.10.22_17.00.07-Italia-Arezzo-1.jpg
│   └── 2008.10.22_17.00.07-Italia-Arezzo-2.jpg
├── 2012.06.22_19.52.31-United Kingdom-Ascot-Sunninghill and Ascot.jpg
├── 2015.04.10-2015.04.10-Spain Journey
│   ├── 2015.04.10_20.12.23-España-Madrid-1.jpg
│   └── 2015.04.10_20.12.23-España-Madrid-2.jpg
├── Italy album
│   └── no-address
│       └── IMG_2371.jpg
├── photo-cli-report.csv
└── Spain Journey
    └── no-address-and-no-photo-taken-date
        └── IMG_5397.jpg

6 directories, 18 files
</pre>
</td>
</tr>
</table>

#### What Happened? / How It Is Processed?

There is lots of [transformation options](/docs/usages/intro) and [customization settings](/docs/settings#listing-all-settings), this is just a one of them. This transformation is done by running only the following single command;

Command with explicit argument names & values
```
photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --naming-style DateTimeWithSecondsAddress --number-style PaddingZeroCharacter --folder-append DayRange --folder-append-location Prefix --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb --output photo-cli-test --no-coordinate InSubFolder --no-taken-date InSubFolder
```

Same command with shorter alias of all argument names & values
```
photo-cli copy -f 2 -s 8 -n 2 -a 4 -p 1 -e 2 -r country city town suburb -o photo-cli-test -c 3 -t 3
```

Console/terminal output (as progress may take time, for each operation completion status shown with progress)
```
Searching photos: finished. 17 photos found.
Parsing photo exif information: finished.
This OpenStreetMapFoundation provider is using rate limit of 1 seconds between each request
Reverse Geocoding: finished.
Directory grouping: finished.
Processing target folder: finished.
Writing csv report: finished.
- 18 photos copied.
- 4 directories created.
- 15 photos has taken date and coordinate.
- 1 photos has taken date but no coordinate.
- 2 photos has no taken date and coordinate.
```

#### Step By Step `photo-cli copy` Process

1. Gather all photo paths in the source folder within subfolders.
2. Extract EXIF data of each photograph's taken date and coordinate.
3. As [file name strategy](/docs/command-line-arguments#naming-style---s---naming-style-) is selected as `DateTimeWithSecondsAddress` and it contains address, by using [third-party reverse geocode provider](/docs/address-building-reverse-geocoding/intro) we are building address with `OpenStreetMap` by using [given administrative levels](/docs/address-building-reverse-geocoding/building-your-own-address-with-selected-properties) as `city town suburb` for each photograph.
4. As [folder process type](/docs/command-line-arguments#folder-process-type---f---process-type-) is selected as `SubFoldersPreserveFolderHierarchy` folder and file hierarchy at the new output folder will be same.
5. As [folder append type](/docs/command-line-arguments#folder-append-type---a---folder-append-) is selected as `DayRange` and [folder append location](/docs/command-line-arguments#folder-append-location-type---p---folder-append-location-) is `Prefix`, folder names on output folder will be created with same name prefixed with a earliest and latest photograph taken date. For example: `2005.12.14-2008.10.22-Italy album` (original folder name is `Italy album`)
6. As [file name strategy](/docs/command-line-arguments#naming-style---s---naming-style-) is selected as `DateTimeWithSecondsAddress` each photograph file name would be copied as photo taken date unified with the address which is built from third party reverse geocode provider by photograph's coordinate. For example: `2012.06.22_19.52.31-United Kingdom-Ascot-Sunninghill and Ascot.jpg` (original file name is `GOPR6742.jpg`)
7. As [no photograph taken date action](/docs/command-line-arguments#no-photograph-taken-date-action-for-copy-command----t---no-taken-date-) is selected as `InSubFolder` and [no coordinate action](/docs/command-line-arguments#no-coordinate-action-for-copy-command----c---no-coordinate-) is selected as `InSubFolder`, photographs with no related EXIF data copied into a sub folder by obeying original folder hierarchy. For example: `/Italy album/no-address/IMG_2371.jpg` and `/Spain Journey/no-address-and-no-photo-taken-date/IMG_5397.jpg`
8. To verify and see all information in one place, `photo-cli-report.csv` report will be created on the output file. Can be examined in [Markdown table](#contents-of-photo-cli-reportcsv-file-in-markdown-table-report-of-copy-command) or [CSV file](#contents-of-photo-cli-reportcsv-file-in-raw-text-format-report-of-copy-command).

##### Contents of `photo-cli-report.csv` File in Markdown Table (report of `copy` command)

<details>
  <summary>Click to expand</summary>

|PhotoPath                                  |PhotoNewPath                                                                                       |PhotoDateTaken     |ReverseGeocodeFormatted                   |Latitude            |Longitude          |PhotoTakenYear|PhotoTakenMonth|PhotoTakenDay|PhotoTakenHour|PhotoTakenMinute|PhotoTakenSeconds|Address1      |Address2|Address3             |Address4|Address5|Address6|Address7|Address8|
|-------------------------------------------|---------------------------------------------------------------------------------------------------|-------------------|------------------------------------------|--------------------|-------------------|--------------|---------------|-------------|--------------|----------------|-----------------|--------------|--------|---------------------|--------|--------|--------|--------|--------|
|/TestImages/DSC_5727.jpg                   |photo-cli-test/2005.08.13_09.47.23-Kenya.jpg                                                       |08/13/2005 09:47:23|Kenya                                     |-0.37129999999999996|36.056416666666664 |2005          |8              |13           |9             |47              |23               |Kenya         |        |                     |        |        |        |        |        |
|/TestImages/GOPR6742.jpg                   |photo-cli-test/2012.06.22_19.52.31-United Kingdom-Ascot-Sunninghill and Ascot.jpg                  |06/22/2012 19:52:31|United Kingdom-Ascot-Sunninghill and Ascot|51.424838333333334  |-0.6735616666666666|2012          |6              |22           |19            |52              |31               |United Kingdom|Ascot   |Sunninghill and Ascot|        |        |        |        |        |
|/TestImages/Italy album/DSC03467.jpg       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2005.12.14_14.39.47-Italia-Firenze-Quartiere 1.jpg|12/14/2005 14:39:47|Italia-Firenze-Quartiere 1                |43.78559443333333   |11.234619433333334 |2005          |12             |14           |14            |39              |47               |Italia        |Firenze |Quartiere 1          |        |        |        |        |        |
|/TestImages/Italy album/GOPR7497.jpg       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.28.39-Italia-Arezzo.jpg             |10/22/2008 16:28:39|Italia-Arezzo                             |43.46744833333334   |11.885126666663888 |2008          |10             |22           |16            |28              |39               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DJI_01732.jpg      |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.29.49-Italia-Arezzo.jpg             |10/22/2008 16:29:49|Italia-Arezzo                             |43.46715666666389   |11.885394999997223 |2008          |10             |22           |16            |29              |49               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/GOPR7496.jpg       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.38.20-Italia-Arezzo.jpg             |10/22/2008 16:38:20|Italia-Arezzo                             |43.467081666663894  |11.884538333330555 |2008          |10             |22           |16            |38              |20               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DJI_01733.jpg      |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.43.21-Italia-Arezzo.jpg             |10/22/2008 16:43:21|Italia-Arezzo                             |43.468365           |11.881634999972222 |2008          |10             |22           |16            |43              |21               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC00001.JPG       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.44.01-Italia-Arezzo.jpg             |10/22/2008 16:44:01|Italia-Arezzo                             |43.46844166666667   |11.881515          |2008          |10             |22           |16            |44              |1                |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/IMG_0747.JPG       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.46.53-Italia-Arezzo.jpg             |10/22/2008 16:46:53|Italia-Arezzo                             |43.468243333330555  |11.880171666638889 |2008          |10             |22           |16            |46              |53               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC_1771.JPG       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.52.15-Italia-Arezzo.jpg             |10/22/2008 16:52:15|Italia-Arezzo                             |43.46725499999722   |11.879213333333334 |2008          |10             |22           |16            |52              |15               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC_1769.JPG       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.55.37-Italia-Arezzo.jpg             |10/22/2008 16:55:37|Italia-Arezzo                             |43.46601166663889   |11.87911166663889  |2008          |10             |22           |16            |55              |37               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC_1770.JPG       |photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_17.00.07-Italia-Arezzo-1.jpg           |10/22/2008 17:00:07|Italia-Arezzo                             |43.464455           |11.881478333333334 |2008          |10             |22           |17            |0               |7                |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC_1770_(same).jpg|photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_17.00.07-Italia-Arezzo-2.jpg           |10/22/2008 17:00:07|Italia-Arezzo                             |43.464455           |11.881478333333334 |2008          |10             |22           |17            |0               |7                |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/IMG_2371.jpg       |photo-cli-test/Italy album/no-address/IMG_2371.jpg                                                 |07/16/2008 11:33:20|                                          |                    |                   |2008          |7              |16           |11            |33              |20               |              |        |                     |        |        |        |        |        |
|/TestImages/Spain Journey/DSC_1807.jpg     |photo-cli-test/2015.04.10-2015.04.10-Spain Journey/2015.04.10_20.12.23-España-Madrid-1.jpg         |04/10/2015 20:12:23|España-Madrid                             |40.44697222222222   |-3.724752777777778 |2015          |4              |10           |20            |12              |23               |España        |Madrid  |                     |        |        |        |        |        |
|/TestImages/Spain Journey/DSC_1808.jpg     |photo-cli-test/2015.04.10-2015.04.10-Spain Journey/2015.04.10_20.12.23-España-Madrid-2.jpg         |04/10/2015 20:12:23|España-Madrid                             |40.44697222222222   |-3.724752777777778 |2015          |4              |10           |20            |12              |23               |España        |Madrid  |                     |        |        |        |        |        |
|/TestImages/Spain Journey/IMG_5397.jpg     |photo-cli-test/Spain Journey/no-address-and-no-photo-taken-date/IMG_5397.jpg                       |                   |                                          |                    |                   |              |               |             |              |                |                 |              |        |                     |        |        |        |        |        |

</details>

##### Contents of `photo-cli-report.csv` File in Raw Text Format (report of `copy` command)

<details>
  <summary>Click to expand</summary>

```csv
PhotoPath,PhotoNewPath,PhotoDateTaken,ReverseGeocodeFormatted,Latitude,Longitude,PhotoTakenYear,PhotoTakenMonth,PhotoTakenDay,PhotoTakenHour,PhotoTakenMinute,PhotoTakenSeconds,Address1,Address2,Address3,Address4,Address5,Address6,Address7,Address8
/TestImages/DSC_5727.jpg,photo-cli-test/2005.08.13_09.47.23-Kenya.jpg,08/13/2005 09:47:23,Kenya,-0.37129999999999996,36.056416666666664,2005,8,13,9,47,23,Kenya,,,,,,,
/TestImages/GOPR6742.jpg,photo-cli-test/2012.06.22_19.52.31-United Kingdom-Ascot-Sunninghill and Ascot.jpg,06/22/2012 19:52:31,United Kingdom-Ascot-Sunninghill and Ascot,51.424838333333334,-0.6735616666666666,2012,6,22,19,52,31,United Kingdom,Ascot,Sunninghill and Ascot,,,,,
/TestImages/Italy album/DSC03467.jpg,photo-cli-test/2005.12.14-2008.10.22-Italy album/2005.12.14_14.39.47-Italia-Firenze-Quartiere 1.jpg,12/14/2005 14:39:47,Italia-Firenze-Quartiere 1,43.78559443333333,11.234619433333334,2005,12,14,14,39,47,Italia,Firenze,Quartiere 1,,,,,
/TestImages/Italy album/GOPR7497.jpg,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.28.39-Italia-Arezzo.jpg,10/22/2008 16:28:39,Italia-Arezzo,43.46744833333334,11.885126666663888,2008,10,22,16,28,39,Italia,Arezzo,,,,,,
/TestImages/Italy album/DJI_01732.jpg,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.29.49-Italia-Arezzo.jpg,10/22/2008 16:29:49,Italia-Arezzo,43.46715666666389,11.885394999997223,2008,10,22,16,29,49,Italia,Arezzo,,,,,,
/TestImages/Italy album/GOPR7496.jpg,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.38.20-Italia-Arezzo.jpg,10/22/2008 16:38:20,Italia-Arezzo,43.467081666663894,11.884538333330555,2008,10,22,16,38,20,Italia,Arezzo,,,,,,
/TestImages/Italy album/DJI_01733.jpg,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.43.21-Italia-Arezzo.jpg,10/22/2008 16:43:21,Italia-Arezzo,43.468365,11.881634999972222,2008,10,22,16,43,21,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC00001.JPG,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.44.01-Italia-Arezzo.jpg,10/22/2008 16:44:01,Italia-Arezzo,43.46844166666667,11.881515,2008,10,22,16,44,1,Italia,Arezzo,,,,,,
/TestImages/Italy album/IMG_0747.JPG,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.46.53-Italia-Arezzo.jpg,10/22/2008 16:46:53,Italia-Arezzo,43.468243333330555,11.880171666638889,2008,10,22,16,46,53,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC_1771.JPG,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.52.15-Italia-Arezzo.jpg,10/22/2008 16:52:15,Italia-Arezzo,43.46725499999722,11.879213333333334,2008,10,22,16,52,15,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC_1769.JPG,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_16.55.37-Italia-Arezzo.jpg,10/22/2008 16:55:37,Italia-Arezzo,43.46601166663889,11.87911166663889,2008,10,22,16,55,37,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC_1770.JPG,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_17.00.07-Italia-Arezzo-1.jpg,10/22/2008 17:00:07,Italia-Arezzo,43.464455,11.881478333333334,2008,10,22,17,0,7,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC_1770_(same).jpg,photo-cli-test/2005.12.14-2008.10.22-Italy album/2008.10.22_17.00.07-Italia-Arezzo-2.jpg,10/22/2008 17:00:07,Italia-Arezzo,43.464455,11.881478333333334,2008,10,22,17,0,7,Italia,Arezzo,,,,,,
/TestImages/Italy album/IMG_2371.jpg,photo-cli-test/Italy album/no-address/IMG_2371.jpg,07/16/2008 11:33:20,,,,2008,7,16,11,33,20,,,,,,,,
/TestImages/Spain Journey/DSC_1807.jpg,photo-cli-test/2015.04.10-2015.04.10-Spain Journey/2015.04.10_20.12.23-España-Madrid-1.jpg,04/10/2015 20:12:23,España-Madrid,40.44697222222222,-3.724752777777778,2015,4,10,20,12,23,España,Madrid,,,,,,
/TestImages/Spain Journey/DSC_1808.jpg,photo-cli-test/2015.04.10-2015.04.10-Spain Journey/2015.04.10_20.12.23-España-Madrid-2.jpg,04/10/2015 20:12:23,España-Madrid,40.44697222222222,-3.724752777777778,2015,4,10,20,12,23,España,Madrid,,,,,,
/TestImages/Spain Journey/IMG_5397.jpg,photo-cli-test/Spain Journey/no-address-and-no-photo-taken-date/IMG_5397.jpg,,,,,,,,,,,,,,,,,,
```

</details>

### 2. Export all extracted information into a CSV Report With `photo-cli info` Command

#### Contents of photo-info.csv File in Markdown Table (output of `info` command)

<details>
  <summary>Click to expand</summary>

|PhotoPath                                  |PhotoNewPath|PhotoDateTaken     |ReverseGeocodeFormatted                   |Latitude            |Longitude          |PhotoTakenYear|PhotoTakenMonth|PhotoTakenDay|PhotoTakenHour|PhotoTakenMinute|PhotoTakenSeconds|Address1      |Address2|Address3             |Address4|Address5|Address6|Address7|Address8|
|-------------------------------------------|------------|-------------------|------------------------------------------|--------------------|-------------------|--------------|---------------|-------------|--------------|----------------|-----------------|--------------|--------|---------------------|--------|--------|--------|--------|--------|
|/TestImages/DSC_5727.jpg                   |            |08/13/2005 09:47:23|Kenya                                     |-0.37129999999999996|36.056416666666664 |2005          |8              |13           |9             |47              |23               |Kenya         |        |                     |        |        |        |        |        |
|/TestImages/GOPR6742.jpg                   |            |06/22/2012 19:52:31|United Kingdom-Ascot-Sunninghill and Ascot|51.424838333333334  |-0.6735616666666666|2012          |6              |22           |19            |52              |31               |United Kingdom|Ascot   |Sunninghill and Ascot|        |        |        |        |        |
|/TestImages/Italy album/DSC_1770.JPG       |            |10/22/2008 17:00:07|Italia-Arezzo                             |43.464455           |11.881478333333334 |2008          |10             |22           |17            |0               |7                |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC_1771.JPG       |            |10/22/2008 16:52:15|Italia-Arezzo                             |43.46725499999722   |11.879213333333334 |2008          |10             |22           |16            |52              |15               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/IMG_0747.JPG       |            |10/22/2008 16:46:53|Italia-Arezzo                             |43.468243333330555  |11.880171666638889 |2008          |10             |22           |16            |46              |53               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/IMG_2371.jpg       |            |07/16/2008 11:33:20|                                          |                    |                   |2008          |7              |16           |11            |33              |20               |              |        |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC_1770_(same).jpg|            |10/22/2008 17:00:07|Italia-Arezzo                             |43.464455           |11.881478333333334 |2008          |10             |22           |17            |0               |7                |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DJI_01733.jpg      |            |10/22/2008 16:43:21|Italia-Arezzo                             |43.468365           |11.881634999972222 |2008          |10             |22           |16            |43              |21               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC00001.JPG       |            |10/22/2008 16:44:01|Italia-Arezzo                             |43.46844166666667   |11.881515          |2008          |10             |22           |16            |44              |1                |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC_1769.JPG       |            |10/22/2008 16:55:37|Italia-Arezzo                             |43.46601166663889   |11.87911166663889  |2008          |10             |22           |16            |55              |37               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/GOPR7497.jpg       |            |10/22/2008 16:28:39|Italia-Arezzo                             |43.46744833333334   |11.885126666663888 |2008          |10             |22           |16            |28              |39               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DSC03467.jpg       |            |12/14/2005 14:39:47|Italia-Firenze-Quartiere 1                |43.78559443333333   |11.234619433333334 |2005          |12             |14           |14            |39              |47               |Italia        |Firenze |Quartiere 1          |        |        |        |        |        |
|/TestImages/Italy album/GOPR7496.jpg       |            |10/22/2008 16:38:20|Italia-Arezzo                             |43.467081666663894  |11.884538333330555 |2008          |10             |22           |16            |38              |20               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Italy album/DJI_01732.jpg      |            |10/22/2008 16:29:49|Italia-Arezzo                             |43.46715666666389   |11.885394999997223 |2008          |10             |22           |16            |29              |49               |Italia        |Arezzo  |                     |        |        |        |        |        |
|/TestImages/Spain Journey/DSC_1807.jpg     |            |04/10/2015 20:12:23|España-Madrid                             |40.44697222222222   |-3.724752777777778 |2015          |4              |10           |20            |12              |23               |España        |Madrid  |                     |        |        |        |        |        |
|/TestImages/Spain Journey/DSC_1808.jpg     |            |04/10/2015 20:12:23|España-Madrid                             |40.44697222222222   |-3.724752777777778 |2015          |4              |10           |20            |12              |23               |España        |Madrid  |                     |        |        |        |        |        |
|/TestImages/Spain Journey/IMG_5397.jpg     |            |                   |                                          |                    |                   |              |               |             |              |                |                 |              |        |                     |        |        |        |        |        |

</details>

#### Contents of `photo-info.csv` File in Raw Text Format (report of `info` command)

<details>
  <summary>Click to expand</summary>

```csv
PhotoPath,PhotoNewPath,PhotoDateTaken,ReverseGeocodeFormatted,Latitude,Longitude,PhotoTakenYear,PhotoTakenMonth,PhotoTakenDay,PhotoTakenHour,PhotoTakenMinute,PhotoTakenSeconds,Address1,Address2,Address3,Address4,Address5,Address6,Address7,Address8
/TestImages/DSC_5727.jpg,,08/13/2005 09:47:23,Kenya,-0.37129999999999996,36.056416666666664,2005,8,13,9,47,23,Kenya,,,,,,,
/TestImages/GOPR6742.jpg,,06/22/2012 19:52:31,United Kingdom-Ascot-Sunninghill and Ascot,51.424838333333334,-0.6735616666666666,2012,6,22,19,52,31,United Kingdom,Ascot,Sunninghill and Ascot,,,,,
/TestImages/Italy album/DSC_1770.JPG,,10/22/2008 17:00:07,Italia-Arezzo,43.464455,11.881478333333334,2008,10,22,17,0,7,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC_1771.JPG,,10/22/2008 16:52:15,Italia-Arezzo,43.46725499999722,11.879213333333334,2008,10,22,16,52,15,Italia,Arezzo,,,,,,
/TestImages/Italy album/IMG_0747.JPG,,10/22/2008 16:46:53,Italia-Arezzo,43.468243333330555,11.880171666638889,2008,10,22,16,46,53,Italia,Arezzo,,,,,,
/TestImages/Italy album/IMG_2371.jpg,,07/16/2008 11:33:20,,,,2008,7,16,11,33,20,,,,,,,,
/TestImages/Italy album/DSC_1770_(same).jpg,,10/22/2008 17:00:07,Italia-Arezzo,43.464455,11.881478333333334,2008,10,22,17,0,7,Italia,Arezzo,,,,,,
/TestImages/Italy album/DJI_01733.jpg,,10/22/2008 16:43:21,Italia-Arezzo,43.468365,11.881634999972222,2008,10,22,16,43,21,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC00001.JPG,,10/22/2008 16:44:01,Italia-Arezzo,43.46844166666667,11.881515,2008,10,22,16,44,1,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC_1769.JPG,,10/22/2008 16:55:37,Italia-Arezzo,43.46601166663889,11.87911166663889,2008,10,22,16,55,37,Italia,Arezzo,,,,,,
/TestImages/Italy album/GOPR7497.jpg,,10/22/2008 16:28:39,Italia-Arezzo,43.46744833333334,11.885126666663888,2008,10,22,16,28,39,Italia,Arezzo,,,,,,
/TestImages/Italy album/DSC03467.jpg,,12/14/2005 14:39:47,Italia-Firenze-Quartiere 1,43.78559443333333,11.234619433333334,2005,12,14,14,39,47,Italia,Firenze,Quartiere 1,,,,,
/TestImages/Italy album/GOPR7496.jpg,,10/22/2008 16:38:20,Italia-Arezzo,43.467081666663894,11.884538333330555,2008,10,22,16,38,20,Italia,Arezzo,,,,,,
/TestImages/Italy album/DJI_01732.jpg,,10/22/2008 16:29:49,Italia-Arezzo,43.46715666666389,11.885394999997223,2008,10,22,16,29,49,Italia,Arezzo,,,,,,
/TestImages/Spain Journey/DSC_1807.jpg,,04/10/2015 20:12:23,España-Madrid,40.44697222222222,-3.724752777777778,2015,4,10,20,12,23,España,Madrid,,,,,,
/TestImages/Spain Journey/DSC_1808.jpg,,04/10/2015 20:12:23,España-Madrid,40.44697222222222,-3.724752777777778,2015,4,10,20,12,23,España,Madrid,,,,,,
/TestImages/Spain Journey/IMG_5397.jpg,,,,,,,,,,,,,,,,,,,
```

</details>

#### What Happened? / How It Is Processed?

There is [some options](/docs/commands-verbs/info) and [lots of customization settings](/docs/settings#listing-all-settings), this is just a one of them. This information extracted is done by running only the following single command;

Command with explicit argument names & values
```
photo-cli info --all-folders --output photo-info.csv --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb --no-taken-date Continue --no-coordinate Continue
```

Same command with shorter alias of all argument names & values
```
photo-cli info -a -o photo-info.csv -e 2 -r country city town suburb -t Continue -c Continue
```

Console/terminal output (as progress may take time, for each operation completion status shown as percentage)
```
Searching photos: finished. 17 photos found.
Parsing photo exif information: finished.
Reverse Geocoding: finished.
Writing csv report: finished.
- 15 photos has taken date and coordinate.
- 1 photos has taken date but no coordinate.
- 1 photos has no taken date and coordinate.
```

#### Step By Step `photo-cli info` Process

1. As [all folders](/docs/command-line-arguments#all-folders---a---all-folders-) is selected. We are gathering all photo paths in the source folder within subfolders.
2. Extract EXIF data of each photograph's taken date and coordinate.
3. As [third-party reverse geocode](/docs/address-building-reverse-geocoding/intro) is selected, we are building address with `OpenStreetMap` by using [given administrative levels](/docs/address-building-reverse-geocoding/building-your-own-address-with-selected-properties) as `city town suburb` for each photograph.
4. As [no photograph taken date action](/docs/command-line-arguments#no-photograph-taken-date-action-for-info-command----t---no-taken-date-) is selected as `Continue` and [no coordinate action](/docs/command-line-arguments#no-coordinate-action-for-info-command----c---no-coordinate-) is selected as `Continue`, they are listing in report with empty data.

### 3. Navigate Your Photo Locations on Google Maps & Earth

If you want to discover your photographs interactively on world, you may do it by importing your CSV output (whether [photo-cli copy](/docs/commands-verbs/copy) or [photo-cli info](/docs/commands-verbs/info) command) to [Google Maps](https://maps.google.com) and [Google Earth](https://earth.google.com), you can interactively navigate through your photographs.

#### Google Maps

[Open Google My Maps](https://www.google.com/maps/d) and after clicking `Create a New Map`, you can import your CSV file on a layer(you may add many layers).

![google-maps](/img/screenshots/google/google-maps.png)

#### Google Earth Desktop

After installing [Google Earth Desktop](https://www.google.com/earth/versions/#earth-pro), on `File` menu, you can import your CSV file via `Import` menu item.

![google-earth-desktop](/img/screenshots/google/google-earth-pro-desktop.png)

#### Google Earth Web
To navigate your photographs on [Google Earth Web](https://earth.google.com/web/), first you should import your CSV on Google Earth Desktop and save it as [KMZ or KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language). Then you can create a project and add this KML file.

![google-earth-web](/img/screenshots/google/google-earth-web.png)
![google-earth-web](/img/screenshots/google/google-earth-web.png)