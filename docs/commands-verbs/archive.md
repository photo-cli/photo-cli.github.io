---
sidebar_position: 3
---

# Archive

Archives photos into specific folder and indexing photo taken date, address (reverse geocode) information into SQLite database.

```
photo-cli help archive
```

```
  -o, --output                      (MUST) File system path to create new organized folder. A new folder hierarchy will be created on that location with new file names. (will create folder if not exist)

  -i, --input                       (Default current executing folder) File system path to read & copy photos from. ( there will be no modification on the input path )

  -d, --dry-run                     (Optional) Simulate the same process without writing to the output folder. (no extra parameter needed)

  -x, --invalid-format              (Optional) Action to do when a photo format is invalid. ( Continue: 0 [default], PreventProcess: 1 )

  -t, --no-taken-date               (Optional) Action to do when a photo with a no taken date. ( Continue: 0 [default], PreventProcess: 1 )

  -c, --no-coordinate               (Optional) Action to do when a photo with a no coordinate. ( Continue: 0 [default], PreventProcess: 1 )

  -e, --reverse-geocode             (Optional) Third-party provider to resolve photo taken address by photo's coordinates. ( Disabled: 0 [default], BigDataCloud: 1, OpenStreetMapFoundation: 2, GoogleMaps:
                                    3, LocationIq: 5 )

  -b, --bigdatacloud-key            (Optional) API key needed to use BigDataCloud. https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/ (Instead of using this option, environment name:
                                    PHOTO_CLI_BIG_DATA_CLOUD_API_KEY can be used or `BigDataCloudApiKey` key can be set via settings command. )

  -u, --bigdatacloud-levels         (Optional) Admin levels separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see the full response returned
                                    from BigDataCloud. )

  -m, --googlemaps-types            (Optional) GoogleMaps address types separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see the full
                                    response returned from GoogleMaps. )

  -k, --googlemaps-key              (Optional) API key needed to use GoogleMaps. https://developers.google.com/maps/documentation/geocoding/overview/ (Instead of using this option, environment name:
                                    PHOTO_CLI_GOOGLE_MAPS_API_KEY can be used or `GoogleMapsApiKey` key can be set via settings command. )

  -r, --openstreetmap-properties    (Optional) OpenStreetMap properties separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see the full
                                    response returned from OpenStreetMap provider. )

  -q, --locationiq-key              (Optional) API key needed to use LocationIq. https://locationiq.com/docs/ (Instead of using this option, environment name: PHOTO_CLI_LOCATIONIQ_API_KEY can be used or
                                    `LocationIqApiKey` key can be set via settings command. )

  -h, --has-paid-license            (Optional) Bypass the free rate limit if you have paid license. ( For LocationIq. )

  -l, --language                    (Optional) Language/culture value to get localized address result for BigDataCloud ( https://www.bigdatacloud.com/supported-languages/ ) and GoogleMaps
                                    (https://developers.google.com/maps/faq#languagesupport ).

  --help                            Display this help screen.

  --version                         Display version information.

NOTES:
- Instead of option names (for ex: DateTimeWithMinutes), you may use options values too. (for ex: 3)
- You can use relative folder paths. If you use the input folder as the working directory, you don't need to use the input argument.

EXAMPLE USAGES:
- Archive all photos in current folder (and it's subfolders recursively) into output folder by [year]/[month]/[day] hierarchy with a file name photo taken date with seconds prefixed by file hash. Saves all photo taken information into local SQLite database.

Example with long argument names;
photo-cli archive --output [output-folder]

Example with short argument names;
photo-cli archive -o [output-folder]

- Archive all photos in input folder (and it's subfolders recursively), fetches all photo's reverse geocode information, copies into output folder by [year]/[month]/[day] hierarchy with a file name photo taken date with seconds prefixed by file hash. Saves all photo taken information and it's address (reverse geocode) into local SQLite database.

Example with long argument names;
photo-cli archive --no-coordinate PreventProcess --reverse-geocode OpenStreetMapFoundation --input [input-folder] --output [output-folder] --openstreetmap-properties country city town suburb --no-taken-date PreventProcess --invalid-format PreventProcess

Example with short argument names;
photo-cli archive -c PreventProcess -e OpenStreetMapFoundation -i [input-folder] -o [output-folder] -r country city town suburb -t PreventProcess -x PreventProcess
```
