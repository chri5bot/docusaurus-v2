const routes = [
  {
    api: "Box",
    pathname: "/api-box",
    content: [
      {
        parent: "Customer",
        pathname: "/customer",
        children: [
          {
            name: "Activate Box",
            pathname: "/customer-activate-box",
          },
          {
            name: "Get Info",
            pathname: "/customer-get-information",
          },
          {
            name: "Get Shipments",
            pathname: "/customer-get-shipments",
          },
          {
            name: "Login",
            pathname: "/customer-login",
          },
          {
            name: "Register Info",
            pathname: "/customer-register-information",
          },
          {
            name: "Registration",
            pathname: "/customer-registration",
          },
          {
            name: "Update Address Info",
            pathname: "/customer-update-address-info",
          },
          {
            name: "Update Email",
            pathname: "/customer-update-email",
          },
          {
            name: "Update Password",
            pathname: "/customer-update-password",
          },
          {
            name: "Update Personal Info",
            pathname: "/customer-update-personal-info",
          },
          {
            name: "Update Type",
            pathname: "/customer-update-type",
          },
          {
            name: "Upload Invoice Data",
            pathname: "/customer-upload-invoice-data",
          },
          {
            name: "Update Invoice File",
            pathname: "/customer-upload-invoice-file",
          },
        ],
      },
      {
        name: "Geographic",
        pathname: "/geographic",
        children: [
          {
            name: "Countries",
            pathname: "/geographic-get-countries",
          },
          {
            name: "States",
            pathname: "/geographic-get-states",
          },
          {
            name: "Cities",
            pathname: "/geographic-get-cities",
          },
        ],
      },
      {
        name: "Partner",
        pathname: "/partner",
        children: [
          {
            name: "Get Info",
            pathname: "/get-info",
          },
        ],
      },
      {
        name: "Shipment",
        pathname: "/shipment",
        children: [
          {
            name: "Get Shipment Info",
            pathname: "/get-shipment-info",
          },
        ],
      },
    ],
  },
  {
    api: "Test",
    pathname: "/api-test",
    content: [
      {
        parent: "Customer",
        pathname: "/customer",
        children: [
          {
            name: "Activate Box",
            pathname: "/customer-activate-box",
          },
          {
            name: "Get Info",
            pathname: "/customer-get-information",
          },
        ],
      },
    ],
  },
]

export default routes
