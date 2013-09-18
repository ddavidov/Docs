# Configuration

Choose or create the ZOO application, that you wish to use as a product catalogue. At first you neeed to enable **ZOOcart** for this application. To do this, switch to Config tab of chosen application, set *“Enable ZOO cart”* param to “Yes” (on the right panel) and save changes.
After that the additional tabs: **“Orders”** and **“ZOOcart Config”** will be displayed right after **“Config”** tab.
Switch to **“ZOOcart Config”** tab to configure ZOOcart for this applivation.

## General settings
General settings tab contains general ZOOcart parameters.

- **Show price With Tax** - If set to “Yes” the product price will be recounted displayed with tax.
- **Default Tax Class** - You can choose Tax Class, that will be used as default for products without explicit tax class assigned  (You can manage Tax classes on the “Tax Classes” tab).
- **Tax Address** - Type af address that will be used for tax calculations. You can choose billing or shipping value.
- **Load Bootstrap** - if set to “Yes” twitter bootstrap CSS and JavaScripts will be loaded.
- **Validate VAT using VIES?** -  If set to “Yes” and VAT (Value Added Tax) is populated, VAT will be validated using EU VIES service. (http://ec.europa.eu/taxation_customs/vies/faq.html).
- **Stop if VAT is not VIES?** - If set to “Yes” and VAT validation enabled, checkout will be not proceeded if VAT (Value Added Tax) is not valid.
- **Show terms and conditions** - If set to “Yes”, the Terms Agreement checkbox will be displayed on the checkut page.
- **Terms and condition Url** - Allows to specify the “Terms and Conditions” page URL.
- **Enabled Shipping Rates** - If set to “Yes” shipping information will be required and processed during checkout process. Please note, that Enabled Shipping Rates requires ZOOcart shipping plugin(s) to be installed and enabled.
- **Check Quantities?** - 	If set to “Yes” product quantity value will be checked for non-zero before adding this product to cart.
- **Update Quantities?** - Use in combination with “Update Quantities Order State”	param. If set to “Yes” appropriate products quantities value will be modified (decreased) when order state will be reached the state, that specified in “Update Quantities Order State”	param.
- **Require Address - If set to “Yes” Billing and Shipping addresses information will be required during checkout.
- **Update Quantities Order State - Use in combination with “Update Quantities”	param. If “Update Quantities” is set to “Yes” appropriate products quantities value will be modified (decreased) when order state will be reached the state, that specified in “Update Quantities Order State” param.
- **Default Country - Allows to set default country (Uses in shipping and billing plugins).
- **Default Currency - Allows to chose default currency for product prices. You can manage currencies on the “Currencies” page.
- **New Orders State - Allows to specify state, that will be applied to the newly created order.
- **Payment Received State - Allows to specify state, that will be applied to the order when appropriate payment is received.
- **Payment Pending State - Allows to specify state, for payment pending orders.
- **Payment Failed State - Allows to specify state, for failed orders.
- **Canceled State - Allows to specify state, for canceled orders.
- **Finished State - Allows to specify state, for processed and finished orders.
- **Checkout page opened - If set to “Yes”, checkout page will be opened by default.

3.2 Tax Rules
You can manage Taxes on the “Tax Rules” tab.
To create new Tax Rule, you need t specify the following fields for it:
Country - Use to specify the country for which this Tax Rule should be applied.
State - Use to set state, inside the chosen country (Usualy it’s set like two letter code e.g. AA, BB e.t.c).
City - Allows to specify the city.
ZIP - ZIP code or Postal code of the appropriate location.
Tax Rate  - Tax rate (in percents), that will be applied to related products prices.
Ordering - Integer value, that allows to specify the rule’s order in the list.
Published - Rule’s publication state.
VIES Registered - Set to “Yes” if there are registered VAT for the specified region.
Tax Class - Choose the related Tax Class. You can manage Tax Classes on the “Tax Classes” page.

3.3 Tax Classes
Different Tax Classes could be aplied to different products or groups of products. You can manage them on the “Tax Classes” page.
To create or edit the new Tax Class you just need to specify it’s Name on the appropriate form:

3.4 Address Types
On the “Address Types” page you can configure addresses comonents (Such as Country, Street, e.t.c.), that will be used for billing and shipping. And configure appropriate Billing and Shipping addresses layouts.

To setup address parameters click the Address type name and set all necessary address constituents. After setup finished, save all changes.


To configure Address layout (e.g. Billing Form, Billing, Shipping Form, Shipping) click appropriate layout’s name in the Layout Extensions collumn on the “Address Types” page. Address layout can be configured like any other ZOO layout. Setup appropriate layout positions and save changes.

3.5 Currencies
You can manage currencies on the “Currencies” page.

To create/edit currency you need to set the following fields:
Name - Currency name.
Code - International currency 3-letter code (e.g. EUR, USD, e.t.c)
Symbol Left - Allows to specify the symbol, that will be displayed at the left side from the price.
Symbol Right - Allows to specify the symbol, that will be displayed at the left side from the price.
Number of Decimals - Integer number value that specifies the number of signs after decimal separator for price.
Number of Decimals to Show - Integer number value that specifies the number of signs after decimal separator for price that will be displayed.
Decimal Separator - Determines the symbol, that will be used as decimal separator for price values.
Thousand Separator - Determines the symbol, that will be used as decimal separator for price values.
Conversion Rate (USD) - Allows to set conversation rate of the currency, relative to USD.

3.6 Order States