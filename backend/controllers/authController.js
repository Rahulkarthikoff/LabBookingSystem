// Import the User model (uncomment when database connection is set up)
const User = require('../models/User');
// 
const loginUser = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        // Uncomment below when connected to the database
        const user = await User.findOne({ email, password, role });
        
        // For now, simulate user login with dummy data
        // const user = (email === 'test@example.com' && password === 'password123' && role === 'Faculty')
        //     ? { email, role }
        //     : null;

        if (user) {
            return res.status(200).json({ message: 'Login successful', user });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error logging in:', err);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    loginUser,
};
