Feature: Payment by credit card

  Scenario: Payment by credit card with invalid card data

    Given I am on the home page
    When I go to login page
    And I login with username and password
    Then I am on personal account page have greeting <greeting>
    And I click to Logo
    And I go to home page
#    And I choose tour <tourName>, <dataOfStart>, <adults>
#    Then On detail tour page amount of adults should be <adults>
#    When I book the tour
#    And Fill form with <name>, <email>, <phone>, <adress>
#    Then On invoice page displayed <name>, <email>, <phone>, <adress>
#    When I choose payment method by credit card
#    And Do not fill the inputs of card information
#    Then Alert message displayed
#
#
#
#    Examples:
#      | greeting      | tourName             | dataOfStart| adults| name | email     |phone       |adress             |
#      | Hi, Demo User | Big Bus Tour of Dubai| 06.05.2021 |   2   | Anna | dre@gh.com| +3805665656|R2, Avenue du Maroc|
#      | Hi, Demo User | Big Bus Tour of Dubai| 06.05.2021 |   5   | Mary | dre@gh.com| +3805665656|R2, Avenue du Maroc|
