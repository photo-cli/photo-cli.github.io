---
sidebar_position: 3
---

# 3. Folders Prefixed With Date Range, Names as Address & Date

Adding day range as a prefix to existing folder names and photos copied with a file name as address and day.

```
photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --folder-append DayRange --folder-append-location Prefix --naming-style AddressDay --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb  --number-style AllNamesAreSameLength --input photos --output organized-albums
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

├── 2005.12.14-2008.10.22-Italy album
│   ├── IMG_2371.jpg
│   ├── Italia-Arezzo-2008.10.22-10.jpg
│   ├── Italia-Arezzo-2008.10.22-11.jpg
│   ├── Italia-Arezzo-2008.10.22-12.jpg
│   ├── Italia-Arezzo-2008.10.22-13.jpg
│   ├── Italia-Arezzo-2008.10.22-14.jpg
│   ├── Italia-Arezzo-2008.10.22-15.jpg
│   ├── Italia-Arezzo-2008.10.22-16.jpg
│   ├── Italia-Arezzo-2008.10.22-17.jpg
│   ├── Italia-Arezzo-2008.10.22-18.jpg
│   ├── Italia-Arezzo-2008.10.22-19.jpg
│   └── Italia-Firenze-Quartiere 1-2005.12.14.jpg
├── 2015.04.10-2015.04.10-Spain Journey
│   ├── España-Madrid-2015.04.10-1.jpg
│   ├── España-Madrid-2015.04.10-2.jpg
│   └── IMG_5397.jpg
├── Kenya-2005.08.13.jpg
├── photo-cli-report.csv
└── United Kingdom-Ascot-Sunninghill and Ascot-2012.06.22.jpg

2 directories, 18 files
</pre>
</td>
</tr>
</table>