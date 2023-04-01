Feature: SHOW/HIDE AN EVENT'S DETAILS

  Scenario: An event element is collapsed by default
    Given the page with the upcoming events was loaded
    When user receives a list of upcoming events
    Then the event details are not visible.

  Scenario: User can expand an event to see its details
    Given the user received a list of upcoming events
    When user pushes the button Show Details
    Then user will see the details of the upcoming event.

  Scenario: User can collapse an event to hide its details
    Given the user is finished reading the details of the event
    When user pushes the button hide events
    Then the details of the event will collapse.
