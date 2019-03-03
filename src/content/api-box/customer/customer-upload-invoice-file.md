---
title: Invoice File
---
# Customer
## Upload invoice file
> The command should be run as in the following example:
```text/plain
Headers:
invoice_file_guid = a9432dec-19ec-48b4-be0d-b59016ef569f
Content-Type = text/plain
user_code = 396
app_key = 1656d700707ad9a77f737e5df3db088a

Body:
StreamData

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
        "invoice_file_url": "https://www.puntomio.com/sites/default/files/invoice_service/uploads/233360/20190207172718_14337801_filename.txt",
        "invoice_id": "442825",
        "trck_nmr_fol": 13869085
    }
]
```
This endpoint uploads the invoice file as a stream, the credentials and `invoice_file_guid` must be sent as headers of the request.
### Request Endpoint
`POST https://api-box-test.skypostal.com/wcf-services/service-customer.svc/customer/customer-upload-invoice-file`

### Request Credentials
| Credential   | Value          | Description                                                                      |
| ------------ | -------------- | -------------------------------------------------------------------------------- |
| `user_code`    | 396            | This is the user code provided by Skypostal.                                     |
| `app_key`     | `1656d700707ad9a77f737e5df3db088a` | This is the app key provided by Skypostal.                   |

#### Remember
`user_code` and `app_key` are generic credentials, make sure to request your own for `TEST` and `PROD` environemnts.

### Request Parameters
| Parameter    | Type          | Description                                                                      | Required   |
| ------------ | --------------| -------------------------------------------------------------------------------- |------------|
|`invoice_file_guid`|String|File data identifier, this parameter was returned by `customer_upload_invoice_data`|Yes|

### Comments
Max file supported is 5MB.
The response returns a url where the file can be downloaded.