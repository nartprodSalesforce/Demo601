({
	onNameAdded: function(component, event, helper) {
        debugger;
        var myValue = event.getParam('newValue');;
        var myName = event.getParam('newName');
        var myNames = component.get("v.names");  
        myNames.push({Name: myName, Value: myValue });
        component.set("v.names",myNames);
	}
})