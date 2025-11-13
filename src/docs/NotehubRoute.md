# NotehubJs.NotehubRoute

## Properties

| Name                  | Type                                                    | Description               | Notes                         |
| --------------------- | ------------------------------------------------------- | ------------------------- | ----------------------------- |
| **aws**               | [**AwsRoute**](AwsRoute.md)                             |                           | [optional]                    |
| **azure**             | [**AzureRoute**](AzureRoute.md)                         |                           | [optional]                    |
| **blynk**             | [**BlynkRoute**](BlynkRoute.md)                         |                           | [optional]                    |
| **datacake**          | [**DatacakeRoute**](DatacakeRoute.md)                   |                           | [optional]                    |
| **disabled**          | **Boolean**                                             |                           | [optional] [default to false] |
| **google**            | [**GoogleRoute**](GoogleRoute.md)                       |                           | [optional]                    |
| **http**              | [**HttpRoute**](HttpRoute.md)                           |                           | [optional]                    |
| **label**             | **String**                                              |                           | [optional]                    |
| **modified**          | **Date**                                                |                           | [optional] [readonly]         |
| **mqtt**              | [**MqttRoute**](MqttRoute.md)                           |                           | [optional]                    |
| **proxy**             | [**ProxyRoute**](ProxyRoute.md)                         |                           | [optional]                    |
| **qubitro**           | [**QubitroRoute**](QubitroRoute.md)                     |                           | [optional]                    |
| **radnote**           | [**RadRoute**](RadRoute.md)                             |                           | [optional]                    |
| **s3archive**         | [**S3ArchiveRoute**](S3ArchiveRoute.md)                 |                           | [optional]                    |
| **slack**             | [**SlackRoute**](SlackRoute.md)                         |                           | [optional]                    |
| **snowflake**         | [**SnowflakeRoute**](SnowflakeRoute.md)                 |                           | [optional]                    |
| **snowpipeStreaming** | [**SnowpipeStreamingRoute**](SnowpipeStreamingRoute.md) |                           | [optional]                    |
| **thingworx**         | [**ThingworxRoute**](ThingworxRoute.md)                 |                           | [optional]                    |
| **twilio**            | [**TwilioRoute**](TwilioRoute.md)                       |                           | [optional]                    |
| **type**              | **String**                                              | Mirrors hublib.RouteType. | [optional]                    |
| **uid**               | **String**                                              |                           | [optional] [readonly]         |
