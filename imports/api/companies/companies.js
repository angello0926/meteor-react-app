import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/factory';

class CompaniesCollection extends Mongo.Collections {
    //methods for CRUD the collections
}

export const Companies = new CompaniesCollection('companies');

//Deny all client-side updates
Companies.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});


Companies.schema = new SimpleSchema({
    name: {
        type: String ,
        label: "Name"
    },
    link: { type: String },
    raised: { type: Number },
    ico_status: { type: String },
    desc: { type: String ,
        label: "Descriptions"
    },
    owner: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId;
        }
    },
    createdAt:{
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date();
        }
    },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
});

Companies.attachSchema(Companies.schema);