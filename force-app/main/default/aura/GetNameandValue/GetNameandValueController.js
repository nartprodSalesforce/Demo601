({
    handleClick : function (component, event, helper) {
        var myName = component.find("name").get("v.value");
        var myValue = component.find("value").get("v.value");
        // var myNames = component.get("v.names");  
        //console.log ("Before Push names[]" , myNames );
        // myNames.push({Name: myName, Value: myValue });
        // console.log ("After push names[]" , myNames );
        // component.set("v.names",myNames);  
		var e = component.getEvent('onNameValueAdded');
		e.setParams({
            newName: myName,
            newValue: myValue
		});
		e.fire();
    }
})
