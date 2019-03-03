---
title: Customer Personal Information
---
# Customer
## Update Customer Personal Information
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811111,
    "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
	"customer_first_name":"New Name", 
	"customer_last_name":"New Last", 
	"customer_identity_number":null, 
	"customer_tax_number":null,
	"customer_birth_date":"1980-08-19", 
	"customer_gender":"M"
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "cust_id": 51736835,
        "customer_birth_date": "/Date(335505600000-0400)/",
        "customer_first_name": "New Name",
        "customer_gender": "M",
        "customer_identity_number": "123456789",
        "customer_last_name": "New Last",
        "customer_tax_number": 0,
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        }
    }
]
```
This endpoint updates the customer's personal information.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-update-personal-info`

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
|`customer_first_name`|String|New name, if not sent current will be kept|No|
|`customer_last_name`|String|New last name, if not sent current will be kept|No|
|`customer_identity_number`|String|New ID number, if not sent current will be kept|No|
|`customer_tax_number`|Numeric|New tax number, if not sent current will be kept|No|
|`customer_birth_date`|String|Format YYYY-MM-DD, if not sent current will be kept|No|
|`customer_gender`|String|M/F|No|

### Comments
You can change one, some or all parameters in one call.