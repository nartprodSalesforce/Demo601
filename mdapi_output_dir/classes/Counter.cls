public with sharing class Counter {
	
	public Integer displaycounter {
		get {
		if (displaycounter == null) { 
				displaycounter = 1;
				}
		return displaycounter;
		}  
			private set;
		}

    public Counter() {
		displaycounter = 1;
    }
	public Pagereference increment(){
		displaycounter = displaycounter + 1;
		return null;
	}
}