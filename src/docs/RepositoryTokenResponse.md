# NotehubJs.RepositoryTokenResponse

## Properties

| Name          | Type       | Description                                                                                                                  | Notes |
| ------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- | ----- |
| **database**  | **String** | Storage service database name scoped to this repository                                                                      |
| **expiresAt** | **Date**   | Absolute expiration time of the ephemeral user. The storage service will reject connections and queries after this instant.  |
| **host**      | **String** | Storage service hostname the caller should connect to                                                                        |
| **password**  | **String** | Ephemeral password. Returned once; not stored by Notehub. Hold this in memory only and discard after &#x60;expires_at&#x60;. |
| **port**      | **Number** | Storage service port                                                                                                         |
| **username**  | **String** | Ephemeral storage service username (prefixed with &#x60;u\_&#x60;)                                                           |
