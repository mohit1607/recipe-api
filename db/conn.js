const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://mohit1607:mohit1607@cluster0.xvit1tk.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection successful");
}).catch((e) => {
    console.log(e);
});

