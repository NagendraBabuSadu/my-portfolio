import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter: React.FC = () => {
  interface statsProps {
    id: number;
    value: number;
    label: string;
  }

  const stats: statsProps[] = [
    { id: 1, value: 3, label: "Years of Experience" },
    { id: 2, value: 3, label: "Projects Completed" },
    { id: 4, value: 2, label: "Happy Clients" },
  ];


  const Counter = ({target} : {target: number}) =>{
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        if(start == end) return;

        const duration = 3000;
        const stepTime = Math.abs(Math.floor(duration/end))
        console.log(stepTime);

        const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if(start === end) clearInterval(timer);

        }, stepTime);
        
        return (() => clearInterval(timer));
    }, [target])
    return <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 text-5xl font-bold">{count}+</span>
  }
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 p-6"
      >
        {stats.map((stat, index) => (
          <div key={stat.id} className="text-center relative">
            <Counter target={stat.value} />
            <p className="text-gray-300 text-lg mt-2 p-4">{stat.label}</p>
            {index !== stats.length -1 && (
              <div className="hidden md:block absolute right-[-20px] top-1 h-20 w-[2px] bg-gray-500"></div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Counter;
