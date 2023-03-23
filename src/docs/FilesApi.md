# NotehubJs.FilesApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                       | HTTP request                                                                | Description |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| [**handleNotefileChanges**](FilesApi.md#handleNotefileChanges)               | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/files/changes         |
| [**handleNotefileChangesPending**](FilesApi.md#handleNotefileChangesPending) | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/files/changes/pending |
| [**handleNotefileDelete**](FilesApi.md#handleNotefileDelete)                 | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/files              |

## handleNotefileChanges

> HandleNotefileChanges200Response handleNotefileChanges(projectUID, deviceUID, opts)

Used to perform queries on a single or multiple files to determine if new Notes are available to read

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_access_token
let bearer_access_token = defaultClient.authentications['bearer_access_token'];
bearer_access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.FilesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let opts = {
  'tracker': "tracker_example", // String | The change tracker ID.
  'files': ["null"] // [String] | One or more files to obtain change information from.
};
apiInstance.handleNotefileChanges(projectUID, deviceUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                      | Description                                          | Notes      |
| -------------- | ------------------------- | ---------------------------------------------------- | ---------- |
| **projectUID** | **String**                |                                                      |
| **deviceUID**  | **String**                |                                                      |
| **tracker**    | **String**                | The change tracker ID.                               | [optional] |
| **files**      | [**[String]**](String.md) | One or more files to obtain change information from. | [optional] |

### Return type

[**HandleNotefileChanges200Response**](HandleNotefileChanges200Response.md)

### Authorization

[bearer_access_token](../README.md#bearer_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNotefileChangesPending

> HandleNotefileChangesPending200Response handleNotefileChangesPending(projectUID, deviceUID)

Returns info about file changes that are pending upload to Notehub or download to the Notecard.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_access_token
let bearer_access_token = defaultClient.authentications['bearer_access_token'];
bearer_access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.FilesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
apiInstance.handleNotefileChangesPending(projectUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **deviceUID**  | **String** |             |

### Return type

[**HandleNotefileChangesPending200Response**](HandleNotefileChangesPending200Response.md)

### Authorization

[bearer_access_token](../README.md#bearer_access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNotefileDelete

> handleNotefileDelete(projectUID, deviceUID, handleNotefileDeleteRequest)

Deletes Notefiles and the Notes they contain.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_access_token
let bearer_access_token = defaultClient.authentications['bearer_access_token'];
bearer_access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.FilesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let handleNotefileDeleteRequest = new NotehubJs.HandleNotefileDeleteRequest(); // HandleNotefileDeleteRequest |
apiInstance.handleNotefileDelete(projectUID, deviceUID, handleNotefileDeleteRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                            | Type                                                              | Description | Notes |
| ------------------------------- | ----------------------------------------------------------------- | ----------- | ----- |
| **projectUID**                  | **String**                                                        |             |
| **deviceUID**                   | **String**                                                        |             |
| **handleNotefileDeleteRequest** | [**HandleNotefileDeleteRequest**](HandleNotefileDeleteRequest.md) |             |

### Return type

null (empty response body)

### Authorization

[bearer_access_token](../README.md#bearer_access_token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
