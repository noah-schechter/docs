---
title: Importing and exporting data
description: Data on Atlos is easily portable.
---

# {% $markdoc.frontmatter.title %}
Data on Atlos is easily portable. Our goal is to support your investigations wherever they might go, not to lock you in.

## How to Import Data
Researchers that have accumulated a large amount of data before beginning working on Atlos can import their data into Atlos. However, we recommend keeping your investigation on Atlos whenever possible. Our change-tracking and archival systems can’t be used on data that’s not yet in Atlos—the faster data is added to the platform, the faster we can assure its integrity. 

To import data, navigate to Projects and select the relevant project. The bulk import function is at the bottom of the Manage tab. Click `Upload a file` to add a CSV of incident data to Atlos. See Formatting below for a full explanation of acceptable CSV formats. Note that bulk import is accessible only to project owners. 

### What is a CSV? 
Atlos uses CSVs to make the platform compatible with all spreadsheet software. CSVs standardize spreadsheet data as values separated by commas. 

For reference, we’ve included a spreadsheet and CSV representing the same data: 

_Spreadsheet_
{% table %}
* status
* description
* sensitive
---
* Unclaimed 
* Explosion along river
* Not Sensitive
---
* In Progress
* Explosion along road
* "Deleted by Source,Deceptive or Misleading"
{% /table %}

_CSV_

status,description,sensitive

Unclaimed,Incident along river,Not Sensitive

In Progress,Incident along road,"Deleted by Source,Deceptive or Misleading" 

### Recommended Workflow
We intend for CSV files to be a tool for transferring data from your spreadsheet to Atlos. We recommend: 
1. Editing your data in a spreadsheet (Google Sheets or Microsoft Excel both work),
2. Exporting your spreadsheet as a CSV, and
3. Importing that CSV into Atlos. 
In this article, we visualize the format Atlos requires for bulk import in its spreadsheet format, before the data has been exported into a CSV.

### Formatting for Bulk Import
**Required columns—** Atlos requires three columns in all bulk imports. Spreadsheets must include three titles in the first row:

{% table %}
* status
* description
* sensitive
{% /table %}


**Order—** The order of these column headers is not relevant; Atlos will not treat the following tables differently:

{% table %}
* status
* description
* sensitive
---
* Unclaimed 
* Explosion along river
* Not Sensitive
---
* In Progress
* Explosion along road
* "Deleted by Source,Deceptive or Misleading"
{% /table %}

{% table %}
* sensitive
* status 
* description 
---
* Not Sensitive
* Unclaimed 
* Explosion along river
---
* "Deleted by Source,Deceptive or Misleading"
* In Progress
* Explosion along road
{% /table %}



**Case sensitivity—** Bulk import is sensitive to the capitalization of column names. Bulk import of a spreadsheet with the sensitivity column titled “Sensitive” will fail because the title is capitalized. 

**Optional columns—** It’s possible to import more data than just status, description, and sensitivity. The full list of allowed columns is dependent on each project’s list of attributes. Instead of providing comprehensive documentation of permissible columns here, we provide it in the in-platform documentation on the Bulk Import page. As an example, here’s a spreadsheet that can be bulk imported into a project that uses Atlos’ default data model:

[TOOO: make this smaller]
{% table %} 
* location
* status
* description
* date
* sensitive
* source_1
* Impact
* Equipment Used
---
* 50.476776185687186, 34.92377349447404
* Unclaimed
* https://ukraine.bellingcat.com/?id=CIV1483
* 2022-10-02
* Not Sensitive
* https://t.me/hyevuy_dnepr/37868
* Roads/Highways/Transport, Administrative, Commercial
* Land mines
--- 
* 46.63123689796267,32.61207480964933
* In Progress
* https://ukraine.bellingcat.com/?id=CIV1738
* 2022-23-12
* Not Sensitive
* https://twitter.com/Tendar/status/1606406179604897798
* Residential
* Incendiary munitions

{% /table %}

**Differences between bulk export and bulk import—** Bulk exports are compatible with bulk imports; it is possible to bulk import a CSV that you’ve exported from Atlos. However, bulk import will not process all data included in bulk exports. Specifically, if you include “slug”, “inserted_at”, and “updated_at” columns in a bulk import, Atlos will not interpret these fields. These fields are relevant to exports, because they describe key information about incidents:
- **“slug”** refers to incident IDs.
- **“inserted_at”** describes when an incident was created. 
- **“updated_at”** refers to the last time that an incident was edited. 

These fields will not impact data that has been bulk imported to Atlos because they describe metadata about incidents that is automatically generated. 

[VIDEO]

## How to Export Data
We think Atlos is a great tool for collaboration at scale. It’s not great for everything. Whether investigators are looking to archive media forensically, publish their data, or just take another look in a Google Sheet, sometimes it’s necessary to export data. Atlos make exporting to a CSV extremely simple. See [here](#what-is-a-csv) for more information on the CSV file type.

To export all of a project’s data, navigate to Projects and select the project whose data you wish to export. Once you’ve opened a project page, you will find the `Export` button on the top-right corner of the screen.

To export the results of a search, click the [insert inline image] icon in the search bar.