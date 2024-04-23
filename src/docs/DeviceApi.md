# NotehubJs.DeviceApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                    | HTTP request                                                                          | Description |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| [**deleteDeviceFleets**](DeviceApi.md#deleteDeviceFleets)                                 | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/fleets                       |
| [**disableDevice**](DeviceApi.md#disableDevice)                                           | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/disable                        |
| [**disableDeviceConnectivityAssurance**](DeviceApi.md#disableDeviceConnectivityAssurance) | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/disable-connectivity-assurance |
| [**enableDevice**](DeviceApi.md#enableDevice)                                             | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/enable                         |
| [**enableDeviceConnectivityAssurance**](DeviceApi.md#enableDeviceConnectivityAssurance)   | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/enable-connectivity-assurance  |
| [**getDeviceHealthLog**](DeviceApi.md#getDeviceHealthLog)                                 | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/health-log                      |
| [**getDeviceLatest**](DeviceApi.md#getDeviceLatest)                                       | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/latest                          |
| [**getDevicePublicKey**](DeviceApi.md#getDevicePublicKey)                                 | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/public-key                      |
| [**getDeviceSessions**](DeviceApi.md#getDeviceSessions)                                   | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/sessions                        |
| [**handleNoteSignal**](DeviceApi.md#handleNoteSignal)                                     | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/signal                         |

## deleteDeviceFleets

> GetProjectFleets200Response deleteDeviceFleets(projectUID, deviceUID, deleteDeviceFleetsRequest)

Remove Device from Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.DeviceApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let deleteDeviceFleetsRequest = new NotehubJs.DeleteDeviceFleetsRequest(); // DeleteDeviceFleetsRequest | The fleets to remove from the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
apiInstance.deleteDeviceFleets(projectUID, deviceUID, deleteDeviceFleetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                          | Type                                                          | Description                                                                                                                                                                                                                                                                                           | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectUID**                | **String**                                                    |                                                                                                                                                                                                                                                                                                       |
| **deviceUID**                 | **String**                                                    |                                                                                                                                                                                                                                                                                                       |
| **deleteDeviceFleetsRequest** | [**DeleteDeviceFleetsRequest**](DeleteDeviceFleetsRequest.md) | The fleets to remove from the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error. |

### Return type

[**GetProjectFleets200Response**](GetProjectFleets200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
let deviceUID = "deviceUID_example"; // String |
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
