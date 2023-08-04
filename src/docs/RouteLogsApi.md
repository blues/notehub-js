# NotehubJs.RouteLogsApi

All URIs are relative to *https://api.notefile.net*

| Method                                                         | HTTP request                                                   | Description |
| -------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| [**getRouteLogsByEvent**](RouteLogsApi.md#getRouteLogsByEvent) | **GET** /v1/projects/{projectUID}/events/{eventUID}/route-logs |
| [**getRouteLogsByRoute**](RouteLogsApi.md#getRouteLogsByRoute) | **GET** /v1/projects/{projectUID}/routes/{routeUID}/route-logs |

## getRouteLogsByEvent

> [GetRouteLogsByRoute200ResponseInner] getRouteLogsByEvent(projectUID, eventUID)

Get Route Logs by Event UID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteLogsApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let eventUID = 4506f411-dea6-44a0-9743-1130f57d7747; // String |
apiInstance.getRouteLogsByEvent(projectUID, eventUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **eventUID**   | **String** |             |

### Return type

[**[GetRouteLogsByRoute200ResponseInner]**](GetRouteLogsByRoute200ResponseInner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsByRoute

> [GetRouteLogsByRoute200ResponseInner] getRouteLogsByRoute(projectUID, routeUID, opts)

Get Route Logs by Route UID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteLogsApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': "deviceUID_example", // String | A Device UID.
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'startDate': 1628631763, // Number | Unix timestamp
  'endDate': 1657894210, // Number | Unix timestamp
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo // String |
};
apiInstance.getRouteLogsByRoute(projectUID, routeUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type        | Description    | Notes                                      |
| ------------------- | ----------- | -------------- | ------------------------------------------ |
| **projectUID**      | **String**  |                |
| **routeUID**        | **String**  |                |
| **pageSize**        | **Number**  |                | [optional] [default to 50]                 |
| **pageNum**         | **Number**  |                | [optional] [default to 1]                  |
| **deviceUID**       | **String**  | A Device UID.  | [optional]                                 |
| **sortBy**          | **String**  |                | [optional] [default to &#39;captured&#39;] |
| **sortOrder**       | **String**  |                | [optional] [default to &#39;asc&#39;]      |
| **startDate**       | **Number**  | Unix timestamp | [optional]                                 |
| **endDate**         | **Number**  | Unix timestamp | [optional]                                 |
| **systemFilesOnly** | **Boolean** |                | [optional]                                 |
| **files**           | **String**  |                | [optional]                                 |

### Return type

[**[GetRouteLogsByRoute200ResponseInner]**](GetRouteLogsByRoute200ResponseInner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
