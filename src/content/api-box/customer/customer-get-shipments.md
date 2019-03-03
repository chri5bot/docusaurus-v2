---
title: Customer Shipments
---
# Customer
## Get customer shipments
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811111,
    "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
	"start_date":null,
	"end_date":"2018-02-15"
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "date_manifested": null,
        "date_received": "/Date(1517799552000-0500)/",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "external_tracking": "322324324",
        "invoice_file_name": "",
        "invoice_file_url": "",
        "invoice_required": 0,
        "lnge_code": "ENG",
        "merchant": "Amazon.com",
        "shipment_content": "test 10",
        "shipment_status": "PAY",
        "shipment_value": 10,
        "shipping_charge_discount": 0,
        "shipping_charge_rate": 6.5,
        "shipping_charge_total": 6.5,
        "trck_nmr_fol": 13869085,
        "weight_charged": 0.4409,
        "weight_physical": 0.4409,
        "weight_volumetric": 0.01
    },
    {
        "_verify": true,
        "date_manifested": null,
        "date_received": "/Date(1515037237000-0500)/",
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "external_tracking": "test_co123nopb1",
        "invoice_file_name": "",
        "invoice_file_url": "",
        "invoice_required": 0,
        "lnge_code": "ENG",
        "merchant": "Amazon.com",
        "shipment_content": "podadora",
        "shipment_status": "PAY",
        "shipment_value": 20,
        "shipping_charge_discount": 0,
        "shipping_charge_rate": 30.5,
        "shipping_charge_total": 30.5,
        "trck_nmr_fol": 13818527,
        "weight_charged": 45.13,
        "weight_physical": 6.6139,
        "weight_volumetric": 45.13
    }
]
```
This endpoint returns a list of all the shipments from the customer between the dates sent.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-get-shipments`

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
|`start_date`|String|Format YYYY-MM-DD, if not sent, 3 months before the end_date will be used|No|
|`end_date`|String|Format YYYY-MM-DD, if not sent, current date will be used|No|


### Comments
