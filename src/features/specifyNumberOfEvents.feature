Feature: SPECIFY NUMBER OF EVENTS

  Scenario: When user has not specified a number, 32 is the default number
    Given the page with the upcoming events was loaded
    When user does not specify otherwise
    Then 32 events per page will be showed by default.

  Scenario: User can change the number of events they want to see
    Given the page with the upcoming events was loaded
    When user changes the number of events he wants to see
    Then selected number of events per page will appear.
