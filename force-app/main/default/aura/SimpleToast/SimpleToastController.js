({
    onShowToast : function(component, event, helper) {
        component.find('notifLib').showToast({
         "title": "Success!",
        "message": "Account {0} has been updated.",
        "messageData" : [component.get('v.accountName')],
        "variant" : "success",
        "mode" : "dismissable"
        });
      }
    
})
