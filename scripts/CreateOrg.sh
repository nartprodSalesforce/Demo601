# Execute in Mac using: ./EXFiles/scripts/CreateOrg.sh
echo "*** Creating scratch Org..."
sfdx force:org:create -f config/project-scratch-def.json --setdefaultusername --setalias soWerner -d 30
echo "*** Opening scratch Org..."
sfdx force:org:open
echo "*** Pushing metadata to scratch Org..."
sfdx force:source:push

