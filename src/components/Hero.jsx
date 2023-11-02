import styles from "../constants/style";
import { discount, robot } from "../assets/index";
import { GetStarted } from "../components/index";

export default function Hero() {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex md:flex-row flex-col `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-[5px] bg-gradient-to-r   from-blue-500 to-pink-400  rounded-[10px] mb-2 ">
          <img src={discount} alt="" className="w-[32px] h-[32px]" />

          <p className={`${styles.paragraph}   text-slate-900   font-pop`}>
            <span className="text-white  font-bold font-pop ">20% </span>
            Discount For{" "}
            <span className="text-white font-bold font-pop">1 month </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-pop font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            {" "}
            The Next <br className="sm:block hidden" />{" "}
            <span className="bg-gradient-to-l from-blue-100 to-blue-500 text-transparent bg-clip-text">
              Generation
            </span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-white  font-pop font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
          Payment Method{" "}
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {" "}
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* Robotic arm section */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className="w-[100%] h-[100%] relative z-[5] mt-2" alt="" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full pink__gradient bottom-40" />
      
        
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}
