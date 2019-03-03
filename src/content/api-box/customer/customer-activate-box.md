---
title: Activate Box
---
# Customer
## Activate Registered Customer Info
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
	"copa_id":616,
	"customer_box_id":811098,
	"customer_key":"bMT/SCvwoDrlWBkNDjOvKx7zqjijTKCaLOgnbeo4H+w=",
	"customer_credit_card":[
		{
			"cc_type_name":"MASTER",
			"cc_holder_name":"John Doe",
			"cc_number":"1234567812345678",
			"cc_expiration_date":"2020-05-01",
			"cc_security_code":"123"
		}
	]
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "customer_box_id": 811111,
        "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        }
    }
]
```
This endpoint activates a customer which information was registered in the `customer/customer-register-info` service.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-activate-box`

### Request Credentials
| Credential   | Value          | Description                                                                      |
| ------------ | -------------- | -------------------------------------------------------------------------------- |
| `user_code`    | 396            | This is the user code provided by Skypostal.                                     |
| `app_key`     | `1656d700707ad9a77f737e5df3db088a` | This is the app key provided by Skypostal.                   |
| `customer_box_id`|811111         |Number obtained in the registered service.                                        |
| `customer_key`   |`YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=`|Key obtained in the register service. This will be updated when updating the e-mail account.|

#### Remember
`user_code` and `app_key` are generic credentials, make sure to request your own for `TEST` and `PROD` environemnts.
`customer_box_id` and `customer_key` are the credentials obtained through registration or login, make sure to change this parameters to the ones that you obtained.

### Request Parameters
| Parameter    | Type          | Description                                                                      | Required   |
| ------------ | --------------| -------------------------------------------------------------------------------- |------------|
|`copa_id`|Numeric|Customer account for a company that has a tax paying number.|Yes|
|`customer_credit_card`|List|Always send one valid credit card.|Yes|
|`cc_type_name`|String|Can be : VISA, DINERS, AMEX, MASTER|Yes|
|`cc_holder_name`|String|Name in card|Yes|
|`cc_number`|String|Card number|Yes|
|`cc_expiration_date`|String|Format YYYY-MM-DD, send DD as 01 as the card may not have the full date|Yes|
|`cc_security_code`|String|Code usually in the back of the card|No|


### Comments
Credit card info will be validated and box won't be activated if the card is not valid.
