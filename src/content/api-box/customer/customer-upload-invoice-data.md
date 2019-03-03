---
title: Invoice Data
---
# Customer
## Upload invoice data
> The command should be run as in the following example:
```json
{
	"user_code":396,
	"app_key":"1656d700707ad9a77f737e5df3db088a",
    "customer_box_id": 811111,
    "customer_key": "YpbCNpzqxYqVWv+tzg4e4Ex6ALiT+DfKSYA3NY2dZcw=",
   	"trck_nmr_fol":13869085,
	"invoice_file_name":"invtest.pdf"
}
```
> The command will return the following format:
```json
[
    {
        "_verify": true,
        "customer_box_id": 811111,
        "error": {
            "error_description": "",
            "error_location": "",
            "system_error": false
        },
        "invoice_file_guid": "a9432dec-19ec-48b4-be0d-b59016ef569f",
        "invoice_file_name": "20190222013446_13869085_invtest.pdf",
        "invoice_file_url": "",
        "invoice_id": "442825",
        "trck_nmr_fol": 13869085
    }
]
```
This endpoint uploads the basic information from an invoice that needs to be associated to a shipment.
This must be complemented with the `upload_invoice_file` service, that is where the file itself is uploaded.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-upload-invoice-data`

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
|`trck_nmr_fol`|Numeric|tracking_number from the package to which the invoice has to be associated|Yes|
|`invoice_file_name`|String|invoice name (extension is needed) .pdf, .jpeg, .png, .txt|Yes|

### Comments
Returned value `invoice_file_guid` must be send in the next request `upload_invoice_file`.