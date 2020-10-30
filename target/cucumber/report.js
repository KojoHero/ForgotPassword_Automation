$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Eclipse_workspace/Forgot_password/src/test/java/features/1_COMMUNITY-2.feature");
formatter.feature({
  "line": 3,
  "name": "Marketplace",
  "description": "",
  "id": "marketplace",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#Tests As a registered user, I want to access password reset settings so that I can reset my forgotten password"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#*Acceptance Criteria:*"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "## On the login page, the user gets an option to click on Forgot Password"
    },
    {
      "line": 10,
      "value": "## The system prompts the user to enter their valid email address"
    },
    {
      "line": 11,
      "value": "## Upon entering a valid registered email address, the system should prompt a confirmation message that the password reset code has been sent to the email."
    },
    {
      "line": 12,
      "value": "## User get resend the reset code option after 1 minute of the first operation"
    },
    {
      "line": 13,
      "value": "## In the case of the invalid (regular expression) email ID, the system prompts to enter a valid email ID"
    },
    {
      "line": 14,
      "value": "## In the case of the unregistered email ID, the system shows the no account exists for this email address"
    },
    {
      "line": 15,
      "value": "## the user enters the PIN, if verified, allows adding a new password (with confirm password field)"
    },
    {
      "line": 16,
      "value": "## if the PIN not verified, the user is prompted enter the right PIN, or resent the PIN"
    }
  ],
  "line": 18,
  "name": "Verify if user is able to receive reset password code with valid and invalid email addresses",
  "description": "",
  "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TEST_COMMUNITY-406"
    },
    {
      "line": 17,
      "name": "@REQ_COMMUNITY-10"
    },
    {
      "line": 17,
      "name": "@TESTSET_COMMUNITY-367"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User browses to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters his \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be taken to the \"\u003cverification\u003e\" page indicating success or told to repeat the process",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;",
  "rows": [
    {
      "cells": [
        "email",
        "verification"
      ],
      "line": 28,
      "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;1"
    },
    {
      "cells": [
        "testing.amalitech.com",
        "http://20.52.44.20/auth/forgottenpassword"
      ],
      "line": 29,
      "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;2"
    },
    {
      "cells": [
        "testing.amalitech@gmailcom",
        "http://20.52.44.20/auth/forgottenpassword"
      ],
      "line": 30,
      "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;3"
    },
    {
      "cells": [
        "dan@gmail.com",
        "http://20.52.44.20/auth/confirmaccount"
      ],
      "line": 31,
      "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;4"
    },
    {
      "cells": [
        "testing.amalitechgmail.com",
        "http://20.52.44.20/auth/forgottenpassword"
      ],
      "line": 32,
      "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;5"
    },
    {
      "cells": [
        "testing.amalitech.gmail.com",
        "http://20.52.44.20/auth/forgottenpassword"
      ],
      "line": 33,
      "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6543711000,
  "status": "passed"
});
formatter.before({
  "duration": 5335098200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify if user is able to receive reset password code with valid and invalid email addresses",
  "description": "",
  "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TESTSET_COMMUNITY-367"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 17,
      "name": "@REQ_COMMUNITY-10"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 17,
      "name": "@TEST_COMMUNITY-406"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User browses to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters his \"testing.amalitech.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be taken to the \"http://20.52.44.20/auth/forgottenpassword\" page indicating success or told to repeat the process",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "forgot_password.user_browses_to_the_login_page()"
});
formatter.result({
  "duration": 12736441000,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_forgot_password()"
});
formatter.result({
  "duration": 555159500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech.com",
      "offset": 17
    }
  ],
  "location": "forgot_password.user_enters_his(String)"
});
formatter.result({
  "duration": 5110963100,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_continue()"
});
formatter.result({
  "duration": 46445000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://20.52.44.20/auth/forgottenpassword",
      "offset": 29
    }
  ],
  "location": "forgot_password.user_should_be_taken_to_the_page_indicating_success_or_told_to_repeat_the_process(String)"
});
formatter.result({
  "duration": 5012233900,
  "status": "passed"
});
formatter.after({
  "duration": 570032700,
  "status": "passed"
});
formatter.after({
  "duration": 576328200,
  "status": "passed"
});
formatter.before({
  "duration": 5214486800,
  "status": "passed"
});
formatter.before({
  "duration": 5252595900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify if user is able to receive reset password code with valid and invalid email addresses",
  "description": "",
  "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TESTSET_COMMUNITY-367"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 17,
      "name": "@REQ_COMMUNITY-10"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 17,
      "name": "@TEST_COMMUNITY-406"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User browses to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters his \"testing.amalitech@gmailcom\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be taken to the \"http://20.52.44.20/auth/forgottenpassword\" page indicating success or told to repeat the process",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "forgot_password.user_browses_to_the_login_page()"
});
formatter.result({
  "duration": 1797833200,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_forgot_password()"
});
formatter.result({
  "duration": 560433000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmailcom",
      "offset": 17
    }
  ],
  "location": "forgot_password.user_enters_his(String)"
});
formatter.result({
  "duration": 5111502800,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_continue()"
});
formatter.result({
  "duration": 50423500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://20.52.44.20/auth/forgottenpassword",
      "offset": 29
    }
  ],
  "location": "forgot_password.user_should_be_taken_to_the_page_indicating_success_or_told_to_repeat_the_process(String)"
});
formatter.result({
  "duration": 5011900500,
  "status": "passed"
});
formatter.after({
  "duration": 568758500,
  "status": "passed"
});
formatter.after({
  "duration": 577731100,
  "status": "passed"
});
formatter.before({
  "duration": 5330339200,
  "status": "passed"
});
formatter.before({
  "duration": 5614844900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify if user is able to receive reset password code with valid and invalid email addresses",
  "description": "",
  "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TESTSET_COMMUNITY-367"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 17,
      "name": "@REQ_COMMUNITY-10"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 17,
      "name": "@TEST_COMMUNITY-406"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User browses to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters his \"dan@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be taken to the \"http://20.52.44.20/auth/confirmaccount\" page indicating success or told to repeat the process",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "forgot_password.user_browses_to_the_login_page()"
});
formatter.result({
  "duration": 1886657300,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_forgot_password()"
});
formatter.result({
  "duration": 693056200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dan@gmail.com",
      "offset": 17
    }
  ],
  "location": "forgot_password.user_enters_his(String)"
});
formatter.result({
  "duration": 5102797200,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_continue()"
});
formatter.result({
  "duration": 45635700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://20.52.44.20/auth/confirmaccount",
      "offset": 29
    }
  ],
  "location": "forgot_password.user_should_be_taken_to_the_page_indicating_success_or_told_to_repeat_the_process(String)"
});
formatter.result({
  "duration": 5012627400,
  "status": "passed"
});
formatter.after({
  "duration": 583851800,
  "status": "passed"
});
formatter.after({
  "duration": 594021400,
  "status": "passed"
});
formatter.before({
  "duration": 5470582200,
  "status": "passed"
});
formatter.before({
  "duration": 5233419600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify if user is able to receive reset password code with valid and invalid email addresses",
  "description": "",
  "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TESTSET_COMMUNITY-367"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 17,
      "name": "@REQ_COMMUNITY-10"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 17,
      "name": "@TEST_COMMUNITY-406"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User browses to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters his \"testing.amalitechgmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be taken to the \"http://20.52.44.20/auth/forgottenpassword\" page indicating success or told to repeat the process",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "forgot_password.user_browses_to_the_login_page()"
});
formatter.result({
  "duration": 1902681200,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_forgot_password()"
});
formatter.result({
  "duration": 691501100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitechgmail.com",
      "offset": 17
    }
  ],
  "location": "forgot_password.user_enters_his(String)"
});
formatter.result({
  "duration": 5106235900,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_continue()"
});
formatter.result({
  "duration": 48402200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://20.52.44.20/auth/forgottenpassword",
      "offset": 29
    }
  ],
  "location": "forgot_password.user_should_be_taken_to_the_page_indicating_success_or_told_to_repeat_the_process(String)"
});
formatter.result({
  "duration": 5013001600,
  "status": "passed"
});
formatter.after({
  "duration": 607745000,
  "status": "passed"
});
formatter.after({
  "duration": 600865100,
  "status": "passed"
});
formatter.before({
  "duration": 5220980900,
  "status": "passed"
});
formatter.before({
  "duration": 5202553700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify if user is able to receive reset password code with valid and invalid email addresses",
  "description": "",
  "id": "marketplace;verify-if-user-is-able-to-receive-reset-password-code-with-valid-and-invalid-email-addresses;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@TESTSET_COMMUNITY-367"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 17,
      "name": "@REQ_COMMUNITY-10"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    },
    {
      "line": 17,
      "name": "@TEST_COMMUNITY-406"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User browses to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks on forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters his \"testing.amalitech.gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be taken to the \"http://20.52.44.20/auth/forgottenpassword\" page indicating success or told to repeat the process",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "forgot_password.user_browses_to_the_login_page()"
});
formatter.result({
  "duration": 1841532400,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_forgot_password()"
});
formatter.result({
  "duration": 503860400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech.gmail.com",
      "offset": 17
    }
  ],
  "location": "forgot_password.user_enters_his(String)"
});
formatter.result({
  "duration": 5136720900,
  "status": "passed"
});
formatter.match({
  "location": "forgot_password.user_clicks_on_continue()"
});
formatter.result({
  "duration": 44958700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://20.52.44.20/auth/forgottenpassword",
      "offset": 29
    }
  ],
  "location": "forgot_password.user_should_be_taken_to_the_page_indicating_success_or_told_to_repeat_the_process(String)"
});
formatter.result({
  "duration": 5011442100,
  "status": "passed"
});
formatter.after({
  "duration": 571804800,
  "status": "passed"
});
formatter.after({
  "duration": 615375000,
  "status": "passed"
});
});