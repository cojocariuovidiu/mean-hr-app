let employeeSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        employeeId: {type: Number, required: true, unique: true},
        salary: {type: Number, required: true},
        jobTitle: {type: String, required: true},
        hireDate: {type: Date, required: true}
    }   
)

module.exports = employeeSchema;