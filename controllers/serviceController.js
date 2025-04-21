import Service from '../models/Service.js';

export const getServices = async (req, res) => {
  const services = await Service.find({});
  res.json(services);
};

export const enrollService = async (req, res) => {
  const { serviceId, userId } = req.body;

  const service = await Service.findById(serviceId);
  if (!service) return res.status(404).json({ message: 'Service not found' });

  service.enrolledUsers.push(userId);
  await service.save();

  res.status(200).json({ message: 'Enrollment successful' });
};
