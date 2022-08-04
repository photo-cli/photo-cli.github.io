---
sidebar_position: 4
---

# 4. Naming With Address, Date in Same Folder Hierarchy

Preserve same folder hierarchy, copy photos with a file name as photo taken date, time and address. Possible file name will have number suffix. Photos that don't have any coordinate or photo taken date will be copied in a relative subfolder.

```
photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --naming-style AddressDateTimeWithSeconds  --reverse-geocode OpenStreetMapFoundation --openstreetmap-properties country city town suburb --number-style AllNamesAreSameLength --no-taken-date InSubFolder --no-coordinate InSubFolder --input photos --output organized-albums
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

├── Italy album
│   ├── Italia-Arezzo-2008.10.22_16.28.39.jpg
│   ├── Italia-Arezzo-2008.10.22_16.29.49.jpg
│   ├── Italia-Arezzo-2008.10.22_16.38.20.jpg
│   ├── Italia-Arezzo-2008.10.22_16.43.21.jpg
│   ├── Italia-Arezzo-2008.10.22_16.44.01.jpg
│   ├── Italia-Arezzo-2008.10.22_16.46.53.jpg
│   ├── Italia-Arezzo-2008.10.22_16.52.15.jpg
│   ├── Italia-Arezzo-2008.10.22_16.55.37.jpg
│   ├── Italia-Arezzo-2008.10.22_17.00.07-1.jpg
│   ├── Italia-Arezzo-2008.10.22_17.00.07-2.jpg
│   ├── Italia-Firenze-Quartiere 1-2005.12.14_14.39.47.jpg
│   └── no-address
│       └── IMG_2371.jpg
├── Kenya-2005.08.13_09.47.23.jpg
├── photo-cli-report.csv
├── Spain Journey
│   ├── España-Madrid-2015.04.10_20.12.23-1.jpg
│   ├── España-Madrid-2015.04.10_20.12.23-2.jpg
│   └── no-address-and-no-photo-taken-date
│       └── IMG_5397.jpg
└── United Kingdom-Ascot-Sunninghill and Ascot-2012.06.22_19.52.31.jpg

4 directories, 18 files
</pre>
</td>
</tr>
</table>