const { Router } = require("express");
const hash = require('object-hash');

const {
    getUsers,
} = require("../controllers/usersControllers");
const router = Router();

router.post("/", async (req,res)=>{
    
    try {
     const {
           mail, password
        } = req.body; 
        let hashPassword = hash(password);
   
      const users = await getUsers(mail,hashPassword);
        res.status(200).json(users);
     
    } catch (error) {
        return res.status(400).json(error);
    }
 
});

module.exports = router;