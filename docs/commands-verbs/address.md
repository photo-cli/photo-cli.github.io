---
sidebar_position: 5
---

# Address

Get address (reverse geocode) of single photo.

```
photo-cli help address
```

```
  -i, --input                       (Default current executing folder) File system path to read & copy photos from. ( there will be no modification on the input path )

  -e, --reverse-geocode             (Optional) Third-party provider to resolve photo taken address by photo's coordinates. ( Disabled: 0 [default], BigDataCloud: 1, OpenStreetMapFoundation: 2, GoogleMaps: 3, LocationIq: 5 )

  -t, --type                        (MUST) Response list detail level. ( AllAvailableProperties: 0, SelectedProperties: 1, FullResponse: 2 )

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
- All properties

Example with long argument names;
photo-cli address --reverse-geocode OpenStreetMapFoundation --input [photo-path].jpg

Example with short argument names;
photo-cli address -e OpenStreetMapFoundation -i [photo-path].jpg

- Selected properties

Example with long argument names;
photo-cli address --reverse-geocode OpenStreetMapFoundation --input [photo-path].jpg --openstreetmap-properties country city town suburb --type SelectedProperties

Example with short argument names;
photo-cli address -e OpenStreetMapFoundation -i [photo-path].jpg -r country city town suburb -t SelectedProperties

- Show full response

Example with long argument names;
photo-cli address --reverse-geocode OpenStreetMapFoundation --input [photo-path].jpg --type FullResponse

Example with short argument names;
photo-cli address -e OpenStreetMapFoundation -i [photo-path].jpg -t FullResponse
```
