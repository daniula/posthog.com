---
title: How the Zendesk Connector app works
showTitle: true
topics:
    - zendesk connector
---

## What does ththe Zendesk Connector app do?
The Zendesk Connector app can import new and historic ticket events to PostHog. However, only the Date Type User Field is currently supported.

## Are there any limitations?
The ZenDesk API has a limit of 400hits/min. If you have higher ingestion than that, please contact Zendesk.

## How do I install the Zendesk Connector app?
Make sure to use your Zendesk Admin Account to perform the below activities.

- Head Over to Zendesk's Admin section -> Settings -> Account.
- In the Branding section, scroll down to Subdomain and find your subdomain there. 
- Head to the Admin Section -> Channels -> API.
- In Settings, follow the below steps:
  + Turn On Token Access.
  + Click on Add API Token.
  + Give it some name like PostHog.
  + Copy the Token(You won't be able to see it later).
  + Save the Token.

Next, Head to the Admin section -> Manage -> User Fields. Click Add Fields and follow the steps below.

  + Give Name
  + Select Type `Date`.
  + Add field key, (you will be required to share this key in PostHog while setting up)
  + Click Save.

## What if I have feedback on this app?

We love feature requests and feedback! Please [create an issue](https://github.com/PostHog/posthog/issues/new?assignees=&labels=enhancement%2C+feature&template=feature_request.md) to tell us what you think. 

## What if my question isn't answered above?

You can [join the PostHog Community Slack group](/slack) to ask more questions, or get advice on developing your own PostHog apps.