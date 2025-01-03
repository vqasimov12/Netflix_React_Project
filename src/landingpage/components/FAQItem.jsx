import { motion, AnimatePresence } from "framer-motion";
import plus from "../../assets/icons/plus.svg";

const FAQItem = ({ title, desc, id, openItem, setOpenItem }) => {
  const isOpen = openItem === id;
  return (
    <button
      onClick={() => {
        setOpenItem((prevState) => (prevState !== id ? id : null));
      }}
      className="flex flex-col  bg-[#2d2d2d] justify-center w-full "
    >
      <div className="w-full  hover:bg-[#414141] transition duration-200 ease-in items-center text-[18px] justify-between lg:text-[24px] flex h-[72px] lg:h-[84px] p-6 border-b-[1px] border-b-black">
        <h3 className="text-white text-[18px] lg:text-[24px] ">{title}</h3>
        <img
          src={plus}
          alt="Plus Icon"
          className={`${isOpen ? "rotate-[45deg]" : ""} w-6 h-6 lg:w-9 lg:h-9`}
        />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.15, ease: [0.04, 0.12, 0.13, 0.18] }}
          >
            <div className="px-6 py-6">
              <p className="text-left leading-[30px] text-white text-[18px] lg:text-[24px] ">
                {desc.split("[break]")[0]}
                <br/>
                <br/>
                {desc.split("[break]")[1]}

              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </button>
  );
};

export default FAQItem;
