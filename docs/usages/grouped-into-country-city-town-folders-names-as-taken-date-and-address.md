---
sidebar_position: 5
---

# 5. Grouped Into Country/City/Town Folders, Names as Taken Date and Address

Groups photos by address hierarchy than copy on [country]/[city]/[town] directory with a file name as photo taken date. Photos that don't have any coordinate will be copied in a relative subfolder.

```
photo-cli copy --process-type FlattenAllSubFolders --group-by AddressHierarchy --naming-style DayAddress --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb --number-style OnlySequentialNumbers --no-taken-date AppendToEndOrderByFileName --no-coordinate InSubFolder --input photos --output organized-albums
```

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

├── España
│   └── Madrid
│       ├── 2015.04.10-España-Madrid-1.jpg
│       └── 2015.04.10-España-Madrid-2.jpg
├── Italia
│   ├── Arezzo
│   │   ├── 2008.10.22-Italia-Arezzo-10.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-1.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-2.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-3.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-4.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-5.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-6.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-7.jpg
│   │   ├── 2008.10.22-Italia-Arezzo-8.jpg
│   │   └── 2008.10.22-Italia-Arezzo-9.jpg
│   └── Firenze
│       └── Quartiere 1
│           └── 2005.12.14-Italia-Firenze-Quartiere 1.jpg
├── Kenya
│   └── 2005.08.13-Kenya.jpg
├── no-address
│   ├── IMG_2371.jpg
│   └── IMG_5397.jpg
├── photo-cli-report.csv
└── United Kingdom
    └── Ascot
        └── Sunninghill and Ascot
            └── 2012.06.22-United Kingdom-Ascot-Sunninghill and Ascot.jpg

11 directories, 18 files
</pre>
</td>
</tr>
</table>