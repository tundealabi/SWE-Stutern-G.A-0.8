require("dotenv").config();
const config = require("./config").configuration;
const {Client} = require("pg");

const client = new Client({...config});

client.connect();

const findById = async (id) => {
    const result = await client.query("SELECT * FROM students WHERE ($1) = (id)", [id]);
    result.rows.length ? console.log(result.rows[0]) : console.log("Student not found");
}

const updateStudent = async (id,studentName) => {
    if(studentName){
       const result = await client.query("UPDATE students SET name = ($2) Where id = ($1) RETURNING *", [id,studentName]);
       result.rows.length ? console.log(result.rows) : console.log("Failed to update, check that you entered the correct details");
    }else {
        console.error("You need to enter a valid name");
    }
};

const deleteStudent = async (id) => {
    const result = await client.query("DELETE FROM students Where id = ($1) RETURNING *", [id]);
    result.rows.length ? console.log(result.rows) : console.log("Failed to delete, check that you entered the correct details");
};


//Modify the students table so that null names can not be inserted.
//you can run this command in the psql terminal ------ ALTER TABLE students ALTER COLUMN name SET NOT NULL;