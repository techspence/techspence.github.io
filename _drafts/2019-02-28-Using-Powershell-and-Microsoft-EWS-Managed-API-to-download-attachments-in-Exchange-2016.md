---
layout: single
classes: wide
title: "Using Powershell and Microsoft EWS Managed API to download attachments in Exchange 2016"
date: 2019-02-28
---
Have you ever used a piece of software that provides no way of saving attachments or reports directly to a file? Yeah, me too. It's frustrating. I'm very passionate about automating repetitive tasks and the frustration I've had over this particular issue has caused me to look into a solution. What I found was that I can use my beloved Powershell, in combination with Microsoft Exchange Web Services Managed API, to download attachments from my (or any other) outlook mailbox. So, to solve this little problem and add a bit of automation I have created a Powershell script, that runs from a scheduled task, that will do just that. This blog post describes the details of how this Powershell script works. I call it, not so cleverly, [EWSEmailAttachmentSaver](https://github.com/techspence/EWSEmailAttachmentSaver).