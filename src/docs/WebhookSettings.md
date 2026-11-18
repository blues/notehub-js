# NotehubJs.WebhookSettings

## Properties

| Name          | Type        | Description                                                                                                                                                                     | Notes      |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **disabled**  | **Boolean** | If true, posts to the webhook return an error and create no events.                                                                                                             | [optional] |
| **id**        | **String**  | Webhook ID, also the default notefile name (&#x60;&lt;id&gt;.qo&#x60;). Letters, digits, &#x60;-&#x60; and &#x60;\_&#x60;.                                                      | [optional] |
| **transform** | **String**  | JSONata expression applied to the event, with the post under &#x60;body&#x60;. Its output replaces the event and must set &#x60;body&#x60;. &#x60;$doNotRoute()&#x60; drops it. | [optional] |
