---
status: "publish"
type: "project"
path: "/projects/redlyst"
title: "Redlyst"
date: "2019-06-01"
tags: ["ui", "ux", "design", "mobile", "mapping", "secuirty", "face recognition"]
teaser: "I helped create an enhanced situational awareness platform that puts actionable data in the right hands, at the right time."
---

### Background

Redlyst was a strategic partnership between Coolfire Solutions and a private security company.  They handled security for VIPs such as pop stars and politicians, specifically threat mitigation and running event security.  Their process was very manual.  It involved eye-witness surveillance, radio communications, and binders of info about potential security threats.

### Challenge

At Coolfire we wanted to digitize their operation to reduce response times to threats, improve accuracy verifying threats, and increase overall situational awareness.

### Seeking to Understand

As the lead product designer I worked closely with our Principle Software Architect and the client to understand the existing security methodologies - seeking to uncover opportunities to improve it with software.

Coolfire staff was able to be present at various events, observing the security teams in action.  We identified key personas such as mobile field agents who moved throughout the crowd responding to threats, and command center agents who digested and distilled massive amounts of data before forwarding it to the field agents.

Descriptions were given over a radio.  Security camera feeds were paused so faces could be looked up in binders.  Lists of potential threats were printed and handed out to ground teams.  The entire process was manual.

Even still, these highly skilled agents with decades of experience were amazing at their jobs.  Our goal was to make them even better.

### The Product

Redlyst had two sides - managing huge amounts of data about persons of interest (potential or known threats), then responding to threats in real time.

POI management essentially became a robust contact list, similar to a phone book.  We let users add any information they needed about a person including physical descriptions, media, social accounts, locations, aliases, connections, etc.  Care was given to content types and hierarchy, and we had to account for living data - meaning each attribute on a person was versioned so users could see a virtual timeline about anyone.

Ex: a suspect might have blue hair today, but they were blond last week.  So ground teams would need to know to look for both blue and blond haired people to identify this threat.

This database of persons helped fuel the real time response technology.

Redlyst could take advantage of security cameras at different venues, as well as pop up cams / kiosks the team could manually position.  The feeds would check for known threats with a confidence score and bubble up probable matches to a dedicated "sensor feed".  Users could manually verify a match then confirm or reject it - and that activity would get saved on a persons profile.

The feeds were expanded to include social media posts that were tagged as potentially threatening, as well as other types of sensor feeds (motion, proximity, noise, etc.) depending on the situation.

We also gave special attention to managing the sensor network, making it easy to deploy sensors to a location, group them, monitor, and even decommission as needed.

Redlyst also featured real-time chat between mobile and desktop users, AI driven threat level suggestions, robust user management, and a new community data marketplace for sharing anonymized information.

### Outcomes

Digitizing the POI data helped make updating records fast and easy, and it enabled anyone with the app to stay in the loop - nobody ever had outdated information regarding potential threats.  This was especially helpful for field agents as they previously relied on verbal descriptions of people.

Our facial recognition technology helped add eyes and ears throughout venues so the security team could focus their efforts on _responding_ rather than _finding_.  It also improved the efficiency of the command center agents as they could monitor feeds from multiple events simultaneously.

The bonus features like chat and threat prioritization were also welcome additions, making communication more effective and surfacing the right information at the right time.

You can learn more about redlyst <a class="link-body" href="https://www.redlyst.com/" target="_blank" rel="noopener noreferrer">here</a>, and find the app on the <a class="link-body" href="https://apps.apple.com/tt/app/redlyst/id1470186808" target="_blank" rel="noopener noreferrer">app store</a>.

### Product Designs

We used 2 factor authentication to limit access to the mobile application.

![login](/redlyst/00-OpenLogin.png)

Redlyst was designed to be a commercial product for other security groups beyond Coolfire's strategic partner.

![onboarding](/redlyst/01-Onboarding.png)

These are some of the designs for iOS, all of the photos and data are fake - these aren't real security threats.

The activity feed showed important people for field agents to be on the look out for, as well as the latest sensor hits, social media posts, and active persons of interest.  When launching the app this feed gave agents the most relevant and new information.

![activity](/redlyst/02-ActivityFeed.png)

Face matches over a specified threshold were bubbled up to users to validate.  Agents could confirm a suspect, and even flag them as high alert - sending notifiations to other users to be on the watch for this individual.

![face_match](/redlyst/03-FaceMatch.png)

The map view was key to increasing situational awareness.  It offered geospatial insights into events, sensors, and agents equipping command center agents with the best information.

![mapping](/redlyst/04-Map.png)

Chat allowed agents to communicate without the need for radios or headsets.  This was helpful for concerts where the environment audio can be crushing.  Messaging can be 1:1 or group / topic based.

![chat](/redlyst/05-Chat.png)

As we moved toward managing a network of sensors in the app we found users needed more insights into the health of each node.  These screens offered a technical view of the equipment, helping a new persona (the technical agent) maintain their gear.

![sensor_details](/redlyst/06-Sensors.png)

The sharing and subscription screens highlighting what _sharing_ means, as well as how redlyst aims to protect the integrity of their customer's data.

![subscriptions](/redlyst/07-Subscriptions.png)

The marketplace didn't need to rely on user-submitted data. redlyst could in fact provide huge data sets on a marketplace using public information like the FBI's most wanted lists - grouped by any common denominator like region, city, type of offense, etc.

![marketplace](/redlyst/08-Marketplace.png)

I designed the Redlyst logo as well as a series of custom illustrations for the app to be used as placeholders, empty states, or to explain abstract concepts visually (like cloud storage).  The idea of instant facial recognition searching came up as well - so this screen showed a potential action to let users scan a face on the spot, similar to searching by photo on Google.

![branding_interactions](/redlyst/09-Interactions.png)

For desktop I used a left nav bar to provide more screen space for the POI details.

![desktop_activity](/redlyst/10-Home.png)

![desktop_contacts](/redlyst/11-Selected.png)
