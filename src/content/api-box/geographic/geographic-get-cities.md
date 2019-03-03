---
title: Cities
---
# Geographic
## Get All Cities in State
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
	"state_code":2761
}
```
> The command will return the following format:
```json
[
   {
        "_verify": true,
        "city_code": 95410,
        "city_name": "Asientos",
        "country_code": 155,
        "country_iso_code": "MX",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "state_code": 2761
    },
    {
        "_verify": true,
        "city_code": 95411,
        "city_name": "Calvillo",
        "country_code": 155,
        "country_iso_code": "MX",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "state_code": 2761
    }
]
```
This endpoint retrieves all cities from a state.
### HTTP Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-geographic.svc/geographic/geographic-get-cities`

### Request Credentials
| Credential   | Value          | Description                                                                      |
| ------------ | -------------- | -------------------------------------------------------------------------------- |
| `user_code`    | 396            | This is the user code provided by Skypostal.                                     |
| `app_key`      | `1656d700707ad9a77f737e5df3db088a` | This is the app key provided by Skypostal.                   |
#### Remember
`user_code` and `app_key` are generic credentials, make sure to request your own for `TEST` and `PROD` environments.

### Request Parameters
| Parameter    | Type          | Description                                                                      | Required   |
| ------------ | --------------| -------------------------------------------------------------------------------- |------------|
| `state_code`   | Numeric       | This is the code from the state that you want to get the cities from.            | Yes        |