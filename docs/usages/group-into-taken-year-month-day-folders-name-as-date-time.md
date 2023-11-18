---
sidebar_position: 2
---

# 2. Group Into Taken Year/Month/Day Folders, Name as Date & Time

Groups photos by photo taken year, month, day than copy on [year]/[month]/[day] directory with a file name as photo taken date.

```
photo-cli copy --process-type FlattenAllSubFolders --group-by YearMonthDay --naming-style DateTimeWithSeconds --number-style OnlySequentialNumbers --input photos --output organized-albums
```

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
│   │       └── 2005.08.13_09.47.23.jpg
│   └── 12
│       └── 14
│           └── 2005.12.14_14.39.47.jpg
├── 2008
│   ├── 07
│   │   └── 16
│   │       └── 2008.07.16_11.33.20.jpg
│   └── 10
│       └── 22
│           ├── 2008.10.22_16.28.39.jpg
│           ├── 2008.10.22_16.29.49.jpg
│           ├── 2008.10.22_16.38.20.jpg
│           ├── 2008.10.22_16.43.21.jpg
│           ├── 2008.10.22_16.44.01.jpg
│           ├── 2008.10.22_16.46.53.jpg
│           ├── 2008.10.22_16.52.15.jpg
│           ├── 2008.10.22_16.55.37.jpg
│           ├── 2008.10.22_17.00.07-1.jpg
│           └── 2008.10.22_17.00.07-2.jpg
├── 2012
│   └── 06
│       └── 22
│           └── 2012.06.22_19.52.31.jpg
├── 2015
│   └── 04
│       └── 10
│           ├── 2015.04.10_20.12.23-1.jpg
│           └── 2015.04.10_20.12.23-2.jpg
├── IMG_5397.jpg
└── photo-cli-report.csv

16 directories, 18 files
</pre>
</td>
</tr>
</table>