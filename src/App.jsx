/* eslint-disable no-unused-vars */
import styles from "./constants/style";
import {  Navbar,
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  GetStarted,
  Hero,
  Stat,
  Testimonial, Footer } from "./components";






function App() {
  return (
   
      <div className=" bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
            </div>
        </div>
        {/* Hero */}
        <div className={`bg-primary  ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}><Hero/></div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stat/> <Business/> <Billing/> <CardDeal/> <Testimonial/> <Clients/> <CTA/> 
            <Footer/>
          </div>
        </div>
      </div>
   
  );
}

export default App;
