---
title: GeoIP Enrichment documentation
showTitle: true
topics:
    - geoip
---

Enrich PostHog events and persons with IP location data. Simply enable this app and from that point on, your new events will have GeoIP data added, allowing you to locate users and run queries based on geographic data.

## How do I install the GeoIP Enrichment app for PostHog?

1. Log in to your PostHog instance
2. Click 'Plugins' on the left-hand tool bar
3. Search for 'GeoIP' 
4. Select the GeoIP app, press 'Install' and follow the on-screen instructions

## How does the GeoIP User Enrichment plugin work?

This plugin prefers to use event property `$ip` (which should be of type `string`), but if that is not provided,
it uses the IP address of the client that sent the event.

This way in most cases the plugin can infer the IP address without any work on your side.

## How do I add add properties?

The following properties can be added to the event if its IP address can be matched to a GeoLite2 City location:

```TypeScript
$geoip_city_name?: string
$geoip_country_name?: string
$geoip_country_code?: string
$geoip_continent_name?: string
$geoip_continent_code?: string
$geoip_latitude?: number
$geoip_longitude?: number
$geoip_time_zone?: string
$geoip_subdivision_1_code?: string
$geoip_subdivision_1_name?: string
$geoip_subdivision_2_code?: string
$geoip_subdivision_2_name?: string
$geoip_subdivision_3_code?: string
$geoip_subdivision_3_name?: string
```

They are also set on the associated person same as above, plus set_once in `$initial_geoip_...` form, to record where the user was when they were first seen.

## How do I skip events without applying GeoIP enrichment?

A case to be aware of is sending events from a server – such events, if not provided with custom property `$ip`,
will be detected as sent from the location of the data center, instead of the related user.

If you'd like this plugin to skip over an event and not add the above properties,
set property `$geoip_disable` to `true` on that event.

## How to install PostHog's GeoIP User Enrichment plugin?

1. Access PostHog's **Plugins** page from the sidebar.
2. Go to the **Advanced** tab.
3. **Fetch and install** the following URL in the **Install from GitHub, GitLab or npm** section:  
   `http://github.com/PostHog/posthog-plugin-geoip`.
4. Enable the plugin and watch your events come in with enriched data!

## What if I have feedback on this app?

We love feature requests and feedback! Please [create an issue](https://github.com/PostHog/posthog/issues/new?assignees=&labels=enhancement%2C+feature&template=feature_request.md) to tell us what you think. 

## What if my question isn't answered above?

You can [join the PostHog Community Slack group](/slack) to ask more questions, or get advice on developing your own PostHog apps.