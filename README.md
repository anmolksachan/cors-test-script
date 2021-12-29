# CORS Test Script

Edit the main.js file and add your link you want to test.

## What is CORS?
If another domain is allowed by the policy, then that domain can potentially attack users of the application. If a user is logged in to the application, and visits a domain allowed by the policy, then any malicious content running on that domain can potentially retrieve content from the application, and sometimes carry out actions within the security context of the logged in user.

Even if an allowed domain is not overtly malicious in itself, security vulnerabilities within that domain could potentially be leveraged by an attacker to exploit the trust relationship and attack the application that allows access. CORS policies on pages containing sensitive information should be reviewed to determine whether it is appropriate for the application to trust both the intentions and security posture of any domains granted access.

## How to Test Via Burpsuite?
To test same in burpsuite just add below header in request
```bash
origin: https://evil.com
```
In response if you get this header with your mentioned domain in request (in this case https://evil.com), then it's vulnerable to CORS
```bash
Access-Control-Allow-Origin: https://evil.com
```

## Reference:
1. [Hacktricks](https://book.hacktricks.xyz/pentesting-web/cors-bypass)
2. [Portswigger](https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties)
