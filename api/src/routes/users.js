const { Router } = require("express");

const {
    createUser,
    getUsers,
    deleteUserById,
    updateUser
} = require("../controllers/usersControllers");
const router = Router();

router.get("/", async (req,res)=>{

    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        return res.status(400).json(error);
    }
 
});
router.post("/", async (req,res)=>{
    const {
        name, surname, age, mail, password,rol
    } = req.body;
    const user = await createUser(name, surname, age, mail, password,rol) 
    return res.status(201).json(user);
});

router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const activityRemove = await deleteUserById(id);
        return res.status(200).json(activityRemove);
    } catch (error) {
        return res.status(400).json(error);
    }
});


router.put("/:id", async (req,res)=>{
    const { id } = req.params;
    console.log(id, "mioooo")
    const {
        name, surname, age, mail
    } = req.body;
    const user = await updateUser(name, surname, age, mail, id) 
    return res.status(201).json(user);
});

module.exports = router;