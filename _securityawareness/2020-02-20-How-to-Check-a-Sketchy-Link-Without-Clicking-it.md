---
layout: single
classes: wide
title: "How to Check a Sketchy Link Without Clicking It"
date: 2020-02-20
---
Let's say you're working through your dozens of emails, responding to clients or customers or business partners and you come across this one email from your bank informing you that you need to reset your password. This email comes completely out of the blue and to top it off you don't recognize the senders email address. Do you click it?

Maybe...maybe not.

Did you know that you can investigate if that link is sketchy or not **_without_** clicking on it?

## How to sniff out a sketchy link

When it comes to hyperlinks, sometime's it's really obvious it's sketchy, but other times, in the case of look-a-like domains, it can actually be a bit tricky. 

Here are a few things that make a link sketchy, when visibly looking at it.

- Links that end in uncommon top level domains (TLD). Because the cost to purchase domains within these TLDs are pretty inexpensive, they are very frequently used for spamming and malicious activity. Aside from abc.xyz which is a web site owned by Google's parent Alphabet I don't know of any legit domains with these TLDs. 

    - Commonly used for spamming/nefarious activity:
        - .xyz
        - .buzz
        - .live
        - .fit
        - .tk

- Links that are knock-offs (known as look-a-like domains) of major brands. These are popular because the domain closely resembles that of real brands domains. Depending on how the URL looks in your browser and if you're on a mobile device or on your computer, you may or may not be able to spot these very easily.
    
    - Examples:
        - netflix-mail[.]com
        - t-mogbile[.]com
        - googlre[.]com
        - secure-paypal.com.fraud.hmmmm[.]com

        _<sub>Note, these domains may or may not be valid at the time of you reading this</sub>_

- Links that contain random numbers and/or letters. These are pretty obvious. Not all are malicious, however, anytime I see a url like this I immediately get suspicious. It's not a trustworthy link in my opinion and should be investigated further.
    
    - Examples:
        - eqbqcguiwcymao[.]info


## Checking a link without clicking

There is definitely no shortage of URL and website scanners out there. I've tried dozens of them. None of them seem as good to me as URLscan. It's fast, extremely detailed, provides a live screenshot and it allows you to link out to other scans to check them as well. 

### URLScan - [https://urlscan.io](https://urlscan.io)

My go-to move with any sketchy links is to pop them into URLScan and see what comes up. To do that, just head on over to https://urlscan.io. Then just simply **copy** and **paste** the link you want to scan into the scan field. Once there you can also click **Options** and make your scan Private, which sometimes is nice to do, since Public scans will show up on the front page and in searches. 

![urlscan.png](/assets/img/urlscan.png)

Now that you have your link pasted in, click Scan! Once URLScan is finished checking our your link, doing it's analysis and fingerprinting it will bring you to a results page that looks something like this. 

<sub>_Note, this is an example results page of a known malicious site._</sub>

![urlscan-resultsmalicious.png](/assets/img/urlscan-resultsmalicious.png)


1. **Live Screenshot**. This allows you to visibly see if there might be anything weird going on with the site. This is good for sniffing out things like misspelled words on login pages.

    ![urlscan-livescreenshot.png](/assets/img/urlscan-livescreenshot.png)

2. **Google Safe Browsing rating**. This is a nice quick view of if the website is safe or potentially nefarious.

    ![urlscan-googlesb.png](/assets/img/urlscan-googlesb.png)

3. **Lookup the URL with other scanners**. The _lookup_ tab allows you to pick any of a number of other website scanners. This can help you glean additional information about the site you're scanning incase you're still not sure about it.

    ![urlscan-lookup.png](/assets/img/urlscan-lookup.png)

## Caution when Clicking

It's a bit cliche by now but, **think before you click!** It only takes a few minutes to pause, copy and paste the link into URLScan and check it out first before clicking.

If you're at work and have an IT Department or Security Team, send it over to them and ask them to investigate it for you. It's better to wait 10 minutes to get a link checked out than spend 10 weeks recovering from a security incident. 


## Additional Information
I did some googling on this topic and found some good articles related to suspicious and or malicious domains. The articles below go into much more detail on TLDs and their use for malicious or spammy activity. If you're into the technical nitty gritty these would be great reads.

- [Newly Registered Domains: Malicious Abuse by Bad Actors](https://unit42.paloaltonetworks.com/newly-registered-domains-malicious-abuse-by-bad-actors)

- [Most Suspicious TLDs Revealed by Blue Coat Systems](https://www.tripwire.com/state-of-security/security-data-protection/cyber-security/most-suspicious-tlds-revealed-by-blue-coat-systems)

- [Exploring .XYZ (Another Shady TLD Report)](https://www.symantec.com/connect/blogs/exploring-xyz-another-shady-tld-report)

- [Why is there’s so much spam coming from .xyz and other new top-level domains?](https://blog.f-secure.com/why-is-theres-so-much-spam-coming-from-xyz-and-other-new-top-level-domains)

