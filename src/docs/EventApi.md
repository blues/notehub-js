# NotehubJs.EventApi

All URIs are relative to *https://api.notefile.net*

| Method                                                               | HTTP request                                                               | Description |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| [**getFleetEvents**](EventApi.md#getFleetEvents)                     | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/events        |
| [**getFleetEventsByCursor**](EventApi.md#getFleetEventsByCursor)     | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/events-cursor |
| [**getProjectEvents**](EventApi.md#getProjectEvents)                 | **GET** /v1/projects/{projectOrProductUID}/events                          |
| [**getProjectEventsByCursor**](EventApi.md#getProjectEventsByCursor) | **GET** /v1/projects/{projectOrProductUID}/events-cursor                   |
| [**getRouteLogsByEvent**](EventApi.md#getRouteLogsByEvent)           | **GET** /v1/projects/{projectOrProductUID}/events/{eventUID}/route-logs    |

## getFleetEvents

> GetProjectEvents200Response getFleetEvents(projectOrProductUID, fleetUID, opts)

Get Events of a Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': ["null"], // [String] | A Device UID.
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'dateType': uploaded, // String | Which date to filter on, either 'captured' or 'uploaded'.  This will apply to the startDate and endDate parameters
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'format': "'json'", // String | Response format (JSON or CSV)
  'serialNumber': ["null"], // [String] | Filter by Serial Number
  'sessionUID': ["null"], // [String] | Filter by Session UID
  'eventUID': ["null"], // [String] | Filter by Event UID
  'selectFields': "selectFields_example" // String | Comma-separated list of fields to select from JSON payload (e.g., \"field1,field2.subfield,field3\"), this will reflect the columns in the CSV output.
};
apiInstance.getFleetEvents(projectOrProductUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                                                                                                                      | Notes                                      |
| ----------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **projectOrProductUID** | **String**                |                                                                                                                                                                  |
| **fleetUID**            | **String**                |                                                                                                                                                                  |
| **pageSize**            | **Number**                |                                                                                                                                                                  | [optional] [default to 50]                 |
| **pageNum**             | **Number**                |                                                                                                                                                                  | [optional] [default to 1]                  |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                                                                                                                    | [optional]                                 |
| **sortBy**              | **String**                |                                                                                                                                                                  | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                                                                                                                                                                  | [optional] [default to &#39;asc&#39;]      |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                  | [optional]                                 |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                    | [optional]                                 |
| **dateType**            | **String**                | Which date to filter on, either &#39;captured&#39; or &#39;uploaded&#39;. This will apply to the startDate and endDate parameters                                | [optional] [default to &#39;captured&#39;] |
| **systemFilesOnly**     | **Boolean**               |                                                                                                                                                                  | [optional]                                 |
| **files**               | **String**                |                                                                                                                                                                  | [optional]                                 |
| **format**              | **String**                | Response format (JSON or CSV)                                                                                                                                    | [optional] [default to &#39;json&#39;]     |
| **serialNumber**        | [**[String]**](String.md) | Filter by Serial Number                                                                                                                                          | [optional]                                 |
| **sessionUID**          | [**[String]**](String.md) | Filter by Session UID                                                                                                                                            | [optional]                                 |
| **eventUID**            | [**[String]**](String.md) | Filter by Event UID                                                                                                                                              | [optional]                                 |
| **selectFields**        | **String**                | Comma-separated list of fields to select from JSON payload (e.g., \&quot;field1,field2.subfield,field3\&quot;), this will reflect the columns in the CSV output. | [optional]                                 |

### Return type

[**GetProjectEvents200Response**](GetProjectEvents200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

## getFleetEventsByCursor

> GetProjectEventsByCursor200Response getFleetEventsByCursor(projectOrProductUID, fleetUID, opts)

Get Events of a Fleet by cursor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  'limit': 50, // Number |
  'cursor': "cursor_example", // String | A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.
  'sortOrder': "'asc'", // String |
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'deviceUID': ["null"], // [String] | A Device UID.
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210 // Number | End date for filtering results, specified as a Unix timestamp
};
apiInstance.getFleetEventsByCursor(projectOrProductUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                | Notes                                 |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                            |
| **fleetUID**            | **String**                |                                                                                                                                                                                                                                                                                                                                                                            |
| **limit**               | **Number**                |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to 50]            |
| **cursor**              | **String**                | A cursor, which can be obtained from the &#x60;next_cursor&#x60; value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included. | [optional]                            |
| **sortOrder**           | **String**                |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to &#39;asc&#39;] |
| **systemFilesOnly**     | **Boolean**               |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **files**               | **String**                |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                                                                                                                                                                                                                                                                                                                              | [optional]                            |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                              | [optional]                            |

### Return type

[**GetProjectEventsByCursor200Response**](GetProjectEventsByCursor200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectEvents

> GetProjectEvents200Response getProjectEvents(projectOrProductUID, opts)

Get Events of a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': ["null"], // [String] | A Device UID.
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'dateType': uploaded, // String | Which date to filter on, either 'captured' or 'uploaded'.  This will apply to the startDate and endDate parameters
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'format': "'json'", // String | Response format (JSON or CSV)
  'serialNumber': ["null"], // [String] | Filter by Serial Number
  'fleetUID': ["null"], // [String] | Filter by Fleet UID
  'sessionUID': ["null"], // [String] | Filter by Session UID
  'eventUID': ["null"], // [String] | Filter by Event UID
  'selectFields': "selectFields_example" // String | Comma-separated list of fields to select from JSON payload (e.g., \"field1,field2.subfield,field3\"), this will reflect the columns in the CSV output.
};
apiInstance.getProjectEvents(projectOrProductUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                                                                                                                      | Notes                                      |
| ----------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **projectOrProductUID** | **String**                |                                                                                                                                                                  |
| **pageSize**            | **Number**                |                                                                                                                                                                  | [optional] [default to 50]                 |
| **pageNum**             | **Number**                |                                                                                                                                                                  | [optional] [default to 1]                  |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                                                                                                                    | [optional]                                 |
| **sortBy**              | **String**                |                                                                                                                                                                  | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                                                                                                                                                                  | [optional] [default to &#39;asc&#39;]      |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                  | [optional]                                 |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                    | [optional]                                 |
| **dateType**            | **String**                | Which date to filter on, either &#39;captured&#39; or &#39;uploaded&#39;. This will apply to the startDate and endDate parameters                                | [optional] [default to &#39;captured&#39;] |
| **systemFilesOnly**     | **Boolean**               |                                                                                                                                                                  | [optional]                                 |
| **files**               | **String**                |                                                                                                                                                                  | [optional]                                 |
| **format**              | **String**                | Response format (JSON or CSV)                                                                                                                                    | [optional] [default to &#39;json&#39;]     |
| **serialNumber**        | [**[String]**](String.md) | Filter by Serial Number                                                                                                                                          | [optional]                                 |
| **fleetUID**            | [**[String]**](String.md) | Filter by Fleet UID                                                                                                                                              | [optional]                                 |
| **sessionUID**          | [**[String]**](String.md) | Filter by Session UID                                                                                                                                            | [optional]                                 |
| **eventUID**            | [**[String]**](String.md) | Filter by Event UID                                                                                                                                              | [optional]                                 |
| **selectFields**        | **String**                | Comma-separated list of fields to select from JSON payload (e.g., \&quot;field1,field2.subfield,field3\&quot;), this will reflect the columns in the CSV output. | [optional]                                 |

### Return type

[**GetProjectEvents200Response**](GetProjectEvents200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

## getProjectEventsByCursor

> GetProjectEventsByCursor200Response getProjectEventsByCursor(projectOrProductUID, opts)

Get Events of a Project by cursor

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'limit': 50, // Number |
  'cursor': "cursor_example", // String | A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.
  'sortOrder': "'asc'", // String |
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'fleetUID': "fleetUID_example", // String |
  'deviceUID': ["null"] // [String] | A Device UID.
};
apiInstance.getProjectEventsByCursor(projectOrProductUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                | Notes                                 |
| ----------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                            |
| **limit**               | **Number**                |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to 50]            |
| **cursor**              | **String**                | A cursor, which can be obtained from the &#x60;next_cursor&#x60; value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included. | [optional]                            |
| **sortOrder**           | **String**                |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to &#39;asc&#39;] |
| **systemFilesOnly**     | **Boolean**               |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **files**               | **String**                |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **fleetUID**            | **String**                |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                                                                                                                                                                                                                                                                                                                              | [optional]                            |

### Return type

[**GetProjectEventsByCursor200Response**](GetProjectEventsByCursor200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsByEvent

> [RouteLog] getRouteLogsByEvent(projectOrProductUID, eventUID)

Get Route Logs by Event UID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let eventUID = 4506f411-dea6-44a0-9743-1130f57d7747; // String |
apiInstance.getRouteLogsByEvent(projectOrProductUID, eventUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **eventUID**            | **String** |             |

### Return type

[**[RouteLog]**](RouteLog.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
