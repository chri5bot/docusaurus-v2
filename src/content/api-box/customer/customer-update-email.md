---
title: Customer Email
---
# Customer
## Update Customer Email
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811111,
    "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
	"customer_current_email":"original@mail.com",
	"customer_new_email":"new@mail.com"
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "customer_box_id": 811111,
        "customer_email": "NEW@MAIL.COM",
        "customer_key": "YFC4PGUafmTiBu3g8YjSOVZrnNyKaUHZReHlhy9AFDg=",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        }
    }
]
```
This endpoint updates the email address of the customer.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-update-email`

### Request Credentials
| Credential   | Value          | Description                                                                      |
| ------------ | -------------- | -------------------------------------------------------------------------------- |
| `user_code`    | 396            | This is the user code provided by Skypostal.                                     |
| `app_key`      | `1656d700707ad9a77f737e5df3db088a` | This is the app key provided by Skypostal.                   |
| `customer_box_id`|811111         |Number obtained in the registered service.                                        |
| `customer_key`   |`YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=`|Key obtained in the register service. This will be updated when updating the e-mail account.|

#### Remember
`user_code` and `app_key` are generic credentials, make sure to request your own for `TEST` and `PROD` environemnts.
`customer_box_id` and `customer_key` are the credentials obtained through registration or login, make sure to change this parameters to the ones that you obtained.

### Request Parameters
| Parameter    | Type          | Description                                                                      | Required   |
| ------------ | --------------| -------------------------------------------------------------------------------- |------------|
|`customer_current_email`|String|Current customer e-mail address|Yes|
|`customer_new_email`|String|New e-mail address that the customer wants to use|Yes|

### Comments
This service returns a new `customer_key`, so this credential value must be changed for future requests.