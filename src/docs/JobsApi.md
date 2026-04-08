# NotehubJs.JobsApi

All URIs are relative to *https://api.notefile.net*

| Method                                      | HTTP request                                                             | Description |
| ------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| [**cancelJobRun**](JobsApi.md#cancelJobRun) | **POST** /v1/projects/{projectOrProductUID}/jobs/runs/{reportUID}/cancel |
| [**createJob**](JobsApi.md#createJob)       | **POST** /v1/projects/{projectOrProductUID}/jobs                         |
| [**deleteJob**](JobsApi.md#deleteJob)       | **DELETE** /v1/projects/{projectOrProductUID}/jobs/{jobUID}              |
| [**getJob**](JobsApi.md#getJob)             | **GET** /v1/projects/{projectOrProductUID}/jobs/{jobUID}                 |
| [**getJobRun**](JobsApi.md#getJobRun)       | **GET** /v1/projects/{projectOrProductUID}/jobs/runs/{reportUID}         |
| [**getJobRuns**](JobsApi.md#getJobRuns)     | **GET** /v1/projects/{projectOrProductUID}/jobs/{jobUID}/runs            |
| [**getJobs**](JobsApi.md#getJobs)           | **GET** /v1/projects/{projectOrProductUID}/jobs                          |
| [**runJob**](JobsApi.md#runJob)             | **POST** /v1/projects/{projectOrProductUID}/jobs/{jobUID}/run            |

## cancelJobRun

> CancelJobRun200Response cancelJobRun(projectOrProductUID, reportUID)

Cancel a running job execution

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let reportUID = "my-reconciliation-job-1707654321000"; // String | Unique identifier for a job run report
apiInstance.cancelJobRun(projectOrProductUID, reportUID).then(
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

| Name                    | Type       | Description                            | Notes |
| ----------------------- | ---------- | -------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                        |
| **reportUID**           | **String** | Unique identifier for a job run report |

### Return type

[**CancelJobRun200Response**](CancelJobRun200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createJob

> CreateJob201Response createJob(projectOrProductUID, name, body)

Create a new batch job with an optional name

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let name = "name_example"; // String | Name for the job
let body = { key: null }; // Object | The job definition as raw JSON
apiInstance.createJob(projectOrProductUID, name, body).then(
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

| Name                    | Type       | Description                    | Notes |
| ----------------------- | ---------- | ------------------------------ | ----- |
| **projectOrProductUID** | **String** |                                |
| **name**                | **String** | Name for the job               |
| **body**                | **Object** | The job definition as raw JSON |

### Return type

[**CreateJob201Response**](CreateJob201Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteJob

> DeleteJob200Response deleteJob(projectOrProductUID, jobUID)

Delete a batch job

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Unique identifier for a batch job
apiInstance.deleteJob(projectOrProductUID, jobUID).then(
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

| Name                    | Type       | Description                       | Notes |
| ----------------------- | ---------- | --------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                   |
| **jobUID**              | **String** | Unique identifier for a batch job |

### Return type

[**DeleteJob200Response**](DeleteJob200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJob

> Job getJob(projectOrProductUID, jobUID)

Get a specific batch job definition

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Unique identifier for a batch job
apiInstance.getJob(projectOrProductUID, jobUID).then(
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

| Name                    | Type       | Description                       | Notes |
| ----------------------- | ---------- | --------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                   |
| **jobUID**              | **String** | Unique identifier for a batch job |

### Return type

[**Job**](Job.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJobRun

> JobRun getJobRun(projectOrProductUID, reportUID)

Get the result of a job execution

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let reportUID = "my-reconciliation-job-1707654321000"; // String | Unique identifier for a job run report
apiInstance.getJobRun(projectOrProductUID, reportUID).then(
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

| Name                    | Type       | Description                            | Notes |
| ----------------------- | ---------- | -------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                        |
| **reportUID**           | **String** | Unique identifier for a job run report |

### Return type

[**JobRun**](JobRun.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJobRuns

> GetJobRuns200Response getJobRuns(projectOrProductUID, jobUID, opts)

List all runs for a specific job

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Unique identifier for a batch job
let opts = {
  status: "status_example", // String | Filter runs by status
  dryRun: true, // Boolean | Filter runs by dry run flag
};
apiInstance.getJobRuns(projectOrProductUID, jobUID, opts).then(
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

| Name                    | Type        | Description                       | Notes      |
| ----------------------- | ----------- | --------------------------------- | ---------- |
| **projectOrProductUID** | **String**  |                                   |
| **jobUID**              | **String**  | Unique identifier for a batch job |
| **status**              | **String**  | Filter runs by status             | [optional] |
| **dryRun**              | **Boolean** | Filter runs by dry run flag       | [optional] |

### Return type

[**GetJobRuns200Response**](GetJobRuns200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJobs

> GetJobs200Response getJobs(projectOrProductUID)

List all batch jobs for a project

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getJobs(projectOrProductUID).then(
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

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**GetJobs200Response**](GetJobs200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## runJob

> RunJob200Response runJob(projectOrProductUID, jobUID, opts)

Execute a batch job

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Unique identifier for a batch job
let opts = {
  dryRun: false, // Boolean | Run job in dry-run mode without making actual changes
};
apiInstance.runJob(projectOrProductUID, jobUID, opts).then(
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

| Name                    | Type        | Description                                           | Notes                         |
| ----------------------- | ----------- | ----------------------------------------------------- | ----------------------------- |
| **projectOrProductUID** | **String**  |                                                       |
| **jobUID**              | **String**  | Unique identifier for a batch job                     |
| **dryRun**              | **Boolean** | Run job in dry-run mode without making actual changes | [optional] [default to false] |

### Return type

[**RunJob200Response**](RunJob200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
