import styles from "../constants/style";
import { arrowUp } from "../assets";

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-l from-blue-100 to-blue-500 p-[5px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} w-[100%] h-[100%] flex-col rounded-full bg-primary  `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-pop font-medium text-[18px] leading-[23px]">
            <span className="text-white">Get</span>
            
          </p>
          <img
              src={arrowUp}
              className={`w-[23px] h-[23px] object-contain ml-2`}
              alt=""
            />
        </div>
        <p className="font-pop font-medium text-[18px] leading-[23px]">
          <span className="text-white">Started</span>
        </p>
      </div>
    </div>
  );
}
