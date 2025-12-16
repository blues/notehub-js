# NotehubJs.DeviceApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                    | HTTP request                                                                                   | Description                                     |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [**addDbNote**](DeviceApi.md#addDbNote)                                                   | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}    |
| [**addQiNote**](DeviceApi.md#addQiNote)                                                   | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}             |
| [**deleteDevice**](DeviceApi.md#deleteDevice)                                             | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}                              |
| [**deleteDeviceEnvironmentVariable**](DeviceApi.md#deleteDeviceEnvironmentVariable)       | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables/{key}  |
| [**deleteNote**](DeviceApi.md#deleteNote)                                                 | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}  |
| [**deleteNotefiles**](DeviceApi.md#deleteNotefiles)                                       | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/files                        |
| [**disableDevice**](DeviceApi.md#disableDevice)                                           | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/disable                        |
| [**disableDeviceConnectivityAssurance**](DeviceApi.md#disableDeviceConnectivityAssurance) | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/disable-connectivity-assurance |
| [**enableDevice**](DeviceApi.md#enableDevice)                                             | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/enable                         |
| [**enableDeviceConnectivityAssurance**](DeviceApi.md#enableDeviceConnectivityAssurance)   | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/enable-connectivity-assurance  |
| [**getDbNote**](DeviceApi.md#getDbNote)                                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}     |
| [**getDevice**](DeviceApi.md#getDevice)                                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}                                 |
| [**getDeviceEnvironmentHierarchy**](DeviceApi.md#getDeviceEnvironmentHierarchy)           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_hierarchy           | Get environment variable hierarchy for a device |
| [**getDeviceEnvironmentVariables**](DeviceApi.md#getDeviceEnvironmentVariables)           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables           |
| [**getDeviceEnvironmentVariablesByPin**](DeviceApi.md#getDeviceEnvironmentVariablesByPin) | **GET** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin           |
| [**getDeviceHealthLog**](DeviceApi.md#getDeviceHealthLog)                                 | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/health-log                      |
| [**getDeviceLatestEvents**](DeviceApi.md#getDeviceLatestEvents)                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/latest                          |
| [**getDevicePlans**](DeviceApi.md#getDevicePlans)                                         | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/plans                           |
| [**getDevicePublicKey**](DeviceApi.md#getDevicePublicKey)                                 | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/public-key                      |
| [**getDevicePublicKeys**](DeviceApi.md#getDevicePublicKeys)                               | **GET** /v1/projects/{projectOrProductUID}/devices/public-keys                                 |
| [**getDeviceSessions**](DeviceApi.md#getDeviceSessions)                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/sessions                        |
| [**getDevices**](DeviceApi.md#getDevices)                                                 | **GET** /v1/projects/{projectOrProductUID}/devices                                             |
| [**getFleetDevices**](DeviceApi.md#getFleetDevices)                                       | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/devices                           |
| [**getNotefile**](DeviceApi.md#getNotefile)                                               | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}              |
| [**listNotefiles**](DeviceApi.md#listNotefiles)                                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/files                           |
| [**provisionDevice**](DeviceApi.md#provisionDevice)                                       | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/provision                      |
| [**setDeviceEnvironmentVariables**](DeviceApi.md#setDeviceEnvironmentVariables)           | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables           |
| [**setDeviceEnvironmentVariablesByPin**](DeviceApi.md#setDeviceEnvironmentVariablesByPin) | **PUT** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin           |
| [**signalDevice**](DeviceApi.md#signalDevice)                                             | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/signal                         |
| [**updateDbNote**](DeviceApi.md#updateDbNote)                                             | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}     |

## addDbNote

> addDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput)

Add a Note to a .db notefile. if noteID is &#39;-&#39; then payload is ignored and empty notefile is created

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let noteInput = new NotehubJs.NoteInput(); // NoteInput | Body or payload of note to be added to the device
apiInstance.addDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                          | Description                                       | Notes |
| ----------------------- | ----------------------------- | ------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                    |                                                   |
| **deviceUID**           | **String**                    |                                                   |
| **notefileID**          | **String**                    |                                                   |
| **noteID**              | **String**                    |                                                   |
| **noteInput**           | [**NoteInput**](NoteInput.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addQiNote

> addQiNote(projectOrProductUID, deviceUID, notefileID, noteInput)

Adds a Note to a Notefile, creating the Notefile if it doesn&#39;t yet exist.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteInput = new NotehubJs.NoteInput(); // NoteInput | Body or payload of note to be added to the device
apiInstance.addQiNote(projectOrProductUID, deviceUID, notefileID, noteInput).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                          | Description                                       | Notes |
| ----------------------- | ----------------------------- | ------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                    |                                                   |
| **deviceUID**           | **String**                    |                                                   |
| **notefileID**          | **String**                    |                                                   |
| **noteInput**           | [**NoteInput**](NoteInput.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteDevice

> deleteDevice(projectOrProductUID, deviceUID, purge)

Delete Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let purge = false; // Boolean |
apiInstance.deleteDevice(projectOrProductUID, deviceUID, purge).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type        | Description | Notes              |
| ----------------------- | ----------- | ----------- | ------------------ |
| **projectOrProductUID** | **String**  |             |
| **deviceUID**           | **String**  |             |
| **purge**               | **Boolean** |             | [default to false] |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteDeviceEnvironmentVariable

> EnvironmentVariables deleteDeviceEnvironmentVariable(projectOrProductUID, deviceUID, key)

Delete environment variable of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteDeviceEnvironmentVariable(projectOrProductUID, deviceUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description                             | Notes |
| ----------------------- | ---------- | --------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                         |
| **deviceUID**           | **String** |                                         |
| **key**                 | **String** | The environment variable key to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteNote

> deleteNote(projectOrProductUID, deviceUID, notefileID, noteID)

Delete a note from a .db or .qi notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
apiInstance.deleteNote(projectOrProductUID, deviceUID, notefileID, noteID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |
| **notefileID**          | **String** |             |
| **noteID**              | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteNotefiles

> deleteNotefiles(projectOrProductUID, deviceUID, deleteNotefilesRequest)

Deletes Notefiles and the Notes they contain.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let deleteNotefilesRequest = new NotehubJs.DeleteNotefilesRequest(); // DeleteNotefilesRequest |
apiInstance.deleteNotefiles(projectOrProductUID, deviceUID, deleteNotefilesRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                       | Type                                                    | Description | Notes |
| -------------------------- | ------------------------------------------------------- | ----------- | ----- |
| **projectOrProductUID**    | **String**                                              |             |
| **deviceUID**              | **String**                                              |             |
| **deleteNotefilesRequest** | [**DeleteNotefilesRequest**](DeleteNotefilesRequest.md) |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## disableDevice

> disableDevice(projectOrProductUID, deviceUID)

Disable Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.disableDevice(projectOrProductUID, deviceUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## disableDeviceConnectivityAssurance

> disableDeviceConnectivityAssurance(projectOrProductUID, deviceUID)

Disable Connectivity Assurance

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.disableDeviceConnectivityAssurance(projectOrProductUID, deviceUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## enableDevice

> enableDevice(projectOrProductUID, deviceUID)

Enable Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.enableDevice(projectOrProductUID, deviceUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## enableDeviceConnectivityAssurance

> enableDeviceConnectivityAssurance(projectOrProductUID, deviceUID)

Enable Connectivity Assurance

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.enableDeviceConnectivityAssurance(projectOrProductUID, deviceUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDbNote

> GetDbNote200Response getDbNote(projectOrProductUID, deviceUID, notefileID, noteID, opts)

Get a note from a .db or .qi notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let opts = {
  '_delete': true, // Boolean | Whether to delete the note from the DB notefile
  'deleted': true // Boolean | Whether to return deleted notes
};
apiInstance.getDbNote(projectOrProductUID, deviceUID, notefileID, noteID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type        | Description                                     | Notes      |
| ----------------------- | ----------- | ----------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**  |                                                 |
| **deviceUID**           | **String**  |                                                 |
| **notefileID**          | **String**  |                                                 |
| **noteID**              | **String**  |                                                 |
| **\_delete**            | **Boolean** | Whether to delete the note from the DB notefile | [optional] |
| **deleted**             | **Boolean** | Whether to return deleted notes                 | [optional] |

### Return type

[**GetDbNote200Response**](GetDbNote200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevice

> Device getDevice(projectOrProductUID, deviceUID)

Get Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDevice(projectOrProductUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

[**Device**](Device.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceEnvironmentHierarchy

> EnvTreeJsonNode getDeviceEnvironmentHierarchy(projectOrProductUID, deviceUID)

Get environment variable hierarchy for a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceEnvironmentHierarchy(projectOrProductUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

[**EnvTreeJsonNode**](EnvTreeJsonNode.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceEnvironmentVariables

> GetDeviceEnvironmentVariablesByPin200Response getDeviceEnvironmentVariables(projectOrProductUID, deviceUID)

Get environment variables of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceEnvironmentVariables(projectOrProductUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

[**GetDeviceEnvironmentVariablesByPin200Response**](GetDeviceEnvironmentVariablesByPin200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceEnvironmentVariablesByPin

> GetDeviceEnvironmentVariablesByPin200Response getDeviceEnvironmentVariablesByPin(productUID, deviceUID)

Get environment variables of a device with device pin authorization

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: pin
let pin = defaultClient.authentications['pin'];
pin.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let productUID = com.blues.bridge:sensors; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceEnvironmentVariablesByPin(productUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **productUID** | **String** |             |
| **deviceUID**  | **String** |             |

### Return type

[**GetDeviceEnvironmentVariablesByPin200Response**](GetDeviceEnvironmentVariablesByPin200Response.md)

### Authorization

[pin](../README.md#pin)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceHealthLog

> GetDeviceHealthLog200Response getDeviceHealthLog(projectOrProductUID, deviceUID, opts)

Get Device Health Log

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'logType': ["null"] // [String] | Return only specified log types
};
apiInstance.getDeviceHealthLog(projectOrProductUID, deviceUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes      |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **deviceUID**           | **String**                |                                                                 |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional] |
| **logType**             | [**[String]**](String.md) | Return only specified log types                                 | [optional] |

### Return type

[**GetDeviceHealthLog200Response**](GetDeviceHealthLog200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceLatestEvents

> GetDeviceLatestEvents200Response getDeviceLatestEvents(projectOrProductUID, deviceUID)

Get Device Latest Events

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceLatestEvents(projectOrProductUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

[**GetDeviceLatestEvents200Response**](GetDeviceLatestEvents200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicePlans

> GetDevicePlans200Response getDevicePlans(projectOrProductUID, deviceUID)

Get Data Plans associated with the device, this include the primary sim, any external sim, as well as any satellite connections.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDevicePlans(projectOrProductUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

[**GetDevicePlans200Response**](GetDevicePlans200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicePublicKey

> GetDevicePublicKey200Response getDevicePublicKey(projectOrProductUID, deviceUID)

Get Device Public Key

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDevicePublicKey(projectOrProductUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

[**GetDevicePublicKey200Response**](GetDevicePublicKey200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicePublicKeys

> GetDevicePublicKeys200Response getDevicePublicKeys(projectOrProductUID, opts)

Get Device Public Keys of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1 // Number |
};
apiInstance.getDevicePublicKeys(projectOrProductUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes                      |
| ----------------------- | ---------- | ----------- | -------------------------- |
| **projectOrProductUID** | **String** |             |
| **pageSize**            | **Number** |             | [optional] [default to 50] |
| **pageNum**             | **Number** |             | [optional] [default to 1]  |

### Return type

[**GetDevicePublicKeys200Response**](GetDevicePublicKeys200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceSessions

> GetDeviceSessions200Response getDeviceSessions(projectOrProductUID, deviceUID, opts)

Get Device Sessions

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210 // Number | End date for filtering results, specified as a Unix timestamp
};
apiInstance.getDeviceSessions(projectOrProductUID, deviceUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description                                                     | Notes                      |
| ----------------------- | ---------- | --------------------------------------------------------------- | -------------------------- |
| **projectOrProductUID** | **String** |                                                                 |
| **deviceUID**           | **String** |                                                                 |
| **pageSize**            | **Number** |                                                                 | [optional] [default to 50] |
| **pageNum**             | **Number** |                                                                 | [optional] [default to 1]  |
| **startDate**           | **Number** | Start date for filtering results, specified as a Unix timestamp | [optional]                 |
| **endDate**             | **Number** | End date for filtering results, specified as a Unix timestamp   | [optional]                 |

### Return type

[**GetDeviceSessions200Response**](GetDeviceSessions200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevices

> GetDevices200Response getDevices(projectOrProductUID, opts)

Get Devices of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': ["null"], // [String] | A Device UID.
  'tag': ["null"], // [String] | Tag filter
  'serialNumber': ["null"], // [String] | Serial number filter
  'fleetUID': ["null"], // [String] |
  'notecardFirmware': ["null"], // [String] | Firmware version filter
  'location': ["null"], // [String] | Location filter
  'hostFirmware': ["null"], // [String] | Host firmware filter
  'productUID': ["null"], // [String] |
  'sku': ["null"] // [String] | SKU filter
};
apiInstance.getDevices(projectOrProductUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description             | Notes                      |
| ----------------------- | ------------------------- | ----------------------- | -------------------------- |
| **projectOrProductUID** | **String**                |                         |
| **pageSize**            | **Number**                |                         | [optional] [default to 50] |
| **pageNum**             | **Number**                |                         | [optional] [default to 1]  |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.           | [optional]                 |
| **tag**                 | [**[String]**](String.md) | Tag filter              | [optional]                 |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter    | [optional]                 |
| **fleetUID**            | [**[String]**](String.md) |                         | [optional]                 |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter | [optional]                 |
| **location**            | [**[String]**](String.md) | Location filter         | [optional]                 |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter    | [optional]                 |
| **productUID**          | [**[String]**](String.md) |                         | [optional]                 |
| **sku**                 | [**[String]**](String.md) | SKU filter              | [optional]                 |

### Return type

[**GetDevices200Response**](GetDevices200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetDevices

> GetDevices200Response getFleetDevices(projectOrProductUID, fleetUID, opts)

Get Devices of a Fleet within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': ["null"], // [String] | A Device UID.
  'tag': ["null"], // [String] | Tag filter
  'serialNumber': ["null"], // [String] | Serial number filter
  'notecardFirmware': ["null"], // [String] | Firmware version filter
  'location': ["null"], // [String] | Location filter
  'hostFirmware': ["null"], // [String] | Host firmware filter
  'productUID': ["null"], // [String] |
  'sku': ["null"] // [String] | SKU filter
};
apiInstance.getFleetDevices(projectOrProductUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description             | Notes                      |
| ----------------------- | ------------------------- | ----------------------- | -------------------------- |
| **projectOrProductUID** | **String**                |                         |
| **fleetUID**            | **String**                |                         |
| **pageSize**            | **Number**                |                         | [optional] [default to 50] |
| **pageNum**             | **Number**                |                         | [optional] [default to 1]  |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.           | [optional]                 |
| **tag**                 | [**[String]**](String.md) | Tag filter              | [optional]                 |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter    | [optional]                 |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter | [optional]                 |
| **location**            | [**[String]**](String.md) | Location filter         | [optional]                 |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter    | [optional]                 |
| **productUID**          | [**[String]**](String.md) |                         | [optional]                 |
| **sku**                 | [**[String]**](String.md) | SKU filter              | [optional]                 |

### Return type

[**GetDevices200Response**](GetDevices200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getNotefile

> GetNotefile200Response getNotefile(projectOrProductUID, deviceUID, notefileID, opts)

For .qi files, returns the queued up notes. For .db files, returns all notes in the notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let opts = {
  'max': 56, // Number | The maximum number of Notes to return in the request.
  'deleted': true, // Boolean | true to return deleted notes.
  '_delete': true // Boolean | true to delete the notes returned by the request.
};
apiInstance.getNotefile(projectOrProductUID, deviceUID, notefileID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type        | Description                                           | Notes      |
| ----------------------- | ----------- | ----------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**  |                                                       |
| **deviceUID**           | **String**  |                                                       |
| **notefileID**          | **String**  |                                                       |
| **max**                 | **Number**  | The maximum number of Notes to return in the request. | [optional] |
| **deleted**             | **Boolean** | true to return deleted notes.                         | [optional] |
| **\_delete**            | **Boolean** | true to delete the notes returned by the request.     | [optional] |

### Return type

[**GetNotefile200Response**](GetNotefile200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listNotefiles

> [Notefile] listNotefiles(projectOrProductUID, deviceUID, opts)

Lists .qi and .db files for the device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let opts = {
  'files': ["null"], // [String] | One or more files to obtain change information from.
  'pending': true // Boolean | show only files that are pending sync to the Notecard
};
apiInstance.listNotefiles(projectOrProductUID, deviceUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                           | Notes      |
| ----------------------- | ------------------------- | ----------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                       |
| **deviceUID**           | **String**                |                                                       |
| **files**               | [**[String]**](String.md) | One or more files to obtain change information from.  | [optional] |
| **pending**             | **Boolean**               | show only files that are pending sync to the Notecard | [optional] |

### Return type

[**[Notefile]**](Notefile.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## provisionDevice

> Object provisionDevice(projectOrProductUID, deviceUID, provisionDeviceRequest)

Provision Device for a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let provisionDeviceRequest = new NotehubJs.ProvisionDeviceRequest(); // ProvisionDeviceRequest | Provision a device to a specific ProductUID
apiInstance.provisionDevice(projectOrProductUID, deviceUID, provisionDeviceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                       | Type                                                    | Description                                 | Notes |
| -------------------------- | ------------------------------------------------------- | ------------------------------------------- | ----- |
| **projectOrProductUID**    | **String**                                              |                                             |
| **deviceUID**              | **String**                                              |                                             |
| **provisionDeviceRequest** | [**ProvisionDeviceRequest**](ProvisionDeviceRequest.md) | Provision a device to a specific ProductUID |

### Return type

**Object**

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setDeviceEnvironmentVariables

> EnvironmentVariables setDeviceEnvironmentVariables(projectOrProductUID, deviceUID, environmentVariables)

Set environment variables of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the device
apiInstance.setDeviceEnvironmentVariables(projectOrProductUID, deviceUID, environmentVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description                                     | Notes |
| ------------------------ | --------------------------------------------------- | ----------------------------------------------- | ----- |
| **projectOrProductUID**  | **String**                                          |                                                 |
| **deviceUID**            | **String**                                          |                                                 |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) | Environment variables to be added to the device |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setDeviceEnvironmentVariablesByPin

> EnvironmentVariables setDeviceEnvironmentVariablesByPin(productUID, deviceUID, environmentVariables)

Set environment variables of a device with device pin authorization

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: pin
let pin = defaultClient.authentications['pin'];
pin.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let productUID = com.blues.bridge:sensors; // String |
let deviceUID = dev:000000000000000; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the device
apiInstance.setDeviceEnvironmentVariablesByPin(productUID, deviceUID, environmentVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description                                     | Notes |
| ------------------------ | --------------------------------------------------- | ----------------------------------------------- | ----- |
| **productUID**           | **String**                                          |                                                 |
| **deviceUID**            | **String**                                          |                                                 |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) | Environment variables to be added to the device |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[pin](../README.md#pin)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## signalDevice

> SignalDevice200Response signalDevice(projectOrProductUID, deviceUID, body)

Send a signal from Notehub to a Notecard.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let body = new NotehubJs.Body(); // Body | Body or payload of signal to be sent to the device
apiInstance.signalDevice(projectOrProductUID, deviceUID, body).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                | Description                                        | Notes |
| ----------------------- | ------------------- | -------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**          |                                                    |
| **deviceUID**           | **String**          |                                                    |
| **body**                | [**Body**](Body.md) | Body or payload of signal to be sent to the device |

### Return type

[**SignalDevice200Response**](SignalDevice200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateDbNote

> updateDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput)

Update a note in a .db or .qi notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let noteInput = new NotehubJs.NoteInput(); // NoteInput | Body or payload of note to be added to the device
apiInstance.updateDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                          | Description                                       | Notes |
| ----------------------- | ----------------------------- | ------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                    |                                                   |
| **deviceUID**           | **String**                    |                                                   |
| **notefileID**          | **String**                    |                                                   |
| **noteID**              | **String**                    |                                                   |
| **noteInput**           | [**NoteInput**](NoteInput.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
