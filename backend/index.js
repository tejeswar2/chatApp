const express = require("express")
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json())
app.use(cors({origin:true}))


app.post("/auth",async(req,res)=>{
    const {username} = req.body;

    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret:username,first_name:username},
            {headers:{"private-key":"438f0e32-b154-4071-b5bd-54724d2eab02"}}
        );
        return res.status(r.status).json(r.data)
    } catch(e){
      return res.status(e.response.status).json(e.response.data)
    }
})

app.listen(3010,()=>console.log("server is running..."))