---
sidebar_position: 40
---

# Supported Photo Types

With the default settings, we can process `jpg`, `jpeg`, `heic` and `png` photo files. As this tool internally using [MetadataExtractor](https://www.nuget.org/packages/MetadataExtractor/) package to extract image EXIF data, you can extend the supported photos with the [MetadataExtractor supported files](https://github.com/drewnoakes/metadata-extractor-dotnet?tab=readme-ov-file#features) by using [settings verb's set action](/docs/settings#setting-a-single-value).

## Setting Supported Extensions Example
```
settings -k SupportedExtensions -v jpg,ext1,ext2,ext3
```