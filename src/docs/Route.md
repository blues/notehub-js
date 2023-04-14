# NotehubJs.Route

## Properties

| Name          | Type                              | Description        | Notes                                  |
| ------------- | --------------------------------- | ------------------ | -------------------------------------- |
| **uid**       | **String**                        | Route UID          | [optional]                             |
| **label**     | **String**                        | Route Label        | [optional]                             |
| **routeType** | **String**                        | Type of route.     | [optional] [default to &#39;http&#39;] |
| **modified**  | **String**                        | Last Modified      | [optional]                             |
| **disabled**  | **Boolean**                       | Is route disabled? | [optional] [default to false]          |
| **schema**    | [**RouteSchema**](RouteSchema.md) |                    | [optional]                             |

## Enum: RouteTypeEnum

- `http` (value: `"http"`)

- `proxy` (value: `"proxy"`)

- `google-function` (value: `"google-function"`)

- `mqtt` (value: `"mqtt"`)

- `aws-lambda` (value: `"aws-lambda"`)

- `aws-lambda-with-access-key` (value: `"aws-lambda-with-access-key"`)

- `aws-sqs` (value: `"aws-sqs"`)

- `aws-sqs-with-access-key` (value: `"aws-sqs-with-access-key"`)

- `aws-sqs-fifo` (value: `"aws-sqs-fifo"`)

- `aws-sqs-fifo-with-access-key` (value: `"aws-sqs-fifo-with-access-key"`)

- `aws-iot-analytics` (value: `"aws-iot-analytics"`)

- `radnote-radresp-fixed-survey` (value: `"radnote-radresp-fixed-survey"`)

- `radnote-radresp-mobile-survey` (value: `"radnote-radresp-mobile-survey"`)

- `azure-function` (value: `"azure-function"`)

- `azure-function-with-key` (value: `"azure-function-with-key"`)

- `azure-service-bus-with-sas-token` (value: `"azure-service-bus-with-sas-token"`)

- `thingworx` (value: `"thingworx"`)

- `snowflake` (value: `"snowflake"`)

- `edgeimpulse` (value: `"edgeimpulse"`)
