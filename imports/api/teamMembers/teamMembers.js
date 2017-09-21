import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/factory';

class TeamMembersCollection extends Mongo.Collections {
    //methods for CRUD the collections
}

export const TeamMembers = new TeamMembersCollection('companies');

//Deny all client-side updates
TeamMembers.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});


TeamMembers.schema = new SimpleSchema({
    name: {
        type: String ,
        label: "Name"
    },
    title: { 
        type: String,
        label: 'Title'
    },
    category: { 
        type: String 
    },
    remarks: {
        type: String ,
        label: "Descriptions"
    },
    companyId: { 
        type: String, 
        regEx: SimpleSchema.RegEx.Id,  
        denyUpdate: true,
    }
});

TeamMembers.attachSchema(TeamMembers.schema);