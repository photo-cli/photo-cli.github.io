---
sidebar_position: 1
---

# 1. Names as Sequential Numbering in Same Folder Hierarchy

Preserve same folder hierarchy, copy photos with sequential number ordering by photo taken date.

```
photo-cli copy --process-type SubFoldersPreserveFolderHierarchy --naming-style Numeric --number-style PaddingZeroCharacter --input photos --output organized-albums
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

├── 1.jpg
├── 2.jpg
├── Italy album
│   ├── 01.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   ├── 04.jpg
│   ├── 05.jpg
│   ├── 06.jpg
│   ├── 07.jpg
│   ├── 08.jpg
│   ├── 09.jpg
│   ├── 10.jpg
│   ├── 11.jpg
│   └── 12.jpg
├── photo-cli-report.csv
└── Spain Journey
      ├── 1.jpg
      ├── 2.jpg
      └── 3.jpg

2 directories, 18 files
</pre>
</td>
</tr>
</table>