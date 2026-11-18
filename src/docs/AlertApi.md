# NotehubJs.AlertApi

All URIs are relative to *https://api.notefile.net*

| Method                                 | HTTP request                                      | Description |
| -------------------------------------- | ------------------------------------------------- | ----------- |
| [**getAlerts**](AlertApi.md#getAlerts) | **GET** /v1/projects/{projectOrProductUID}/alerts | List alerts |

## getAlerts

> GetAlerts200Response getAlerts(projectOrProductUID, opts)

List alerts

List the alerts a project&#39;s monitors have raised, with each one&#39;s value, device and the notifications sent. Set &#x60;monitorUID&#x60; for one monitor&#39;s alerts. Paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.AlertApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  monitorUID: "monitorUID_example", // String | Return only this monitor's alerts.
};
apiInstance.getAlerts(projectOrProductUID, opts).then(
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

| Name                    | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                        |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **projectOrProductUID** | **String** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000] |
| **pageNum**             | **Number** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]    |
| **cursor**              | **String** | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                   |
| **monitorUID**          | **String** | Return only this monitor&#39;s alerts.                                                                                                                                                                                                                                                                                                                                                                                                                                  | [optional]                   |

### Return type

[**GetAlerts200Response**](GetAlerts200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
