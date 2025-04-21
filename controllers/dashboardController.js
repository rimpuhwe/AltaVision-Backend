import User from '../models/User.js';
import Service from '../models/Service.js';

export const getDashboardData = async (req, res) => {
  const { role, id } = req.user;

  if (role === 'admin') {
    const users = await User.find({});
    const services = await Service.find({});
    res.json({ users, services });
  } else {
    const services = await Service.find({ enrolledUsers: id });
    res.json({ services });
  }
};
