public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts2(String i){

        return [Select Name,BillingCity, BillingState, BillingPostalCode, BillingCountry
                From Account Limit 5 ];
      
    }
    @AuraEnabled
    public static List<Account> getAccounts(){

        return [Select Name,BillingCity, BillingState, BillingPostalCode, BillingCountry
                From Account Limit 25 ];
      
    }
}
