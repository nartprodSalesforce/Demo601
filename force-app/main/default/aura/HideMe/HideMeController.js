({
	revealLabel: function(component, event, helper) {
		const button = component.find("button");
		const label = button.get("v.label")
		alert(`Propper way: ${label}`);
	}
})