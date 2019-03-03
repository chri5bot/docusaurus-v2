---
title: Customer Information
---
# Customer
## Get customer information
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811111,
    "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw="
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "cust_id": 51736850,
        "customer_address": [
            {
                "_verify": true,
                "address_01": "123 Fake St.",
                "address_id": 123999465,
                "city_code": 95411,
                "city_name": "Calvillo",
                "country_code": 155,
                "country_name": "Mexico",
                "ctry_iso_code": "MX",
                "cust_id": 51736850,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "locality_town": "Locality/Town",
                "neighborhood": "Neighborhood",
                "phone_area": "+1",
                "phone_extension": "333",
                "phone_number": "123456789",
                "state_code": 2761,
                "state_name": "Aguascalientes",
                "zip_code": "998877"
            }
        ],
        "customer_birth_date": "/Date(335505600000-0400)/",
        "customer_campaign": "Test Campaign",
        "customer_email": "JOHNDOE@EMAIL.COM",
        "customer_email_agreement": false,
        "customer_first_name": "John",
        "customer_gender": "M",
        "customer_identity_number": "11111111",
        "customer_last_name": "Doe",
        "customer_phone": [
            {
                "_verify": true,
                "cust_id": 51736850,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "phone_area_code": "+1",
                "phone_extension": "333",
                "phone_id": 1190087,
                "phone_number": "123456789",
                "phone_type": 1
            },
            {
                "_verify": true,
                "cust_id": 51736850,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "phone_area_code": "+1",
                "phone_extension": "",
                "phone_id": 1190089,
                "phone_number": "987654321",
                "phone_type": 2
            }
        ],
        "customer_refered_by": 0,
        "customer_tax_number": 0,
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
This endpoint returns all the information of the customer that is registered in the system.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-get-info`

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

