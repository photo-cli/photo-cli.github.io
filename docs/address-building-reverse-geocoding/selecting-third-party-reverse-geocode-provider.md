---
sidebar_position: 1
---

# 1. Selecting Third-Party Reverse Geocode Provider

To build addresses we need a reserve geocode provider. Currently, there is five reverse geocode provider is supported.

1. BigDataCloud
2. Open Street Map Foundation - Nominatim
3. Google Maps
4. MapQuest
5. LocationIq

### Comparison of Supported Third-Party Reverse Geocode Providers

| Reverse Geocode Provider                                                                         | API Key Required | Free Tier | Free Count Limit             | Free Rate Limit (free) | Map Data Owner                                                                        |
|--------------------------------------------------------------------------------------------------|------------------|-----------|------------------------------|------------------------|---------------------------------------------------------------------------------------|
| [BigDataCloud](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/)         | Yes              | Yes -     | 50.000 req/month             |                        | [Big Data Cloud](https://www.bigdatacloud.com/about-us/)                              |
| [Open Street Map Foundation - Nominatim](https://nominatim.org/release-docs/latest/api/Reverse/) | No               | -         | -                            | 1req/sec               | [Open Street Map Foundation](https://en.wikipedia.org/wiki/OpenStreetMap_Foundation/) |
| [GoogleMaps](https://developers.google.com/maps/documentation/geocoding/overview/)               | Yes              | No        | -                            | -                      | [Google](https://en.wikipedia.org/wiki/Google_Maps/)                                  |
| [MapQuest](https://developer.mapquest.com/documentation/open/nominatim-search/reverse/)          | Yes              | Yes       | 50.000 req/month , 5.000/day | -                      | [Open Street Map Foundation](https://en.wikipedia.org/wiki/OpenStreetMap_Foundation/) |
| [LocationIq](https://locationiq.com/sandbox/geocoding/reverse/)                                  | Yes              | Yes       | 5.000 req/day                | 1req/sec               | [Open Street Map Foundation](https://en.wikipedia.org/wiki/OpenStreetMap_Foundation/) |     