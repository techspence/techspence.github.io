---
layout: single
classes: wide
title: "Using Powershell and Microsoft EWS Managed API to download attachments in Exchange 2016"
date: 2019-03-08
---
Have you ever used a piece of software that provides no way of saving attachments or reports directly to a file? Yeah, me too. It's frustrating. I'm very passionate about automating repetitive tasks and the frustration I've had over this particular issue has caused me to look into a solution. What I found was that I can use my beloved Powershell, in combination with Microsoft Exchange Web Services Managed API, to download attachments from my (or any other) outlook mailbox. So, to solve this little problem and add a bit of automation I have created a Powershell script, that runs from a scheduled task, that will do just that. This blog post describes the details of how this Powershell script works. I call it, not so cleverly, [EWSEmailAttachmentSaver](https://github.com/techspence/EWSEmailAttachmentSaver).

Although this blog post is more related to system administration than security in terms of who would be creating this type of script at a given organization, my opinion is that the same qualities and skills that make up a good sysadmin overlap with the qualities and skills that make up a good information security practitioner. Fortunately, I work for an organization that has a relatively small IT department and I am given the freedom and autonomy to work on projects like this. Also, i've worked my way up the ranks from Help Desk and I am used to creating these scripts and automated processes, because that's what I have been doing the last 8 years. So now onto explaining the script..

But first one quick note.

I think it's really import to make sure you provide good documentation with and/or within your scripts. As I grow and develop my own skills I am reminded regularly how important good documentation is. I will go into more details about this in another post. But know that, if you plan to use a script in a production environment, please do document well, use common language and built-in functions. It helps troubleshoot issues immensely in the future, especially if someone else takes over your scripts.

## Resources
Upon deciding I wanted to create a script to automate some of my daily reports I found some very helpful blog posts. The two main blog posts this script was built from are:
- [EWS Managed API and Powershell How-To series Part 1](https://gsexdev.blogspot.com/2012/01/ews-managed-api-and-powershell-how-to.html)

- [Writing a simple scripted process to download attachments in Exchange 2007/ 2010 using the EWS Managed API](https://gsexdev.blogspot.com/2010/01/writing-simple-scripted-process-to.html)

Glen's examples and write ups were very helpful in understanding EWS and how to write some Powershell to work with the API. Thanks Glen! If you are interested in learning more about Exchange or Office365 and Powershell, be sure to check out his blog. [Glen's Exchange and Office 365 Dev Blog](https://gsexdev.blogspot.com)

## EWS Email Attachment Saver

**Requirements**

This script requires:
- Exchange 2007 or newer
- Exchange Web Services (EWS) Managed API 2.2

**User Defined Variables**

At the top of the script, under the comment section you will see a handful of user defined variables. If you use this script, most of your changes will occur here. This is all pretty standard stuff.

This script has several functions:

**`Function LogWrite`**

Using `!(Test-Path $logpath)` I first check to see if the path to the log file exists, if not I create it. If it does exist, I use the `Add-content` cmdlet to send information i've specified to the log file.

**`Function FindTargetFolder`**

This function loops through the processed folders path until target folder is found. In my script, i've conveniently make the processed folder directly underneath the root of my mailbox.

Fun little side-note, the root of your mailbox is called the _Top Information Store_ and is sometimes displayed like this `\\email@company.com`.

Note, that my script assumes that the _processed folder_ is a subfolder of the root of the users mailbox (e.g. `\\email@company.com\ProcessedFolder`)

Fun little fact I found out was that, if you change the _processed folder_ to be underneath any other folder, including the Inbox, the script requires slight modification.

If your _processed folder_ is a subfolder under any other folder you must change `$processedfolderpath` and `$tftargetidroot` appropriately.

To quickly view the outlook folder location, right click on a folder in outlook, then click properties.

_Example: processed folder is a subfolder of the root mailbox:_ `Location: \\email@company.com\ProcessedFolder`

```Powershell
$processedfolderpath = "/ProcessedFolder"
$tftargetidroot = New-Object Microsoft.Exchange.WebServices.Data.FolderId([Microsoft.Exchange.WebServices.Data.WellKnownFolderName]::MsgFolderRoot,$mailbox)
```
_Example, processed folder is a subfolder of Inbox:_ `Location: \\email@company.com\Inbox\ProcessedFolder`

```Powershell    
$processedfolderpath = "/Inbox/ProcessedFolder"
$tftargetidroot = New-Object Microsoft.Exchange.WebServices.Data.FolderId([Microsoft.Exchange.WebServices.Data.WellKnownFolderName]::Inbox,$processedfolderpath)
```

**`Function FindTargetEmail`**

This is the main driver function that controls most of the scripts actions. Essentially this function loops through the emails that have been found using our filters, which I will explain in a minute, then it:
1. Determines the download location based on the attachment name
2. Saves the attachment to the download location, then closes it
3. Marks the email(s) as read then moves them to the processed folder

As you can see there are some splitting of attachment names and some hackery to make sure I move the files to the correct monthly folder. This is just my own OCD, it's not really necessary. :)

## Using the Exchange EWS API

Now that i've explained what the functions do, we can move on to explaining the Exchange EWS API. To learn more about it, see [Download the Microsoft Exchange Web Services Managed API 2.2 from](http://www.microsoft.com/en-us/download/details.aspx?id=42951).

**Download and Install the EWS Managed API**

Once you have downloaded and installed the Exchange EWS API components you need to load the EWS dll into a variable, then load it so you can begin working with it. You can see more commands and functions related to the EWS API here [Microsoft EWS Managed API Reference](http://msdn.microsoft.com/en-us/library/jj220535(v=exchg.80).aspx).

**Create an EWS Service Object**

Now you need to create an EWS Service Object for the target mailbox. There are many ways you can authentication to the EWS API. For my script I chose to just use my organizations Autodiscover URL, which allows me to authenticate using the user who is running the script.

```Powershell
$exchangeservice.UseDefaultCredentials = $true
$exchangeservice.AutodiscoverUrl($mailbox)
```
This also makes it convenient for me when I create a scheduled task out of this script. I can permission a service account accordingly without having to worry about hard coding credentials in my script. Hard coded creds should be avoided at all costs.

**Bind to the Inbox**

Now you need to simply Bind to the users Inbox. There are again a few ways to do this. I chose to use the WellKnownFolderName function.

**Configure Search Filter**

One of the last things to do is to create some search filters for the emails we are targeting. For this I chose to use create filters that checks for: unread messages, with a subject containing "Patch Report", that have attachments. Once you create those variables you add them all up into a collection and use that to find all the emails you're targeting.

**"View" the Results**

I create a view filter so as to limit the query overhead. I chose to make this script view 10 items at a time. This was a tip I found from [Using PowerShell and EWS to monitor a mailbox](https://seanonit.wordpress.com/2014/10/29/using-powershell-and-ews-to-monitor-a-mailbox/).

Then I just call `FindTargetFolder($processedfolderpath)` and `FindTargetEmail($subject)` and you're done.

Now give it a little test and away you go. :)