---
sidebar_position: 3
---

# 3. Understanding Reverse Geocode Response

Every reverse geocode provider has its data and they also represent it very differently. The information returned from reverse geocode provider is different or may differ in the level of detail. As there is no way to generalize every reverse geocode provider's response into the same address administrative level, users must understand the response returned from their selected reverse geocode provider.

There is two way to understand the reverse geocoding response.

1. [Easy Way To Inspect Reserve Geocode Response](#easy-way-to-inspect-reserve-geocode-response)
2. [Power User Way To Inspect Reserve Geocode Response](#power-user-way-to-inspect-reserve-geocode-response)

#### Easy Way To Inspect Reserve Geocode Response

`photo-cli` has a feature to extract and list the response of each reverse geocode provider. If you are using a reverse geocode provider that needs an API key, first you need to get it from the provider and [set API key](/docs/settings#setting-a-single-value).

Listing Reverse Geocode Response. Ref: [reverse geocode provider command line arguments](/docs/address-building-reverse-geocoding/intro)

```
photo-cli address --input [input-file.jpg] --reverse-geocode [selected-reverse-geocode-provider]`
```

For example, a photo was taken on Anıtkabir(place), Çankaya(town), Ankara(city), Turkey(country) with coordinate as `39.925054` and longitude
as `32.8347552` ([Coordinate in Google Maps](https://goo.gl/maps/p5mrL54A2k7PnEQv6)) responses should be like the following.

##### Big Data Cloud

```
photo-cli address -i DSC_7082.jpg -e 1
```

```
AdminLevel2: Turkey
AdminLevel3: Central Anatolia Region
AdminLevel4: Ankara Province
AdminLevel6: Çankaya
AdminLevel8: Mebusevleri Mahallesi
```

##### Open Street Map - Nominatim

```
photo-cli address -i DSC_7082.jpg -e 2
```

```
CountryCode: tr
Country: Türkiye
Region: İç Anadolu Bölgesi
Province: Ankara
City: Ankara
Town: Çankaya
Postcode: 06430
Suburb: Yücetepe Mahallesi
Road: İlk Sokak
Military: Anıtkabir
```

##### Google Maps

```
photo-cli address -i DSC_7082.jpg -e 3
```

```
plus_code: WRGM+2W
administrative_area_level_2: Çankaya
administrative_area_level_1: Ankara
country: Turkey
route: Anıtkabir
administrative_area_level_4: Mebusevleri
postal_code: 06570
street_number: 108
```

##### Map Quest

```
photo-cli address -i DSC_7082.jpg -e 4
```

```
CountryCode: tr
Country: Türkiye
City: Ankara
Postcode: 06580
Suburb: Mebusevleri Mahallesi
```

##### Location Iq

```
photo-cli address -i DSC_7082.jpg -e 5
```

```
CountryCode: tr
Country: Turkey
Region: Central Anatolia Region
Province: Ankara
City: Ankara
Town: Çankaya
Postcode: 06570
Suburb: Yücetepe Mahallesi
Road: Ata Sokak
Barracks: Anıtkabir
```

#### Power User Way To Inspect Reserve Geocode Response

You should inspect the reverse geocode provider's response with the locations you occasionally take photographs. After getting the response, you can send the properties as an argument of your choice
of the administrative level you want to build an address for each photograph.

##### Using HTTP Files

To trigger HTTP files you may use [Visual Studio Code](https://code.visualstudio.com/) with the extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) or any IntelliJ IDE's.

You may replace `{{ApiKey}}` in the address with your API key or you can use the IntelliJ environment variable file.

| Reverse Geocode Provider                                                                         | HTTP File                                                                                                               |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [BigDataCloud](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/)         | [big-data-cloud.http](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/big-data-cloud.http)   |
| [Open Street Map Foundation - Nominatim](https://nominatim.org/release-docs/latest/api/Reverse/) | [open-street-map.http](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/open-street-map.http) |
| [GoogleMaps](https://developers.google.com/maps/documentation/geocoding/overview/)               | [google-maps.http](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/google-maps.http)         |
| [LocationIq](https://locationiq.com/sandbox/geocoding/reverse/)                                  | [location-iq.http](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/http/location-iq.http)         |

##### Using Postman

You may import [photo-cli | Reverse Geocode](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/postman/photo-cli_reverse_geocode.postman_collection.json) collection into [Postman](https://www.postman.com/).

You should prepare the following environment variables on Postman.

| Reverse Geocode Provider                                                                         | Postman Environment Variable |
|--------------------------------------------------------------------------------------------------|------------------------------|
| [BigDataCloud](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/)         | `BigDataCloud-ApiKey`        |
| [Open Street Map Foundation - Nominatim](https://nominatim.org/release-docs/latest/api/Reverse/) | -                            |
| [GoogleMaps](https://developers.google.com/maps/documentation/geocoding/overview/)               | `GoogleMaps-ApiKey`          |
| [LocationIq](https://locationiq.com/sandbox/geocoding/reverse/)                                  | `LocationIq-ApiKey`          |

##### Sample Responses

Sample responses in JSON format are listed below from each reverse geocode for the coordinate with latitude as `39.925054` and longitude as `32.8347552` ([Coordinate in Google Maps](https://goo.gl/maps/p5mrL54A2k7PnEQv6)).

| Reverse Geocode Provider                                                                         | Sample Response                                                                                                                     |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| [BigDataCloud](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/)         | [big-data-cloud.json](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses/big-data-cloud.json)   |
| [Open Street Map Foundation - Nominatim](https://nominatim.org/release-docs/latest/api/Reverse/) | [open-street-map.json](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses/open-street-map.json) |
| [GoogleMaps](https://developers.google.com/maps/documentation/geocoding/overview/)               | [google-maps.json](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses/google-maps.json)         |
| [LocationIq](https://locationiq.com/sandbox/geocoding/reverse/)                                  | [location-iq.json](https://github.com/photo-cli/photo-cli/blob/main/docs/reverse-geocode/sample-responses//location-iq.json)        |
