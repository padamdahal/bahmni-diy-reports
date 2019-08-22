## DIY (Drag and Drop) Report for BAHMNI
### Get Started
1. Clone the repository in /var/www/html.
2. Add reports in bahmni-reports app (/opt/bahmni-web/etc/config_dir/openmrs/apps/reports/) that supports csv output format with "diy":"true". Sample can be found [here](https://raw.githubusercontent.com/padamdahal/bahmni-diy-reports/master/sample_reports.json)
3. Browse server-ip/bahmni-diy-reports

Powered by [pivottablejs](https://pivottable.js.org) and [papaparse](https://www.papaparse.com/)