---
sidebar_position: 0
---

# Intro - Examples

[![Nuget stable](https://img.shields.io/nuget/v/photo-cli)](https://www.nuget.org/packages/photo-cli/) [![.github/workflows/stable.yml](https://github.com/photo-cli/photo-cli/actions/workflows/stable.yml/badge.svg)](https://github.com/photo-cli/photo-cli/actions/workflows/stable.yml) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=coverage)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Nuget pre-release](https://img.shields.io/nuget/vpre/photo-cli)](https://www.nuget.org/packages/photo-cli/) [![.github/workflows/preview.yml](https://github.com/photo-cli/photo-cli/actions/workflows/preview.yml/badge.svg)](https://github.com/photo-cli/photo-cli/actions/workflows/preview.yml) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/photo-cli/photo-cli/blob/main/LICENSE)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=bugs)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![.github/workflows/CI.yml](https://github.com/photo-cli/photo-cli/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/photo-cli/photo-cli/actions/workflows/CI.yml)

`photo-cli` is [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tool (works on macOS & Windows & Linux) that extracts when and where ([reverse geocode](https://en.wikipedia.org/wiki/Reverse_geocoding)) your photographs are taken, copy into a new organized folder (not modifying source folder) with various [folder](/docs/command-line-arguments#folder-append-type---a---folder-append-) & [file naming](/docs/command-line-arguments#naming-style---s---naming-style-) strategies or export all data into [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) (can view on Microsoft Excel, Libre/OpenOffice Calc, Apple Numbers, Google Sheets) files. With this exported CSV file you can [navigate your photo locations on Google Maps & Earth with your custom label and pin style](#3-navigate-your-photo-locations-on-google-maps--earth).

## Features Explained With An Example

There is three main feature that can be explained better with examples.

1. [Copy into a new organized folder](#1-copy-into-a-new-organized-folder-example-with-photo-cli-copy-command)
2. [Archive & index into local SQLite incrementally in a specific folder with `photo-cli archive` command](#2-archive--index-into-local-sqlite-incrementally-in-a-specific-folder-with-photo-cli-archive-command)
3. [Export all extracted information into a CSV Report](#3-export-all-extracted-information-into-a-csv-report-with-photo-cli-info-command)
4. [Navigate Your Photo Locations on Google Maps & Earth](#4-navigate-your-photo-locations-on-google-maps--earth)

### 1. Copy Into a New Organized Folder Example With `photo-cli copy` Command

#### Folder & File Hierarchy Before -> After

<table>
<tr>
    <th>Original Folder Hierarchy</th>
    <th>After <b><i>photo-cli</i></b></th>
</tr>
<tr>
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

There are lots of [transformation options](/docs/usages/intro) and [customization settings](/docs/settings#listing-all-settings), this is just one of them. This transformation is done by running only the following single command;

Command with explicit argument names & values
```
photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --naming-style DateTimeWithSecondsAddress --number-style PaddingZeroCharacter --folder-append DayRange --folder-append-location Prefix --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb --output photo-cli-test --no-coordinate InSubFolder --no-taken-date InSubFolder --verify
```

Same command with shorter alias of all argument names & values
```
photo-cli copy -f 2 -s 8 -n 2 -a 4 -p 1 -e 2 -r country city town suburb -o photo-cli-test -c 3 -t 3 -v
```

Console/terminal output (as progress may take time, for each operation completion status shown with progress)
```
Searching photos: finished. 17 photos found.
Parsing photo exif information: finished.
This OpenStreetMapFoundation provider is using rate limit of 1 seconds between each request
Reverse Geocoding: finished.
Directory grouping: finished.
Processing target folder: finished.
Verified all photo files copied successfully by comparing file hashes from original photo files.
All files SHA1 hashes written into file: sha1.lst. You may verify yourself with `sha1sum --check sha1.lst` tool in Linux/macOS.
Writing csv report: finished.
- 17 photos copied.
- 4 directories created.
- 15 photos has taken date and coordinate.
- 1 photos has taken date but no coordinate.
- 1 photos has no taken date and coordinate.
```

#### Step By Step `photo-cli copy` Process

1. Gather all photo paths in the source folder within subfolders.
2. Extract EXIF data of each photograph's taken date and coordinate.
3. As [the file name strategy](/docs/command-line-arguments#naming-style---s---naming-style-) is selected as `DateTimeWithSecondsAddress` and it contains the address, by using [third-party reverse geocode provider](/docs/address-building-reverse-geocoding/intro) we are building the address with `OpenStreetMap` by using [given administrative levels](/docs/address-building-reverse-geocoding/building-your-own-address-with-selected-properties) as `city town suburb` for each photograph.
4. As [the folder process type](/docs/command-line-arguments#folder-process-type---f---process-type-) is selected as `SubFoldersPreserveFolderHierarchy` folder and file hierarchy at the new output folder will be the same.
5. As [the folder append type](/docs/command-line-arguments#folder-append-type---a---folder-append-) is selected as `DayRange` and [folder append location](/docs/command-line-arguments#folder-append-location-type---p---folder-append-location-) is `Prefix`, folder names on output folder will be created with the same name prefixed with the earliest and latest photograph taken date. For example: `2005.12.14-2008.10.22-Italy album` (original folder name is `Italy album`)
6. As [the file name strategy](/docs/command-line-arguments#naming-style---s---naming-style-) is selected as `DateTimeWithSecondsAddress` each photograph file name would be copied as a photo taken date unified with the address which is built from the third party reverse geocode provider by the photograph's coordinate. For example: `2012.06.22_19.52.31-United Kingdom-Ascot-Sunninghill and Ascot.jpg` (original file name is `GOPR6742.jpg`)
7. As [no photograph taken date action](/docs/command-line-arguments#no-photograph-taken-date-action-for-copy-command----t---no-taken-date-) is selected as `InSubFolder` and [no coordinate action](/docs/command-line-arguments#no-coordinate-action-for-copy-command----c---no-coordinate-) is selected as `InSubFolder`, photographs with no related EXIF data are copied into a sub folder by obeying the original folder hierarchy. For example: `/Italy album/no-address/IMG_2371.jpg` and `/Spain Journey/no-address-and-no-photo-taken-date/IMG_5397.jpg`
8. As [verify](/docs/command-line-arguments#verify---v---verify) is added, it is verifying that all photo files copied successfully by comparing file hashes. By adding this, it guarantees that there won't be any corrupted photos that is caused by disk operation failures.
9. To verify and see all information in one place, `photo-cli-report.csv` report will be created on the output file. Can be examined in [Markdown table](#contents-of-photo-cli-reportcsv-file-in-markdown-table-report-of-copy-command) or [CSV file](#contents-of-photo-cli-reportcsv-file-in-raw-text-format-report-of-copy-command).

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

### 2. Archive & index into local SQLite incrementally in a specific folder with `photo-cli archive` command

#### Folder & File Hierarchy Before -> After

<table>
<tr>
    <th>Original Folder Hierarchy</th>
    <th>After <b><i>photo-cli</i></b></th>
</tr>
<tr>
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
├── 2005
│   ├── 08
│   │   └── 13
│   │       └── 2005.08.13_09.47.23-5842c73cfdc5f347551bb6016e00c71bb1393169.jpg
│   └── 12
│       └── 14
│           └── 2005.12.14_14.39.47-03cb14d5c68beed97cbe73164de9771d537fcd96.jpg
├── 2008
│   ├── 07
│   │   └── 16
│   │       └── 2008.07.16_11.33.20-90d835861e1aa3c829e3ab28a7f01ec3a090f664.jpg
│   └── 10
│       └── 22
│           ├── 2008.10.22_16.28.39-5d66eec547469a1817bda4abe35c801359b2bb55.jpg
│           ├── 2008.10.22_16.29.49-629b0b141634d6c0906e49af448bec8d755ba32c.jpg
│           ├── 2008.10.22_16.38.20-620d23336a12ab54f9f0190fe93960a4dba2df59.jpg
│           ├── 2008.10.22_16.43.21-3b0a3215b4f66d7ff4804dd223f192c21aee71bc.jpg
│           ├── 2008.10.22_16.44.01-d470205a1d331a9d3765b3762b7c954bb8efc6ea.jpg
│           ├── 2008.10.22_16.46.53-f670f2bb6c54898894b06b083185b05086bd4e6e.jpg
│           ├── 2008.10.22_16.52.15-6b89a245809031ecc47789cdeaa332545330fc39.jpg
│           ├── 2008.10.22_16.55.37-dd42edcde2433a7df4a3d67bf61944a20884da89.jpg
│           └── 2008.10.22_17.00.07-a0ab699f5f99fce8ff49163e87c7590c2c9a66eb.jpg
├── 2012
│   └── 06
│       └── 22
│           └── 2012.06.22_19.52.31-bb649a18b3e7bb3df3701587a13f833749091817.jpg
├── 2015
│   └── 04
│       └── 10
│           ├── 2015.04.10_20.12.23-3907fc960f2873f40c8f35643dd444e0468be131.jpg
│           └── 2015.04.10_20.12.23-9f4e6d352ec172e1059571250655e376769080fe.jpg
├── no-photo-taken-date
│   └── cf756397cc3ca81b2650c8801fd64e172504015a.jpg
└── photo-cli.sqlite3

17 directories, 17 files
</pre>
</td>
</tr>
</table>

#### What Happened? / How It Is Processed?

This archive process is done by running only the following single command;

```
photo-cli archive --output archive-folder --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb
```

Same command with shorter alias of all argument names & values

```
photo-cli archive -o archive-folder -e 2 -r country city town suburb
```

Console/terminal output (as progress may take time, for each operation completion status shown with progress)
```
Searching photos: finished. 17 photo(s) found.
warn: PhotoCli.Services.Implementations.ExifParserService[0]
      No coordinate found on `Gps` directory for /Users/ac/dev/src/photo-cli/photo-cli/docs/test-photographs/Spain Journey/IMG_5397.jpg
warn: PhotoCli.Services.Implementations.ExifParserService[0]
      No coordinate found on `Gps` directory for /Users/ac/dev/src/photo-cli/photo-cli/docs/test-photographs/Italy album/IMG_2371.jpg
Parsing photo exif information: finished.
This OpenStreetMapFoundation provider is using rate limit of 1 second(s) between each request
Reverse Geocoding: finished.
Directory grouping: started.
Directory grouping: finished.
warn: PhotoCli.Services.Implementations.DuplicatePhotoRemoveService[0]
      Photo is skipped due to same photo has already been archived. Same photo paths: /Users/ac/dev/src/photo-cli/photo-cli/docs/test-photographs/Italy album/DSC_1770.JPG, /Users/ac/dev/src/photo-cli/photo-cli/docs/test-photographs/Italy album/DSC_1770_(same).jpg
Processing target folder: finished.
Verified all photo files copied successfully by comparing file hashes from original photo files.
- 16 photo(s) existed on the output.
- 1 photo(s) are skipped, they have the same photo.
- 15 photo(s) has taken date and coordinate.
- 1 photo(s) has taken date but no coordinate.
- 1 photo(s) has no taken date and coordinate.
```

#### Step By Step `photo-cli archive` Process

1. Gather all photo paths in the source folder within subfolders.
2. Extract EXIF data of each photograph's taken date and coordinate.
3. As [third-party reverse geocode](/docs/address-building-reverse-geocoding/intro) is selected, we are building address with `OpenStreetMap` by using [given administrative levels](/docs/address-building-reverse-geocoding/building-your-own-address-with-selected-properties) as `city town suburb` for each photograph.
4. On the output folder, photos will be placed on folder hierarchy by it's photo taken date's `/[year]/[month]/[day]`. For example: `/2008/07/16/`.
5. Photo file names will be formatted as `yyyy.MM.dd_HH.mm.ss-{sha1-hash-of-file}.{extension}`. For example: `2008.07.16_11.33.20-90d835861e1aa3c829e3ab28a7f01ec3a090f664.jpg`. Input file name is: `IMG_2371.jpg`.
6. Input folder has duplicate photos with different names `DSC_1770.JPG`, `DSC_1770_(same).JPG`. We are only archiving one of them by comparing file hashes to output `2008/10/22/2008.10.22_17.00.07-a0ab699f5f99fce8ff49163e87c7590c2c9a66eb.jpg` and logs warning on the console with a message `Photo is skipped due to same photo has already been archived. Same photo paths: /Users/ac/dev/src/photo-cli/photo-cli/docs/test-photographs/Italy album/DSC_1770.JPG, /Users/ac/dev/src/photo-cli/photo-cli/docs/test-photographs/Italy album/DSC_1770_(same).jpg`.
7. The photo that don't have any photo taken date `Spain Journey/IMG_5397.jpg`, copied into `no-photo-taken-date` folder with only a sha1-hash `cf756397cc3ca81b2650c8801fd64e172504015a.jpg`.
8. After copying all photos, we are verifying that all photo files copied successfully by comparing file hashes. It guarantees that there won't be any corrupted photos that is caused by disk operation failures.
9. All photo taken dates, address information is saved on local SQLite database on the output folder's top most folder `photo-cli.sqlite3`. It's an extra feature for technical persons who has technical knowledge about databases who wants to query for personal purposes.

##### Contents of `photo-cli.sqlite3` SQLite Database in Markdown Table (output of `archive` command)

| Id   | Path                                                                         | CreatedAt                  | DateTaken           | ReverseGeocodeFormatted                    | Latitude             | Longitude           | Year | Month | Day  | Hour | Minute | Seconds | Address1       | Address2   | Address3              | Address4 | Address5 | Address6 | Address7 | Address8 | Sha1Hash                                 |
|------|------------------------------------------------------------------------------|----------------------------|---------------------|--------------------------------------------|----------------------|---------------------|------|-------|------|------|--------|---------|----------------|------------|-----------------------|----------|----------|----------|----------|----------|------------------------------------------|
| 1    | 2012/06/22/2012.06.22\_19.52.31-bb649a18b3e7bb3df3701587a13f833749091817.jpg | 2023-11-17 00:44:18.942182 | 2012-06-22 19:52:31 | United Kingdom-Ascot-Sunninghill and Ascot | 51.424838333333334   | -0.6735616666666666 | 2012 | 6     | 22   | 19   | 52     | 31      | United Kingdom | Ascot      | Sunninghill and Ascot | null     | null     | null     | null     | null     | bb649a18b3e7bb3df3701587a13f833749091817 |
| 2    | 2005/08/13/2005.08.13\_09.47.23-5842c73cfdc5f347551bb6016e00c71bb1393169.jpg | 2023-11-17 00:44:18.942391 | 2005-08-13 09:47:23 | Kenya-Barut ward                           | -0.37129999999999996 | 36.056416666666664  | 2005 | 8     | 13   | 9    | 47     | 23      | Kenya          | Barut ward | null                  | null     | null     | null     | null     | null     | 5842c73cfdc5f347551bb6016e00c71bb1393169 |
| 3    | no-photo-taken-date/cf756397cc3ca81b2650c8801fd64e172504015a.jpg             | 2023-11-17 00:44:18.942393 | null                | null                                       | null                 | null                | null | null  | null | null | null   | null    | null           | null       | null                  | null     | null     | null     | null     | null     | cf756397cc3ca81b2650c8801fd64e172504015a |
| 4    | 2015/04/10/2015.04.10\_20.12.23-9f4e6d352ec172e1059571250655e376769080fe.jpg | 2023-11-17 00:44:18.942394 | 2015-04-10 20:12:23 | España-Madrid                              | 40.44697222222222    | -3.724752777777778  | 2015 | 4     | 10   | 20   | 12     | 23      | España         | Madrid     | null                  | null     | null     | null     | null     | null     | 9f4e6d352ec172e1059571250655e376769080fe |
| 5    | 2015/04/10/2015.04.10\_20.12.23-3907fc960f2873f40c8f35643dd444e0468be131.jpg | 2023-11-17 00:44:18.942395 | 2015-04-10 20:12:23 | España-Madrid                              | 40.44697222222222    | -3.724752777777778  | 2015 | 4     | 10   | 20   | 12     | 23      | España         | Madrid     | null                  | null     | null     | null     | null     | null     | 3907fc960f2873f40c8f35643dd444e0468be131 |
| 6    | 2008/07/16/2008.07.16\_11.33.20-90d835861e1aa3c829e3ab28a7f01ec3a090f664.jpg | 2023-11-17 00:44:18.942396 | 2008-07-16 11:33:20 | null                                       | null                 | null                | 2008 | 7     | 16   | 11   | 33     | 20      | null           | null       | null                  | null     | null     | null     | null     | null     | 90d835861e1aa3c829e3ab28a7f01ec3a090f664 |
| 7    | 2008/10/22/2008.10.22\_16.44.01-d470205a1d331a9d3765b3762b7c954bb8efc6ea.jpg | 2023-11-17 00:44:18.942398 | 2008-10-22 16:44:01 | Italia-Arezzo                              | 43.46844166666667    | 11.881515           | 2008 | 10    | 22   | 16   | 44     | 1       | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | d470205a1d331a9d3765b3762b7c954bb8efc6ea |
| 8    | 2008/10/22/2008.10.22\_17.00.07-a0ab699f5f99fce8ff49163e87c7590c2c9a66eb.jpg | 2023-11-17 00:44:18.942401 | 2008-10-22 17:00:07 | Italia-Arezzo                              | 43.464455            | 11.881478333333334  | 2008 | 10    | 22   | 17   | 0      | 7       | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | a0ab699f5f99fce8ff49163e87c7590c2c9a66eb |
| 9    | 2008/10/22/2008.10.22\_16.52.15-6b89a245809031ecc47789cdeaa332545330fc39.jpg | 2023-11-17 00:44:18.942401 | 2008-10-22 16:52:15 | Italia-Arezzo                              | 43.46725499999722    | 11.879213333333334  | 2008 | 10    | 22   | 16   | 52     | 15      | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | 6b89a245809031ecc47789cdeaa332545330fc39 |
| 10   | 2008/10/22/2008.10.22\_16.55.37-dd42edcde2433a7df4a3d67bf61944a20884da89.jpg | 2023-11-17 00:44:18.942402 | 2008-10-22 16:55:37 | Italia-Arezzo                              | 43.46601166663889    | 11.87911166663889   | 2008 | 10    | 22   | 16   | 55     | 37      | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | dd42edcde2433a7df4a3d67bf61944a20884da89 |
| 11   | 2008/10/22/2008.10.22\_16.43.21-3b0a3215b4f66d7ff4804dd223f192c21aee71bc.jpg | 2023-11-17 00:44:18.942403 | 2008-10-22 16:43:21 | Italia-Arezzo                              | 43.468365            | 11.881634999972222  | 2008 | 10    | 22   | 16   | 43     | 21      | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | 3b0a3215b4f66d7ff4804dd223f192c21aee71bc |
| 12   | 2008/10/22/2008.10.22\_16.29.49-629b0b141634d6c0906e49af448bec8d755ba32c.jpg | 2023-11-17 00:44:18.942403 | 2008-10-22 16:29:49 | Italia-Arezzo                              | 43.46715666666389    | 11.885394999997223  | 2008 | 10    | 22   | 16   | 29     | 49      | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | 629b0b141634d6c0906e49af448bec8d755ba32c |
| 13   | 2008/10/22/2008.10.22\_16.38.20-620d23336a12ab54f9f0190fe93960a4dba2df59.jpg | 2023-11-17 00:44:18.942404 | 2008-10-22 16:38:20 | Italia-Arezzo                              | 43.467081666663894   | 11.884538333330555  | 2008 | 10    | 22   | 16   | 38     | 20      | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | 620d23336a12ab54f9f0190fe93960a4dba2df59 |
| 14   | 2008/10/22/2008.10.22\_16.28.39-5d66eec547469a1817bda4abe35c801359b2bb55.jpg | 2023-11-17 00:44:18.942405 | 2008-10-22 16:28:39 | Italia-Arezzo                              | 43.46744833333334    | 11.885126666663888  | 2008 | 10    | 22   | 16   | 28     | 39      | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | 5d66eec547469a1817bda4abe35c801359b2bb55 |
| 15   | 2008/10/22/2008.10.22\_16.46.53-f670f2bb6c54898894b06b083185b05086bd4e6e.jpg | 2023-11-17 00:44:18.942406 | 2008-10-22 16:46:53 | Italia-Arezzo                              | 43.468243333330555   | 11.880171666638889  | 2008 | 10    | 22   | 16   | 46     | 53      | Italia         | Arezzo     | null                  | null     | null     | null     | null     | null     | f670f2bb6c54898894b06b083185b05086bd4e6e |
| 16   | 2005/12/14/2005.12.14\_14.39.47-03cb14d5c68beed97cbe73164de9771d537fcd96.jpg | 2023-11-17 00:44:18.942407 | 2005-12-14 14:39:47 | Italia-Firenze-Quartiere 1                 | 43.78559443333333    | 11.234619433333334  | 2005 | 12    | 14   | 14   | 39     | 47      | Italia         | Firenze    | Quartiere 1           | null     | null     | null     | null     | null     | 03cb14d5c68beed97cbe73164de9771d537fcd96 |

### 3. Export all extracted information into a CSV Report With `photo-cli info` Command

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

### 4. Navigate Your Photo Locations on Google Maps & Earth

If you want to discover your photographs interactively in the world, you may do it by importing your CSV output (whether [photo-cli copy](/docs/commands-verbs/copy) or [photo-cli info](/docs/commands-verbs/info) command) to [Google Maps](https://maps.google.com) and [Google Earth](https://earth.google.com), you can interactively navigate through your photographs.

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
