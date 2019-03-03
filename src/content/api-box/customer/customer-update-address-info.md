---
title: Customer Address
---
# Customer
## Update Customer Address and Phone
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811111,
    "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
	"customer_address":[
		{
			"city_code":139207,
			"city_name":"bogota",
        	"phone_area":"57",
        	"phone_number":"11223344",
			"phone_extension":"",
			"locality_town":"pueblo",
			"neighborhood":"barrios los juncos",
			"address_01":"st 1 y la 2",
			"zip_code":"110221"
		}
	], 
	"customer_phone":[
		{
			"phone_area_code":"57",
			"phone_number":"11223344",
			"phone_extension":"",
			"phone_type":2
		},
		{
			"phone_area_code":"57",
			"phone_number":"11221122",
			"phone_extension":"",
			"phone_type":1		
		}
	]
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "customer_address": [
            {
                "_verify": true,
                "address_01": "FIRST STREET 123",
                "address_id": 123999450,
                "city_code": 149022,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "locality_town": "TEST TOWN",
                "neighborhood": "MY NEIGHBORHOOD",
                "phone_area": "57",
                "phone_extension": "111",
                "phone_number": "8899663322",
                "zip_code": "1559966"
            }
        ],
        "customer_phone": [
            {
                "_verify": true,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "phone_area_code": "57",
                "phone_extension": "",
                "phone_id": 1190093,
                "phone_number": "11223344",
                "phone_type": 2
            },
            {
                "_verify": true,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "phone_area_code": "57",
                "phone_extension": "333",
                "phone_id": 1190094,
                "phone_number": "11221122",
                "phone_type": 1
            }
        ],
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        }
    }
]
```
This endpoint updates the customer's address and phone information.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-update-address-info`

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
|`customer_address`|List|Cannot be null or an empty array.|Yes|
|`city_code`|Numeric|Send current or 0 if don't want to update|Yes|
|`city_name`|String|Send current or an empty string "" if don't want to update|Yes|
|`phone_area`|String|Send current or an empty string "" if don't want to update|Yes|
|`phone_number`|String|Send current or an empty string "" if don't want to update|Yes|
|`phone_extension`|String|Phone Extension|No|
|`locality_town`|String|Send current or an empty string "" if don't want to update|Yes|
|`neighborhood`|String|Send current or an empty string "" if don't want to update|Yes|
|`address_01`|String|Send current or an empty string "" if don't want to update|Yes|
|`zip_code`|String|Send current or an empty string "" if don't want to update|Yes|
|`customer_phone`|List|Cannot be null, but it can be an empty array[].|Yes|
|`phone_area_code`|String|Country phone code|Yes|
|`phone_number`|String|Number|Yes|
|`phone_extension`|String|Phone Extension|No|
|`phone_type`|Numeric|1=residential, 2=mobile|yes|

### Comments
You can update one, some or all parameters in one call.
If `customer_phone` is sent, previous phone numbers will be deleted, except for the one that is associated with the address.