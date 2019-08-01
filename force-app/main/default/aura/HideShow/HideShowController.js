({
    clickHide: function (component, event, helper) {
        var el = component.find('response');
        $A.util.toggleClass(el, 'slds-hide');
    },
    clickHidden: function (component, event, helper) {
        var el = component.find('response');
        $A.util.toggleClass(el, 'slds-hidden');
    }
})