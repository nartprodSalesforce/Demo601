({
    doInit: function (component, event, helper) {
        helper.onInit(component, event, helper);

    },
    onChange: function (component, event, helper) {
        var myID = component.find('select').get('v.value');
        component.set("v.accountid",myID);
        // var e = component.getEvent('onEventGetAccountID');
		// e.setParams({
        //     accountId: myID
		// });
		// e.fire();
    }
})
