---
layout: single
classes: wide
title: "Quick And Easy Ways to Protect Your Company From CEO Fraud"
date: 2019-03-15
tags:
  - CEO Fraud
  - Blueteam
  - Regex
categories:
  - Write-up
---
In this blog post i'm going to share one quick and easy technique you can use to protect your company from 2 different types of CEO fraud. The technique I detail in this blog post is not the only way to detect these emails. It's just one of many ways. Also. please know that nothing in this blog post is new or ground breaking. I don't propose any new fancy techniques. There are times in security where detection and prevention just comes down to a few simple, yet tedious tasks. This is one of those situations. By using a little understanding of what attackers try to do with some regular expression knowledge you can mitigate a good chuck of CEO fraud emails. My hope is that you get some value from this or maybe it prompts you to think about your phishing detection a little bit differently.
    
**What is CEO Fraud? What are Look-alike/Misspelled Domain Names?**

CEO Fraud is a type of phishing email technique where an attacker targets your accounting or billing managers, CFO, HR or other executive. The attacker will use your CEO's name along with a look-alike or Misspelled email address that's similar to your companies in order to trick your billing manager into wiring money or convince your HR manager into sending W2's. The emails that use this strategy usually have some kind of financial or employee tax record motive to them. A look-alike or Misspelled domain name is pretty self explanatory. Attackers will try to use a domain that looks similar to your company's domain. Sometimes this can be very tricky!

Now, the first thing to tackle before jumping into this is to make sure you have the proper spoofing protections in place. If an attacker can spoof your companies domain, that's going to make it extremely difficult for your users to detect. So do that first. Then move onto this technique.


# CEO Fraud Technique 1: look-alike/Misspelled Domain Names
The thing I want you to focus on here is the **domain**, everything after the @ symbol. In this blog post, my made up CEO's name is Jack Carter and the company email is eureka[.]com. 

*If you're a syfy fan you will know that Jack Carter was the quirky and trouble prone Sheriff of a town called Eureka in the show with the same name. I love that show. It's about a town of geniuses that are always causing trouble, blowing stuff up or wreaking some other kind of havoc on the town.*

What attackers are hoping is that your billing manager or HR rep doesn't pay attention to the sender's information, sees the name, which matches the CEO's name, glances over the look-alike/Misspelled domain name and continues onto the body of the email. Attackers are banking on your co-workers just being lazy. Encourage your users to stay vigilant and stay aware!

(Edit 4/9/2019: I made a Github Repo to use as a single location for all sorts of phishing email filters I create. You can see the CEO Fraud detecting regex from this blog post here: https://github.com/techspence/PhishingFilter)

Ok here's an example of what i'm talking about:

    a) Jack Carter <jcarter@eureka.com>

    b) Jack Carter <jcarter@euneka.com>

Can you spot the difference between the two? Which one is the real Jack Carter? 

The answer is **a**.

**look-alike/Misspelled Domain Name Detection**

One way to detect these emails is to compare the sender address with that of your CEO's actual email address using regular expressions.

Here's some regex that can be used to detect look-alike or Misspelled domain names that use letter and character substitutions.

*Blue highlighted text = text matches regex*

**Letter Substitution**
``` Regex
@e(?:[^u]reka|u[^r]eka|ur[^e]ka|ure[^k]a|urek[^a]|eurk[^a])\.com
```

**Detection**

![Letter Substitution Fake Domain](/assets/img/lettersubfake.png)

Play with this regex: [https://regex101.com/r/tPVqPG/1/](https://regex101.com/r/tPVqPG/1/)


**Character Substitution**
``` Regex
@e(?!ureka\.com).?u.?r.?e.?k.?a\.com
```

**Detection**

![Character Substitution Fake Domain](/assets/img/charactersubfake.png)

Play with this regex: [https://regex101.com/r/nv7uIT/1](https://regex101.com/r/nv7uIT/1)


# CEO Fraud Technique 2: Using your CEO's Name with a Random Domain Name
As the title of this section implies, there is another technique that I have seen attackers use. They will use your CEO's name or a variation of their name combined with a random domain name.

The thing I want you to focus on here is the **sender name**, everything before the @ symbol. Again, in this blog post, my made up CEO's name is Jack Carter and the company email is eureka[.]com.

**I will repeat myself here because it's so important..** Attackers are hoping is that your billing manager or HR rep doesn't pay attention to the sender's information, sees the name, which matches the CEO's name and continues onto the body of the email. Attackers are banking on your co-workers just being lazy. Encourage your users to stay vigilant and stay aware!

Ok here's an example of what i'm talking about:

    a) Jack Carter <whizbank@bankerceo.com>

    b) Jack Carter <jcarter@eureka.com>

Can you spot the difference between the two? Which one is the real Jack Carter? 

The answer is **b**.

**CEO's Name with a Random Domain Name Detection**

Just like technique 1, one way to detect these emails is to, this time, compare the sender name with that of your CEO's actual name using regular expressions.

Here's some regex that can be used to detect names that use character substitutions.

*Green highlighted text = text that matches a group of regex*

**character substitution**
``` Regex
[jJ][aA][cC][kK]\s[cC][aA][rR][tT][eE][rR]
[jJ][aA][cC][kK]\s[aA-zZ]\s[cC][aA][rR][tT][eE][rR]
[jJ][aA][cC][kK]\s[aA-zZ][.]\s[cC][aA][rR][tT][eE][rR]
```

You can also combine these into one regex with the | character, wrapped with ()
``` Regex
([jJ][aA][cC][kK]\s[cC][aA][rR][tT][eE][rR]|[jJ][aA][cC][kK]\s[aA-zZ]\s[cC][aA][rR][tT][eE][rR]|[jJ][aA][cC][kK]\s[aA-zZ][.]\s[cC][aA][rR][tT][eE][rR])
```

**Detection**

![Character Substitution Fake CEOs Name](/assets/img/charactersubfake-ceoname.png)

Play with this regex: [https://regex101.com/r/u1VvHb/1](https://regex101.com/r/u1VvHb/1)


**Now create your email filtering rules**

Once you have some regex figured out, now you can go to your email gateway or whatever you are using to filter email based on rules and create a rule that uses these regular expressions to detect and handle this emails. I would love to include examples of how to do this with different platforms, but at this point, I just don't have access to a variety of platforms.

---

***That’s all I have for now on this topic. I truly hope that someone, maybe 1 or 2 people find value in this. If you did get value from this, please share it and if my thoughts sparked an idea of your own or if you want to continue this conversation, hit me up on Twitter [@techspence](https://twitter.com/techspence), I would love to connect!***