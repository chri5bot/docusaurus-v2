---
title: Login
---
# Customer
## Login customer account
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
	"customer_email":"johndoe@email.com", 
	"customer_password":"pass12345"
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
This endpoint logs in to the customer account.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-registration`

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
|`customer_email`|String|Registered email to access the account.|Yes|
|`customer_password`|String|Password set in the registration service.|Yes|

### Comments
`customer_box_id` and `customer_key` are the credentials of the new created customer, these will be needed in future requests.
Both parameters can also be obtained in the `partner/customer-get-info` service
