# NotehubJs.MonitorApi

All URIs are relative to *https://api.notefile.net*

| Method                                           | HTTP request                                               | Description |
| ------------------------------------------------ | ---------------------------------------------------------- | ----------- |
| [**createMonitor**](MonitorApi.md#createMonitor) | **POST** /v1/projects/{projectUID}/monitors                |
| [**deleteMonitor**](MonitorApi.md#deleteMonitor) | **DELETE** /v1/projects/{projectUID}/monitors/{monitorUID} |
| [**getMonitor**](MonitorApi.md#getMonitor)       | **GET** /v1/projects/{projectUID}/monitors/{monitorUID}    |
| [**getMonitors**](MonitorApi.md#getMonitors)     | **GET** /v1/projects/{projectUID}/monitors                 |
| [**updateMonitor**](MonitorApi.md#updateMonitor) | **PUT** /v1/projects/{projectUID}/monitors/{monitorUID}    |

## createMonitor

> Monitor createMonitor(projectUID, createMonitor)

Create a new Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let createMonitor = new NotehubJs.CreateMonitor(); // CreateMonitor | Body or payload of monitor to be created
apiInstance.createMonitor(projectUID, createMonitor).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name              | Type                                  | Description                              | Notes |
| ----------------- | ------------------------------------- | ---------------------------------------- | ----- |
| **projectUID**    | **String**                            |                                          |
| **createMonitor** | [**CreateMonitor**](CreateMonitor.md) | Body or payload of monitor to be created |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteMonitor

> Monitor deleteMonitor(projectUID, monitorUID)

Delete Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let monitorUID = monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad; // String |
apiInstance.deleteMonitor(projectUID, monitorUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **monitorUID** | **String** |             |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMonitor

> Monitor getMonitor(projectUID, monitorUID)

Get Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let monitorUID = monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad; // String |
apiInstance.getMonitor(projectUID, monitorUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **monitorUID** | **String** |             |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMonitors

> [Monitor] getMonitors(projectUID)

Get list of defined Monitors

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getMonitors(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |

### Return type

[**[Monitor]**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateMonitor

> Monitor updateMonitor(projectUID, monitorUID, monitor)

Update Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let monitorUID = monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad; // String |
let monitor = new NotehubJs.Monitor(); // Monitor | Body or payload of monitor to be created
apiInstance.updateMonitor(projectUID, monitorUID, monitor).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                      | Description                              | Notes |
| -------------- | ------------------------- | ---------------------------------------- | ----- |
| **projectUID** | **String**                |                                          |
| **monitorUID** | **String**                |                                          |
| **monitor**    | [**Monitor**](Monitor.md) | Body or payload of monitor to be created |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
