---
title: States
---
# Geographic
## Get All States in Country
> The command should be run as in the following example:
```json
{
"user_code":396,
"app_key":"1656d700707ad9a77f737e5df3db088a",
"country_code":155
}
```
> The command will return the following format:
```json
[
   {
        "_verify": true,
        "country_code": 155,
        "country_iso_code": "MX",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "state_code": 2761,
        "state_name": "Aguascalientes"
    },
    {
        "_verify": true,
        "country_code": 155,
        "country_iso_code": "MX",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "state_code": 2762,
        "state_name": "Baja California"
    }
]
```
This endpoint retrieves all states from a country.
### HTTP Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-geographic.svc/geographic/geographic-get-states`

### Request Credentials
| Credential   | Value          | Description                                                                      |
| ------------ | -------------- | -------------------------------------------------------------------------------- |
| `user_code`    | 396            | This is the user code provided by Skypostal.                                     |
| `app_key`      | `1656d700707ad9a77f737e5df3db088a` | This is the app key provided by Skypostal.                   |
#### Remember
`user_code` and `app_key` are generic credentials, make sure to request your own for `TEST` and `PROD` environemnts.

### Request Parameters
| Parameter    | Type          | Description                                                                      | Required   |
| ------------ | --------------| -------------------------------------------------------------------------------- |------------|
| `country_code` | Numeric       | This is the code from the country that you want to get the states from.          | Yes        |
