const getAllUsers = (req, res) => {
    res.status(200).json({ message: 'Fetch all users' });
};

const getUserById = (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `Fetch user with ID: ${userId}` });
};

const createUser = (req, res) => {
    const userData = req.body;
    res.status(201).json({ message: 'User created successfully', data: userData });
};

const updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    res.status(200).json({ message: `User with ID: ${userId} updated`, data: updatedData });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User with ID: ${userId} deleted` });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
