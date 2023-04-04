const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSERSTARTUP;
const password = process.env.MONGOPASSWORDSTARTUP;
const hostname = process.env.MONGOHOSTNAMESTARTUP;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const appointmentCollection = client.db('startup').collection('appointments');

function getUser(email) {
  return userCollection.findOne({email: email});
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}
  
async function createCustomer(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);
  
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);
  
  return user;
}

async function createLandscaper(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);
  
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);
  
  return user;
}

function addAppointment() {
  appointmentCollection.insertOne(addAppointments());
}

function getAppointments() {
  const query = {};
  const options = {
    sort: { appointments: -1 },
    limit: 10,
  };
  const cursor = appointmentCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createCustomer,
  createLandscaper,
  addAppointment,
  getAppointments,
};