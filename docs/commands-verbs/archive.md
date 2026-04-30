---
sidebar_position: 1
---

# Archive

Archives photos into same specific folder, optionally groups them by albums (date range, reverse geocode or individual), and indexes photo taken date, address (reverse geocode) information into SQLite database.

```
photo-cli help archive
```

```
  -o, --output                        (MUST) File system path to create new
                                      organized folder. A new folder hierarchy
                                      will be created on that location with new
                                      file names. (will create folder if not
                                      exist)

  -i, --input                         (Default current executing folder) File
                                      system path to read & copy photos from. (
                                      there will be no modification on the input
                                      path )

  -d, --dry-run                       (Optional) Simulate the same process
                                      without writing to the output folder. (no
                                      extra parameter needed)

  -x, --invalid-format                (Optional) Action to do when a photo
                                      format is invalid. ( Continue: 0
                                      [default], PreventProcess: 1 )

  -t, --no-taken-date                 (Optional) Action to do when a photo with
                                      a no taken date. ( Continue: 0 [default],
                                      PreventProcess: 1 )

  -c, --no-coordinate                 (Optional) Action to do when a photo with
                                      a no coordinate. ( Continue: 0 [default],
                                      PreventProcess: 1 )

  -w, --expected-day-range            (Optional) Provide a maximum expected day
                                      difference as number for your photos to
                                      prevent processing if it's exceeding the
                                      range

  -y, --album-type                    (Optional) Whether you want to link photos
                                      as album by picking the album type( Unset:
                                      0 [default - no album linking], Individual
                                      = 1, DateRange = 2 )

  -a, --album-name                    (Optional) Album name to create a new one
                                      for currently archiving photos[Can use
                                      with `AlbumType` as `Individual` or
                                      `DateRange`]

  -p, --update-album                  (Optional) Existing Album ID number value
                                      to link currently archiving photos[Can use
                                      with `AlbumType` as `Individual` or
                                      `DateRange`][Album IDs can be listed by
                                      `photo-cli list --type Albums`]

  -s, --auto-reverse-geocode-album    (Optional) Automatically linking photos to
                                      an album (creating or using existing) for
                                      each reverse geocode property
                                      individuallyFor example if you use reverse
                                      geocode properties are country, city each
                                      archive operation, you could have albums
                                      for each country and city variants

  -f, --delete-on-source              (Optional) [Dangerous parameter] Deleting
                                      the source folder on successful archive
                                      operation

  -e, --reverse-geocode               (Optional) Third-party provider to resolve
                                      photo taken address by photo's
                                      coordinates. ( Disabled: 0 [default],
                                      BigDataCloud: 1, OpenStreetMapFoundation:
                                      2, GoogleMaps: 3, LocationIq: 5 )

  -b, --bigdatacloud-key              (Optional) API key needed to use
                                      BigDataCloud.
                                      https://www.bigdatacloud.com/geocoding-api
                                      s/reverse-geocode-to-city-api/ (Instead of
                                      using this option, environment name:
                                      PHOTO_CLI_BIG_DATA_CLOUD_API_KEY can be
                                      used or `BigDataCloudApiKey` key can be
                                      set via settings command. )

  -u, --bigdatacloud-levels           (Optional) Admin levels separated with
                                      space. ( To see which level correspond to
                                      which address level, you may use
                                      `photo-cli address` to see the full
                                      response returned from BigDataCloud. )

  -m, --googlemaps-types              (Optional) GoogleMaps address types
                                      separated with space. ( To see which level
                                      correspond to which address level, you may
                                      use `photo-cli address` to see the full
                                      response returned from GoogleMaps. )

  -k, --googlemaps-key                (Optional) API key needed to use
                                      GoogleMaps.
                                      https://developers.google.com/maps/documen
                                      tation/geocoding/overview/ (Instead of
                                      using this option, environment name:
                                      PHOTO_CLI_GOOGLE_MAPS_API_KEY can be used
                                      or `GoogleMapsApiKey` key can be set via
                                      settings command. )

  -r, --openstreetmap-properties      (Optional) OpenStreetMap properties
                                      separated with space. ( To see which level
                                      correspond to which address level, you may
                                      use `photo-cli address` to see the full
                                      response returned from OpenStreetMap
                                      provider. )

  -q, --locationiq-key                (Optional) API key needed to use
                                      LocationIq. https://locationiq.com/docs/
                                      (Instead of using this option, environment
                                      name: PHOTO_CLI_LOCATIONIQ_API_KEY can be
                                      used or `LocationIqApiKey` key can be set
                                      via settings command. )

  -h, --has-paid-license              (Optional) Bypass the free rate limit if
                                      you have paid license. ( For LocationIq. )

  -l, --language                      (Optional) Language/culture value to get
                                      localized address result for BigDataCloud
                                      (
                                      https://www.bigdatacloud.com/supported-lan
                                      guages/ ) and GoogleMaps
                                      (https://developers.google.com/maps/faq#la
                                      nguagesupport ).

  -z, --missing-reverse-geocode       (Optional) Action to do when any of the
                                      photo has missing reserver geocode
                                      information( Continue: 0 [default],
                                      PreventProcess: 1 )

  --help                              Display this help screen.

  --version                           Display version information.

NOTES:
- Instead of option names (for ex: DateTimeWithMinutes), you may use options
values too. (for ex: 3)
- You can use relative folder paths. If you use the input folder as the working
directory, you don't need to use the input argument.

EXAMPLE USAGES:
- Archive all photos in current folder (and it's subfolders recursively) into
output folder by (year)/(month)/(day) hierarchy with a file name photo taken
date with seconds prefixed by file hash. Saves all photo taken information into
local SQLite database.

Example with long argument names;
photo-cli archive --output (output-folder)

Example with short argument names;
photo-cli archive -o (output-folder)

- Archive all photos in the input folder and its subfolders recursively by
fetching each photo's reverse geocode information, copying them into the output
folder organized by year/month/day hierarchy with filenames consisting of the
photo-taken date with seconds prefixed by file hash, and saving all photo
metadata and addresses into a local SQLite database.

Example with long argument names;
photo-cli archive --no-coordinate PreventProcess --reverse-geocode
OpenStreetMapFoundation --input (input-folder) --output (output-folder)
--openstreetmap-properties country city town suburb --no-taken-date
PreventProcess --invalid-format PreventProcess --album-type Unset

Example with short argument names;
photo-cli archive -c PreventProcess -e OpenStreetMapFoundation -i (input-folder)
-o (output-folder) -r country city town suburb -t PreventProcess -x
PreventProcess -y Unset

- Archive all photos in the input folder (and its subfolders recursively) by
creating a date range album named 'album 1', fetching each photo's reverse
geocode information using Google Maps with properties administrative area level
1 and 2 to create location-based albums, and copying them into the output folder
with a (year)/(month)/(day) hierarchy using filenames formatted as
photo-taken-date-with-seconds prefixed by file hash but the process won't start
if any photo has an invalid format, missing photo-taken date or coordinates, or
if the photo-taken date span exceeds 30 days and upon successful operation, it
would delete the input source folder.

Example with long argument names;
photo-cli archive --album-name "album 1" --no-coordinate PreventProcess
--reverse-geocode GoogleMaps --delete-on-source --input (input-folder)
--googlemaps-types administrative_area_level_1 administrative_area_level_2
--output (output-folder) --auto-reverse-geocode-album --no-taken-date
PreventProcess --expected-day-range 30 --invalid-format PreventProcess
--album-type DateRange --missing-reverse-geocode PreventProcess

Example with short argument names;
photo-cli archive -a "album 1" -c PreventProcess -e GoogleMaps -f -i
(input-folder) -m administrative_area_level_1 administrative_area_level_2 -o
(output-folder) -s -t PreventProcess -w 30 -x PreventProcess -y DateRange -z
PreventProcess
```
