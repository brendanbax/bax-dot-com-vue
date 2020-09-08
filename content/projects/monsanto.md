---
status: "publish"
type: "project"
path: "/projects/monsanto"
title: "Monsanto"
date: "2018-07-01"
tags: ["ui", "ux", "design", "mobile", "mapping", "plants", "genetics"]
teaser: "I took point conceptualizing various apps to solve different planning, breeding, and harvesting challenges for an agro-chemical company."
---

As a member of Monsanto's product team I took point conceptualizing various apps to solve different business challenges.  Some apps were meant to inspire opportunity, others were refactors to existing tools.

### Bredbox

Officially called "Nurture", this was an application concept that streamlined data capture for controlled environments (think greenhouses). The driving force behind this project was reimagining a complex UI to accommodate new features coming down the development pipeline.

My first step was understanding the product and how it was used.  I partnered closely with the development team to learn about their users, context, and what the app did in it's current form.  Key points of friction included difficulty onboarding into the app and easily changing workflows or pollination plans based on user context in the greenhouse.

![flow](/monsanto/b-0.png)

I broke apart the flow to make onboarding and location selection easier, two key activities that drive what workflows a user can accomplish.  Users could only perform certain activities in certain zones, so selecting the correct spot was paramount.  App navigation echoed the mental model of users moving throughout a facility.

I also introduced a wizard of sorts to help move users through the pollination process (prep, pollinate, observe, harvest).  These additional steps of the process were part of Nurture's roadmap moving forward so the app had to account for them in the navigation.

![flow](/monsanto/b-1.png)

![flow](/monsanto/b-2.png)

The other major challenge involved handling pollination activities.  There was a disconnect between experiment orders and the actual greenhouse layouts.  Scientists would set up breeding plans at their desk, then go to the greenhouse to execute - but the plants weren't always in the same order or location as expected.

The development team were geniuses and built some amazing features into the app that used the camera to scan plants and barcodes.  We capitalized on this and offered a progressive experience to match plants together.  Users could scan a plant to see a list of available experiments.  The camera UI would let users tag a plant as male or female in the experiment then return a list of options to execute.  It's a little wacky to explain out of context - but suffice it to say, it made matching plants eaiser and sought to improve breeding accuracy.

I even put together a usability study to get feedback from real users (physical and digital) about the app.  We hosted a half day workshop at one facility and walked users and stake holders through the app.  Insights were iterated on to continue to improve the product.

![flow](/monsanto/b-4.jpg)

![flow](/monsanto/b-3.jpg)

The name Bredbox was a play on words, and used as a code name for the project.  "Bred" is the past tense of breed, as in breeding plants. A breadbox is a container for keeping loaves of bread fresh and protected - much like a greenhouse. This app will help plant breeding teams keep track of their controlled environment pollinations by capturing samples, pollination events, harvests, and other activities within greenhouses.

### Annex

Over time, Monsanto had developed applications with overlapping features as different business groups funded different projects.  Some shared common "big picture" objectives, so I was tasked with merging 2 native iOS applications into one cohesive experience.

I started by interviewing development teams to learn more about their applications.  After an exhaustive inventory of the current apps, I built a matrix of features and personas who use them and put them in buckets based on needs. I found that some users only wanted to view information on a map and filter data layers based on a task done outside the app. Other users wanted to have a to-do list and only cared about crossing items off.

Some apps were built with a map as the primary interface.  Others had nested menus and complex tabs for task management.  In most cases, relevant information was always several taps away.

![flow](/monsanto/a-0.jpg)

I took a decidedly *human-centered* approach to the application design.  The encumbant apps were built around the database structure, objects, what APIs served what information, without much regard for what users actually cared about interacting with.

To make using the app simpler I boiled the interface down to *viewing*, *adding*, or *manipulating* data.  These 3 states are on equal footing at the app root and launch experiences that are laser-focused on the task at hand.

![wireframes](/monsanto/a-1.jpg)

Information could now be viewed on a map, which is manipulated with layers and zoom levels.  The capture state gave a menu of types of data that can be captured.  Some required GPS access while others are just forms to fill out. I grouped observation types based on physical attributes rather than data attributes as users didn't need to know the object structure in the database.

![app mock one](/monsanto/a-2.jpg)

![app mock two](/monsanto/a-3.jpg)

"Annex" was my codename for the project.  My role was early concepts - working to understand the issues and prototype a potential solution.  The work lasted a few weeks and I produced some higher fidelity mockups to ignite more interest in this project.

### Periscope

Periscope is a prototype for non-corporate users to collect data outside the organization firewall.  Periscope emphasizes easy to use controls for filling out forms and tracking activities and progress in a simple "todo" fashion.

I started by working with the Product Manager to understand they key personas using the product, as well as the general flow he was expected based on their daily work.  There was an *internal manager* who would send a bulk email out to external users on a list.  These *external collectors* were seasonal help (students, interns, etc.) who would have their own smart device.

![flow](/monsanto/p-0.jpg)

The manager sends an invite via email, the users download the app from the app store, and can create an account and start collecting data.  This app offered basic worklow automation with users getting a list of tasks or activities to complete.

Aside from user management, the main app experience was contained to "todo" style interactions.  Users needed to answer questions quickly and efficiently (which meant no freeform text input because keyboards on phones are the worst).

![screens](/monsanto/p-1.png)

Inspired by Google Surveys, I took a deep dive into the types of data the user may need to provide - and designed more elegant interactions to support them.  The end result was an app that made data collection simple, easy, and accurate.

![mocks](/monsanto/p-2.png)

Periscope was just my code name as this app didn't have a name or brand yet.  My role was just kicking off the initial idea so others could pursue development when the time came.