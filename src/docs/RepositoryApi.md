# NotehubJs.RepositoryApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                  | HTTP request                                                   | Description |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| [**createRepository**](RepositoryApi.md#createRepository)               | **POST** /v1/repositories                                      |
| [**createRepositoryDataset**](RepositoryApi.md#createRepositoryDataset) | **PUT** /v1/repositories/{repositoryUID}/datasets              |
| [**deleteRepository**](RepositoryApi.md#deleteRepository)               | **DELETE** /v1/repositories/{repositoryUID}                    |
| [**deleteRepositoryDataset**](RepositoryApi.md#deleteRepositoryDataset) | **DELETE** /v1/repositories/{repositoryUID}/datasets/{name}    |
| [**getRepository**](RepositoryApi.md#getRepository)                     | **GET** /v1/repositories/{repositoryUID}                       |
| [**getRepositoryData**](RepositoryApi.md#getRepositoryData)             | **GET** /v1/repositories/{repositoryUID}/data                  |
| [**getRepositoryDataset**](RepositoryApi.md#getRepositoryDataset)       | **GET** /v1/repositories/{repositoryUID}/datasets/{name}       |
| [**putRepository**](RepositoryApi.md#putRepository)                     | **PUT** /v1/repositories/{repositoryUID}                       |
| [**queryRepositoryDataset**](RepositoryApi.md#queryRepositoryDataset)   | **GET** /v1/repositories/{repositoryUID}/datasets/{name}/query |
| [**queryRepositorySql**](RepositoryApi.md#queryRepositorySql)           | **POST** /v1/repositories/{repositoryUID}/sql                  |

## createRepository

> Repository createRepository(createUpdateRepository)

Create a new repository

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications["api_key"];
api_key.apiKey = "YOUR API KEY";

let apiInstance = new NotehubJs.RepositoryApi();
let createUpdateRepository = new NotehubJs.CreateUpdateRepository(); // CreateUpdateRepository |
apiInstance.createRepository(createUpdateRepository).then(
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

| Name                       | Type                                                    | Description | Notes |
| -------------------------- | ------------------------------------------------------- | ----------- | ----- |
| **createUpdateRepository** | [**CreateUpdateRepository**](CreateUpdateRepository.md) |             |

### Return type

[**Repository**](Repository.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createRepositoryDataset

> DataSet createRepositoryDataset(repositoryUID, xRepositoryKey, dataSet)

Create a new dataset within a repository

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
let dataSet = new NotehubJs.DataSet(); // DataSet |
apiInstance.createRepositoryDataset(repositoryUID, xRepositoryKey, dataSet).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name               | Type                      | Description                                   | Notes |
| ------------------ | ------------------------- | --------------------------------------------- | ----- |
| **repositoryUID**  | **String**                |                                               |
| **xRepositoryKey** | **String**                | The secret key used to access this repository |
| **dataSet**        | [**DataSet**](DataSet.md) |                                               |

### Return type

[**DataSet**](DataSet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRepository

> deleteRepository(repositoryUID, xRepositoryKey)

Delete a repository

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
apiInstance.deleteRepository(repositoryUID, xRepositoryKey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name               | Type       | Description                                   | Notes |
| ------------------ | ---------- | --------------------------------------------- | ----- |
| **repositoryUID**  | **String** |                                               |
| **xRepositoryKey** | **String** | The secret key used to access this repository |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteRepositoryDataset

> deleteRepositoryDataset(repositoryUID, name, xRepositoryKey)

Delete a dataset

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let name = "name_example"; // String | The name of the data set
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
apiInstance.deleteRepositoryDataset(repositoryUID, name, xRepositoryKey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name               | Type       | Description                                   | Notes |
| ------------------ | ---------- | --------------------------------------------- | ----- |
| **repositoryUID**  | **String** |                                               |
| **name**           | **String** | The name of the data set                      |
| **xRepositoryKey** | **String** | The secret key used to access this repository |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRepository

> Repository getRepository(repositoryUID, xRepositoryKey)

Get repository information

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
apiInstance.getRepository(repositoryUID, xRepositoryKey).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name               | Type       | Description                                   | Notes |
| ------------------ | ---------- | --------------------------------------------- | ----- |
| **repositoryUID**  | **String** |                                               |
| **xRepositoryKey** | **String** | The secret key used to access this repository |

### Return type

[**Repository**](Repository.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRepositoryData

> File getRepositoryData(xRepositoryKey, repositoryUID, start, opts)

Get event and session data from a repository in NDJSON format.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let start = "start_example"; // String | Start of the time range, as an ISO-8601 date or relative to now (e.g. -1y). Relative dates follow the Postgres INTERVAL format.
let opts = {
  'end': "end_example" // String | End of the time range, as an ISO-8601 date or relative to now. If omitted, current time is used.
};
apiInstance.getRepositoryData(xRepositoryKey, repositoryUID, start, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name               | Type       | Description                                                                                                                     | Notes      |
| ------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **xRepositoryKey** | **String** | The secret key used to access this repository                                                                                   |
| **repositoryUID**  | **String** |                                                                                                                                 |
| **start**          | **String** | Start of the time range, as an ISO-8601 date or relative to now (e.g. -1y). Relative dates follow the Postgres INTERVAL format. |
| **end**            | **String** | End of the time range, as an ISO-8601 date or relative to now. If omitted, current time is used.                                | [optional] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

## getRepositoryDataset

> DataSet getRepositoryDataset(repositoryUID, name, xRepositoryKey)

Get the details of a dataset

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let name = "name_example"; // String | The name of the data set
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
apiInstance.getRepositoryDataset(repositoryUID, name, xRepositoryKey).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name               | Type       | Description                                   | Notes |
| ------------------ | ---------- | --------------------------------------------- | ----- |
| **repositoryUID**  | **String** |                                               |
| **name**           | **String** | The name of the data set                      |
| **xRepositoryKey** | **String** | The secret key used to access this repository |

### Return type

[**DataSet**](DataSet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## putRepository

> Repository putRepository(repositoryUID, xRepositoryKey, createUpdateRepository)

Update a repository

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
let createUpdateRepository = new NotehubJs.CreateUpdateRepository(); // CreateUpdateRepository |
apiInstance.putRepository(repositoryUID, xRepositoryKey, createUpdateRepository).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                       | Type                                                    | Description                                   | Notes |
| -------------------------- | ------------------------------------------------------- | --------------------------------------------- | ----- |
| **repositoryUID**          | **String**                                              |                                               |
| **xRepositoryKey**         | **String**                                              | The secret key used to access this repository |
| **createUpdateRepository** | [**CreateUpdateRepository**](CreateUpdateRepository.md) |                                               |

### Return type

[**Repository**](Repository.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## queryRepositoryDataset

> File queryRepositoryDataset(xRepositoryKey, repositoryUID, name, start, opts)

Query a dataset with support for time ranges, field selection, filtering, and location-based queries

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let name = "name_example"; // String | The name of the data set
let start = "start_example"; // String | Start of the time range, as an ISO-8601 date or relative to now (e.g. -1y). Relative dates follow the Postgres INTERVAL format.
let opts = {
  'end': "end_example", // String | End of the time range, as an ISO-8601 date or relative to now. If omitted, current time is used.
  'select': "select_example", // String | Comma separated list of fields to include. Supports aggregate functions (avg, sum, min, max, count, most_recent).
  'where': "where_example", // String | Additional filters using boolean logic mini-language (e.g. and.(device.eq.dev:123,temp.gt.100))
  'aggregateWindow': "aggregateWindow_example", // String | Aggregate results into buckets for a time duration, expressed in Postgres INTERVAL format
  'locationNear': 42.393125,-71.185015, // String | Latitude and Longitude for location-based filtering, location_near_radius must also be provided
  'locationNearRadius': 56, // Number | Distance from location_near in meters, location_near must also be provided
  'limit': 56, // Number | Limit the number of results returned
  'orderBy': "orderBy_example", // String | Order the results by a field
  'distinct': true // Boolean | Return only distinct results
};
apiInstance.queryRepositoryDataset(xRepositoryKey, repositoryUID, name, start, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                   | Type        | Description                                                                                                                     | Notes      |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **xRepositoryKey**     | **String**  | The secret key used to access this repository                                                                                   |
| **repositoryUID**      | **String**  |                                                                                                                                 |
| **name**               | **String**  | The name of the data set                                                                                                        |
| **start**              | **String**  | Start of the time range, as an ISO-8601 date or relative to now (e.g. -1y). Relative dates follow the Postgres INTERVAL format. |
| **end**                | **String**  | End of the time range, as an ISO-8601 date or relative to now. If omitted, current time is used.                                | [optional] |
| **select**             | **String**  | Comma separated list of fields to include. Supports aggregate functions (avg, sum, min, max, count, most_recent).               | [optional] |
| **where**              | **String**  | Additional filters using boolean logic mini-language (e.g. and.(device.eq.dev:123,temp.gt.100))                                 | [optional] |
| **aggregateWindow**    | **String**  | Aggregate results into buckets for a time duration, expressed in Postgres INTERVAL format                                       | [optional] |
| **locationNear**       | **String**  | Latitude and Longitude for location-based filtering, location_near_radius must also be provided                                 | [optional] |
| **locationNearRadius** | **Number**  | Distance from location_near in meters, location_near must also be provided                                                      | [optional] |
| **limit**              | **Number**  | Limit the number of results returned                                                                                            | [optional] |
| **orderBy**            | **String**  | Order the results by a field                                                                                                    | [optional] |
| **distinct**           | **Boolean** | Return only distinct results                                                                                                    | [optional] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

## queryRepositorySql

> File queryRepositorySql(repositoryUID, xRepositoryKey, body, opts)

Run a raw Clickhouse-compatible SQL statement against the repository&#39;s database. Results are returned in CSV format

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RepositoryApi();
let repositoryUID = rid:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let xRepositoryKey = "xRepositoryKey_example"; // String | The secret key used to access this repository
let body = "body_example"; // String | Clickhouse-compatible SQL statement
let opts = {
  'xClickHouseFormat': "xClickHouseFormat_example" // String | Specify the format of the response data. This functions the same as the ClickHouse `FORMAT` clause. Supported values include `CSV`, `JSON`, `JSONEachRow`, `TabSeparated`, and `NDJSON`. If not specified, defaults to `TabSeparated`.
};
apiInstance.queryRepositorySql(repositoryUID, xRepositoryKey, body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                                                                                  | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **repositoryUID**     | **String** |                                                                                                                                                                                                                                                                                                              |
| **xRepositoryKey**    | **String** | The secret key used to access this repository                                                                                                                                                                                                                                                                |
| **body**              | **String** | Clickhouse-compatible SQL statement                                                                                                                                                                                                                                                                          |
| **xClickHouseFormat** | **String** | Specify the format of the response data. This functions the same as the ClickHouse &#x60;FORMAT&#x60; clause. Supported values include &#x60;CSV&#x60;, &#x60;JSON&#x60;, &#x60;JSONEachRow&#x60;, &#x60;TabSeparated&#x60;, and &#x60;NDJSON&#x60;. If not specified, defaults to &#x60;TabSeparated&#x60;. | [optional] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: text/plain, application/json
