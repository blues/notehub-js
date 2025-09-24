# NotehubJs.ExternalDevicesApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                   | HTTP request                                                             | Description |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ----------- |
| [**createEventExtDevice**](ExternalDevicesApi.md#createEventExtDevice)   | **POST** /v1/products/{productUID}/ext-devices/{deviceUID}/event         |
| [**extDeviceSessionClose**](ExternalDevicesApi.md#extDeviceSessionClose) | **POST** /v1/products/{productUID}/ext-devices/{deviceUID}/session/close |
| [**extDeviceSessionOpen**](ExternalDevicesApi.md#extDeviceSessionOpen)   | **POST** /v1/products/{productUID}/ext-devices/{deviceUID}/session/open  |

## createEventExtDevice

> createEventExtDevice(productUID, deviceUID, event)

Creates an event using specified webhook

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.ExternalDevicesApi();
let productUID = com.blues.bridge:sensors; // String |
let deviceUID = dev:000000000000000; // String |
let event = new NotehubJs.Event(); // Event | Event Object
apiInstance.createEventExtDevice(productUID, deviceUID, event).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                  | Description  | Notes |
| -------------- | --------------------- | ------------ | ----- |
| **productUID** | **String**            |              |
| **deviceUID**  | **String**            |              |
| **event**      | [**Event**](Event.md) | Event Object |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## extDeviceSessionClose

> extDeviceSessionClose(productUID, deviceUID, deviceSession)

Closes the session for the specified device if open

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.ExternalDevicesApi();
let productUID = com.blues.bridge:sensors; // String |
let deviceUID = dev:000000000000000; // String |
let deviceSession = new NotehubJs.DeviceSession(); // DeviceSession | Session Object
apiInstance.extDeviceSessionClose(productUID, deviceUID, deviceSession).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type                                  | Description    | Notes |
| ----------------- | ------------------------------------- | -------------- | ----- |
| **productUID**    | **String**                            |                |
| **deviceUID**     | **String**                            |                |
| **deviceSession** | [**DeviceSession**](DeviceSession.md) | Session Object |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## extDeviceSessionOpen

> extDeviceSessionOpen(productUID, deviceUID, deviceSession)

Create a Session for the specified device. | If a session is currently open it will be closed and a new one opened.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.ExternalDevicesApi();
let productUID = com.blues.bridge:sensors; // String |
let deviceUID = dev:000000000000000; // String |
let deviceSession = new NotehubJs.DeviceSession(); // DeviceSession | Session Object
apiInstance.extDeviceSessionOpen(productUID, deviceUID, deviceSession).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type                                  | Description    | Notes |
| ----------------- | ------------------------------------- | -------------- | ----- |
| **productUID**    | **String**                            |                |
| **deviceUID**     | **String**                            |                |
| **deviceSession** | [**DeviceSession**](DeviceSession.md) | Session Object |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
