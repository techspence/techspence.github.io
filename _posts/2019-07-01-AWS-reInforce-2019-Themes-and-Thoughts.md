---
layout: single
classes: wide
title: "AWS re:Inforce 2019 - Themes and Thoughts"
date: 2019-07-01
tags:
  - AWS
  - Conferences
  - Brain Dump
---

# The Inagural re:Inforce
This year was the inagural AWS re:Inforce conference, held in Boston, June 25-26th. For anyone unfamiliar re:Inforce is a conference dedicated solely to security OF and security IN AWS.

While at the conference I attended 10 sessions ranging from 1-2 hours each. One of those sessions was a security leadership tabletop exercise, which was eye opening and very much a big learning experience. I also attended a hands-on session with the AWS Security Hub. While at the conference AWS also offered free training via QwikLabs. I completed two 1-hour trainings on AWS Identity & Access Management (IAM) and Simple Storage Service (S3).

For future reference, QwikLabs was really nice, easy to understand and follow and fairly detailed learning. This might be a great way to get some early/introductory knowledge and hands-on experience of the AWS services. Courses range from introductory to expert. More info here: https://aws.amazon.com/training/self-paced-labs/ 

## Themes
- Identity is the new perimeter
- Governance is more important than you think
- Security is a journey not a destination
- Encrypt everything (seriously)
- Layered security is still a best practice, even in the cloud
- Security is a business problem that's solved by people, process and technology
- Be pro-active
- Shifting mindset from disaster recovery to risk resiliency
- Automate, automate, automate

## Thoughts
- Least privilege is a journey not a starting point. It takes time to experiment and figure out what access is needed.  Allow some flexibility, figure out what’s needed, what works and go from there. Subtle strokes not big sweeping changes.

- Governance is more important than you think. Continuous leadership buy-in/executive sponsorship is a vital component of a successful security program and without it you lack funding which in turn severely limits the impact of the security program.

- Don’t underestimate foundational security. Creating a baseline level of security in major areas such as IAM and Incident Response will help prove security capabilities are effective and ROI positive to the business and help you continue to secure budget. For me see the AWS Cloud Adaption Framework and the CAF Security Perspective.

- Encrypt everything is no longer a meme. The biggest complaints against encryption: difficult to implement and speed are no longer valid when you consider how easily encryption is implemented in AWS and how well it performs.

- When it comes to access control and networking and communication, it’s important to consider controls that allow for opt-in as opposed to opt-out. Aka security on by default, no communication by default, no routing by default.

>“Nobody wants to fall into a safety net...but it beats the alternative.” 
>
>-Lemony Snicket. 

- No one likes getting tricked by security tests but they are better off getting tricked by you, learn from it and improve than get tricked by an attacker.

>“A ship in harbor is safe, but that’s not what ships are built for” 
>
>-William Shed. 

- This is applicable to security and business because ultimately you have to take some risks. You are a business after all and the very act of doing business is a risk. Ultimately there is going to be risk. In order to innovate and grow and succeed in business you’ve got to be able to control and mitigate risks. Focus on shifting from a mindset of disaster recovery to risk resiliency.

- Engineering, especially cloud and platform engineering is becoming a very necessary team in today’s organizations. For Utica maybe this means dedicating more resources to hire engineers.

- Should talk/review our AWS account/permission strategy or the strategy OS plans to use. Should we have separate accounts for prod, dev, test or should it be separated by LOB or something else?

- Focus on the security objectives but don’t be close minded on the method or the strategy in which those objectives are achieved. How things are done in the on prem world may be and is very likely done differently in a cloud env.

- Open trust model: everything and everyone has access to everything. This is no longer acceptable. Segmentation and isolation are key.

- Standardize security controls, rules and guidance but don’t centralize. What this means in this context is to allow developers or other users to have flexibility so they remain secure without needing security to intervene and grant access for every little thing. Creating guardrails enables the company to move fast AND stay secure.

- Keeping the people away from the data greatly increase security posture.

- Production should be a release only environment with very little, restricted and time controlled human access.


## Closing Note
It’s super important for me as someone new to infosec and working their way up the ranks to continually seek perspective outside of my own. I’m so thankful to be able to attend events, talk to other infosec people, industry experts. This was definitly time well spent.