({
    handleClick : function(component, event, helper) {
		var mynum = component.get('v.increment');
		component.set('v.increment', mynum + 1);
    }
})
