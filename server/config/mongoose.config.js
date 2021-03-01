const mongoose = require('mongoose');
const db_name = "pets";

mongoose.connect('mongodb://localhost/pets' + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})

.then(()=> console.log(`You are connected to the ${db_name} database`))
.catch((err) => console.log(`Something went wrong connectiong to the ${db_name} database ${err}`));