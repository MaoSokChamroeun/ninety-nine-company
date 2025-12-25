
import discover from "../assets/icon_GIF/discover.gif"
import target from "../assets/icon_GIF/target.gif"
import Setting from "../assets/icon_GIF/setting.gif"
import Check from "../assets/icon_GIF/reviews.gif"
import delivery from "../assets/icon_GIF/delivery.gif"
const steps = [
  {
    title: "Discovery",
    description: "Understanding your needs & goals",
    icon: discover,
    color: "from-blue-500 to-blue-700",
    delay: 400,
  },
  {
    title: "Strategy",
    description: "Developing a customized plan",
    icon: target,
    color: "from-purple-500 to-purple-700",
    delay : 450,
  },
  {
    title: "Execution",
    description: "Bringing the plan to life",
    icon: Setting,
    color: "from-yellow-500 to-yellow-700",
    delay : 500,
  },
  {
    title: "Review",
    description: "Gathering feedback and optimizing",
    icon: Check,
    color: "from-teal-500 to-teal-700",
    delay : 550,
  },
  {
    title: "Delivery",
    description: "Launching the finished product",
    icon: delivery,
    color: "from-green-500 to-green-700",
    delay : 600,
  },
];

export default steps