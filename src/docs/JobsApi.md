# NotehubJs.JobsApi

All URIs are relative to *https://api.notefile.net*

| Method                                      | HTTP request                                                             | Description           |
| ------------------------------------------- | ------------------------------------------------------------------------ | --------------------- |
| [**cancelJobRun**](JobsApi.md#cancelJobRun) | **POST** /v1/projects/{projectOrProductUID}/jobs/runs/{reportUID}/cancel | Cancel a job run      |
| [**createJob**](JobsApi.md#createJob)       | **POST** /v1/projects/{projectOrProductUID}/jobs                         | Create a batch job    |
| [**deleteJob**](JobsApi.md#deleteJob)       | **DELETE** /v1/projects/{projectOrProductUID}/jobs/{jobUID}              | Delete a batch job    |
| [**deleteJobRun**](JobsApi.md#deleteJobRun) | **DELETE** /v1/projects/{projectOrProductUID}/jobs/runs/{reportUID}      | Delete a job run      |
| [**getJob**](JobsApi.md#getJob)             | **GET** /v1/projects/{projectOrProductUID}/jobs/{jobUID}                 | Get a batch job       |
| [**getJobRun**](JobsApi.md#getJobRun)       | **GET** /v1/projects/{projectOrProductUID}/jobs/runs/{reportUID}         | Get a job run         |
| [**getJobRuns**](JobsApi.md#getJobRuns)     | **GET** /v1/projects/{projectOrProductUID}/jobs/{jobUID}/runs            | List a job&#39;s runs |
| [**getJobs**](JobsApi.md#getJobs)           | **GET** /v1/projects/{projectOrProductUID}/jobs                          | List batch jobs       |
| [**runJob**](JobsApi.md#runJob)             | **POST** /v1/projects/{projectOrProductUID}/jobs/{jobUID}/run            | Run a batch job       |

## cancelJobRun

> CancelJobRun200Response cancelJobRun(projectOrProductUID, reportUID)

Cancel a job run

Ask a running job to stop. &#x60;successful&#x60; is false if the run couldn&#39;t be cancelled. Requires the Owner or Developer role. Returns 404 if the run doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let reportUID = "my-reconciliation-job-1707654321000"; // String | Job run UID, as returned by `RunJob`.
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

| Name                    | Type       | Description                                     | Notes |
| ----------------------- | ---------- | ----------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                 |
| **reportUID**           | **String** | Job run UID, as returned by &#x60;RunJob&#x60;. |

### Return type

[**CancelJobRun200Response**](CancelJobRun200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## createJob

> CreateJob201Response createJob(projectOrProductUID, name, jobDefinition)

Create a batch job

Create a batch job from a definition that selects devices and the changes to make to them. It doesn&#39;t run until &#x60;RunJob&#x60;. Each call creates a new job with its own UID; names needn&#39;t be unique. Requires the Owner or Developer role. Returns 400 without a &#x60;name&#x60;; an invalid definition returns 500.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let name = "name_example"; // String | Job name, shown in lists. It doesn't have to be unique.
let jobDefinition = new NotehubJs.JobDefinition(); // JobDefinition | The batch job definition
apiInstance.createJob(projectOrProductUID, name, jobDefinition).then(
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

| Name                    | Type                                  | Description                                                 | Notes |
| ----------------------- | ------------------------------------- | ----------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                            |                                                             |
| **name**                | **String**                            | Job name, shown in lists. It doesn&#39;t have to be unique. |
| **jobDefinition**       | [**JobDefinition**](JobDefinition.md) | The batch job definition                                    |

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

Delete a batch job. Requires the Owner or Developer role. Returns 404 if the job doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Batch job UID, as returned by `CreateJob`.
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

| Name                    | Type       | Description                                          | Notes |
| ----------------------- | ---------- | ---------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                      |
| **jobUID**              | **String** | Batch job UID, as returned by &#x60;CreateJob&#x60;. |

### Return type

[**DeleteJob200Response**](DeleteJob200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteJobRun

> deleteJobRun(projectOrProductUID, reportUID)

Delete a job run

Delete a job run and its results. Deleting a run that doesn&#39;t exist also succeeds. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let reportUID = "my-reconciliation-job-1707654321000"; // String | Job run UID, as returned by `RunJob`.
apiInstance.deleteJobRun(projectOrProductUID, reportUID).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                     | Notes |
| ----------------------- | ---------- | ----------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                 |
| **reportUID**           | **String** | Job run UID, as returned by &#x60;RunJob&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJob

> JobDetail getJob(projectOrProductUID, jobUID)

Get a batch job

Get one batch job&#39;s definition and its latest run&#39;s status. Returns 404 if the job doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Batch job UID, as returned by `CreateJob`.
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

| Name                    | Type       | Description                                          | Notes |
| ----------------------- | ---------- | ---------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                      |
| **jobUID**              | **String** | Batch job UID, as returned by &#x60;CreateJob&#x60;. |

### Return type

[**JobDetail**](JobDetail.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJobRun

> JobRun getJobRun(projectOrProductUID, reportUID, opts)

Get a job run

Get a job run&#39;s status and, with &#x60;view&#x3D;detail&#x60;, its full results. Returns 404 if the run doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let reportUID = "my-reconciliation-job-1707654321000"; // String | Job run UID, as returned by `RunJob`.
let opts = {
  view: "'summary'", // String | Controls the level of detail returned: 'summary' returns metadata only, 'detail' returns the full result payload
};
apiInstance.getJobRun(projectOrProductUID, reportUID, opts).then(
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

| Name                    | Type       | Description                                                                                                                      | Notes                                     |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **projectOrProductUID** | **String** |                                                                                                                                  |
| **reportUID**           | **String** | Job run UID, as returned by &#x60;RunJob&#x60;.                                                                                  |
| **view**                | **String** | Controls the level of detail returned: &#39;summary&#39; returns metadata only, &#39;detail&#39; returns the full result payload | [optional] [default to &#39;summary&#39;] |

### Return type

[**JobRun**](JobRun.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJobRuns

> GetJobRuns200Response getJobRuns(projectOrProductUID, jobUID, opts)

List a job&#39;s runs

List a batch job&#39;s runs, optionally filtered by status or dry-run flag. Returns 404 if the job doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Batch job UID, as returned by `CreateJob`.
let opts = {
  status: "status_example", // String | Return only runs with this status.
  dryRun: true, // Boolean | If set, return only dry runs (`true`) or only real runs (`false`).
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

| Name                    | Type        | Description                                                                            | Notes      |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**  |                                                                                        |
| **jobUID**              | **String**  | Batch job UID, as returned by &#x60;CreateJob&#x60;.                                   |
| **status**              | **String**  | Return only runs with this status.                                                     | [optional] |
| **dryRun**              | **Boolean** | If set, return only dry runs (&#x60;true&#x60;) or only real runs (&#x60;false&#x60;). | [optional] |

### Return type

[**GetJobRuns200Response**](GetJobRuns200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getJobs

> GetJobs200Response getJobs(projectOrProductUID)

List batch jobs

List a project&#39;s batch jobs with their latest run&#39;s status. A batch job applies changes, such as environment variables, to a selected set of devices.

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

Run a batch job

Start a run of a batch job and return its run UID. The run continues in the background, and &#x60;GetJobRun&#x60; shows its progress. With &#x60;dry_run&#x3D;true&#x60;, it reports what would change without changing anything. Requires the Owner or Developer role. Returns 404 if the job doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.JobsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let jobUID = "my-reconciliation-job"; // String | Batch job UID, as returned by `CreateJob`.
let opts = {
  dryRun: false, // Boolean | If true, report what the job would change without changing anything.
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

| Name                    | Type        | Description                                                          | Notes                         |
| ----------------------- | ----------- | -------------------------------------------------------------------- | ----------------------------- |
| **projectOrProductUID** | **String**  |                                                                      |
| **jobUID**              | **String**  | Batch job UID, as returned by &#x60;CreateJob&#x60;.                 |
| **dryRun**              | **Boolean** | If true, report what the job would change without changing anything. | [optional] [default to false] |

### Return type

[**RunJob200Response**](RunJob200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
