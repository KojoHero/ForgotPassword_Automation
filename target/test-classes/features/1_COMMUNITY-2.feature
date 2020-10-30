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
	@TEST_COMMUNITY-406 @REQ_COMMUNITY-10 @TESTSET_COMMUNITY-367
	Scenario Outline: Verify if user is able to receive reset password code with valid and invalid email addresses
		Given User browses to the login page     
				    And   User clicks on forgot password 
				       
				    When  User enters his "<email>"    
				    And   User clicks on continue    
				    Then  user should be taken to the "<verification>" page indicating success or told to repeat the process 
				    
				
				Examples:
				    |   email                       | verification|  
				    |   testing.amalitech.com       |http://20.52.44.20/auth/forgottenpassword| 
				    |   testing.amalitech@gmailcom  |http://20.52.44.20/auth/forgottenpassword| 
				    |   dan@gmail.com               |http://20.52.44.20/auth/confirmaccount             | 
				    |   testing.amalitechgmail.com  |http://20.52.44.20/auth/forgottenpassword| 
				    |   testing.amalitech.gmail.com |http://20.52.44.20/auth/forgottenpassword|
