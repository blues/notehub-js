# NotehubJs.DevicesApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                         | HTTP request                                                                         | Description |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------- |
| [**deleteProjectDevice**](DevicesApi.md#deleteProjectDevice)                   | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}                             |
| [**getDevice**](DevicesApi.md#getDevice)                                       | **GET** /v1/projects/{projectUID}/devices/{deviceUID}                                |
| [**getProjectDevicePublicKeys**](DevicesApi.md#getProjectDevicePublicKeys)     | **GET** /v1/projects/{projectUID}/devices/public-keys                                |
| [**getProjectDevices**](DevicesApi.md#getProjectDevices)                       | **GET** /v1/projects/{projectUID}/devices                                            |
| [**getProjectFleetDevices**](DevicesApi.md#getProjectFleetDevices)             | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/devices                          |
| [**handleNoteAdd**](DevicesApi.md#handleNoteAdd)                               | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}            |
| [**handleNoteChanges**](DevicesApi.md#handleNoteChanges)                       | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/changes     |
| [**handleNoteCreateAdd**](DevicesApi.md#handleNoteCreateAdd)                   | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}   |
| [**handleNoteDelete**](DevicesApi.md#handleNoteDelete)                         | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID} |
| [**handleNoteGet**](DevicesApi.md#handleNoteGet)                               | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}    |
| [**handleNoteUpdate**](DevicesApi.md#handleNoteUpdate)                         | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}    |
| [**handleNotefileChanges**](DevicesApi.md#handleNotefileChanges)               | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/files/changes                  |
| [**handleNotefileChangesPending**](DevicesApi.md#handleNotefileChangesPending) | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/files/changes/pending          |
| [**handleNotefileDelete**](DevicesApi.md#handleNotefileDelete)                 | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/files                       |
| [**postProvisionProjectDevice**](DevicesApi.md#postProvisionProjectDevice)     | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/provision                     |

## deleteProjectDevice

> deleteProjectDevice(projectUID, deviceUID, purge)

Delete Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let purge = "'false'"; // String |
apiInstance.deleteProjectDevice(projectUID, deviceUID, purge).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes                        |
| -------------- | ---------- | ----------- | ---------------------------- |
| **projectUID** | **String** |             |
| **deviceUID**  | **String** |             |
| **purge**      | **String** |             | [default to &#39;false&#39;] |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevice

> Device getDevice(projectUID, deviceUID)

Get Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
apiInstance.getDevice(projectUID, deviceUID).then((data) => {
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

[**Device**](Device.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectDevicePublicKeys

> GetProjectDevicePublicKeys200Response getProjectDevicePublicKeys(projectUID, opts)

Get Device Public Keys of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1 // Number |
};
apiInstance.getProjectDevicePublicKeys(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes                      |
| -------------- | ---------- | ----------- | -------------------------- |
| **projectUID** | **String** |             |
| **pageSize**   | **Number** |             | [optional] [default to 50] |
| **pageNum**    | **Number** |             | [optional] [default to 1]  |

### Return type

[**GetProjectDevicePublicKeys200Response**](GetProjectDevicePublicKeys200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectDevices

> GetProjectDevices200Response getProjectDevices(projectUID, opts)

Get Devices of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1 // Number |
};
apiInstance.getProjectDevices(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes                      |
| -------------- | ---------- | ----------- | -------------------------- |
| **projectUID** | **String** |             |
| **pageSize**   | **Number** |             | [optional] [default to 50] |
| **pageNum**    | **Number** |             | [optional] [default to 1]  |

### Return type

[**GetProjectDevices200Response**](GetProjectDevices200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectFleetDevices

> GetProjectDevices200Response getProjectFleetDevices(projectUID, fleetUID, opts)

Get Devices of a Fleet within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1 // Number |
};
apiInstance.getProjectFleetDevices(projectUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes                      |
| -------------- | ---------- | ----------- | -------------------------- |
| **projectUID** | **String** |             |
| **fleetUID**   | **String** |             |
| **pageSize**   | **Number** |             | [optional] [default to 50] |
| **pageNum**    | **Number** |             | [optional] [default to 1]  |

### Return type

[**GetProjectDevices200Response**](GetProjectDevices200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteAdd

> handleNoteAdd(projectUID, deviceUID, notefileID, note)

Adds a Note to a Notefile, creating the Notefile if it doesn&#39;t yet exist.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let notefileID = "notefileID_example"; // String |
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteAdd(projectUID, deviceUID, notefileID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                | Description                                       | Notes |
| -------------- | ------------------- | ------------------------------------------------- | ----- |
| **projectUID** | **String**          |                                                   |
| **deviceUID**  | **String**          |                                                   |
| **notefileID** | **String**          |                                                   |
| **note**       | [**Note**](Note.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## handleNoteChanges

> HandleNoteChanges200Response handleNoteChanges(projectUID, deviceUID, notefileID, opts)

Incrementally retrieve changes within a specific Notefile.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let notefileID = "notefileID_example"; // String |
let opts = {
  'tracker': "tracker_example", // String | The change tracker ID.
  'max': 56, // Number | The maximum number of Notes to return in the request.
  'start': true, // Boolean | true to reset the tracker to the beginning.
  'stop': true, // Boolean | true to delete the tracker.
  'deleted': true, // Boolean | true to return deleted notes.
  '_delete': true // Boolean | true to delete the notes returned by the request.
};
apiInstance.handleNoteChanges(projectUID, deviceUID, notefileID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type        | Description                                           | Notes      |
| -------------- | ----------- | ----------------------------------------------------- | ---------- |
| **projectUID** | **String**  |                                                       |
| **deviceUID**  | **String**  |                                                       |
| **notefileID** | **String**  |                                                       |
| **tracker**    | **String**  | The change tracker ID.                                | [optional] |
| **max**        | **Number**  | The maximum number of Notes to return in the request. | [optional] |
| **start**      | **Boolean** | true to reset the tracker to the beginning.           | [optional] |
| **stop**       | **Boolean** | true to delete the tracker.                           | [optional] |
| **deleted**    | **Boolean** | true to return deleted notes.                         | [optional] |
| **\_delete**   | **Boolean** | true to delete the notes returned by the request.     | [optional] |

### Return type

[**HandleNoteChanges200Response**](HandleNoteChanges200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteCreateAdd

> handleNoteCreateAdd(projectUID, deviceUID, notefileID, noteID, note)

Adds a Note to a Notefile, creating the Notefile if it doesn&#39;t yet exist.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteCreateAdd(projectUID, deviceUID, notefileID, noteID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                | Description                                       | Notes |
| -------------- | ------------------- | ------------------------------------------------- | ----- |
| **projectUID** | **String**          |                                                   |
| **deviceUID**  | **String**          |                                                   |
| **notefileID** | **String**          |                                                   |
| **noteID**     | **String**          |                                                   |
| **note**       | [**Note**](Note.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## handleNoteDelete

> handleNoteDelete(projectUID, deviceUID, notefileID, noteID)

Delete a note from a DB notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
apiInstance.handleNoteDelete(projectUID, deviceUID, notefileID, noteID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **deviceUID**  | **String** |             |
| **notefileID** | **String** |             |
| **noteID**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteGet

> HandleNoteGet200Response handleNoteGet(projectUID, deviceUID, notefileID, noteID, opts)

Get a note from a DB notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let opts = {
  '_delete': true, // Boolean | Whether to delete the note from the DB notefile
  'deleted': true // Boolean | Whether to return deleted notes
};
apiInstance.handleNoteGet(projectUID, deviceUID, notefileID, noteID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type        | Description                                     | Notes      |
| -------------- | ----------- | ----------------------------------------------- | ---------- |
| **projectUID** | **String**  |                                                 |
| **deviceUID**  | **String**  |                                                 |
| **notefileID** | **String**  |                                                 |
| **noteID**     | **String**  |                                                 |
| **\_delete**   | **Boolean** | Whether to delete the note from the DB notefile | [optional] |
| **deleted**    | **Boolean** | Whether to return deleted notes                 | [optional] |

### Return type

[**HandleNoteGet200Response**](HandleNoteGet200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteUpdate

> handleNoteUpdate(projectUID, deviceUID, notefileID, noteID, note)

Update a note in a DB notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteUpdate(projectUID, deviceUID, notefileID, noteID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                | Description                                       | Notes |
| -------------- | ------------------- | ------------------------------------------------- | ----- |
| **projectUID** | **String**          |                                                   |
| **deviceUID**  | **String**          |                                                   |
| **notefileID** | **String**          |                                                   |
| **noteID**     | **String**          |                                                   |
| **note**       | [**Note**](Note.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## handleNotefileChanges

> HandleNotefileChanges200Response handleNotefileChanges(projectUID, deviceUID, opts)

Used to perform queries on a single or multiple files to determine if new Notes are available to read

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
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

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## postProvisionProjectDevice

> Object postProvisionProjectDevice(projectUID, deviceUID, postProvisionProjectDeviceRequest)

Provision Device for a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let postProvisionProjectDeviceRequest = new NotehubJs.PostProvisionProjectDeviceRequest(); // PostProvisionProjectDeviceRequest | Provision a device to a specific ProductUID
apiInstance.postProvisionProjectDevice(projectUID, deviceUID, postProvisionProjectDeviceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                                  | Type                                                                          | Description                                 | Notes |
| ------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- | ----- |
| **projectUID**                        | **String**                                                                    |                                             |
| **deviceUID**                         | **String**                                                                    |                                             |
| **postProvisionProjectDeviceRequest** | [**PostProvisionProjectDeviceRequest**](PostProvisionProjectDeviceRequest.md) | Provision a device to a specific ProductUID |

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
