# NotehubJs.UsageApi

All URIs are relative to *https://api.notefile.net*

| Method                                                 | HTTP request                                                | Description                           |
| ------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------- |
| [**getApiUsage**](UsageApi.md#getApiUsage)             | **GET** /v1/projects/{projectOrProductUID}/usage/api        | Get billable API usage                |
| [**getDataUsage**](UsageApi.md#getDataUsage)           | **GET** /v1/projects/{projectOrProductUID}/usage/data       | Get cellular and satellite data usage |
| [**getEventsUsage**](UsageApi.md#getEventsUsage)       | **GET** /v1/projects/{projectOrProductUID}/usage/events     | Get event usage                       |
| [**getRouteLogsUsage**](UsageApi.md#getRouteLogsUsage) | **GET** /v1/projects/{projectOrProductUID}/usage/route-logs | Get route log usage                   |
| [**getSessionsUsage**](UsageApi.md#getSessionsUsage)   | **GET** /v1/projects/{projectOrProductUID}/usage/sessions   | Get session usage                     |

## getApiUsage

> GetApiUsage200Response getApiUsage(projectOrProductUID, period, opts)

Get billable API usage

Count a project&#39;s billable Notehub API requests per day, week or month, by endpoint. Only requests billed against the project&#39;s plan are counted. Returns 400 if &#x60;startDate&#x60; is after &#x60;endDate&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let period = "period_example"; // String | The length of time each data point covers.
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  limit: 200000, // Number | The most data points to return. If there are more, `truncated` is true.
};
apiInstance.getApiUsage(projectOrProductUID, period, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                       | Notes                          |
| ----------------------- | ---------- | --------------------------------------------------------------------------------- | ------------------------------ |
| **projectOrProductUID** | **String** |                                                                                   |
| **period**              | **String** | The length of time each data point covers.                                        |
| **startDate**           | **Number** | Start date for filtering results, specified as a Unix timestamp                   | [optional]                     |
| **endDate**             | **Number** | End date for filtering results, specified as a Unix timestamp                     | [optional]                     |
| **limit**               | **Number** | The most data points to return. If there are more, &#x60;truncated&#x60; is true. | [optional] [default to 200000] |

### Return type

[**GetApiUsage200Response**](GetApiUsage200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDataUsage

> GetDataUsage200Response getDataUsage(projectOrProductUID, period, opts)

Get cellular and satellite data usage

Get the cellular and satellite data a project&#39;s devices used, in bytes. It&#39;s counted per day, week or month, by device, fleet or the whole project. If there are more data points than &#x60;limit&#x60;, the rest are dropped and &#x60;truncated&#x60; is true. Returns 400 for an unknown device, or if &#x60;endDate&#x60; is before &#x60;startDate&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let period = "period_example"; // String | The length of time each data point covers.
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  deviceUID: ["null"], // [String] | A DeviceUID.
  fleetUID: ["null"], // [String] | Filter by FleetUID
  limit: 200000, // Number | The most data points to return. If there are more, `truncated` is true.
  aggregate: "'device'", // String | How to group the counts, such as per device or one total for the project.
};
apiInstance.getDataUsage(projectOrProductUID, period, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type                      | Description                                                                       | Notes                                    |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                                   |
| **period**              | **String**                | The length of time each data point covers.                                        |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                   | [optional]                               |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                     | [optional]                               |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                      | [optional]                               |
| **fleetUID**            | [**[String]**](String.md) | Filter by FleetUID                                                                | [optional]                               |
| **limit**               | **Number**                | The most data points to return. If there are more, &#x60;truncated&#x60; is true. | [optional] [default to 200000]           |
| **aggregate**           | **String**                | How to group the counts, such as per device or one total for the project.         | [optional] [default to &#39;device&#39;] |

### Return type

[**GetDataUsage200Response**](GetDataUsage200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getEventsUsage

> UsageEventsResponse getEventsUsage(projectOrProductUID, period, opts)

Get event usage

Count a project&#39;s events per day, week or month, by device, fleet or the whole project, optionally per notefile. Summaries lag; with &#x60;period&#x3D;day&#x60; and no &#x60;endDate&#x60;, the latest day is filled in from recent events unless &#x60;skipRecentData&#x60; is true. Returns 400 if &#x60;startDate&#x60; is after &#x60;endDate&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let period = "period_example"; // String | The length of time each data point covers.
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  deviceUID: ["null"], // [String] | A DeviceUID.
  fleetUID: ["null"], // [String] | Filter by FleetUID
  limit: 200000, // Number | The most data points to return. If there are more, `truncated` is true.
  aggregate: "'device'", // String | How to group the counts, such as per device or one total for the project.
  notefile: ["null"], // [String] | Count only events from these notefiles.
  skipRecentData: false, // Boolean | If true, return only summarized data, without filling in the latest day. Faster for large projects.
  includeNotefiles: false, // Boolean | If true, include event counts for each notefile.
};
apiInstance.getEventsUsage(projectOrProductUID, period, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type                      | Description                                                                                         | Notes                                    |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                     |
| **period**              | **String**                | The length of time each data point covers.                                                          |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                     | [optional]                               |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                       | [optional]                               |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                        | [optional]                               |
| **fleetUID**            | [**[String]**](String.md) | Filter by FleetUID                                                                                  | [optional]                               |
| **limit**               | **Number**                | The most data points to return. If there are more, &#x60;truncated&#x60; is true.                   | [optional] [default to 200000]           |
| **aggregate**           | **String**                | How to group the counts, such as per device or one total for the project.                           | [optional] [default to &#39;device&#39;] |
| **notefile**            | [**[String]**](String.md) | Count only events from these notefiles.                                                             | [optional]                               |
| **skipRecentData**      | **Boolean**               | If true, return only summarized data, without filling in the latest day. Faster for large projects. | [optional] [default to false]            |
| **includeNotefiles**    | **Boolean**               | If true, include event counts for each notefile.                                                    | [optional] [default to false]            |

### Return type

[**UsageEventsResponse**](UsageEventsResponse.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsUsage

> GetRouteLogsUsage200Response getRouteLogsUsage(projectOrProductUID, period, opts)

Get route log usage

Count a project&#39;s attempts to send events to routes per day, week or month, by route or for the whole project. If there are more data points than &#x60;limit&#x60;, the rest are dropped and &#x60;truncated&#x60; is true.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let period = "period_example"; // String | The length of time each data point covers.
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  routeUID: ["null"], // [String] | A RouteUID.
  limit: 200000, // Number | The most data points to return. If there are more, `truncated` is true.
  aggregate: "'route'", // String | How to group the counts, per route or one total for the project.
  skipRecentData: false, // Boolean | If true, return only summarized data, without filling in the latest day. Faster for large projects.
};
apiInstance.getRouteLogsUsage(projectOrProductUID, period, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type                      | Description                                                                                         | Notes                                   |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                     |
| **period**              | **String**                | The length of time each data point covers.                                                          |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                     | [optional]                              |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                       | [optional]                              |
| **routeUID**            | [**[String]**](String.md) | A RouteUID.                                                                                         | [optional]                              |
| **limit**               | **Number**                | The most data points to return. If there are more, &#x60;truncated&#x60; is true.                   | [optional] [default to 200000]          |
| **aggregate**           | **String**                | How to group the counts, per route or one total for the project.                                    | [optional] [default to &#39;route&#39;] |
| **skipRecentData**      | **Boolean**               | If true, return only summarized data, without filling in the latest day. Faster for large projects. | [optional] [default to false]           |

### Return type

[**GetRouteLogsUsage200Response**](GetRouteLogsUsage200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSessionsUsage

> GetSessionsUsage200Response getSessionsUsage(projectOrProductUID, period, opts)

Get session usage

Count a project&#39;s device sessions per day, week or month, by device, fleet or the whole project. If there are more data points than &#x60;limit&#x60;, the rest are dropped and &#x60;truncated&#x60; is true. Returns 400 if &#x60;startDate&#x60; is after &#x60;endDate&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.UsageApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let period = "period_example"; // String | The length of time each data point covers.
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  deviceUID: ["null"], // [String] | A DeviceUID.
  fleetUID: ["null"], // [String] | Filter by FleetUID
  limit: 200000, // Number | The most data points to return. If there are more, `truncated` is true.
  aggregate: "'device'", // String | How to group the counts, such as per device or one total for the project.
  skipRecentData: false, // Boolean | If true, return only summarized data, without filling in the latest day. Faster for large projects.
};
apiInstance.getSessionsUsage(projectOrProductUID, period, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type                      | Description                                                                                         | Notes                                    |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                     |
| **period**              | **String**                | The length of time each data point covers.                                                          |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                     | [optional]                               |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                       | [optional]                               |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                        | [optional]                               |
| **fleetUID**            | [**[String]**](String.md) | Filter by FleetUID                                                                                  | [optional]                               |
| **limit**               | **Number**                | The most data points to return. If there are more, &#x60;truncated&#x60; is true.                   | [optional] [default to 200000]           |
| **aggregate**           | **String**                | How to group the counts, such as per device or one total for the project.                           | [optional] [default to &#39;device&#39;] |
| **skipRecentData**      | **Boolean**               | If true, return only summarized data, without filling in the latest day. Faster for large projects. | [optional] [default to false]            |

### Return type

[**GetSessionsUsage200Response**](GetSessionsUsage200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
