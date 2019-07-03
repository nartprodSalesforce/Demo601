({
  onStudentClick: function(component, event, helper) {
    //debugger;
    alert(component.get("v.student").Name);
    var student = component.get("v.student");
    console.log("Name", student.Name);
    console.log("Photo", student.PhotoUrl);
  }
});
