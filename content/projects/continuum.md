---
status: "publish"
type: "project"
path: "/projects/continuum"
title: "Continuum"
date: "2020-02-17"
tags: ["mobile app", "react native", "ux", "ui", "design", "healthcare"]
teaser: "Learn how I simplified telemedicine access during COVID-19 by designing a simple, point-to-point video solution enabling 3,000+ video visits a day."
---

### Context

Continuum is a telehealth platform built around quality, continuous care that is readily available when patients need it. There are two parts to the platform. A web application for care teams comprised of doctors and nurses who manage patients remotely, and a mobile application for patients and patient care givers (parents, loved ones, home health workers). The word _continuum_ means a continuous sequence, and this product aims to solve the issue of fractured patient care between home, hospital, and specialist visits.

I joined the project in July 2019, roughly 10 months into development. Work began with an agency who constructed the web experience based on an existing product and business need. The company I joined had severed the relationship with the agency and moved development internal - my role was to steward the product vision and execution as a UX Designer and Developer. The name "Continuum" was inherited from the agency and product team, but I created the logo and branding. The companion experience was called "Joy" on mobile was an iOS app for iPads, developed by our in-house mobile team.

Through a truly remarkable series of events, leadership dropped the platform completely in August of 2019, in favor of a 3rd party startup vendor. This wounded the team and devastated morale, which resulted in losses of leadership, product management, and developers who were frustrated with the situation. The few who remained, myself included, stuck around to try and make sense of the platform and repurpose it.

New leadership was brought in, a new vision was cast, and a new line of business was contacted regarding our platform and how it might benefit their patients. Work began in early January 2020 on revisions to the mobile app, rebuilding it from the ground up as a hybrid app for iOS and Android - enabling a new group of patients to interface with their care teams on mobile.

### My Work

As I mentioned before, my role was as a hybrid designer and developer. Early on my contributions were to the web experiences for the care teams at the hospitals. The app was written in Vue.js, which I had never used, so I worked to become well-versed in the framework to contribute to the codebase.

I wrote some reusable, tested components for inputs that auto-validated and formatted things like phone numbers and dates. I created a dynamic, versioned note-taking service as well using Vue, Node.js, and PosggreSQL which allowed us to create a variety of general "patient notes" in the app, that are saved and updated to be HIPAA compliant.

I also helped reduce some technical debt by writing smarter Vue components that leveraged lifecycle hooks and Vue's convenient scoped style blocks.

Prior to the platform drop, I worked with the mobile development team to iterate on their application design - a new constraint required the app to function on iPhone as well as Android devices. The current design was not responsive so I created a version which scaled down without losing any of the key features from tablet. The app finally hit app stores in December, but without the service line active there were no users.

In December of 2019 we started connecting with the new service line who would use our platform. I interviewed the care team members and sought to understand their pain points and the friction experienced helping patients. I also observed their work and took note of the processes in place to provide quality care.

When our team got a new product manager, I participated in an end-to-end journey mapping session where we dug deep into the complexity of how this service line operated. I worked closely with our PM to qualify the problems at a macro and micro level. We interviewed a series of other service line managers at the hospital, seeking to understand their view of the world and paint points.

We were exposed to new technologies which got mapped to problems facing healthcare as a whole (macro), as well as daily challenges or business constraints facing the hospital, micro-level issues. This collaboration gave us a stronger understanding of today's problems and aided in the distillation of a clear mission: "create strong communication between patients and care givers".

I broke the mission down to a vision of the product: _building a platform that enables easy access to resources needed for patients to receive the best care possible._ The web view for care teams was sufficient for now, but we desperately needed a mobile app for iOS and Android to get patients into the system and using the product.

I worked to cast an MVP vision of the app using Sketch, iterating over designs with our PM and service line manager. I created the _Continuum_ logo and branding to help sell our vision to leadership and build momentum around the project. The care teams were pumped, leadership was pumped, and the team had something to rally behind.

![Branding](/continuum/00-LogoDesign.png)

### Challenges

If you've made it this far, you can start to see the challenges everywhere. One of the most obvious ones was the platform itself. We inherited an existing product, purpose built for a specific line of business, and conceived as a copy of another existing product in use by the care teams. There was no MVP or clear vision guiding the apps, it was originally a copy / paste effort to reduce a financial dependency.

But more to the metal of what we faced in the trenches...

Before we stopped to think about what we needed to make, the team had already started rebuilding the previous app. The assumption was that all these features and functionality were (mostly) built and were (likely) needed. I pushed hard on the team to stop and consider what the purpose of our app was - so we could focus our efforts on a fantastic user experience. I encouraged us to build an app that did 1 very important thing really well, and to grow it from there. Our new product manager was a great advocate for me and helped guide the teams way of thinking toward this objective. His continued support was very impactful.

From a technical standpoint, I had never used React Native or Vue. I had React experience from personal projects but had never used either of these frameworks / libraries in production. Vue was a treat to learn - frustrating at first but I grew to love its opinionated nuances. React Native was awesome to learn and I felt like I had super powers building out parts of the UI. The hardest part was determining how to handle global styles and type rules without touching every component file.

Another challenge I faced was balancing my time between UX Design, product vision, roadmapping meetings and learning. When push came to shove, I prioritized product vision above all because the team needed a target to shoot for. We had already lived that life of writing a bunch of code for no reason - there was no need to go back and do that over again.

An unforeseen challenge that crept up was around defining **good** UX. The company had limited experience shipping consumer applications - the only other one being Joy, from the previous development team. I found it hard to settle for subpar experiences in the app and would constantly champion for higher standards. The assumption that we could ship a mediocre product and "fix it up later" didn't sit well with me, as the track record here has shown that you may never get that chance.

### Outcomes

By applying product design thinking, I helped create a better understanding of the problem space for the team.

As a designer I crystalized the product vision, illustrating how our platform solves a specific set of problems.

By working with the business more, we helped distinguish our platform from previous products, emphasizing our specific value.

As a developer I contributed to the code base and helped implement our new mobile experience with React Native.

![launch flow](/continuum/01-Launch.png)

![create account](/continuum/02-CreateAccount1.png)

![create account](/continuum/03-CreateAccount2.png)

![account recovery](/continuum/04-AccountRecovery.png)

Partway into the design of the app the team decided to include user accounts, which meant adding a complete onboarding and account setup flow. In addition, the user themselves **MAY NOT** be the patient receiving care from the team - so I had to add a proxy state to the app. You are logged in as yourself, but you will be viewing the information for a patient whom you care for. This solved a problem related to parents taking care of their sick children (which we had use-cases for from the care team).

![linking patients](/continuum/05-LinkingPatients.png)

![patient list](/continuum/06-PatientList.png)

![chat](/continuum/07-CareTeamChat.png)

![surveys](/continuum/08-Surveys.png)

![education](/continuum/09-Education.png)

One core philosophy of the app was **strong communication** so I wanted to maintain access to relevant content anywhere in the app. These in-app notifications allow users to view and respond to messages without leaving their current task, such as completing a survey.

![In App Notification](/continuum/10-InAppNotifications.png)

![user settings](/continuum/11-UserSettings.png)
