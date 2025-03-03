const getAllProducts = (req, res) => {
    res.status(200).json({ message: 'Fetch all products' });
};

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.status(200).json({ message: `Fetch product with ID: ${productId}` });
};

const createProduct = (req, res) => {
    const productData = req.body;
    res.status(201).json({ message: 'Product created successfully', data: productData });
};

const updateProduct = (req, res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    res.status(200).json({ message: `Product with ID: ${productId} updated`, data: updatedData });
};

const deleteProduct = (req, res) => {
    const productId = req.params.id;
    res.status(200).json({ message: `Product with ID: ${productId} deleted` });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
