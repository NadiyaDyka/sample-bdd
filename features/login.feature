Feature: Enter an incorrect login

  Scenario: Check login with the wrong password or username
    Given I am on DLink login page
    When I click on "Login" button
    Then I see the message "You entered an incorrect login name or password.Please try again."


  