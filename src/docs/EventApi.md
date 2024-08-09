# NotehubJs.EventApi

All URIs are relative to *https://api.notefile.net*

| Method                                                               | HTTP request                                                      | Description |
| -------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------- |
| [**getFleetEvents**](EventApi.md#getFleetEvents)                     | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/events        |
| [**getFleetEventsByCursor**](EventApi.md#getFleetEventsByCursor)     | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/events-cursor |
| [**getProjectEvents**](EventApi.md#getProjectEvents)                 | **GET** /v1/projects/{projectUID}/events                          |
| [**getProjectEventsByCursor**](EventApi.md#getProjectEventsByCursor) | **GET** /v1/projects/{projectUID}/events-cursor                   |
| [**getRouteLogsByEvent**](EventApi.md#getRouteLogsByEvent)           | **GET** /v1/projects/{projectUID}/events/{eventUID}/route-logs    |

## getFleetEvents

> GetProjectEvents200Response getFleetEvents(projectUID, fleetUID, opts)

Get Events of a Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EventApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': "deviceUID_example", // String | A Device UID.
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'startDate': 1628631763, // Number | Unix timestamp
  'endDate': 1657894210, // Number | Unix timestamp
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'deviceUIDs': ["null"], // [String] | Deprecated.
  'since': "since_example" // String | Deprecated.
};
apiInstance.getFleetEvents(projectUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type                      | Description    | Notes                                      |
| ------------------- | ------------------------- | -------------- | ------------------------------------------ |
| **projectUID**      | **String**                |                |
| **fleetUID**        | **String**                |                |
| **pageSize**        | **Number**                |                | [optional] [default to 50]                 |
| **pageNum**         | **Number**                |                | [optional] [default to 1]                  |
| **deviceUID**       | **String**                | A Device UID.  | [optional]                                 |
| **sortBy**          | **String**                |                | [optional] [default to &#39;captured&#39;] |
| **sortOrder**       | **String**                |                | [optional] [default to &#39;asc&#39;]      |
| **startDate**       | **Number**                | Unix timestamp | [optional]                                 |
| **endDate**         | **Number**                | Unix timestamp | [optional]                                 |
| **systemFilesOnly** | **Boolean**               |                | [optional]                                 |
| **files**           | **String**                |                | [optional]                                 |
| **deviceUIDs**      | [**[String]**](String.md) | Deprecated.    | [optional]                                 |
| **since**           | **String**                | Deprecated.    | [optional]                                 |

### Return type

[**GetProjectEvents200Response**](GetProjectEvents200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetEventsByCursor

> GetProjectEventsByCursor200Response getFleetEventsByCursor(projectUID, fleetUID, opts)

Get Events of a Fleet by cursor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EventApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  'limit': 50, // Number |
  'cursor': "cursor_example", // String | A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.
  'sortOrder': "'asc'", // String |
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'deviceUID': "deviceUID_example", // String | A Device UID.
  'startDate': 1628631763, // Number | Unix timestamp
  'endDate': 1657894210 // Number | Unix timestamp
};
apiInstance.getFleetEventsByCursor(projectUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type        | Description                                                                                                                                                                                                                                                                                                                                                                | Notes                                 |
| ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **projectUID**      | **String**  |                                                                                                                                                                                                                                                                                                                                                                            |
| **fleetUID**        | **String**  |                                                                                                                                                                                                                                                                                                                                                                            |
| **limit**           | **Number**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to 50]            |
| **cursor**          | **String**  | A cursor, which can be obtained from the &#x60;next_cursor&#x60; value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included. | [optional]                            |
| **sortOrder**       | **String**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to &#39;asc&#39;] |
| **systemFilesOnly** | **Boolean** |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **files**           | **String**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **deviceUID**       | **String**  | A Device UID.                                                                                                                                                                                                                                                                                                                                                              | [optional]                            |
| **startDate**       | **Number**  | Unix timestamp                                                                                                                                                                                                                                                                                                                                                             | [optional]                            |
| **endDate**         | **Number**  | Unix timestamp                                                                                                                                                                                                                                                                                                                                                             | [optional]                            |

### Return type

[**GetProjectEventsByCursor200Response**](GetProjectEventsByCursor200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectEvents

> GetProjectEvents200Response getProjectEvents(projectUID, opts)

Get Events of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EventApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': "deviceUID_example", // String | A Device UID.
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'startDate': 1628631763, // Number | Unix timestamp
  'endDate': 1657894210, // Number | Unix timestamp
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'deviceUIDs': ["null"], // [String] | Deprecated.
  'since': "since_example" // String | Deprecated.
};
apiInstance.getProjectEvents(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type                      | Description    | Notes                                      |
| ------------------- | ------------------------- | -------------- | ------------------------------------------ |
| **projectUID**      | **String**                |                |
| **pageSize**        | **Number**                |                | [optional] [default to 50]                 |
| **pageNum**         | **Number**                |                | [optional] [default to 1]                  |
| **deviceUID**       | **String**                | A Device UID.  | [optional]                                 |
| **sortBy**          | **String**                |                | [optional] [default to &#39;captured&#39;] |
| **sortOrder**       | **String**                |                | [optional] [default to &#39;asc&#39;]      |
| **startDate**       | **Number**                | Unix timestamp | [optional]                                 |
| **endDate**         | **Number**                | Unix timestamp | [optional]                                 |
| **systemFilesOnly** | **Boolean**               |                | [optional]                                 |
| **files**           | **String**                |                | [optional]                                 |
| **deviceUIDs**      | [**[String]**](String.md) | Deprecated.    | [optional]                                 |
| **since**           | **String**                | Deprecated.    | [optional]                                 |

### Return type

[**GetProjectEvents200Response**](GetProjectEvents200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectEventsByCursor

> GetProjectEventsByCursor200Response getProjectEventsByCursor(projectUID, opts)

Get Events of a Project by cursor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EventApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'limit': 50, // Number |
  'cursor': "cursor_example", // String | A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.
  'sortOrder': "'asc'", // String |
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'fleetUID': "fleetUID_example", // String |
  'deviceUID': "deviceUID_example" // String | A Device UID.
};
apiInstance.getProjectEventsByCursor(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type        | Description                                                                                                                                                                                                                                                                                                                                                                | Notes                                 |
| ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **projectUID**      | **String**  |                                                                                                                                                                                                                                                                                                                                                                            |
| **limit**           | **Number**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to 50]            |
| **cursor**          | **String**  | A cursor, which can be obtained from the &#x60;next_cursor&#x60; value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included. | [optional]                            |
| **sortOrder**       | **String**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to &#39;asc&#39;] |
| **systemFilesOnly** | **Boolean** |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **files**           | **String**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **fleetUID**        | **String**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **deviceUID**       | **String**  | A Device UID.                                                                                                                                                                                                                                                                                                                                                              | [optional]                            |

### Return type

[**GetProjectEventsByCursor200Response**](GetProjectEventsByCursor200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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

let apiInstance = new NotehubJs.EventApi();
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
