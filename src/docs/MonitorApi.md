# NotehubJs.MonitorApi

All URIs are relative to *https://api.notefile.net*

| Method                                           | HTTP request                                                        | Description |
| ------------------------------------------------ | ------------------------------------------------------------------- | ----------- |
| [**createMonitor**](MonitorApi.md#createMonitor) | **POST** /v1/projects/{projectOrProductUID}/monitors                |
| [**deleteMonitor**](MonitorApi.md#deleteMonitor) | **DELETE** /v1/projects/{projectOrProductUID}/monitors/{monitorUID} |
| [**getMonitor**](MonitorApi.md#getMonitor)       | **GET** /v1/projects/{projectOrProductUID}/monitors/{monitorUID}    |
| [**getMonitors**](MonitorApi.md#getMonitors)     | **GET** /v1/projects/{projectOrProductUID}/monitors                 |
| [**updateMonitor**](MonitorApi.md#updateMonitor) | **PUT** /v1/projects/{projectOrProductUID}/monitors/{monitorUID}    |

## createMonitor

> Monitor createMonitor(projectOrProductUID, body)

Create a new Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let body = new NotehubJs.Monitor(); // Monitor | Body or payload of monitor to be created
apiInstance.createMonitor(projectOrProductUID, body).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type        | Description                              | Notes |
| ----------------------- | ----------- | ---------------------------------------- | ----- |
| **projectOrProductUID** | **String**  |                                          |
| **body**                | **Monitor** | Body or payload of monitor to be created |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteMonitor

> Monitor deleteMonitor(projectOrProductUID, monitorUID)

Delete Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let monitorUID = monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad; // String |
apiInstance.deleteMonitor(projectOrProductUID, monitorUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **monitorUID**          | **String** |             |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMonitor

> Monitor getMonitor(projectOrProductUID, monitorUID)

Get Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let monitorUID = monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad; // String |
apiInstance.getMonitor(projectOrProductUID, monitorUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **monitorUID**          | **String** |             |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMonitors

> [Monitor] getMonitors(projectOrProductUID)

Get list of defined Monitors

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getMonitors(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**[Monitor]**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateMonitor

> Monitor updateMonitor(projectOrProductUID, monitorUID, monitor)

Update Monitor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let monitorUID = monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad; // String |
let monitor = new NotehubJs.Monitor(); // Monitor | Body or payload of monitor to be created
apiInstance.updateMonitor(projectOrProductUID, monitorUID, monitor).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                              | Notes |
| ----------------------- | ------------------------- | ---------------------------------------- | ----- |
| **projectOrProductUID** | **String**                |                                          |
| **monitorUID**          | **String**                |                                          |
| **monitor**             | [**Monitor**](Monitor.md) | Body or payload of monitor to be created |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
