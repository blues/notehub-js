# NotehubJs.UsageApi

All URIs are relative to *https://api.notefile.net*

| Method                                                         | HTTP request                                                | Description |
| -------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| [**getProjectDataUsage**](UsageApi.md#getProjectDataUsage)     | **GET** /v1/projects/{projectOrProductUID}/usage/data       |
| [**getProjectEventsUsage**](UsageApi.md#getProjectEventsUsage) | **GET** /v1/projects/{projectOrProductUID}/usage/events     |
| [**getRouteLogsUsage**](UsageApi.md#getRouteLogsUsage)         | **GET** /v1/projects/{projectOrProductUID}/usage/route-logs |
| [**getSessionsUsage**](UsageApi.md#getSessionsUsage)           | **GET** /v1/projects/{projectOrProductUID}/usage/sessions   |

## getProjectDataUsage

> [Object] getProjectDataUsage(projectOrProductUID, period, opts)

Get data usage in bytes for a project with time range and period aggregation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'deviceUID': ["null"] // [String] | A Device UID.
};
apiInstance.getProjectDataUsage(projectOrProductUID, period, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes      |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **period**              | **String**                | Period type for aggregation                                     |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional] |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                   | [optional] |

### Return type

**[Object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectEventsUsage

> UsageEventsResponse getProjectEventsUsage(projectOrProductUID, period, opts)

Get events usage for a project with time range and period aggregation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'deviceUID': ["null"] // [String] | A Device UID.
};
apiInstance.getProjectEventsUsage(projectOrProductUID, period, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes      |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **period**              | **String**                | Period type for aggregation                                     |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional] |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                   | [optional] |

### Return type

[**UsageEventsResponse**](UsageEventsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsUsage

> UsageRouteLogsResponse getRouteLogsUsage(projectOrProductUID, period, opts)

Get route logs usage for a project with time range and period aggregation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'deviceUID': ["null"] // [String] | A Device UID.
};
apiInstance.getRouteLogsUsage(projectOrProductUID, period, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes      |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **period**              | **String**                | Period type for aggregation                                     |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional] |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                   | [optional] |

### Return type

[**UsageRouteLogsResponse**](UsageRouteLogsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSessionsUsage

> UsageSessionsResponse getSessionsUsage(projectOrProductUID, period, opts)

Get sessions usage for a project with time range and period aggregation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'deviceUID': ["null"] // [String] | A Device UID.
};
apiInstance.getSessionsUsage(projectOrProductUID, period, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes      |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **period**              | **String**                | Period type for aggregation                                     |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional] |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                   | [optional] |

### Return type

[**UsageSessionsResponse**](UsageSessionsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
