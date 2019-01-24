({
    handleClick : function (component, event, helper) {
        var myName = component.find("name").get("v.value");
        var myValue = component.find("value").get("v.value");
        var myNames = component.get("v.names");  
        //console.log ("Before Push names[]" , myNames );
        myNames.push({Name: myName, Value: myValue });
        console.log ("After push names[]" , myNames );
        component.set("v.names",myNames);  
    },
	onNameAdded: function(component, event, helper) {
        debugger;
        var myValue = event.getParam('newValue');;
        var myName = event.getParam('newName');
        var myNames = component.get("v.names");  
        myNames.push({Name: myName, Value: myValue });
        console.log ("After push names[]" , myNames );
        component.set("v.names",myNames);
	}
})
