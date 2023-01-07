const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

exports.Entries = functions.https.onRequest(async (request, response) => {
  const snapshot = await db.collection('entries').get()
  const entries = snapshot.empty
    ? []
    : snapshot.docs.map(doc => Object.assign(doc.data(), { id: doc.id }))
  response.send(entries)
})

