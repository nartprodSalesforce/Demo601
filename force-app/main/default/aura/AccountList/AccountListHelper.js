({
	onInit: function(component, event, helper) {
		helper.queryAccounts(component, event, helper);
	},
	queryAccounts: function(component, event, helper) {
        debugger;
		helper.callServer(
			component,
			"c.getAccounts",
			(response) => {
				component.set('v.accountList', response);
			}
		);
	}
})