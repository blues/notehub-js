# NotehubJs.RepositoryTokenRequest

## Properties

| Name           | Type       | Description                                                                                                                                              | Notes                                  |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **intent**     | **String** | Access intent for the vended credentials. Only &#x60;read&#x60; is supported today; &#x60;write&#x60; and &#x60;admin&#x60; are reserved for future use. | [optional] [default to &#39;read&#39;] |
| **ttlSeconds** | **Number** | Requested credential lifetime in seconds. Clamped server-side to [60, 3600]. Defaults to 900 (15 minutes) if omitted.                                    | [optional] [default to 900]            |

## Enum: IntentEnum

- `read` (value: `"read"`)
