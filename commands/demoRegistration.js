module.exports = (firebase, first_name, last_name, email) => {
  const db = firebase.database();
  const dbCollection = db.ref("demo_registrars");

  dbCollection.push({
    first_name: first_name,
    last_name: last_name,
    email: email,
  });
};
