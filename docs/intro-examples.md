---
sidebar_position: 0
---

# Intro - Examples

[![Nuget release](https://img.shields.io/nuget/v/photo-cli?label=stable&color=blue)](https-://www.nuget.org/packages/photo-cli/) [![Nuget download count](https://img.shields.io/nuget/dt/photo-cli)](https://www.nuget.org/packages/photo-cli/) [![Docker Image Version](https://img.shields.io/docker/v/photocli/photocli?label=docker&logo=docker&logoColor=white)](https://hub.docker.com/r/photocli/photocli) [![Homebrew](https://img.shields.io/nuget/v/photo-cli?label=homebrew&color=yellow)](https://github.com/photo-cli/homebrew-photo-cli) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=coverage)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![.github/workflows/CI.yml](https://github.com/photo-cli/photo-cli/actions/workflows/CI.yml/badge.svg)](https://github.com/photo-cli/photo-cli/actions/workflows/CI.yml) [![.github/workflows/stable.yml](https://github.com/photo-cli/photo-cli/actions/workflows/stable.yml/badge.svg)](https://github.com/photo-cli/photo-cli/actions/workflows/stable.yml)

[![Docs](https://img.shields.io/badge/docs-photocli.com-red)](https://photocli.com) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=photo-cli_photo-cli&metric=bugs)](https://sonarcloud.io/summary/new_code?id=photo-cli_photo-cli) [![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://github.com/photo-cli/photo-cli/blob/main/LICENSE) [![Nuget pre-release](https://img.shields.io/nuget/vpre/photo-cli?label=preview&color=red)](https://www.nuget.org/packages/photo-cli/#versions-body-tab) [![.github/workflows/preview.yml](https://github.com/photo-cli/photo-cli/actions/workflows/preview.yml/badge.svg)](https://github.com/photo-cli/photo-cli/actions/workflows/preview.yml)

`photo-cli` is [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tool (works on Linux & macOS & Windows) that extracts when and where ([reverse geocode](https://en.wikipedia.org/wiki/Reverse_geocoding)) your photographs are taken, [archive](#archive) or [copy](#copy) into a new organized folder (not modifying source folder) with various [folder](#folder-append-type---a---folder-append-) & [file naming](#naming-style---s---naming-style-) strategies with an album support to categorize, [list & view](#list) easily. All photo metadata is stored on local SQLite for archive operation and CSV for others. On [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) file (can view on Microsoft Excel, Libre/OpenOffice Calc, Apple Numbers, Google Sheets), you can [navigate your photo locations on Google Maps & Earth with your custom label and pin style](#3-navigate-your-photo-locations-on-google-maps--earth).

## Features Explained With Examples

There is five main feature that can be explained better with examples.

1. [Archive & index with albums into a specific folder with metadata stored locally on SQLite with `photo-cli archive` command](#1-archive--index-with-albums-into-a-specific-folder-with-metadata-stored-locally-on-sqlite-with-photo-cli-archive-command)
2. [Copy into a new organized folder example with `photo-cli copy` command](#2-copy-into-a-new-organized-folder-example-with-photo-cli-copy-command)
3. [List/Open Photos by their metadata on Archived Folder](#3-listopen-photos-by-their-metadata-on-archived-folder)
4. [Export all extracted information into a CSV Report With `photo-cli info` Command](#4-export-all-extracted-information-into-a-csv-report-with-photo-cli-info-command)
5. [Navigate Your Photo Locations on Google Maps & Earth](#5-navigate-your-photo-locations-on-google-maps--earth)

### 1. Archive & index with albums into a specific folder with metadata stored locally on SQLite with `photo-cli archive` command

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
│   ├── IMG_1979.HEIC
│   ├── IMG_1979.mov
│   ├── IMG_1979.xmp
│   ├── IMG_2371.jpg
│   └── IMG_O1979.aae
└── Spain Journey
    ├── DSC_1807.jpg
    ├── DSC_1808.jpg
    └── IMG_5397.jpg

2 directories, 21 files
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
├── 2025
│   └── 06
│       └── 03
│           ├── 2025.06.03_13.53.36-8a45af72730474e22582afbe72f53685d705a72c.heic
│           └── 2025.06.03_13.53.36-8a45af72730474e22582afbe72f53685d705a72c.mov
├── no-photo-taken-date
│   └── cf756397cc3ca81b2650c8801fd64e172504015a.jpg
└── photo-cli.sqlite3

20 directories, 19 files
</pre>
</td>
</tr>
</table>

#### What Happened? / How It Is Processed?

This archive process is done by running only the following single command;

```
photo-cli archive --input [relative|full folder path] --output [relative|full folder path] --album-type DateRange --album-name My-Album --auto-reverse-geocode-album --expected-day-range 7300 --delete-on-source --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city
```

Same command with shorter alias of all argument names & values

```
photo-cli archive -i [relative|full folder path] -o [relative|full folder path] -y 2 -a My-Album -s -w 7300 -f -e 2 -r country city
```

##### Console/terminal output (as progress may take time, for each operation completion status shown with progress)

<details>
  <summary>Click to expand</summary>

```
[17:07:27] Searching photo main files: started
[17:07:27] Searching photo main files: finished. 18 photo(s) found.
[17:07:27] Searching photo companion files: started
[17:07:27] Searching photo companion files: finished. 1 companion file(s) found.
[17:07:27] No coordinate found on `Gps` directory. Path:</test-photographs/Spain Journey/IMG_5397.jpg>
[17:07:27] No coordinate found on `Gps` directory. Path:</test-photographs/Italy album/IMG_2371.jpg>
[17:07:28] Calculating file hashes: started
[17:07:28] Calculating file hashes: finished.
[17:07:28] This OpenStreetMapFoundation provider is using rate limit of 1 second(s) between each request
[17:07:28] Reverse Geocoding: started
[17:07:31] Requested address types: City on index #2, not found on OpenStreetMap's response. Available types found:
{"country_code":"gb","country":"United Kingdom","postcode":"SL4 2DR","suburb":"Sunninghill and Ascot","road":"Windsor Road"}
. Path:</test-photographs/GOPR6742.jpg>
[17:07:47] Reverse Geocoding: finished.
[17:07:47] Directory grouping: started
[17:07:47] Directory grouping: finished.
[17:07:47] Processing target folder: started
[17:07:47] Photo is skipped due to same photo has already been archived. Same photo paths: <test-photographs/Italy album/DSC_1770.JPG>, <
/test-photographs/Italy album/DSC_1770_(same).jpg>
[17:07:47] Processing target folder: finished.
[17:07:47] Verified all photo files copied successfully by comparing file hashes from original photo files.
[17:07:47] Archiving photos to SQLite: started
[17:07:47] Archiving photos to SQLite: finished.
[17:07:47] Saving new date range album: started
[17:07:47] Saving new date range album: finished.
[17:07:47] Saving reverse geocode albums: started
[17:07:47] Saving reverse geocode albums: finished.
[17:07:47] Deleting source files: started
[17:07:47] Deleting source files: finished.
[17:07:47] Deleting empty directories: started
[17:07:47] Deleting empty directories: finished.
                        Statistics
┌────────────────────────────────────────────────┬───────┐
│ Statistic                                      │ Count │
├────────────────────────────────────────────────┼───────┤
│ File System Error(s)                           │ 0     │
│ Photo(s) found                                 │ 18    │
│ Photo(s) copied                                │ 17    │
│ Photo(s) existed on the output                 │ 0     │
│ Photo(s) are skipped, they have the same photo │ 1     │
│ Directory/directories created                  │ 8     │
│                                                │       │
│ Companion file(s) found                        │ 1     │
│ Companion file(s) copied                       │ 1     │
│ Companion file(s) existed on the output        │ 0     │
│                                                │       │
│ Source photo file(s) deleted                   │ 17    │
│ Source companion file(s) deleted               │ 1     │
│ Source empty directory(ies) deleted            │ 1     │
│                                                │       │
│ User defined album created                     │ 1     │
│ User defined album updated                     │ 0     │
│ Auto address album created                     │ 15    │
│                                                │       │
│ Reverse geocode request sent                   │ 14    │
│ Reverse geocode evaluated from memory          │ 2     │
│ Reverse geocode evaluated from database        │ 0     │
│ Photo(s) has taken date and coordinate         │ 16    │
│ Photo(s) has taken date but no coordinate      │ 1     │
│ Photo(s) has coordinate but no taken date      │ 0     │
│ Photo(s) has no taken date and coordinate      │ 1     │
│                                                │       │
│ Photo(s) has unknown/invalid format            │ 0     │
│ Photo(s) caused unexpected error internally    │ 0     │
└────────────────────────────────────────────────┴───────┘
[17:07:47] Archive process completed successfully
```
</details>

#### Step By Step `photo-cli archive` Process

1. Gather all photo paths in the source folder within subfolders.
2. Gather all photo companion files (if there is any) is which used but not limited for storing metadata, edits, RAW format files stored with same file name. For example Live Photos on iPhone storing short video clip of photo with a `mov` extension.
3. Extract EXIF data of each photograph's taken date and coordinate. As [third-party reverse geocode](#address-building--reverse-geocoding) is selected, we are building address with `OpenStreetMap` by using [given administrative levels](#4-building-your-own-address-with-selected-properties) as `city town` for each photograph.
4. As `expected-day-range` argument is given with, this is a validation between the photo taken date date range in days. If there is any photograph that has taken date outside the given day range, process won't start. This is optional argument to stop processing archive photos that are not within the expected given day range.
5. Photos which doesn't have coordinate information or reverse geocode propery missing, would be listed on the output by their paths as warning.
6. As `verify` argument is given, we are calculating file hashes of each photograph's file to verify that all photo files copied successfully by comparing file hashes from original photo files at the end of the process.
7. On the output folder, photos will be placed on folder hierarchy by it's photo taken date's `/[year]/[month]/[day]`. For example: `/2008/07/16/`.
8. Photo file names will be formatted as `yyyy.MM.dd_HH.mm.ss-{sha1-hash-of-file}.{extension}`. For example: `2008.07.16_11.33.20-90d835861e1aa3c829e3ab28a7f01ec3a090f664.jpg`. Input file name is: `IMG_2371.jpg`. Companion files are copied with the same name with their original file extension.
9. Input folder has duplicate photos with different names `DSC_1770.JPG`, `DSC_1770_(same).JPG`. We are only archiving one of them by comparing file hashes to output `2008/10/22/2008.10.22_17.00.07-a0ab699f5f99fce8ff49163e87c7590c2c9a66eb.jpg` and logs warning to output with their paths.
10. The photo that don't have any photo taken date `Spain Journey/IMG_5397.jpg`, copied into `no-photo-taken-date` folder with only a sha1-hash `cf756397cc3ca81b2650c8801fd64e172504015a.jpg`.
11. After copying all photos, we are verifying that all photo files copied successfully by comparing file hashes. It guarantees that there won't be any corrupted photos that is caused by disk operation failures.
12. All photo taken dates, address information is saved on local SQLite database on the output folder's top most folder `photo-cli.sqlite3` to able to open photos by their all metadata information.
13. As `album-name` argument is given with value of `My-Album` with a given album type of `DateRange`. We are creating an album on the database with the earliest and latest photo taken date able to match photos by date range with the album name to open photographs later.
14. As `auto-reverse-geocode-album` argument is given, we are creating albums on the database by each reverse geocode location property level to be able to open photos by the reverse geocode location. These are some of albums created regarding to sample photographs. `Firenze` , `Venezia`, `Italia`, `United Kingdom`.
15. As `delete-on-source` argument is given, we are deleting all source photo files, companion files & empty directories after archiving process is completed successfully..
16. Showing all the statistics of the process on the output.

##### Using `photo-cli list` command to see the `Albums` metadata of the previous output folder

```
photo-cli list --input [relative|full folder path] --type Albums
```

Same command with shorter alias of all argument names & values
```
photo-cli list -i [relative|full folder path] -t 1
```

###### Console/terminal output, rendering as table.
<details>
  <summary>Click to expand</summary>

```
┌────┬──────────────────┬────────────────┬─────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Id │ Name             │ Type           │ Created At          │ Configuration                                                                            │
├────┼──────────────────┼────────────────┼─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ 1  │ My-Album         │ UserDefined    │ 2025-07-27 17:07:47 │ {"PhotoIds":[3],"DateRange":{"Start":"2005-08-13T09:47:23","End":"2025-06-03T13:53:36"}} │
│ 2  │ United Kingdom   │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"ReverseGeocodeFormatted":"United Kingdom"}}                          │
│ 3  │ Kenya-Barut ward │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"ReverseGeocodeFormatted":"Kenya-Barut ward"}}                        │
│ 4  │ España-Madrid    │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"ReverseGeocodeFormatted":"España-Madrid"}}                           │
│ 5  │ Italia-Arezzo    │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"ReverseGeocodeFormatted":"Italia-Arezzo"}}                           │
│ 6  │ Italia-Venezia   │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"ReverseGeocodeFormatted":"Italia-Venezia"}}                          │
│ 7  │ Italia-Firenze   │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"ReverseGeocodeFormatted":"Italia-Firenze"}}                          │
│ 8  │ United Kingdom   │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address1":"United Kingdom"}}                                         │
│ 9  │ Kenya            │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address1":"Kenya"}}                                                  │
│ 10 │ España           │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address1":"España"}}                                                 │
│ 11 │ Italia           │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address1":"Italia"}}                                                 │
│ 12 │ Barut ward       │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address2":"Barut ward"}}                                             │
│ 13 │ Madrid           │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address2":"Madrid"}}                                                 │
│ 14 │ Arezzo           │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address2":"Arezzo"}}                                                 │
│ 15 │ Venezia          │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address2":"Venezia"}}                                                │
│ 16 │ Firenze          │ ReverseGeocode │ 2025-07-27 17:07:47 │ {"ReverseGeocode":{"Address2":"Firenze"}}                                                │
└────┴──────────────────┴────────────────┴─────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```
</details>

##### Contents of the `Photos` table in `photo-cli.sqlite3` SQLite Database in Markdown Table (output of `archive` command)

<details>
  <summary>Click to expand</summary>

| Id | Path | CreatedAt | DateTaken | ReverseGeocodeFormatted | Latitude | Longitude | Year | Month | Day | Hour | Minute | Seconds | Address1 | Address2 | Address3 | Address4 | Address5 | Address6 | Address7 | Address8 | Sha1Hash | IsDeleted | ModifiedAt |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 2012/06/22/2012.06.22\_19.52.31-bb649a18b3e7bb3df3701587a13f833749091817.jpg | 2025-07-27 17:07:47.378073 | 2012-06-22 19:52:31 | United Kingdom | 51.4248 | -0.6736 | 2012 | 6 | 22 | 19 | 52 | 31 | United Kingdom | null | null | null | null | null | null | null | bb649a18b3e7bb3df3701587a13f833749091817 | 0 | null |
| 2 | 2005/08/13/2005.08.13\_09.47.23-5842c73cfdc5f347551bb6016e00c71bb1393169.jpg | 2025-07-27 17:07:47.378273 | 2005-08-13 09:47:23 | Kenya-Barut ward | -0.3713 | 36.0564 | 2005 | 8 | 13 | 9 | 47 | 23 | Kenya | Barut ward | null | null | null | null | null | null | 5842c73cfdc5f347551bb6016e00c71bb1393169 | 0 | null |
| 3 | no-photo-taken-date/cf756397cc3ca81b2650c8801fd64e172504015a.jpg | 2025-07-27 17:07:47.378275 | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | null | cf756397cc3ca81b2650c8801fd64e172504015a | 0 | null |
| 4 | 2015/04/10/2015.04.10\_20.12.23-9f4e6d352ec172e1059571250655e376769080fe.jpg | 2025-07-27 17:07:47.378276 | 2015-04-10 20:12:23 | España-Madrid | 40.447 | -3.7248 | 2015 | 4 | 10 | 20 | 12 | 23 | España | Madrid | null | null | null | null | null | null | 9f4e6d352ec172e1059571250655e376769080fe | 0 | null |
| 5 | 2015/04/10/2015.04.10\_20.12.23-3907fc960f2873f40c8f35643dd444e0468be131.jpg | 2025-07-27 17:07:47.378277 | 2015-04-10 20:12:23 | España-Madrid | 40.447 | -3.7248 | 2015 | 4 | 10 | 20 | 12 | 23 | España | Madrid | null | null | null | null | null | null | 3907fc960f2873f40c8f35643dd444e0468be131 | 0 | null |
| 6 | 2008/07/16/2008.07.16\_11.33.20-90d835861e1aa3c829e3ab28a7f01ec3a090f664.jpg | 2025-07-27 17:07:47.378278 | 2008-07-16 11:33:20 | null | null | null | 2008 | 7 | 16 | 11 | 33 | 20 | null | null | null | null | null | null | null | null | 90d835861e1aa3c829e3ab28a7f01ec3a090f664 | 0 | null |
| 7 | 2008/10/22/2008.10.22\_16.44.01-d470205a1d331a9d3765b3762b7c954bb8efc6ea.jpg | 2025-07-27 17:07:47.378278 | 2008-10-22 16:44:01 | Italia-Arezzo | 43.4684 | 11.8815 | 2008 | 10 | 22 | 16 | 44 | 1 | Italia | Arezzo | null | null | null | null | null | null | d470205a1d331a9d3765b3762b7c954bb8efc6ea | 0 | null |
| 8 | 2008/10/22/2008.10.22\_17.00.07-a0ab699f5f99fce8ff49163e87c7590c2c9a66eb.jpg | 2025-07-27 17:07:47.378279 | 2008-10-22 17:00:07 | Italia-Arezzo | 43.4645 | 11.8815 | 2008 | 10 | 22 | 17 | 0 | 7 | Italia | Arezzo | null | null | null | null | null | null | a0ab699f5f99fce8ff49163e87c7590c2c9a66eb | 0 | null |
| 9 | 2008/10/22/2008.10.22\_16.52.15-6b89a245809031ecc47789cdeaa332545330fc39.jpg | 2025-07-27 17:07:47.37828 | 2008-10-22 16:52:15 | Italia-Arezzo | 43.4673 | 11.8792 | 2008 | 10 | 22 | 16 | 52 | 15 | Italia | Arezzo | null | null | null | null | null | null | 6b89a245809031ecc47789cdeaa332545330fc39 | 0 | null |
| 10 | 2008/10/22/2008.10.22\_16.55.37-dd42edcde2433a7df4a3d67bf61944a20884da89.jpg | 2025-07-27 17:07:47.378281 | 2008-10-22 16:55:37 | Italia-Arezzo | 43.466 | 11.8791 | 2008 | 10 | 22 | 16 | 55 | 37 | Italia | Arezzo | null | null | null | null | null | null | dd42edcde2433a7df4a3d67bf61944a20884da89 | 0 | null |
| 11 | 2008/10/22/2008.10.22\_16.43.21-3b0a3215b4f66d7ff4804dd223f192c21aee71bc.jpg | 2025-07-27 17:07:47.378282 | 2008-10-22 16:43:21 | Italia-Arezzo | 43.4684 | 11.8816 | 2008 | 10 | 22 | 16 | 43 | 21 | Italia | Arezzo | null | null | null | null | null | null | 3b0a3215b4f66d7ff4804dd223f192c21aee71bc | 0 | null |
| 12 | 2008/10/22/2008.10.22\_16.29.49-629b0b141634d6c0906e49af448bec8d755ba32c.jpg | 2025-07-27 17:07:47.378282 | 2008-10-22 16:29:49 | Italia-Arezzo | 43.4672 | 11.8854 | 2008 | 10 | 22 | 16 | 29 | 49 | Italia | Arezzo | null | null | null | null | null | null | 629b0b141634d6c0906e49af448bec8d755ba32c | 0 | null |
| 13 | 2008/10/22/2008.10.22\_16.38.20-620d23336a12ab54f9f0190fe93960a4dba2df59.jpg | 2025-07-27 17:07:47.378283 | 2008-10-22 16:38:20 | Italia-Arezzo | 43.4671 | 11.8845 | 2008 | 10 | 22 | 16 | 38 | 20 | Italia | Arezzo | null | null | null | null | null | null | 620d23336a12ab54f9f0190fe93960a4dba2df59 | 0 | null |
| 14 | 2008/10/22/2008.10.22\_16.28.39-5d66eec547469a1817bda4abe35c801359b2bb55.jpg | 2025-07-27 17:07:47.378284 | 2008-10-22 16:28:39 | Italia-Arezzo | 43.4674 | 11.8851 | 2008 | 10 | 22 | 16 | 28 | 39 | Italia | Arezzo | null | null | null | null | null | null | 5d66eec547469a1817bda4abe35c801359b2bb55 | 0 | null |
| 15 | 2008/10/22/2008.10.22\_16.46.53-f670f2bb6c54898894b06b083185b05086bd4e6e.jpg | 2025-07-27 17:07:47.378284 | 2008-10-22 16:46:53 | Italia-Arezzo | 43.4682 | 11.8802 | 2008 | 10 | 22 | 16 | 46 | 53 | Italia | Arezzo | null | null | null | null | null | null | f670f2bb6c54898894b06b083185b05086bd4e6e | 0 | null |
| 16 | 2025/06/03/2025.06.03\_13.53.36-8a45af72730474e22582afbe72f53685d705a72c.heic | 2025-07-27 17:07:47.378285 | 2025-06-03 13:53:36 | Italia-Venezia | 45.4332 | 12.3246 | 2025 | 6 | 3 | 13 | 53 | 36 | Italia | Venezia | null | null | null | null | null | null | 8a45af72730474e22582afbe72f53685d705a72c | 0 | null |
| 17 | 2005/12/14/2005.12.14\_14.39.47-03cb14d5c68beed97cbe73164de9771d537fcd96.jpg | 2025-07-27 17:07:47.378286 | 2005-12-14 14:39:47 | Italia-Firenze | 43.7856 | 11.2346 | 2005 | 12 | 14 | 14 | 39 | 47 | Italia | Firenze | null | null | null | null | null | null | 03cb14d5c68beed97cbe73164de9771d537fcd96 | 0 | null |
</details>

### 2. Copy Into a New Organized Folder Example With `photo-cli copy` Command

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
│   ├── IMG_1979.HEIC
│   ├── IMG_1979.mov
│   ├── IMG_1979.xmp
│   ├── IMG_2371.jpg
│   └── IMG_O1979.aae
└── Spain Journey
    ├── DSC_1807.jpg
    ├── DSC_1808.jpg
    └── IMG_5397.jpg

2 directories, 21 files
</pre>
</td>
<td>
<pre>
.
├── 2005.08.13_09.47.23-Kenya-Barut ward.jpg
├── 2005.12.14-2025.06.03-Italy album
│   ├── 2005.12.14_14.39.47-Italia-Firenze.jpg
│   ├── 2008.10.22_16.28.39-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.29.49-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.38.20-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.43.21-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.44.01-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.46.53-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.52.15-Italia-Arezzo.jpg
│   ├── 2008.10.22_16.55.37-Italia-Arezzo.jpg
│   ├── 2008.10.22_17.00.07-Italia-Arezzo-1.jpg
│   ├── 2008.10.22_17.00.07-Italia-Arezzo-2.jpg
│   ├── 2025.06.03_13.53.36-Italia-Venezia.heic
│   └── 2025.06.03_13.53.36-Italia-Venezia.mov
├── 2012.06.22_19.52.31-United Kingdom.jpg
├── 2015.04.10-2015.04.10-Spain Journey
│   ├── 2015.04.10_20.12.23-España-Madrid-1.jpg
│   └── 2015.04.10_20.12.23-España-Madrid-2.jpg
├── Italy album
│   └── no-address
│       └── IMG_2371.jpg
├── Spain Journey
│   └── no-address-and-no-photo-taken-date
│       └── IMG_5397.jpg
├── photo-cli-report.csv
└── sha1.lst

6 directories, 21 files
</pre>
</td>
</tr>
</table>

#### What Happened? / How It Is Processed?

There are lots of [transformation options](#usages) and [customization settings](#listing-all-settings), this is just a one of them. This transformation is done by running only the following single command;

Command with explicit argument names & values
```
photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --naming-style DateTimeWithSecondsAddress --number-style PaddingZeroCharacter --folder-append DayRange --folder-append-location Prefix --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city --output photo-cli-test --no-coordinate InSubFolder --no-taken-date InSubFolder --verify --expected-day-range 7300 --missing-reverse-geocode Continue
```

Same command with shorter alias of all argument names & values
```
photo-cli copy -f 2 -s 8 -n 2 -a 4 -p 1 -e 2 -r country city -o photo-cli-test -c 3 -t 3 -v -w 7300 -z 0
```

##### Console/terminal output (as progress may take time, for each operation completion status shown with progress)

<details>
  <summary>Click to expand</summary>

```
[17:07:28] Searching photo main files: started
[17:07:28] Searching photo main files: finished. 18 photo(s) found.
[17:07:28] Searching photo companion files: started
[17:07:28] Searching photo companion files: finished. 1 companion file(s) found.
[17:07:28] No coordinate found on `Gps` directory. Path:<
/Users/ac/src/photo-cli/docs/test-photographs/Spain Journey/IMG_5397.jpg>
[17:07:28] No coordinate found on `Gps` directory. Path:<
/Users/ac/src/photo-cli/docs/test-photographs/Italy album/IMG_2371.jpg>
[17:07:28] This OpenStreetMapFoundation provider is using rate limit of 1
second(s) between each request
[17:07:28] Reverse Geocoding: started
[17:07:29] Requested address types: City on index #2, not found on OpenStreetMap's response. Available types found:
{"country_code":"gb","country":"United Kingdom","postcode":"SL4 2DR","suburb":"Sunninghill and Ascot","road":"Windsor Road"}
. Path:</Users/ac/src/photo-cli/docs/test-photographs/GOPR6742.jpg>
[17:07:44] Reverse Geocoding: finished.
[17:07:44] Directory grouping: started
[17:07:44] Directory grouping: finished.
[17:07:44] Processing target folder: started
[17:07:45] Processing target folder: finished.
[17:07:45] Verified all photo files copied successfully by comparing file hashes from original photo files.
[17:07:45] All files SHA1 hashes written into file: sha1.lst. You may verify yourself with `sha1sum --check sha1.lst` tool in Linux/macOS.
[17:07:45] Writing csv report: started
[17:07:45] Writing csv report: finished.
                        Statistics
┌────────────────────────────────────────────────┬───────┐ddress
│ Statistic                                      │ Count │
├────────────────────────────────────────────────┼───────┤
│ File System Error(s)                           │ 0     │
│ Photo(s) found                                 │ 18    │
│ Photo(s) copied                                │ 18    │
│ Photo(s) existed on the output                 │ 0     │
│ Photo(s) are skipped, they have the same photo │ 0     │
│ Directory/directories created                  │ 4     │
│                                                │       │
│ Companion file(s) found                        │ 1     │
│ Companion file(s) copied                       │ 1     │
│ Companion file(s) existed on the output        │ 0     │
│                                                │       │
│ Source photo file(s) deleted                   │ 0     │
│ Source companion file(s) deleted               │ 0     │
│ Source empty directory(ies) deleted            │ 0     │
│                                                │       │
│ User defined album created                     │ 0     │
│ User defined album updated                     │ 0     │
│ Auto address album created                     │ 0     │
│                                                │       │
│ Reverse geocode request sent                   │ 14    │
│ Reverse geocode evaluated from memory          │ 2     │
│ Reverse geocode evaluated from database        │ 0     │
│ Photo(s) has taken date and coordinate         │ 16    │
│ Photo(s) has taken date but no coordinate      │ 1     │
│ Photo(s) has coordinate but no taken date      │ 0     │
│ Photo(s) has no taken date and coordinate      │ 1     │
│                                                │       │
│ Photo(s) has unknown/invalid format            │ 0     │
│ Photo(s) caused unexpected error internally    │ 0     │
└────────────────────────────────────────────────┴───────┘
[17:07:45] Copy process completed successfully
```
</details>

#### Step By Step `photo-cli copy` Process

1. Gather all photo paths in the source folder within subfolders.
2. Extract EXIF data of each photograph's taken date and coordinate.
3. As [the file name strategy](#naming-style---s---naming-style-) is selected as `DateTimeWithSecondsAddress` and it contains the address, by using [third-party reverse geocode provider](#address-building--reverse-geocoding) we are building the address with `OpenStreetMap` by using [given administrative levels](#4-building-your-own-address-with-selected-properties) as `city town suburb` for each photograph.
4. As [the folder process type](#folder-process-type---f---process-type-) is selected as `SubFoldersPreserveFolderHierarchy` folder and file hierarchy at the new output folder will be the same.
5. As [the folder append type](#folder-append-type---a---folder-append-) is selected as `DayRange` and [folder append location](#folder-append-location-type---p---folder-append-location-) is `Prefix`, folder names on output folder will be created with same name prefixed with a earliest and latest photograph taken date. For example: `2005.12.14-2008.10.22-Italy album` (original folder name is `Italy album`)
6. As [the file name strategy](#naming-style---s---naming-style-) is selected as `DateTimeWithSecondsAddress` each photograph file name would be copied as photo taken date unified with the address which is built from third party reverse geocode provider by photograph's coordinate. For example: `2012.06.22_19.52.31-United Kingdom-Ascot-Sunninghill and Ascot.jpg` (original file name is `GOPR6742.jpg`)
7. As [no photograph taken date action](#no-photograph-taken-date-action-for-copy-command----t---no-taken-date-) is selected as `InSubFolder` and [no coordinate action](#no-coordinate-action-for-copy-command----c---no-coordinate-) is selected as `InSubFolder`, photographs with no related EXIF data copied into a sub folder by obeying original folder hierarchy. For example: `/Italy album/no-address/IMG_2371.jpg` and `/Spain Journey/no-address-and-no-photo-taken-date/IMG_5397.jpg`
8. As [verify](#verify---v---verify) is added, it is verifying that all photo files copied successfully by comparing file hashes. By adding this, it guarantees that there won't be any corrupted photos that is caused by disk operation failures.
9. To verify and see all information in one place, `photo-cli-report.csv` report will be created on the output file. Can be examined in [Markdown table](#contents-of-photo-cli-reportcsv-file-in-markdown-table-report-of-copy-command) or [CSV file](#contents-of-photo-cli-reportcsv-file-in-raw-text-format-report-of-copy-command).

#### Contents of `photo-cli-report.csv` File in Markdown Table (report of `copy` command)

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

#### Contents of `photo-cli-report.csv` File in Raw Text Format (report of `copy` command)

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

### 3. List/Open Photos by their metadata on Archived Folder

After archiving our photos like the [first example](#1-archive--index-with-albums-into-a-specific-folder-with-metadata-stored-locally-on-sqlite-with-photo-cli-archive-command), we can list all the photos metadata and open the photos (currently only macOS Preview App is supported) by some filters.

#### Viewing Photos Taken on Year 2008 October in macOS Preview App

![viewing-in-preview-app](/img/screenshots/macos/viewing-in-preview-app.png)

This viewing process is done by running the following single command;

```
photo-cli list --input [relative|full existing archive path] --type PhotosByDate --year 2008 --month 10
```

Same command with shorter alias of all argument names & values
```
photo-cli list -i [relative|full existing archive path] -t 3 -y 2008 -m 10
```

Note: You can also open the photos by geolocation name (if you have used the argument `auto-reverse-geocode-album` while archiving) or by album ID.

**Important note**: If using Windows or Linux, you will get the list of full photo paths as output currently (like below) as there is no default photo viewer apps on these operating systems. If you want to open the photos on your photo viewer app of your, you can pipe this photo paths to your prefered photo viewer app.

##### Console Output of `list` command on Windows & Linux

<details>
  <summary>Click to expand</summary>

```
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.29.49-629b0b141634d6c0906e49af448bec8d755ba32c.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.55.37-dd42edcde2433a7df4a3d67bf61944a20884da89.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_17.00.07-a0ab699f5f99fce8ff49163e87c7590c2c9a66eb.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.46.53-f670f2bb6c54898894b06b083185b05086bd4e6e.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.44.01-d470205a1d331a9d3765b3762b7c954bb8efc6ea.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.52.15-6b89a245809031ecc47789cdeaa332545330fc39.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.28.39-5d66eec547469a1817bda4abe35c801359b2bb55.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.38.20-620d23336a12ab54f9f0190fe93960a4dba2df59.jpg
/[archive-full-folder-path]/2008/10/22/2008.10.22_16.43.21-3b0a3215b4f66d7ff4804dd223f192c21aee71bc.jpg
```
</details>

### 4. Export all extracted information into a CSV Report With `photo-cli info` Command

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

There is [some options](#info) and [lots of customization settings](#listing-all-settings), this is just a one of them. This information extracted is done by running only the following single command;

Command with explicit argument names & values
```
photo-cli info --all-folders --output photo-info.csv --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city --no-taken-date Continue --no-coordinate Continue --missing-reverse-geocode Continue
```

Same command with shorter alias of all argument names & values
```
photo-cli info -a -o photo-info.csv -e 2 -r country city -t 0 -c 0 -z 0
```

##### Console/terminal output (as progress may take time, for each operation completion status shown as percentage)

<details>
  <summary>Click to expand</summary>

```
[17:07:33] Searching photo main files: started
[17:07:33] Searching photo main files: finished. 18 photo(s) found.
[17:07:33] No coordinate found on `Gps` directory. Path:</Users/ac/src/photo-cli/docs/test-photographs/Spain Journey/IMG_5397.jpg>
[17:07:33] No coordinate found on `Gps` directory. Path:</Users/ac/src/photo-cli/docs/test-photographs/Italy album/IMG_2371.jpg>
[17:07:33] Reverse Geocoding: started
[17:07:33] Requested address types: City on index #2, not found on OpenStreetMap's response. Available types found:
{"country_code":"gb","country":"United Kingdom","postcode":"SL4 2DR","suburb":"Sunninghill and Ascot","road":"Windsor Road"}
. Path:</Users/ac/src/photo-cli/docs/test-photographs/GOPR6742.jpg>
[17:07:49] Reverse Geocoding: finished.
[17:07:49] Writing csv report: started
[17:07:49] Writing csv report: finished.
                        Statistics
┌────────────────────────────────────────────────┬───────┐
│ Statistic                                      │ Count │
├────────────────────────────────────────────────┼───────┤
│ File System Error(s)                           │ 0     │
│ Photo(s) found                                 │ 18    │
│ Photo(s) copied                                │ 0     │
│ Photo(s) existed on the output                 │ 0     │
│ Photo(s) are skipped, they have the same photo │ 0     │
│ Directory/directories created                  │ 0     │
│                                                │       │
│ Companion file(s) found                        │ 0     │
│ Companion file(s) copied                       │ 0     │
│ Companion file(s) existed on the output        │ 0     │
│                                                │       │
│ Source photo file(s) deleted                   │ 0     │
│ Source companion file(s) deleted               │ 0     │
│ Source empty directory(ies) deleted            │ 0     │
│                                                │       │
│ User defined album created                     │ 0     │
│ User defined album updated                     │ 0     │
│ Auto address album created                     │ 0     │
│                                                │       │
│ Reverse geocode request sent                   │ 14    │
│ Reverse geocode evaluated from memory          │ 2     │
│ Reverse geocode evaluated from database        │ 0     │
│ Photo(s) has taken date and coordinate         │ 16    │
│ Photo(s) has taken date but no coordinate      │ 1     │
│ Photo(s) has coordinate but no taken date      │ 0     │
│ Photo(s) has no taken date and coordinate      │ 1     │
│                                                │       │
│ Photo(s) has unknown/invalid format            │ 0     │
│ Photo(s) caused unexpected error internally    │ 0     │
└────────────────────────────────────────────────┴───────┘
```
</details>

#### Step By Step `photo-cli info` Process

1. As [all folders](#all-folders---a---all-folders-) is selected. We are gathering all photo paths in the source folder within subfolders.
2. Extract EXIF data of each photograph's taken date and coordinate.
3. As [third-party reverse geocode](#address-building--reverse-geocoding) is selected, we are building address with `OpenStreetMap` by using [given administrative levels](#4-building-your-own-address-with-selected-properties) as `city town suburb` for each photograph.
4. As [no photograph taken date action](#no-photograph-taken-date-action-for-info-command----t---no-taken-date-) is selected as `Continue` and [no coordinate action](#no-coordinate-action-for-info-command----c---no-coordinate-) is selected as `Continue`, they are listing in report with empty data.

### 5. Navigate Your Photo Locations on Google Maps & Earth

If you want to discover your photographs interactively in the world, you may do it by importing your CSV output (whether [photo-cli copy](#copy) or [photo-cli info](#info) command) to [Google Maps](https://maps.google.com) and [Google Earth](https://earth.google.com), you can interactively navigate through your photographs.

#### Google Maps

[Open Google My Maps](https://www.google.com/maps/d) and after clicking `Create a New Map`, you can import your CSV file on a layer(you may add many layers).

![google-maps](/img/screenshots/google/google-maps.png)

#### Google Earth Desktop

After installing [Google Earth Desktop](https://www.google.com/earth/versions/#earth-pro), on `File` menu, you can import your CSV file via `Import` menu item.

![google-earth-desktop](/img/screenshots/google/google-earth-pro-desktop.png)

#### Google Earth Web
To navigate your photographs on [Google Earth Web](https://earth.google.com/web/), first you should import your CSV on Google Earth Desktop and save it as [KMZ or KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language). Then you can create a project and add this KML file.

![google-earth-web](/img/screenshots/google/google-earth-web.png)