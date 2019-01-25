({
    onAccountPassed: function (component, event, helper) {
        debugger;
        var myID = event.getParam("accountId");
        component.set("v.accountid", myID);
    }
})