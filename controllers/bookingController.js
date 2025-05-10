const Booking = require('../models/Booking');

const Activity = require ('../models/Activity')

exports.bookActivity = async (req, res) => {
    const { activityCode } = req.body; // Use activityCode instead of activityId
    const userId = req.userId;
  
    try {
      const activity = await Activity.findOne({ code: activityCode });
  
      if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
      }
  
      const booking = new Booking({
        userId,
        activityId: activity._id,
      });
  
      await booking.save();
  
      res.status(201).json({ message: 'Activity booked successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  exports.getMyBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({ userId: req.userId }).populate('activityId');
        res.json(bookings);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };