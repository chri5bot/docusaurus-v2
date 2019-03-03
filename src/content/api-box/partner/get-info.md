---
title: Customer Credentials
---
# Partner
## Admin Get customer credentials
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
	"customer_email":"johndoe@email.com"
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "activation_date": "/Date(1550761010000-0500)/",
        "customer_box_id": 811111,
        "customer_first_name": "John",
        "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
        "customer_last_name": "Doe",
        "enrolment_date": "/Date(1550761008000-0500)/",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "is_active": true,
        "is_business": false,
        "is_enable": true,
        "is_vip": false
    }
]
```
This is an admin endpoint that returns the `customer_key` and `customer_box_id` so that the partner can manage the account.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/partner/customer-get-info`

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
|`customer_email`|String|e-mail from the account/customer that wants to be managed|Yes|

### Comments
