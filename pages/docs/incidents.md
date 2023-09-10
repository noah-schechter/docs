---
title: About incidents 
description: Incidents are the core unit of content on Atlos. 
---

# {% $markdoc.frontmatter.title %}

## Incidents are the atoms of Atlos 
Incidents are the core unit of content on Atlos. One incident generally corresponds to one event. Atlos isn’t opinionated about how you define an incident; different definitions may be suitable for different investigations. However, we encourage you to consider several factors as you design your data model:
-  **Incidents must have a single location and date—** Incidents on Atlos should be scoped to (or approximated by) a single location and date. This is because of a technical restriction on Atlos; each incident may only have one geolocation and date attribute. We implemented this policy because we wouldn’t be able to map incidents with two geolocation values. Similarly, we wouldn’t be able to filter incidents by date if each had two date values. 
-  **Incidents can include one or more pieces of source material—** Incidents can be more than just a single source link. The incident page on Atlos is designed to include and archive many pieces of source material. That means each incident can be supported by an arbitrary number of social media posts, websites, photos, or videos. 
-  **Incidents should be describable in one sentence—** If your incident description is several sentences long, you’re likely trying to capture too many events in a single incident. Try breaking that event down into several components. 

## Incidents have unique IDs
Referring to a complex event—even one that can be boiled down to one sentence—can be tedious and confusing. To provide a vocabulary to discuss your data, Atlos generates a unique ID for each incident. 

Each ID consists of two parts: a short project code and a six character incident ID. For example, the ID CIV-ABC123 refers to an incident within a project whose code is CIV. See [here](/docs/projects/#project-code) for more on project codes. 

Six character incident IDs are unique and automatically generated on Atlos; no two incidents have the same ID. Project codes are customizable and not unique. It is possible for two investigations on Atlos (even two of your investigations) to share the same project code. 

## Components of incidents
Each incident has a dedicated page with four main components:
- **Attributes—** Attributes are structured data that describe an incident. Geolocation, Time, and Equipment Used are all attributes. They’re customizable and include several data types, so we’ve dedicated a whole section of the Help Center to attributes. See [here](/docs/attributes) for more. 
- **Metadata—** Metadata is data related to the investigative workflow, including an incident’s status, sensitivity, tags, and restrictions. Learn more about Metadata [here](/docs/metadata). 
- **Source material—** Source material is any content that depicts an incident. Source material can include investigator-uploaded photos and videos or Atlos-archived content from the web. We’ve included much more detail on source material in the Help Center section [here](/docs/source-material). 
- **The Feed—** The Feed is the home for collaboration on each incident page. It includes a changelog of the incident’s data and a space for convesration between investigators.  Learn more about the the Feed [here](/docs/comments-and-the-feed).

## Incidents are part of projects 
Every incident belongs to a [project](/docs/projects). To prevent accidental or malicious data loss, Atlos doesn’t permit investigators to change an incident’s project. Instead, we enable researchers to [copy](/docs/projects#how-to-copy-an-incident-to-a-second-project) an incident into a second project. 

## How to create an incident 
To create an incident, click the `+ New` button on the left sidebar menu. You can update any information you add here later except for the incident’s project, which cannot be changed. If you are not part of any project when creating a new incident, Atlos will prompt you to create one first. 

During the incident creation process, you’ll be prompted to complete several attribute fields. You can read more about them [here](/docs/attributes).

## How to delete an incident 
To protect data integrity, Atlos makes actually removing content from the platform impossible. Instead, deleting an incident moves the incident from the main catalog to a separate pane of the project called Deleted. Deleted incidents do not appear in search results or exports but will remain visible by project owners and managers in the Deleted pane of each project. 

To delete an incident, Project owners and managers can: 
1. Click the three vertical dots on the top-right corner of the incident page.
2. Click `Delete`.

{% callout type="warning" %}
If you think an incident in your project contains data that is so sensitive that it must be removed from Atlos’ database, and that other moderation tools, like marking an incident or comment as Hidden or a piece of media as Removed, are not sufficient, please contact us at [contact@atlos.org](mailto:contact@atlos.org). 
{% /callout %}





