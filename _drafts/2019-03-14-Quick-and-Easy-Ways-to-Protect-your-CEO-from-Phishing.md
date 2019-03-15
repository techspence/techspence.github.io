---
layout: single
classes: wide
title: "Quick and Easy Ways to Protect your CEO from Phishing"
date: 2019-03-14
---

# Blog post on some easy ways to protect against CEO Fraud emails

# Rules

- BEC Fraud
- Spoofing
- Scareware
- Sender Policy Framework
- Suspect URLs (built into some email gateway products)
- Cisco Umbrella (content filtering)
- Remove sensitive header info?
- Remove message stamps?

# Regex

**Name**

Jack Carter

**character substitution**

``` Regex
[jJ][aA][cC][kK]\s[cC][aA][rR][tT][eE][rR]

[jJ][aA][cC][kK]\s[aA-zZ]\s[cC][aA][rR][tT][eE][rR]

[jJ][aA][cC][kK]\s[aA-zZ][.]\s[cC][aA][rR][tT][eE][rR]
```

**Email**

jcarter@example.com

**Misspelt Regex**

letter substitution
``` Regex
@e(?:[^x]ample|x[^a]mple|xa[^m]ple|xam[^p]le|xamp[^l]e|xampl[^e])\.com
```

character substitution
``` Regex
@e(?!xample\.com).?x.?a.?m.?p.?l.?e\.com
```