# NotehubJs.UsageApi

All URIs are relative to *https://api.notefile.net*

| Method                                                 | HTTP request                                                | Description |
| ------------------------------------------------------ | ----------------------------------------------------------- | ----------- |
| [**getDataUsage**](UsageApi.md#getDataUsage)           | **GET** /v1/projects/{projectOrProductUID}/usage/data       |
| [**getEventsUsage**](UsageApi.md#getEventsUsage)       | **GET** /v1/projects/{projectOrProductUID}/usage/events     |
| [**getRouteLogsUsage**](UsageApi.md#getRouteLogsUsage) | **GET** /v1/projects/{projectOrProductUID}/usage/route-logs |
| [**getSessionsUsage**](UsageApi.md#getSessionsUsage)   | **GET** /v1/projects/{projectOrProductUID}/usage/sessions   |

## getDataUsage

> GetDataUsage200Response getDataUsage(projectOrProductUID, period, opts)

Get data usage in bytes for a project with time range and period aggregation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'deviceUID': ["null"], // [String] | A Device UID.
  'fleetUID': ["null"], // [String] | Filter by Fleet UID
  'aggregate': "'device'" // String | Aggregation level for results
};
apiInstance.getDataUsage(projectOrProductUID, period, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes                                    |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | ---------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **period**              | **String**                | Period type for aggregation                                     |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional]                               |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional]                               |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                   | [optional]                               |
| **fleetUID**            | [**[String]**](String.md) | Filter by Fleet UID                                             | [optional]                               |
| **aggregate**           | **String**                | Aggregation level for results                                   | [optional] [default to &#39;device&#39;] |

### Return type

[**GetDataUsage200Response**](GetDataUsage200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getEventsUsage

> UsageEventsResponse getEventsUsage(projectOrProductUID, period, opts)

Get events usage for a project with time range and period aggregation, when endDate is 0 or unspecified the current time is implied

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'deviceUID': ["null"], // [String] | A Device UID.
  'fleetUID': ["null"], // [String] | Filter by Fleet UID
  'aggregate': ["null"], // [String] | Aggregation level for results
  'notefile': ["null"] // [String] | Filter to specific notefiles
};
apiInstance.getEventsUsage(projectOrProductUID, period, opts).then((data) => {
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
| **fleetUID**            | [**[String]**](String.md) | Filter by Fleet UID                                             | [optional] |
| **aggregate**           | [**[String]**](String.md) | Aggregation level for results                                   | [optional] |
| **notefile**            | [**[String]**](String.md) | Filter to specific notefiles                                    | [optional] |

### Return type

[**UsageEventsResponse**](UsageEventsResponse.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsUsage

> GetRouteLogsUsage200Response getRouteLogsUsage(projectOrProductUID, period, opts)

Get route logs usage for a project with time range and period aggregation, when endDate is 0 or unspecified the current time is implied

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'routeUID': ["null"], // [String] | A Route UID.
  'aggregate': "'route'" // String | Aggregation level for results
};
apiInstance.getRouteLogsUsage(projectOrProductUID, period, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes                                   |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | --------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **period**              | **String**                | Period type for aggregation                                     |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional]                              |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional]                              |
| **routeUID**            | [**[String]**](String.md) | A Route UID.                                                    | [optional]                              |
| **aggregate**           | **String**                | Aggregation level for results                                   | [optional] [default to &#39;route&#39;] |

### Return type

[**GetRouteLogsUsage200Response**](GetRouteLogsUsage200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSessionsUsage

> GetSessionsUsage200Response getSessionsUsage(projectOrProductUID, period, opts)

Get sessions usage for a project with time range and period aggregation, when endDate is 0 or unspecified the current time is implied

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure Bearer access token for authorization: personalAccessToken
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let period = "period_example"; // String | Period type for aggregation
let opts = {
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'deviceUID': ["null"], // [String] | A Device UID.
  'fleetUID': ["null"], // [String] | Filter by Fleet UID
  'aggregate': "'device'" // String | Aggregation level for results
};
apiInstance.getSessionsUsage(projectOrProductUID, period, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes                                    |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | ---------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **period**              | **String**                | Period type for aggregation                                     |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional]                               |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional]                               |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                   | [optional]                               |
| **fleetUID**            | [**[String]**](String.md) | Filter by Fleet UID                                             | [optional]                               |
| **aggregate**           | **String**                | Aggregation level for results                                   | [optional] [default to &#39;device&#39;] |

### Return type

[**GetSessionsUsage200Response**](GetSessionsUsage200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
