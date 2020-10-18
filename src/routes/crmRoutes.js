import { addNewContact, getContact, getContactWithID, updateContact, deleteContact } from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware 
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContact)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get a spesific contact
        .get(getContactWithID)

        // update a spesific contact
        .put(updateContact)

        // delete a spesific contact
        .delete(deleteContact)
}

export default routes;