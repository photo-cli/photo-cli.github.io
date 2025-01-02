---
sidebar_position: 50
---

# Processing Companion Files

We are also processing the companion files with the same name of your main photo files. The default settings is currently only `mov` which is popular among [iPhone Live Photos](https://support.apple.com/en-us/104966) output is also exporting with a video file next to your photo.

You can extend this companion extension by using [settings verb's set action](/docs/settings#setting-a-single-value).

## Setting Companion Extensions Example
```
settings -k CompanionExtensions -v mov,ext1,ext2,ext3
```