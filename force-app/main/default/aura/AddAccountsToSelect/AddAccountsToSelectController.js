({
    doInit: function (component, event, helper) {
        helper.onInit(component, event, helper);

    },
    onChange: function (component, event, helper) {
        alert('Account ID: '+ component.find('select').get('v.value'));
    }
})
