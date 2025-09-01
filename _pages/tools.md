---
layout: single
permalink: /tools/
title: ""
author_profile: false
classes: ["tools-page"]
---

# Tools i've made...

## [ScriptSentry](https://github.com/techspence/scriptsentry)

[![ScriptSentry Logo](/assets/img/ScriptSentr.png){: .align-left width="200px"}](https://github.com/techspence/scriptsentry)

**ScriptSentry** finds misconfigured and dangerous logon scripts. It does this by searching the SYSVOL share and Group Policies for logon scripts. 

In the output of the tool, it displays all of the misconfigurations that it found.

ScriptSentry can currently identify **9 unique issues** across **4 categories**. The output of the tool can also be saved to a file for easy saving and reviewing.

## [ADeleginator](https://github.com/techspence/adeleginator)

**ADeleginator** uses [ADeleg](https://github.com/mtth-bfft/adeleg) to find insecure or misconfigured delegations in Active Directory.

It's a wrapper script written in PowerShell that uses ADeleg under the covers.

ADelginator does the following:

- It runs ADeleg and generates a csv report
- It reads the report and tries to identify insecure trustee and resource delegations
- If any issues are found, it generates a csv report with only the insecure configurations


## [AppLocker Inspector](https://github.com/techspence/applockerinspector)

[![AppLocker Inspector Logo](/assets/img/AppLockerInspector.png){: .align-left width="200px"}](https://github.com/techspence/applockerinspector)

**AppLocker Inspector** audits an AppLocker policy XML and reports weak/misconfigured/risky settings, including actual ACL checks.

If you don’t provide a policy file, the tool will export the local effective AppLocker policy and analyze that automatically.