---
title: Shipment Info
---
# Shipment
## Get shipment information
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811098,
    "customer_key": "bMT/SCvwoDrlWBkNDjOvKx7zqjijTKCaLOgnbeo4H+w=",
	"trck_nmr_fol":13869085
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "consolidation": null,
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "invoice": null,
        "pre_recept": null,
        "shipment": {
            "_verify": true,
            "additional_discount": 0,
            "address": "CARRERA 20 NO 40 - 77",
            "billing_type_code": 1,
            "billing_type_description": "Normal",
            "boxs_id": 811098,
            "category_code": 0,
            "category_name": "",
            "charged_weight": 0.4409,
            "city_iata_code_origin": "MIA",
            "city_name": "Bogota",
            "company": "PUNTOMIO-MIAMI",
            "company_address": "7801 NW 15th Street, Doral, FL 33126",
            "console_type_code": 0,
            "console_type_description": "Normal",
            "content": "test 10",
            "copa_id": 616,
            "copa_name": "Test virtual",
            "country_iso_code": "CO",
            "country_name": "Colombia",
            "detail": [
                {
                    "_verify": true,
                    "content": "",
                    "courier_code": "OTR  ",
                    "courier_name": "OTHER",
                    "error": {
                        "error_description": "",
                        "error_location": "",
                        "system_error": false
                    },
                    "external_tracking": "322324324",
                    "family_product_code": "PAE",
                    "family_product_name": "ELECTRONIC PARTS",
                    "height": 1,
                    "item_piece": 1,
                    "length": 1,
                    "merchant_name": "",
                    "physical_weight": 0.44,
                    "price_value": 10,
                    "serial_number": "",
                    "trck_nmr_fol": 13869085,
                    "volumetric_weight": 0.01,
                    "width": 1
                }
            ],
            "dimension_unit": "",
            "discount": 0,
            "email": "BOXAPI@REGINFO.COM",
            "error": {
                "error_description": "",
                "error_location": "",
                "system_error": false
            },
            "extra_charges": 0,
            "family_product_code": "PAE",
            "family_product_name": "ELECTRONIC PARTS",
            "fee": 0,
            "freight": 0,
            "fuel_surcharge": 0,
            "height": 1,
            "iata_code": "BOG",
            "iata_code_origin": "MIA",
            "identity_number": "79265562",
            "insurance": 0,
            "is_frozen": 0,
            "is_return": 0,
            "length": 1,
            "locality": "BARRIO LA SOLEDAD",
            "merchant_address": "",
            "merchant_name": "Amazon.com",
            "name": "HANS SPERBER",
            "neighborhood": "BARRIO LA SOLEDAD",
            "office_code": 2,
            "office_name": "PUNTOMIO-MIAMI",
            "phone": 2451616,
            "phone_area": 1,
            "phone_extension": "",
            "physical_weight": 0.4409,
            "price_value": 10,
            "quantity": 1,
            "ship_type": "SPX",
            "ship_type_description": "PAQUETES",
            "shipping": 6.5,
            "state_name": "Distrito Capital de Bogota",
            "status_code": 1,
            "status_name": "Active",
            "subtotal_custom": 0,
            "subtotal_shipping": 6.5,
            "total_custom": 0,
            "total_shipping": 6.5,
            "trck_nmr_fol": 13869085,
            "us_address": "7701",
            "user_code": 1,
            "user_login": "root",
            "user_name": "root root",
            "volumetric_weight": 0.01,
            "weight_unit": "LB",
            "width": 1,
            "zipcode": "1"
        },
        "tracking": [
            {
                "_verify": true,
                "delivery_id": null,
                "entry_date": "/Date(1517799554000-0500)/",
                "entry_date_db": "/Date(1517799554000-0500)/",
                "entry_date_db_str": null,
                "entry_date_str": null,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "iata_code": "MIA",
                "image_url_signature": null,
                "order_label": "",
                "track_cdg": "PAY",
                "track_description": "BILLED",
                "track_description_op": "BILLED",
                "track_obs": "",
                "track_type": "EV",
                "track_type_description": "EVENT",
                "trck_nmr_fol": 13869085
            },
            {
                "_verify": true,
                "delivery_id": null,
                "entry_date": "/Date(1517799553000-0500)/",
                "entry_date_db": "/Date(1517799553000-0500)/",
                "entry_date_db_str": null,
                "entry_date_str": null,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "iata_code": "MIA",
                "image_url_signature": null,
                "order_label": "",
                "track_cdg": "REC",
                "track_description": "RECEIVED",
                "track_description_op": "RECEIVED",
                "track_obs": "",
                "track_type": "EV",
                "track_type_description": "EVENT",
                "trck_nmr_fol": 13869085
            },
            {
                "_verify": true,
                "delivery_id": null,
                "entry_date": "/Date(1517799553000-0500)/",
                "entry_date_db": "/Date(1517799553000-0500)/",
                "entry_date_db_str": null,
                "entry_date_str": null,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "iata_code": "MIA",
                "image_url_signature": null,
                "order_label": "",
                "track_cdg": "PRO",
                "track_description": "PROCESSED",
                "track_description_op": "PROCESSED",
                "track_obs": "",
                "track_type": "EV",
                "track_type_description": "EVENT",
                "trck_nmr_fol": 13869085
            },
            {
                "_verify": true,
                "delivery_id": null,
                "entry_date": "/Date(1517799553000-0500)/",
                "entry_date_db": "/Date(1517799553000-0500)/",
                "entry_date_db_str": null,
                "entry_date_str": null,
                "error": {
                    "error_description": "",
                    "error_location": "",
                    "system_error": false
                },
                "iata_code": "MIA",
                "image_url_signature": null,
                "order_label": "",
                "track_cdg": "CUT",
                "track_description": "PROCESSING PAYMENT",
                "track_description_op": "PROCESSING PAYMENT",
                "track_obs": "",
                "track_type": "EV",
                "track_type_description": "EVENT",
                "trck_nmr_fol": 13869085
            }
        ],
        "trck_nmr_fol": 13869085
    }
]
```
This endpoint returns the complete information from an specific shipment, including the tracking events.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/shipment/get-shipment-info`

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
|`trck_nmr_fol`|Numeric|tracking_number (Skypostal's Identifier) from the package that wants to be searched|Yes|

### Comments
This service will return all the information from a specific shipment.