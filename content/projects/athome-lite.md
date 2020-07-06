---
status: "publish"
type: "project"
path: "/projects/athome-lite"
title: "AtHome Lite"
date: "2020-05-17"
tags: ["ux", "ui", "development", "design", "personas", "journey mapping", "iterative design"]
teaser: "Learn how I simplified telemedicine access during COVID-19 by designing a simple, point-to-point video solution enabling roughly 3,000 video visits a day."
---

### Context

As COVID-19 was ramping up, many healthcare providers and front-line workers were struggling to care for patients virtually.  Apps like Zoom, Skype, or FaceTime had too much friction - requiring users on both sides to create accounts, add each other, and download additional software.  As part of Mercy's Innovation R&D Team, we saw an opportunity.

### The Approach

One of our developers pitched a PoC to the team and leadership, demonstrating a simple app that uses web technology to handle live video streaming.  Capitalizing on the idea, we all worked over a single weekend to produce a strong prototype which was demonstrated to senior leadership and approved for continued development.

The application was very straight forward.  Clinical users would sign in via a provider portal.  Once authorized, they could invite a patient via phone or email.  When the invite is sent, the provider is rerouted to a "room", where they wait for the patient to join.  The patient would receive a message via the appropriate channel with a magic link to join the session, once in both parties could instantly communicate via voice and video.  No user accounts for patients and no apps to download.

### My Work

Early on I functioned as a developer for the app, helping scaffold the product and add the basic features with the team.  Once we moved past our MVP I worked to convert the application from plain JavaScript to React.  Doing so helped streamline development and enabled new features for handling invitations, testing user systems, and managing the state of the call session.

As the platform stabilized I took on a stronger design role, working closely with our manager and product owner to block out enhancements to the core experience.  I cleaned up the look and feel of the app, created a basic design system for the UI, improved the usability of the video interface, added the ability to invite multiple users to a video session (a highly-requested feature).

Our simple app became very popular and other health care systems were interested in using it.  To prepare for commercial opportunities, I worked to visualize the reporting, analytics, and user management features.  I also modified the design system to respond to "branded" instances of the product.

### Challenges

Because our app was web-based, we had no control over the environment for use.  Some users were on new iPhones, others were on vintage desktop PCs in hospital rooms, using external webcams.  By incorporating tight feedback loops with users and maintaining strong communication as a team across the ministry at Mercy, we were able to digest feedback and provide fixes in record time.

I worked to maintain simplicity in the UI, especially the video screen as that's the most crucial part of the experience.  This meant finding ways of progressively disclosing features for changing inputs and repositioning elements as the device rotated.

Other challenges arose as features began to grow, such as making it easy to invite multiple people to a session, or add people mid-session.  I talked these, and more, by quickly iterating through designs and getting as much feedback as possible from our product manager and the team.  I was constantly challenging myself to enable more value with less UI.

### Outcomes

By keeping the experience dead simple, the app was lightweight and easy to use.  This helped adoption skyrocket with many physicians and nurses at Mercy opting to use our platform over the incumbent "MyMercy" app - which was plagued with issues and required users to download / install on mobile.

After launching the pilot in late April, we watched our daily user count rise and ultimately supported nearly 3,000 video visits each day in May.  Our app wasn't perfect, but more and more people were adopting it for unique situations such as clinician to clinician meetings, end of life visits, and visitation for unresponsive patients.  AtHome Lite had an exceptional impact on Mercy providers and patients alike.

### UX Artifacts

I drafted some basic personas as we workshopped early ideas on the product.  Initially it was provider to patient, but as we got feedback on how the app was being used, I expanded the profiles to include provider to provider, as well as admin / business users.

![basic personas](/athome-lite/ah-personas.jpg)

First pass on the user journey map making a call with our app.  I highlighted parts of the experience outside our scope to reduce the amount of feature creep and keep us focused on a lean MVP.

![user flow MVP](/athome-lite/ah-usermvp.jpg)

One of the hottest features requested was the ability to invite multiple users to a video session.  To enable this I partnered with our product owner and had a few design workshops.  Each round of iteration helped build strong constraints for the feature, which boosted our confidence in the designs.

![multiple user session](/athome-lite/ah-multi-user.jpg)

As we prepared for commercial adoption of the platform I worked on the user flows for managing users.  This involved adding a new persona to our pool (a technical VP) and required a bit of research into what this person would need from our product as someone who doesn't user the video features.

![user account and management](/athome-lite/ah-user-accounts.jpg)

We hit additional snags negotiating connections in the rooms.  By partnering with another developer I was able to map out the series of events and isolate friction points we could mitigate with better communication in the UI.

![negotiating video access](/athome-lite/ah-video-access.jpg)

### UI Designs

These designs represented the welcome screen on mobile as well as the experience for 1:1 and multi-user video sessions.

![initial screens](/athome-lite/01_initial.png)

At one point I refined the invitation form to use a single input.  Based on the user input, an icon would display an email or phone number to confirm that the input was valid and to reinforce the type.  The previous state used separate inputs for both, which caused usability problems later down the pipe.  I wrote these components as well using React and included error validation.

![invitation screens](/athome-lite/02_basic-invites.png)

Streamlining the invitation input made it easier to expand the invitation form to allow multiple users.  Each invite only needed a single input, and buttons allowed users to expand their guest list.

![multi-invite screens](/athome-lite/03_multiple-invites.png)

To help reduce some support feedback I included a modal in the invite form.  This gave information about what hardware we supported in the app and made our constraints more clear.  Additionally, I designed some snackbar style notifications for the video session UI which more clearly communicated the status of the session.  This highlighted successful entries, connection problems, or when someone would drop a call.  I also began working on the user account management screens.

![modal accounts and snackbars](/athome-lite/04_misc.png)