# NotehubJs.PersonalAccessToken

## Properties

| Name            | Type                                                                | Description                           | Notes      |
| --------------- | ------------------------------------------------------------------- | ------------------------------------- | ---------- |
| **uid**         | **String**                                                          | Unique and public identifier          | [optional] |
| **name**        | **String**                                                          | Name for this API Key                 | [optional] |
| **description** | **String**                                                          | Optional description for this API Key | [optional] |
| **createdBy**   | [**PersonalAccessTokenCreatedBy**](PersonalAccessTokenCreatedBy.md) |                                       | [optional] |
| **expiresAt**   | **Date**                                                            | When the key expires                  | [optional] |
| **createdAt**   | **Date**                                                            | When the key was created              | [optional] |
| **lastUsed**    | **Date**                                                            | When it was last used, if ever        | [optional] |
| **suspended**   | **Boolean**                                                         | if true, this token cannot be used    | [optional] |
