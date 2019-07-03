({
    handleClick : function(component, event, helper) {
        console.log("in handleClick");
        // call the method declared by <aura:method> 
        component.find("child").sampleMethod("1");
     }
  
})
