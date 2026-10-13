@smoke
Feature: Public Room Availability
  As a website visitor
  I want to see which rooms are available for my dates
  So that I can book an available room

  @smoke
  Scenario: Room cards load on the public website
    Given I am on the public rooms page
    Then I should see room cards displayed

  @smoke
  Scenario: Rooms page loads without errors
    Given I am on the public rooms page
    Then the page title should contain "bastille"
    And I should see at least one room card
