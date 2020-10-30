@COMMUNITY-370
@REQ_COMMUNITY-2
Feature: Marketplace

	#Tests As a registered user, I want to access password reset settings so that I can reset my forgotten password
	#
	#*Acceptance Criteria:*
	#
	## On the login page, the user gets an option to click on Forgot Password
	## The system prompts the user to enter their valid email address
	## Upon entering a valid registered email address, the system should prompt a confirmation message that the password reset code has been sent to the email.
	## User get resend the reset code option after 1 minute of the first operation
	## In the case of the invalid (regular expression) email ID, the system prompts to enter a valid email ID
	## In the case of the unregistered email ID, the system shows the no account exists for this email address
	## the user enters the PIN, if verified, allows adding a new password (with confirm password field)
	## if the PIN not verified, the user is prompted enter the right PIN, or resent the PIN
	@TEST_COMMUNITY-407 @REQ_COMMUNITY-10 @TESTSET_COMMUNITY-367
	Scenario Outline: Verify if user can reset password with valid and invalid passwords
		Given User is on the reset password page    
		    And   User enters new valid "<password>" and "<confirms_password>"   
		    When  User taps on the continue button    
		    Then  User should be notified with a <"message"> based on credential used 
		    
		
		Examples:
		    |      password| confirms_password| message|  
		    |     12345678!|         12345678!| Check Password: There should be at least one lowercase character|	   
		    |    12354678!A|        12345678!a| Check Password: There should be at least one lowercase character|	   
		    |      12345678|          12345678| Check Password: There should be at least one lowercase character|	 
		    |    aaaaaaaa!A|        aaaaaaaa!A| Check Password: There should be at least one lowercase character|
		    |     aaaaaaaaA|         aaaaaaaaA| Check Password: There should be at least one lowercase character|
		    |   12345678!Aa|       12345678!Aa| Password changed. Click continue to login|
