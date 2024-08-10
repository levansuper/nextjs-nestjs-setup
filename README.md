# activefence

### To start the system use
```
docker compose up
```

After the database container is stopped the data will be lost since it's not using volume. This is made on porpoise to make testing of the app more easy. 

Use users
```
user: testuser1@mailinator.com
password: asdASD123!

user: testuser2@mailinator.com
password: asdASD123!
```


# High level architecture:

The purpose of this document is to outline the architecture and design considerations for a web application that manages entities with a locking mechanism. The application ensures that entities are locked by the first user who requests it, making them editable by the user who locked them and read-only for other users. 

### Entity Locking:
- An entity can only be updated by the user who locks it. (changed this part from `the first user` to `user` since this is described in `Skipping` mechanism.)
- Locking is explicitly triggered by the user via a UI button.
- When an entity is locked, it becomes read-only for all users except the one who locked it.

### Cross-Service/UI Compatibility:
- The lock mechanism should be consistent and reliable across different services and UI components.

### Web Application Views
- Handled entities should no longer be available to other users.
- Locked entities should not be available until they are skipped by the locking user.

### Architecture

This is a simple application and will use a simple architecture with 3 main layers - frontend, backend and database. 
- The socket server could also be used to deliver real time notifications to the users when the entities are locked but for `test` app this could be skipped.
- Having a separate locking service could be implemented to lock the tickets. `But` the idea is visible here and this service could be changed to become a `lock service` for anything by renaming the `ticket` table, dropping all the unnecessary fields and adding a reference to the foreign entity. Also instead of update there will be inserts in the new `lock service`
- `Scaling` - The app is designed to be scalable horizontally.
- #### Frontend (UI Layer): 
  - `NextJS` will be used for the frontend app. Currently this gives not real advantage over pure react app but since the future plans are not knows NextJS will make it possible to add `SSR` if needed in future.
  - `Auth0` will be used as an authentication service as it allows for an easy implementation and outsources the user management so we don't handle any passwords.  
  - `Apollo` will be used as a communication and data state management layer.
  - `Codegen` - for generating the GraphQL schema classes and query/mutation functions.
- #### Backend (Service Layer):
  - `NestJS` - for backend api. 
- #### Database
  - `Postgres` - as the database for the app. `MongoDB` could also be used but relational databases have inherited advantage over the document DBs regarding the data integrity - that is very important for this app. Now it would not make any difference but in the future could effect the decision making. 


