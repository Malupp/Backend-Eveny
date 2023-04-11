import { MongoClient } from 'mongodb';

const connectToServer = async (uri) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Data_Eveny').insertOne({
      message: 'Inserted'
    });
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const addUserToCollection = async (uri, payload) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Users').insertOne(payload);
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const addInterestsToCollection = async (uri, payload) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Interests').insertMany(payload);
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const addEventToCollection = async (uri, payload) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Events').insertOne(payload);
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const deleteInterestsToCollection = async (uri, payload) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Users').deleteMany(payload);
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const getUsers = async (uri) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Users').findOne({email: "mario.riviere@mail.com"});
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const getInterests = async (uri) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Interests').find().toArray();
    await res.close();
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

const getEvents = async (uri) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    const res = await client.connect();
    const insertRes = await res.db('Eveny').collection('Events').find().toArray();
    await res.close();
    console.log(typeof insertRes);
    return insertRes;
  } catch (ex) {
    console.log(ex)
  }
}

export {
  connectToServer,
  addUserToCollection,
  addInterestsToCollection,
  addEventToCollection,
  getUsers,
  getInterests,
  getEvents,
  deleteInterestsToCollection
};
