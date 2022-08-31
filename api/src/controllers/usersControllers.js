const { User } = require('../db.js');
const hash = require('object-hash');
/* const decryptedString = cryptr.decrypt(encryptedString); */
const getUsers = async (mail,password) => {
  try {
    if(mail && password){
      const user = await User.findAll({  where: {
        mail,
        password
      } });

      return user.length ? user : "does not register in the database";
    }

    let response = await User.findAll();

    return response.length ? response : "does not exist users in the database";
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (name, surname, age, mail, password,rol) => {

  try {
    let hashPassword = hash(password)
    const [row, created] = await User.findOrCreate({
      where: {mail},
      defaults: {
        name,
        surname,
        age,
        mail,
        password: hashPassword,
        rol
      },
    });
    if(!created){
        return 'Mail is already used'
    }else{
        return 'user created successfully'
    }
  
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (id) => {
    try {
        const deleteUser = await User.destroy({
            where: { id },
        });
        if (deleteUser) {
            return  "The user has been removed successfully"
        }
            return "The user cannot be removed because the id does not exist"
 
    } catch (error) {
        console.log(error);
    }

}

const updateUser = async (name, surname, age, mail, id) => {
  console.log(name, surname, age, mail,id)
    try {
        const user = await User.update({
            name, surname, age, mail
        }, { where: { id : id} });

        if (user[0]) return "the user was updated successfully";
        
        return "the user to update was not found"
    } catch (error) {
        console.log(error);
    }



}

module.exports = { getUsers, createUser, deleteUserById, updateUser };
