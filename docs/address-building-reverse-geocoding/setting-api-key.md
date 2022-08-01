---
sidebar_position: 2
---

# 2. Setting API Key

After selecting reverse geocode provider, you need to provide an API key. There are three ways to provide this API key;

1. Send as an argument every time
2. Use [persist a setting](/docs/settings#setting-a-single-value) to save it as configuration, so you don't need to submit everytime.
3. Use environment variable, so you don't need to submit everytime.

| Reverse Geocode Provider                                                                         | Settings Key         | Environment Variable               | Argument                      |
|--------------------------------------------------------------------------------------------------|----------------------|------------------------------------|-------------------------------|
| [BigDataCloud](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/)         | `BigDataCloudApiKey` | `PHOTO_CLI_BIG_DATA_CLOUD_API_KEY` | `-b` or  `--bigdatacloud-key` |
| [Open Street Map Foundation - Nominatim](https://nominatim.org/release-docs/latest/api/Reverse/) | -                    | -                                  | -                             |
| [GoogleMaps](https://developers.google.com/maps/documentation/geocoding/overview/)               | `GoogleMapsApiKey`   | `PHOTO_CLI_GOOGLE_MAPS_API_KEY`    | `-k` or `--googlemaps-key`    |
| [MapQuest](https://developer.mapquest.com/documentation/open/nominatim-search/reverse/)          | `MapQuestApiKey`     | `PHOTO_CLI_MAPQUEST_API_KEY`       | `-u` or `--mapquest-key`      |
| [LocationIq](https://locationiq.com/sandbox/geocoding/reverse/)                                  | `LocationIqApiKey`   | `PHOTO_CLI_LOCATIONIQ_API_KEY`     | `-q` or `--locationiq-key`    |