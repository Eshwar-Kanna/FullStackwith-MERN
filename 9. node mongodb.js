
start mongodb service 
launch a shell using  Compass (GUI)  or shell (CLI)



In the console  

          npm init 
          npm install mongodb@4.9 



𝐢𝐧𝐝𝐞𝐱.𝐣𝐬



                            const {MongoClient} = require("mongodb")

                            const uri =  "mongodb://127.0.0.1:27017/"
                            const client = new MongoClient (uri)

                            async function kanna() {

                                const database = client.db("eshwarkanna")
                                const students = database.collection("students")

                                const mydoc = {
                                    name : "bob" ,
                                    phone : "3333" ,
                                    age : 34 ,
                                    marks : 67 ,
                                    remarks : "vvgood"

                            }
                            students.insertOne(mydoc)

                            const stdata = await students.findOne(
                                {name : "bob" },
                                {projection : {name : 1 , _id : 0 , phone:1 , marks : 1 }}

                            )
                            let n = stdata.name 
                            let p = stdata.phone

                            console.log(n , p)

                             await client.close();
                            }
                            kanna()



In the console 

        node index.js
