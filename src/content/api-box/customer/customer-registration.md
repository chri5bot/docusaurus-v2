---
title: Registration
---
# Customer
## Register and Activate Virtual Customer
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
	"language_code":"ENG", 
	"copa_id":616, 
	"customer_first_name":"John", 
	"customer_last_name":"Doe", 
	"customer_identity_number":"11111111", 
	"customer_tax_number":11111,
	"customer_birth_date":"1980-08-19", 
	"customer_email":"johndoe@email.com", 
	"customer_password":"pass123", 
	"customer_gender":"M", 
	"customer_campaign":"Test Campaign",
    "customer_email_agreement":false,
	"customer_referred_by":null,
	"customer_address":[
		{
			"city_code":95411,
			"locality_town":"Locality/Town",
   			"neighborhood":"Neighborhood",
			"address_01":"123 Fake St.",
			"zip_code":"998877"
		}
	],
	"customer_phone":[
		{
			"phone_area_code":"+1",
			"phone_number":"123456789",
			"phone_extension":"333",
			"phone_type":1
		},
		{
			"phone_area_code":"+1",
			"phone_number":"987654321",
			"phone_extension":"",
			"phone_type":2
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
This endpoint registers a new customer in the system.
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
|`language_code`|String|Customer Language Code (ENG, ESP)|Yes|
|`copa_id`|Numeric|Commercial Partner Number (Provided by Skypostal)|Yes|
|`customer_first_name`|String|Customer First Name|Yes|
|`customer_last_name`|String|Customer Last Name|Yes|
|`customer_identity_number`|String|Customer Identity Number|Yes|
|`customer_tax_number`|Numeric|Customer account for a company that has a tax paying number|No|
|`customer_birth_date`|String|Format YYYY-MM-DD|Yes|
|`customer_email`|String|Valid e-Mail Address|Yes|
|`customer_password`|String|Can contain any character|Yes|
|`customer_gender`|String|Male (M) or Female (F)|Yes|
|`customer_campaign`|String|Specific new customers campaign|No|
|`customer_email_agreement`|Boolean|Usual checkbox for Adds and promotions agreement (default is false)|No|
|`customer_referred_by`|Numeric|Referred by campaigns, `customer_box_id` of the first customer.|No|
|`customer_address`|List|Send 1 address always|Yes|
|`city_code`|Numeric|Value returned by geographic-get-cities|Yes|
|`locality_town`|String|Your address town/locality/colony, smaller than a city.|Yes|
|`neighborhood`|String|Your address neighboorhood|Yes|
|`address_01`|String|Streets, home number, etc.|Yes|
|`zip_code`|String|Send a valid zipcode|Yes|
|`customer_phone`|List|Send atleast 2 numbers, first will be taken as number from the address|Yes|
|`phone_area_code`|String|Country phone code, can be retrieved from geographic-get-countries|Yes|
|`phone_number`|String|Home or mobile phone|Yes|
|`phone_extension`|String|Phone Extension|No|
|`phone_type`|Numeric|1=residential or corporate, 2=mobile phone|Yes|

### Comments
`customer_box_id` and `customer_key` are the credentials of the new created customer, these will be needed in future requests.
Both parameters can also be obtained in the `customer/customer-login` service and in `partner/customer-get-info`
