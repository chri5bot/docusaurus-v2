---
title: Customer Password
---
# Customer
## Update Customer Account Password
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811111,
    "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
	"customer_email":"johndoe@email.com",
	"customer_new_password":"pass12345"
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "updated_rows": 1
    }
]
```
This endpoint updates the password of the customer's account.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-update-password`

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
|`customer_email`|String|Current customer e-mail address|Yes|
|`customer_new_password`|String|New password that the customer wants to use.|Yes|


### Comments
