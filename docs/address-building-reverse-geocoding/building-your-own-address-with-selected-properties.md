---
sidebar_position: 4
---

# 4. Building Your Own Address With Selected Properties

Every reverse geocode provider has its address building parameters. With `address` command you can inspect any photograph's reverse geocode response. These different levels of selected address properties will be used in exported into CSV file for [info command](/docs/commands-verbs/info) or used as file and/or folder names depending on your naming strategies for [copy command](/docs/commands-verbs/copy).

| Reverse Geocode Provider                                                                         | Address Building Parameters                           |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [BigDataCloud](https://www.bigdatacloud.com/geocoding-apis/reverse-geocode-to-city-api/)         | [BigDataCloud Properties](#big-data-cloud-parameters) |
| [Open Street Map Foundation - Nominatim](https://nominatim.org/release-docs/latest/api/Reverse/) | [OpenStreet Properties](#open-street-map-parameters)  |
| [GoogleMaps](https://developers.google.com/maps/documentation/geocoding/overview/)               | [GoogleMaps Properties](#google-maps-properties)      |
| [MapQuest](https://developer.mapquest.com/documentation/open/nominatim-search/reverse/)          | [OpenStreet Properties](#open-street-map-parameters)  |
| [LocationIq](https://locationiq.com/sandbox/geocoding/reverse/)                                  | [OpenStreet Properties](#open-street-map-parameters)  |

#### Big Data Cloud Parameters

Getting a sample reverse geocoding response with all properties listed.

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

If we want to build an address like with levels only contains `Turkey`, `Ankara Province`, and `Çankaya`, we should use levels `2,4,6`. To verify our address is building correctly, you may use `type` parameter as `SelectedProperties` and `bigdatacloud-levels` arguments separated with space like the following example.

```
photo-cli address --input DSC_7082.jpg --reverse-geocode BigDataCloud --type SelectedProperties --bigdatacloud-levels 2 4 6
```

```
Turkey
Ankara Province
Çankaya
```

#### Open Street Map Parameters

Getting a sample reverse geocoding response with all properties listed.

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

If we want to build an address like with levels only contains `tr`, `06430`, and `Yücetepe Mahallesi`, we should use properties `CountryCode, Postcode, Suburb`. To verify our address is building correctly, you may use `type` as `SelectedProperties` and `openstreetmap-properties` arguments separated with space like the following example.

```
photo-cli address --input DSC_7082.jpg --reverse-geocode OpenStreetMapFoundation --type SelectedProperties --openstreetmap-properties CountryCode Postcode Suburb
```

```
tr
06430
Yücetepe Mahallesi
```

#### Google Maps Properties

Getting a sample reverse geocoding response with all properties listed.

```
photo-cli address -i DSC_7082.jpg -e GoogleMaps
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

If we want to build an address like with levels only contains `Mebusevleri`, `108`, and `Anıtkabir`, we should use properties `administrative_area_level_4, street_number, route`. To verify our address is building correctly, you may use `type` as `SelectedProperties` and `googlemaps-types` arguments separated with space like the following example.

```
photo-cli address --input DSC_7082.jpg --reverse-geocode GoogleMaps --type SelectedProperties --googlemaps-types administrative_area_level_4 street_number route
```

```
Mebusevleri
108
Anıtkabir
```