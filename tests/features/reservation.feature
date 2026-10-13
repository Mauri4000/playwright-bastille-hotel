@e2e
Feature: Reservation Flow
  As a hotel receptionist
  I want to create, view, and clean up reservations
  So that room occupancy is accurately tracked

  Background:
    Given I am logged in as admin
    And I am on the calendar page

  @e2e
  Scenario: View existing reservation details
    When I click on an occupied room cell
    Then I should see reservation details

  @e2e
  Scenario: Urgencia alert can be dismissed
    Given there is a habilitación urgente reservation
    When I dismiss the urgencia alert
    Then the urgencia alert should not be visible
    And the dismissal should persist after page reload
