({
    onShowToast : function(component, event, helper) {
        var toast = $A.get("e.force:showToast");
        if (toast){
            component.find('notifLib').showToast({
                "title": "Success!",
               "message": "Account {0} has been updated.",
               "messageData" : [component.get('v.accountName')],
               "variant" : "success",
               "mode" : "dismissable"
               });
        }else {
            alert("Not in Lighting Experience");
          }
      

      }
    
})