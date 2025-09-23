# NotehubJs.DeviceApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                    | HTTP request                                                                                   | Description                                     |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [**deleteDeviceEnvironmentVariable**](DeviceApi.md#deleteDeviceEnvironmentVariable)       | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables/{key}  |
| [**deleteProjectDevice**](DeviceApi.md#deleteProjectDevice)                               | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}                              |
| [**disableDevice**](DeviceApi.md#disableDevice)                                           | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/disable                        |
| [**disableDeviceConnectivityAssurance**](DeviceApi.md#disableDeviceConnectivityAssurance) | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/disable-connectivity-assurance |
| [**enableDevice**](DeviceApi.md#enableDevice)                                             | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/enable                         |
| [**enableDeviceConnectivityAssurance**](DeviceApi.md#enableDeviceConnectivityAssurance)   | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/enable-connectivity-assurance  |
| [**getDevice**](DeviceApi.md#getDevice)                                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}                                 |
| [**getDeviceEnvironmentHierarchy**](DeviceApi.md#getDeviceEnvironmentHierarchy)           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_hierarchy           | Get environment variable hierarchy for a device |
| [**getDeviceEnvironmentVariables**](DeviceApi.md#getDeviceEnvironmentVariables)           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables           |
| [**getDeviceEnvironmentVariablesByPin**](DeviceApi.md#getDeviceEnvironmentVariablesByPin) | **GET** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin           |
| [**getDeviceHealthLog**](DeviceApi.md#getDeviceHealthLog)                                 | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/health-log                      |
| [**getDeviceLatest**](DeviceApi.md#getDeviceLatest)                                       | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/latest                          |
| [**getDevicePublicKey**](DeviceApi.md#getDevicePublicKey)                                 | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/public-key                      |
| [**getDeviceSessions**](DeviceApi.md#getDeviceSessions)                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/sessions                        |
| [**getProjectDevicePublicKeys**](DeviceApi.md#getProjectDevicePublicKeys)                 | **GET** /v1/projects/{projectOrProductUID}/devices/public-keys                                 |
| [**getProjectDevices**](DeviceApi.md#getProjectDevices)                                   | **GET** /v1/projects/{projectOrProductUID}/devices                                             |
| [**getProjectFleetDevices**](DeviceApi.md#getProjectFleetDevices)                         | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/devices                           |
| [**handleNoteAdd**](DeviceApi.md#handleNoteAdd)                                           | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}             |
| [**handleNoteChanges**](DeviceApi.md#handleNoteChanges)                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/changes      |
| [**handleNoteCreateAdd**](DeviceApi.md#handleNoteCreateAdd)                               | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}    |
| [**handleNoteDelete**](DeviceApi.md#handleNoteDelete)                                     | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}  |
| [**handleNoteGet**](DeviceApi.md#handleNoteGet)                                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}     |
| [**handleNoteSignal**](DeviceApi.md#handleNoteSignal)                                     | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/signal                         |
| [**handleNoteUpdate**](DeviceApi.md#handleNoteUpdate)                                     | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}     |
| [**handleNotefileChanges**](DeviceApi.md#handleNotefileChanges)                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/files/changes                   |
| [**handleNotefileChangesPending**](DeviceApi.md#handleNotefileChangesPending)             | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/files/changes/pending           |
| [**handleNotefileDelete**](DeviceApi.md#handleNotefileDelete)                             | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/files                        |
| [**postProvisionProjectDevice**](DeviceApi.md#postProvisionProjectDevice)                 | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/provision                      |
| [**putDeviceEnvironmentVariables**](DeviceApi.md#putDeviceEnvironmentVariables)           | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables           |
| [**putDeviceEnvironmentVariablesByPin**](DeviceApi.md#putDeviceEnvironmentVariablesByPin) | **PUT** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin           |

## deleteDeviceEnvironmentVariable

> EnvironmentVariables deleteDeviceEnvironmentVariable(projectOrProductUID, deviceUID, key)

Delete environment variable of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProjectDevice

> deleteProjectDevice(projectOrProductUID, deviceUID, purge)

Delete Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let purge = false; // Boolean |
apiInstance.deleteProjectDevice(projectOrProductUID, deviceUID, purge).then(() => {
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

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## disableDevice

> disableDevice(projectOrProductUID, deviceUID)

Disable Device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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

> GetDeviceHealthLog200Response getDeviceHealthLog(projectOrProductUID, deviceUID)

Get Device Health Log

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceHealthLog(projectOrProductUID, deviceUID).then((data) => {
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

[**GetDeviceHealthLog200Response**](GetDeviceHealthLog200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceLatest

> GetDeviceLatest200Response getDeviceLatest(projectOrProductUID, deviceUID)

Get Device Latest Events

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceLatest(projectOrProductUID, deviceUID).then((data) => {
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

[**GetDeviceLatest200Response**](GetDeviceLatest200Response.md)

### Authorization

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

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
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectDevicePublicKeys

> GetProjectDevicePublicKeys200Response getProjectDevicePublicKeys(projectOrProductUID, opts)

Get Device Public Keys of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1 // Number |
};
apiInstance.getProjectDevicePublicKeys(projectOrProductUID, opts).then((data) => {
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

[**GetProjectDevicePublicKeys200Response**](GetProjectDevicePublicKeys200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectDevices

> GetProjectDevices200Response getProjectDevices(projectOrProductUID, opts)

Get Devices of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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
apiInstance.getProjectDevices(projectOrProductUID, opts).then((data) => {
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

[**GetProjectDevices200Response**](GetProjectDevices200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectFleetDevices

> GetProjectDevices200Response getProjectFleetDevices(projectOrProductUID, fleetUID, opts)

Get Devices of a Fleet within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

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
apiInstance.getProjectFleetDevices(projectOrProductUID, fleetUID, opts).then((data) => {
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

[**GetProjectDevices200Response**](GetProjectDevices200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteAdd

> handleNoteAdd(projectOrProductUID, deviceUID, notefileID, note)

Adds a Note to a Notefile, creating the Notefile if it doesn&#39;t yet exist.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteAdd(projectOrProductUID, deviceUID, notefileID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                | Description                                       | Notes |
| ----------------------- | ------------------- | ------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**          |                                                   |
| **deviceUID**           | **String**          |                                                   |
| **notefileID**          | **String**          |                                                   |
| **note**                | [**Note**](Note.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## handleNoteChanges

> HandleNoteChanges200Response handleNoteChanges(projectOrProductUID, deviceUID, notefileID, opts)

Incrementally retrieve changes within a specific Notefile.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
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
apiInstance.handleNoteChanges(projectOrProductUID, deviceUID, notefileID, opts).then((data) => {
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
| **tracker**             | **String**  | The change tracker ID.                                | [optional] |
| **max**                 | **Number**  | The maximum number of Notes to return in the request. | [optional] |
| **start**               | **Boolean** | true to reset the tracker to the beginning.           | [optional] |
| **stop**                | **Boolean** | true to delete the tracker.                           | [optional] |
| **deleted**             | **Boolean** | true to return deleted notes.                         | [optional] |
| **\_delete**            | **Boolean** | true to delete the notes returned by the request.     | [optional] |

### Return type

[**HandleNoteChanges200Response**](HandleNoteChanges200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteCreateAdd

> handleNoteCreateAdd(projectOrProductUID, deviceUID, notefileID, noteID, note)

Adds a Note to a Notefile, creating the Notefile if it doesn&#39;t yet exist.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteCreateAdd(projectOrProductUID, deviceUID, notefileID, noteID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                | Description                                       | Notes |
| ----------------------- | ------------------- | ------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**          |                                                   |
| **deviceUID**           | **String**          |                                                   |
| **notefileID**          | **String**          |                                                   |
| **noteID**              | **String**          |                                                   |
| **note**                | [**Note**](Note.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## handleNoteDelete

> handleNoteDelete(projectOrProductUID, deviceUID, notefileID, noteID)

Delete a note from a DB notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
apiInstance.handleNoteDelete(projectOrProductUID, deviceUID, notefileID, noteID).then(() => {
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

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteGet

> HandleNoteGet200Response handleNoteGet(projectOrProductUID, deviceUID, notefileID, noteID, opts)

Get a note from a DB notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let opts = {
  '_delete': true, // Boolean | Whether to delete the note from the DB notefile
  'deleted': true // Boolean | Whether to return deleted notes
};
apiInstance.handleNoteGet(projectOrProductUID, deviceUID, notefileID, noteID, opts).then((data) => {
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

[**HandleNoteGet200Response**](HandleNoteGet200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNoteSignal

> HandleNoteSignal200Response handleNoteSignal(projectOrProductUID, deviceUID, body)

Send a signal from Notehub to a Notecard.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let body = new NotehubJs.Body(); // Body | Body or payload of singnal to be sent to the device
apiInstance.handleNoteSignal(projectOrProductUID, deviceUID, body).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                | Description                                         | Notes |
| ----------------------- | ------------------- | --------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**          |                                                     |
| **deviceUID**           | **String**          |                                                     |
| **body**                | [**Body**](Body.md) | Body or payload of singnal to be sent to the device |

### Return type

[**HandleNoteSignal200Response**](HandleNoteSignal200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## handleNoteUpdate

> handleNoteUpdate(projectOrProductUID, deviceUID, notefileID, noteID, note)

Update a note in a DB notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let notefileID = "notefileID_example"; // String |
let noteID = "noteID_example"; // String |
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteUpdate(projectOrProductUID, deviceUID, notefileID, noteID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                | Description                                       | Notes |
| ----------------------- | ------------------- | ------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**          |                                                   |
| **deviceUID**           | **String**          |                                                   |
| **notefileID**          | **String**          |                                                   |
| **noteID**              | **String**          |                                                   |
| **note**                | [**Note**](Note.md) | Body or payload of note to be added to the device |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## handleNotefileChanges

> HandleNotefileChanges200Response handleNotefileChanges(projectOrProductUID, deviceUID, opts)

Used to perform queries on a single or multiple files to determine if new Notes are available to read

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let opts = {
  'tracker': "tracker_example", // String | The change tracker ID.
  'files': ["null"] // [String] | One or more files to obtain change information from.
};
apiInstance.handleNotefileChanges(projectOrProductUID, deviceUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                          | Notes      |
| ----------------------- | ------------------------- | ---------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                      |
| **deviceUID**           | **String**                |                                                      |
| **tracker**             | **String**                | The change tracker ID.                               | [optional] |
| **files**               | [**[String]**](String.md) | One or more files to obtain change information from. | [optional] |

### Return type

[**HandleNotefileChanges200Response**](HandleNotefileChanges200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNotefileChangesPending

> HandleNotefileChangesPending200Response handleNotefileChangesPending(projectOrProductUID, deviceUID)

Returns info about file changes that are pending upload to Notehub or download to the Notecard.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.handleNotefileChangesPending(projectOrProductUID, deviceUID).then((data) => {
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

[**HandleNotefileChangesPending200Response**](HandleNotefileChangesPending200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## handleNotefileDelete

> handleNotefileDelete(projectOrProductUID, deviceUID, handleNotefileDeleteRequest)

Deletes Notefiles and the Notes they contain.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let handleNotefileDeleteRequest = new NotehubJs.HandleNotefileDeleteRequest(); // HandleNotefileDeleteRequest |
apiInstance.handleNotefileDelete(projectOrProductUID, deviceUID, handleNotefileDeleteRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                            | Type                                                              | Description | Notes |
| ------------------------------- | ----------------------------------------------------------------- | ----------- | ----- |
| **projectOrProductUID**         | **String**                                                        |             |
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

> Object postProvisionProjectDevice(projectOrProductUID, deviceUID, postProvisionProjectDeviceRequest)

Provision Device for a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let postProvisionProjectDeviceRequest = new NotehubJs.PostProvisionProjectDeviceRequest(); // PostProvisionProjectDeviceRequest | Provision a device to a specific ProductUID
apiInstance.postProvisionProjectDevice(projectOrProductUID, deviceUID, postProvisionProjectDeviceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                                  | Type                                                                          | Description                                 | Notes |
| ------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- | ----- |
| **projectOrProductUID**               | **String**                                                                    |                                             |
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

> EnvironmentVariables putDeviceEnvironmentVariables(projectOrProductUID, deviceUID, environmentVariables)

Put environment variables of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the device
apiInstance.putDeviceEnvironmentVariables(projectOrProductUID, deviceUID, environmentVariables).then((data) => {
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
