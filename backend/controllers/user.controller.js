const getUsers = async (req,res)=>{
        try {
            const users = await User.find({});
            res.status(201).json(users);
            
        } catch (error) {
            res.status(500).json({message : error.message});
        }
       
    };
    //logic for get all users 

const singleUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);      
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};


module.exports={
    getUsers,
    singleUser
}