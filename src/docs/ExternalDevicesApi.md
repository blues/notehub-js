# NotehubJs.ExternalDevicesApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                   | HTTP request                                                             | Description                            |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | -------------------------------------- |
| [**createEventExtDevice**](ExternalDevicesApi.md#createEventExtDevice)   | **POST** /v1/products/{productUID}/ext-devices/{deviceUID}/event         | Add an event from an external device   |
| [**extDeviceSessionClose**](ExternalDevicesApi.md#extDeviceSessionClose) | **POST** /v1/products/{productUID}/ext-devices/{deviceUID}/session/close | Close an external device&#39;s session |
| [**extDeviceSessionOpen**](ExternalDevicesApi.md#extDeviceSessionOpen)   | **POST** /v1/products/{productUID}/ext-devices/{deviceUID}/session/open  | Open an external device&#39;s session  |

## createEventExtDevice

> createEventExtDevice(productUID, deviceUID, event)

Add an event from an external device

Add an event from a device that isn&#39;t a Notecard, adding the device to the project if it&#39;s new. The DeviceUID is lower-cased and gets &#x60;dev:ext:&#x60; unless it has its own sub-prefix, so &#x60;dev:123&#x60; becomes &#x60;dev:ext:123&#x60;. Notehub sets &#x60;when&#x60; to the current time and adds &#x60;.qo&#x60; to a &#x60;file&#x60; with no extension. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ExternalDevicesApi();
let productUID = "com.blues.bridge:sensors"; // String |
let deviceUID = "dev:000000000000000"; // String |
let event = new NotehubJs.Event(); // Event | The event. `file`, `body` and `payload` are the usual fields.
apiInstance.createEventExtDevice(productUID, deviceUID, event).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name           | Type                  | Description                                                                                 | Notes |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------- | ----- |
| **productUID** | **String**            |                                                                                             |
| **deviceUID**  | **String**            |                                                                                             |
| **event**      | [**Event**](Event.md) | The event. &#x60;file&#x60;, &#x60;body&#x60; and &#x60;payload&#x60; are the usual fields. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## extDeviceSessionClose

> extDeviceSessionClose(productUID, deviceUID, deviceSession)

Close an external device&#39;s session

Close an external device&#39;s session, if one is open, adding the device if it&#39;s new. The DeviceUID gets &#x60;dev:ext:&#x60; as in &#x60;CreateEventExtDevice&#x60;. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ExternalDevicesApi();
let productUID = "com.blues.bridge:sensors"; // String |
let deviceUID = "dev:000000000000000"; // String |
let deviceSession = new NotehubJs.DeviceSession(); // DeviceSession | Session fields, such as `why_session_opened` or `why_session_closed`.
apiInstance.extDeviceSessionClose(productUID, deviceUID, deviceSession).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                                  | Description                                                                               | Notes |
| ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------------- | ----- |
| **productUID**    | **String**                            |                                                                                           |
| **deviceUID**     | **String**                            |                                                                                           |
| **deviceSession** | [**DeviceSession**](DeviceSession.md) | Session fields, such as &#x60;why_session_opened&#x60; or &#x60;why_session_closed&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## extDeviceSessionOpen

> extDeviceSessionOpen(productUID, deviceUID, deviceSession)

Open an external device&#39;s session

Open a session for an external device, adding the device if it&#39;s new. An open session is closed first, with &#x60;why_session_closed&#x60; as the reason. The DeviceUID gets &#x60;dev:ext:&#x60; as in &#x60;CreateEventExtDevice&#x60;. Requires the Owner or Developer role. Returns 500 if webhooks are disabled for the project.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ExternalDevicesApi();
let productUID = "com.blues.bridge:sensors"; // String |
let deviceUID = "dev:000000000000000"; // String |
let deviceSession = new NotehubJs.DeviceSession(); // DeviceSession | Session fields, such as `why_session_opened` or `why_session_closed`.
apiInstance.extDeviceSessionOpen(productUID, deviceUID, deviceSession).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name              | Type                                  | Description                                                                               | Notes |
| ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------------- | ----- |
| **productUID**    | **String**                            |                                                                                           |
| **deviceUID**     | **String**                            |                                                                                           |
| **deviceSession** | [**DeviceSession**](DeviceSession.md) | Session fields, such as &#x60;why_session_opened&#x60; or &#x60;why_session_closed&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
