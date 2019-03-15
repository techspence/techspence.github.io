---
layout: single
classes: wide
title: "Quick Easy No Cost Ways to Protect your CEO from Phishing"
date: 2019-03-14
---

Step 1. Communication
    The most important step. 
Step 2. Technology
    Email gateway
    Rules
Step 3. Education
    Educate the CEO on current and emerging email threats. This is not a static exercise. This is something you should do continuously.

# Rules

- BEC Fraud
- Spoofing
- Scareware
- Sender Policy Framework
- Suspect URLs (built into some email gateway products)

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