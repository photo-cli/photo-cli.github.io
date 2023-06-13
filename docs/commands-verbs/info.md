---
sidebar_position: 2
---

# Info

Creates a report (CSV file) listing all photo taken date and address (reverse geocode).

```
photo-cli help info
```

```
  -o, --output                      (MUST) File system path to write report file.

  -i, --input                       (Default current executing folder) File system path to read & copy photos from. ( there will be no modification on input path )

  -a, --all-folders                 (Optional) Read & list all photos in all sub folders (no extra parameter needed)

  -t, --no-taken-date               (Optional) Action to do when a photo with a no taken date. ( Continue: 0, PreventProcess: 1 )

  -c, --no-coordinate               (Optional) Action to do when a photo with a no coordinate. ( Continue: 0, PreventProcess: 1 )

  -e, --reverse-geocode             (Optional) Third-party provider to resolve photo taken address by photo's coordinates. ( Disabled: 0 [default], BigDataCloud: 1, OpenStreetMapFoundation: 2, GoogleMaps: 3, LocationIq: 5 )

  -b, --bigdatacloud-key            (Optional) API key needed to use BigDataCloud. https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/ (Instead of using this option, environment name: PHOTO_CLI_BIG_DATA_CLOUD_API_KEY can be used. )

  -u, --bigdatacloud-levels         (Optional) Admin levels separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from BigDataCloud. )

  -m, --googlemaps-types            (Optional) GoogleMaps address types separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from GoogleMaps. )

  -k, --googlemaps-key              (Optional) API key needed to use GoogleMaps. https://developers.google.com/maps/documentation/geocoding/overview/ (Instead of using this option, environment name: PHOTO_CLI_GOOGLE_MAPS_API_KEY can be used. )

  -r, --openstreetmap-properties    (Optional) OpenStreetMap properties separated with space. ( To see which level correspond to which address level, you may use `photo-cli address` to see full response returned from OpenStreetMap provider. )

  -q, --locationiq-key              (Optional) API key needed to use LocationIq. https://locationiq.com/docs/ (Instead of using this option, environment name: PHOTO_CLI_LOCATIONIQ_API_KEY can be used. )

  -h, --has-paid-license            (Optional) Bypass rate limit if you have paid license. ( For LocationIq. )

  -l, --language                    (Optional) Language/culture value to get localized address result for BigDataCloud ( https://www.bigdatacloud.com/supported-languages/ ) and GoogleMaps (https://developers.google.com/maps/faq#languagesupport ).

  --help                            Display this help screen.

  --version                         Display version information.

NOTES:
- Instead of option names (for ex: DateTimeWithMinutes), you may use options values too. (for ex: 3)
- You can use relative folder paths. If you use the input folder as the working directory, you don't need to use the input argument.

EXAMPLE USAGES:
- Photos located on all subfolders will be processed and their photograph's taken date and address information will be saved on CSV file using BigDataCloud reverse geocode provider.

Example with long argument names;
photo-cli info --all-folders --reverse-geocode OpenStreetMapFoundation --input [input-folder] --output [output-file].csv --openstreetmap-properties country city town suburb

Example with short argument names;
photo-cli info -a -e OpenStreetMapFoundation -i [input-folder] -o [output-file].csv -r country city town suburb

- Using Google Maps reverse geocode provider (need api key) with an option to prevent processing if there is no coordinate or no photo taken date found on any photo.

Example with long argument names;
photo-cli info --no-coordinate PreventProcess --reverse-geocode GoogleMaps --input [input-folder] --googlemaps-key google-api-key --googlemaps-types administrative_area_level_1 administrative_area_level_2 --output [output-file].csv --no-taken-date PreventProcess

Example with short argument names;
photo-cli info -c PreventProcess -e GoogleMaps -i [input-folder] -k google-api-key -m administrative_area_level_1 administrative_area_level_2 -o [output-file].csv -t PreventProcess
```
