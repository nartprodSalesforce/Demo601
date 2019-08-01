({
    handleClick : function (component, event, helper) {
        var myName = component.find("name").get("v.value");
        var myValue = component.find("value").get("v.value"); 
		var e = component.getEvent('onNameValueAdded');
		e.setParams({
            newName: myName,
            newValue: myValue
		});
		e.fire();
    }
})