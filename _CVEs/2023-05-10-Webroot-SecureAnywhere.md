---
layout: single
classes: wide
title: "2023-05-10-Webroot-SecureAnywhere"
date: 2023-05-10
collection: CVEs
taxonomy: CVEs
---
## CVE-2023-29818
(CVE-2023-29818) CWE-183 - Permissive List of Allowed Inputs: An issue found in Webroot SecureAnywhere Endpoint Protection CE 23.1 v.9.0.33.39 and before allows a local attacker to bypass protections via the default allowlist feature being stored as non-admin. A local attacker can match their payload to a file name, file path, and file size of one of the files contained within the default allowlist to bypass protections.

## CVE-2023-29819
(CVE-2023-29819) CWE-284 - Improper Access Control: An issue found in Webroot SecureAnywhere Endpoint Protection CE 23.1 v.9.0.33.39 and before allows a local attacker to bypass protections via a crafted payload. A local attacker, as a non-administrator, can read the registry containing the default allowlist.

## CVE-2023-29820
(CVE-2023-29820) CWE-693 - Protection Mechanism Failure: An issue found in Webroot SecureAnywhere Endpoint Protection CE 23.1 v.9.0.33.39 (EXE install) and before allows a local attacker to bypass protections via a crafted payload. A local attackers could uninstall the product from a managed state, while tamper protection is enabled, using the local SYSTEM account.