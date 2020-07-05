---
status: "publish"
type: "project"
path: "/projects/redlyst"
title: "redlyst"
date: "2019-06-01"
tags: ["mobile app", "iOS", "ui", "ux", "security", "coolfire"]
teaser: "I helped create an enhanced situational awareness platform that puts actionable data in the right hands, at the right time."
---

<h3 class="txt-title">Context</h3>

At Coolfire we partnered with a high-level security group on a new facial recognition and persons of interest management tool. The product had 2 key parts, the first was a web application for users at a regional security hub that enabled data entry and people management. The second part was a mobile app used by field teams to ID and respond to potential security threats. The product was built on top of Coolfire's propriety _Ronin_ platform.

<h3 class="txt-title">Process</h3>

In a perfect world I would have sought to understand the client's mission and goals with the product, worked to understand the users and their current struggles, and gotten more context about how the apps would be used in the field. Unfortunately, that was not possible given some constraints around both the sensitive nature of the client and some organizational issues within our company. So I did these things instead...

I tried to understand the problem by asking questions of the tech lead, when possible. I worked furiously on wireframes and mocks to paint a picture of the app - equipping him to go before the client and get some feedback. I looked for patterns in the feature requests and identified similar solutions from other industries.

Specifically I looked to Salesforce for CRM tools, managing a lot of people. I looked at Facebook for capturing data about people. I looked at Nest for camera and IoT device management. And I looked to Spotify for insights on ways to organize information in different ways. I later used Instagram for their media sharing insights.

The project itself started small, a simple ask to whip up a dashboard for tracking bad guys. Essentially a contact list web app. This evolved into grouping those contacts into various "lysts", an abstraction that could imply anything about the members of the list. Users could record literally any attribute about a person, such as physical description, known associates, places seen, etc. One **wrinkle** came from a constraint that any piece of information could not be overridden. For example, a perp could be spotted with blonde hair. That goes on their profile. 6 months later they are seen with red hair. Both need to live in the profile now because you never know which one the person may have. Same goes for eye color, facial hair, build, height, weight, you name it. The complexity around entering POI (person of interest) data compounded pretty quick.

The client also wanted to label each person in the system with a threat level. This evolved over time to become a category, configurable by the client. Users could label a POI as "Cyber Threat" or "Social Media Stalker" to distinguish the level of attention needed to monitor them. Additionally, a user might go on "high alert", meaning agents needed to be actively looking for this person.

All of which introduced varying levels of complexity around the taxonomy and information hierarchy. Without direct access to the users it was hard to distill down the most important content and map their mental models. Eventually we got there, it was just a slow back-and-forth.

A fairly obvious connection was made between recording things about a person and creating a story on their profile. I put together an "activity feed" for each person as a way for the system to create a narrative of activity. It would track updates to the person's profile, as well as any system-triggered events like face matches or arrests on record. It was about this time the product pivoted from a POI database to a facial recognition and camera network management system.

Coolfire did a lot with IoT devices, so the joke (internally) was every app had to have a map. redlyst was no different. I added maps for people to see where they were spotted or where data was entered. I added maps for "lysts" to visualize groups of people. Then came maps for cameras and maps for locations. This put some stress on the UI as it started out simple - view list of people, view all people. Toggling from a list view to a map view got pretty gnarly and this was when I worked with the development team to refactor a good portion of the UI.

We all agreed that things got out of hand pretty quick, adding features to please the client and "getting things in for demo". Collectively, we took a step back, reframed the problems, and tried to think through a more natural way of surfacing the right information (at the right time).

As this was happening a new ask came in to take the entire web experience and make it happen on a phone. Awesome.

Surprisingly, this was a huge help because the constraints of mobile meant we **HAD** to push ourselves to give the app more focus and real in the user flows. I went back to the drawing board and outlined some key themes the app had started to tackle: _what's happening_, _where are things happening_, and _who needs to know_. This gave me some good tabs to work with - activity, map, messages, more (for more static information like poi, cameras, etc.).

I liked it. Team liked it. Tech lead and client liked it. We were in business. I put together a pretty robust set of screens for mobile, ported them to iPad and tweaked the layout some, then finally spread the love to web and the team went to work.

<h3 class="txt-title">Challenges</h3>

As noted above there were some organizational challenges. We had some differing views on UX and design, and my (non-existent) access to the client was a real hurdle. But, we worked through it and delivered a valuable piece of software that is core to the client's new digital business arm. Before we finished they had already signed on a new VIP to use the platform.

I have since owned my process more, refusing to relent on some of my design values even when company politics or process keep me from doing those things. I now advocate for product mission and vision more up front, building out a story of what success could look like from a value proposition - and relying more heavily on data and insights rather than intuition (be it mine or the client's).

A more specific challenge to this product was the concept of sharing information. Part of the business that evolved for this app was sharing your information. For instance, your team might be based in a specific city and you have a lot of data on this city and the creeps in it. A VIP might be coming to town and they use the same platform. For a price, you could share your information with this other customer - giving them the insights needed to do their job, and contributing to the overall mission of security.

Sharing POI data is a big no no for most of the users, who were ex special forces and naturally untrusting. It was my job to phrase it in such a way that made it crystal clear what information **WOULD** and **WOULD NOT** be shared. I used custom illustrations and a "stepper" view of the process to clearly articulate what sharing POI data and camera networks meant. I then helped tell that story by showcasing a marketplace where users could get the benefits of someone else doing this - building some empathy to the cause and highlighting a potentially lucrative point of sale within the app.

<h3 class="txt-title">Outcomes</h3>

I designed the web and mobile product experiences and worked closely with the development team to iterate through different features. We collaborated to overcome complexities as more features started shipping and delivered a great digital solution for our client's new line of business. It was great working on an iPhone and iPad app which made it to the app store. I also helped the improve the client's branding by developing the redlyst logo, which they loved and trademarked. You can learn more about redlyst <a class="txt-link" href="https://www.redlyst.com" target="_blank">here</a>, and find the app on the <a class="txt-link" href="https://apps.apple.com/tt/app/redlyst/id1470186808" target="_blank">app store</a>.

<h3 class="txt-title">Visuals</h3>

These are some of the design mocks for iOS, all of the photos and data are fake - these aren't real security threats.

![login](/redlyst/00-OpenLogin.png)

![onboarding](/redlyst/01-Onboarding.png)

![activity](/redlyst/02-ActivityFeed.png)

![face_match](/redlyst/03-FaceMatch.png)

![mapping](/redlyst/04-Map.png)

![chat](/redlyst/05-Chat.png)

![sensor_details](/redlyst/06-Sensors.png)

The sharing and subscription screens highlighting what _sharing_ means, as well as how redlyst aims to protect the integrity of their customer's data.

![subscriptions](/redlyst/07-Subscriptions.png)

The marketplace didn't need to rely on user-submitted data. redlyst could in fact provide huge data sets on a marketplace using public information like the FBI's most wanted lists - grouped by any common denominator like region, city, type of offense, etc.

![marketplace](/redlyst/08-Marketplace.png)

I designed a slew of custom illustrations for the app to be used as placeholders, empty states, or to explain abstract concepts visually (like cloud storage).

![branding_interactions](/redlyst/09-Interactions.png)

The biggest shift for desktop was adding the left nav bar and having more screen space to spread out the details.

![desktop_activity](/redlyst/10-Home.png)

![desktop_contacts](/redlyst/11-Selected.png)
