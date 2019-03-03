---
title: Countries
---
# Geographic
## Get All Countries
> The command should be run as in the following example:
```json
{
"user_code":396,
"app_key":"1656d700707ad9a77f737e5df3db088a"
}

```
> The command will return the following format:
```json
[
  {
        "_verify": true,
        "country_code": 11,
        "country_iso_code": "AR",
        "country_name": "Argentina",
        "ctry_code_phone": "54",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        }
    },
    {
        "_verify": true,
        "country_code": 155,
        "country_iso_code": "MX",
        "country_name": "Mexico",
        "ctry_code_phone": "52",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        }
    }
]
```
This endpoint retrieves all countries.
### HTTP Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-geographic.svc/geographic/geographic-get-countries`

### Request Credentials
| Credential   | Value          | Description                                                                      |
| ------------ | -------------- | -------------------------------------------------------------------------------- |
| `user_code`    | 396            | This is the user code provided by Skypostal.                                     |
| `app_key`      | `1656d700707ad9a77f737e5df3db088a` | This is the app key provided by Skypostal.                   |
#### Remember
`user_code` and `app_key` are generic credentials, make sure to request your own for `TEST` and `PROD` environemnts.