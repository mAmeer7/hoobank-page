import { features } from "../constants"
import styles, {layout} from "../constants/style";
import Button from "./Button";


function FeatureCard (props){

  const {id, icon, title, content, index}= props
  return (
<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-pop font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-pop font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>


  )



}






export default function Business() {
  return (
   <section id="features" className={layout.section}>

    <div className={layout.sectionInfo}>
    <h2 className={`font-pop ${styles.heading2}`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} font-pop max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      <Button  style={'mt-10'}/>

    </div>


    {/* Feature Cards */}

    <div className={`${layout.sectionImg} flex-col`}>
    {
      features.map((feature, index)=>(
              <FeatureCard key={feature.id} {...feature} index={index}/>
  
      ))
    }
    </div>

   </section>
  )
}