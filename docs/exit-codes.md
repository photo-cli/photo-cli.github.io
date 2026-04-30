---
sidebar_position: 110
---

# Exit Codes

Process exit codes listed below;

| Option                                          | Value |
|-------------------------------------------------|-------|
| Success                                         | 0     |
| ParseArgsFailed                                 | 1     |
| AppSettingsInvalidFile                          | 2     |
| UnexpectedError                                 | 3     |
| ApiKeyStoreValidationFailed                     | 10    |
| AddressOptionsValidationFailed                  | 11    |
| InfoOptionsValidationFailed                     | 12    |
| CopyOptionsValidationFailed                     | 13    |
| SettingsOptionsValidationFailed                 | 14    |
| ArchiveOptionsValidationFailed                  | 15    |
| InputFolderNotExists                            | 20    |
| NoPhotoFoundOnDirectory                         | 21    |
| OutputFolderIsNotEmpty                          | 22    |
| OutputPathIsExists                              | 23    |
| OutputPathDontHaveWriteFilePermission           | 24    |
| OutputPathDontHaveCreateDirectoryPermission     | 25    |
| InputFileNotExists                              | 26    |
| FileVerifyErrors                                | 27    |
| PhotosWithNoDatePreventedProcess                | 30    |
| PhotosWithNoCoordinatePreventedProcess          | 31    |
| PhotosWithNoCoordinateAndNoDatePreventedProcess | 32    |
| PhotosWithInvalidFileFormatPreventedProcess     | 33    |
| PhotosWithMissingReverseGeocodeInfoAsRequested  | 34    |
| PhotosWithUnexpectedDateRangePreventedProcess   | 35    |
| PropertyNotFound                                | 40    |
| InvalidSettingsValue                            | 41    |
| InvalidSettingsLogLevelChange                   | 42    |
| AlbumExist                                      | 50    |
| InvalidSettingsLogLevelChange                   | 50    |
| InconsistencyOnSavingPhotosToDatabase           | 51    |
| InconsistencyOnSavingUserDefinedAlbumToDatabase | 52    |
| AlbumNameMustBeUniqueWhileAddingOrUseUpdate     | 53    |
| AlbumNotFoundById                               | 54    |
| NoPhotosToAddInAlbum                            | 55    |
| NoDataRangeFoundOnPhotos                        | 56    |
| ExistingAlbumConfigurationNotValid              | 57    |
| NoArchiveDatabaseFound                          | 60    |
| NoPhotoFoundToList                              | 61    |
