## Average Person Database Containing Possessions
    contains the following collections:
    people,
    employers,
    cars,
    homes
    
 # Route Access and endpoints
    https://stormy-beyond-82845.herokuapp.com/api
    /api/ <------ route
    /api/people,
    /api/employers,
    /api/cars,
    /api/homes
    
  # Environment
      process.env.PORT
    
  # Schemas 
      const Car = new Schema(
    {
        make: {type: String, required: true},
        model: {type: String, required: true},
        owner: {type: Schema.Types.ObjectId, ref: 'persons'},
        vin: {type: String, required: true}
    })
    ..........................................................
    
    const Employer = new Schema(
    {
        company_name: String,
        address: String,
        city: String,
        state: String
    })
    ..........................................................
    
    const Home = new Schema(
    {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        owner: {type: Schema.Types.ObjectId, ref: 'persons'}
    })
    ............................................................
    
    const Person = new Schema(
    {
        first_name: String,
        last_name: String,
        employer: {type: Schema.Types.ObjectId, ref: "employers"},
        email: String,
    })
    
  # Instructions to run locally
      Not currently hosted on any platform
      log on to postman.com
      go to endpoint, example: GET: http://localhost:300/api/people, to access database
      to DELETE, example: DELETE: http://localhost:300/api/people/<PERSON ID NUMBER>
      to UPDATE, example: UPDATE: http://localhost:300/api/people/<PERSON ID NUMBER>
