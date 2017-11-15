Deposits = new Mongo.Collection('deposits', {connection: null});
new PersistentMinimongo(Deposits);
Publications = new Mongo.Collection('publications', {connection: null});
new PersistentMinimongo(Publications);