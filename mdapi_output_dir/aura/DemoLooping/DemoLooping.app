<aura:application access="GLOBAL" extends="force:slds">
    <lightning:card iconName="standard:loop" title="Looping ">
        <div class="slds-p-horizontal_medium">   
            <div class="background1 slds-align_absolute-center">
                <c:Looping myNames="['Joey','Jonny','Dee Dee','Tommy']" />
            </div>
        </div>
    </lightning:card>
</aura:application>