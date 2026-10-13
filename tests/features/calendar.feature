@e2e
Feature: Calendar Management
  As a hotel receptionist
  I want to view and manage the reservation calendar
  So that I can track room occupancy

  Background:
    Given I am logged in as admin
    And I am on the calendar page

  @e2e
  Scenario: Calendar loads with room grid
    Then the calendar grid should be visible
    And I should see room rows on the calendar

  @e2e
  Scenario: Navigate to next month
    When I click the next month button
    Then the calendar should show the next month

  @e2e
  Scenario: Navigate to previous month and back to today
    When I click the next month button
    And I click the today button
    Then the calendar should show the current month

  @e2e
  Scenario: Electric shower icon appears on correct rooms
    Then rooms "A1,A2,A3,A4,A9,B1,B2,B3,B4,B9" should display the electric shower icon
