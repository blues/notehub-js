# NotehubJs.DeviceApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                    | HTTP request                                                                          | Description |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| [**deleteDeviceEnvironmentVariable**](DeviceApi.md#deleteDeviceEnvironmentVariable)       | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables/{key}  |
| [**deleteProjectDevice**](DeviceApi.md#deleteProjectDevice)                               | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}                              |
| [**disableDevice**](DeviceApi.md#disableDevice)                                           | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/disable                        |
| [**disableDeviceConnectivityAssurance**](DeviceApi.md#disableDeviceConnectivityAssurance) | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/disable-connectivity-assurance |
| [**enableDevice**](DeviceApi.md#enableDevice)                                             | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/enable                         |
| [**enableDeviceConnectivityAssurance**](DeviceApi.md#enableDeviceConnectivityAssurance)   | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/enable-connectivity-assurance  |
| [**getDevice**](DeviceApi.md#getDevice)                                                   | **GET** /v1/projects/{projectUID}/devices/{deviceUID}                                 |
| [**getDeviceEnvironmentVariables**](DeviceApi.md#getDeviceEnvironmentVariables)           | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables           |
| [**getDeviceEnvironmentVariablesByPin**](DeviceApi.md#getDeviceEnvironmentVariablesByPin) | **GET** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin  |
| [**getDeviceHealthLog**](DeviceApi.md#getDeviceHealthLog)                                 | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/health-log                      |
| [**getDeviceLatest**](DeviceApi.md#getDeviceLatest)                                       | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/latest                          |
| [**getDevicePublicKey**](DeviceApi.md#getDevicePublicKey)                                 | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/public-key                      |
| [**getDeviceSessions**](DeviceApi.md#getDeviceSessions)                                   | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/sessions                        |
| [**getProjectDevicePublicKeys**](DeviceApi.md#getProjectDevicePublicKeys)                 | **GET** /v1/projects/{projectUID}/devices/public-keys                                 |
| [**getProjectDevices**](DeviceApi.md#getProjectDevices)                                   | **GET** /v1/projects/{projectUID}/devices                                             |
| [**getProjectFleetDevices**](DeviceApi.md#getProjectFleetDevices)                         | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/devices                           |
| [**handleNoteAdd**](DeviceApi.md#handleNoteAdd)                                           | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}             |
| [**handleNoteChanges**](DeviceApi.md#handleNoteChanges)                                   | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/changes      |
| [**handleNoteCreateAdd**](DeviceApi.md#handleNoteCreateAdd)                               | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}    |
| [**handleNoteDelete**](DeviceApi.md#handleNoteDelete)                                     | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}  |
| [**handleNoteGet**](DeviceApi.md#handleNoteGet)                                           | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}     |
| [**handleNoteSignal**](DeviceApi.md#handleNoteSignal)                                     | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/signal                         |
| [**handleNoteUpdate**](DeviceApi.md#handleNoteUpdate)                                     | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}     |
| [**handleNotefileChanges**](DeviceApi.md#handleNotefileChanges)                           | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/files/changes                   |
| [**handleNotefileChangesPending**](DeviceApi.md#handleNotefileChangesPending)             | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/files/changes/pending           |
| [**handleNotefileDelete**](DeviceApi.md#handleNotefileDelete)                             | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/files                        |
| [**postProvisionProjectDevice**](DeviceApi.md#postProvisionProjectDevice)                 | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/provision                      |
| [**putDeviceEnvironmentVariables**](DeviceApi.md#putDeviceEnvironmentVariables)           | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables           |
| [**putDeviceEnvironmentVariablesByPin**](DeviceApi.md#putDeviceEnvironmentVariablesByPin) | **PUT** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin  |

## deleteDeviceEnvironmentVariable

> EnvironmentVariables deleteDeviceEnvironmentVariable(projectUID, deviceUID, key)

Delete environment variable of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteDeviceEnvironmentVariable(projectUID, deviceUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description                             | Notes |
| -------------- | ---------- | --------------------------------------- | ----- |
| **projectUID** | **String** |                                         |
| **deviceUID**  | **String** |                                         |
| **key**        | **String** | The environment variable key to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

## disableDevice

> disableDevice(projectUID, deviceUID)

Disable Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.disableDevice(projectUID, deviceUID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## disableDeviceConnectivityAssurance

> disableDeviceConnectivityAssurance(projectUID, deviceUID)

Disable Connectivity Assurance

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.disableDeviceConnectivityAssurance(projectUID, deviceUID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## enableDevice

> enableDevice(projectUID, deviceUID)

Enable Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.enableDevice(projectUID, deviceUID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## enableDeviceConnectivityAssurance

> enableDeviceConnectivityAssurance(projectUID, deviceUID)

Enable Connectivity Assurance

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.enableDeviceConnectivityAssurance(projectUID, deviceUID).then(() => {
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

## getDeviceEnvironmentVariables

> GetDeviceEnvironmentVariables200Response getDeviceEnvironmentVariables(projectUID, deviceUID)

Get environment variables of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceEnvironmentVariables(projectUID, deviceUID).then((data) => {
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

[**GetDeviceEnvironmentVariables200Response**](GetDeviceEnvironmentVariables200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceEnvironmentVariablesByPin

> GetDeviceEnvironmentVariables200Response getDeviceEnvironmentVariablesByPin(productUID, deviceUID)

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

[**GetDeviceEnvironmentVariables200Response**](GetDeviceEnvironmentVariables200Response.md)

### Authorization

[pin](../README.md#pin)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceHealthLog

> GetDeviceHealthLog200Response getDeviceHealthLog(projectUID, deviceUID)

Get Device Health Log

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceHealthLog(projectUID, deviceUID).then((data) => {
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

[**GetDeviceHealthLog200Response**](GetDeviceHealthLog200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceLatest

> GetDeviceLatest200Response getDeviceLatest(projectUID, deviceUID)

Get Device Latest Events

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceLatest(projectUID, deviceUID).then((data) => {
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

[**GetDeviceLatest200Response**](GetDeviceLatest200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicePublicKey

> GetDevicePublicKey200Response getDevicePublicKey(projectUID, deviceUID)

Get Device Public Key

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDevicePublicKey(projectUID, deviceUID).then((data) => {
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

[**GetDevicePublicKey200Response**](GetDevicePublicKey200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceSessions

> GetDeviceSessions200Response getDeviceSessions(projectUID, deviceUID, opts)

Get Device Sessions

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1 // Number |
};
apiInstance.getDeviceSessions(projectUID, deviceUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes                      |
| -------------- | ---------- | ----------- | -------------------------- |
| **projectUID** | **String** |             |
| **deviceUID**  | **String** |             |
| **pageSize**   | **Number** |             | [optional] [default to 50] |
| **pageNum**    | **Number** |             | [optional] [default to 1]  |

### Return type

[**GetDeviceSessions200Response**](GetDeviceSessions200Response.md)

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

let apiInstance = new NotehubJs.DeviceApi();
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

let apiInstance = new NotehubJs.DeviceApi();
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

let apiInstance = new NotehubJs.DeviceApi();
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

## handleNoteSignal

> HandleNoteSignal200Response handleNoteSignal(projectUID, deviceUID, body)

Send a signal from Notehub to a Notecard.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let body = new NotehubJs.Body(); // Body | Body or payload of singnal to be sent to the device
apiInstance.handleNoteSignal(projectUID, deviceUID, body).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                | Description                                         | Notes |
| -------------- | ------------------- | --------------------------------------------------- | ----- |
| **projectUID** | **String**          |                                                     |
| **deviceUID**  | **String**          |                                                     |
| **body**       | [**Body**](Body.md) | Body or payload of singnal to be sent to the device |

### Return type

[**HandleNoteSignal200Response**](HandleNoteSignal200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
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

## putDeviceEnvironmentVariables

> EnvironmentVariables putDeviceEnvironmentVariables(projectUID, deviceUID, environmentVariables)

Put environment variables of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the device
apiInstance.putDeviceEnvironmentVariables(projectUID, deviceUID, environmentVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description                                     | Notes |
| ------------------------ | --------------------------------------------------- | ----------------------------------------------- | ----- |
| **projectUID**           | **String**                                          |                                                 |
| **deviceUID**            | **String**                                          |                                                 |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) | Environment variables to be added to the device |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## putDeviceEnvironmentVariablesByPin

> EnvironmentVariables putDeviceEnvironmentVariablesByPin(productUID, deviceUID, environmentVariables)

Put environment variables of a device with device pin authorization

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
apiInstance.putDeviceEnvironmentVariablesByPin(productUID, deviceUID, environmentVariables).then((data) => {
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
