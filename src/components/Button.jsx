/* eslint-disable react/prop-types */


export default function Button(props) {
  const {style} = props;
  
  return (
    <button type="button" className={`py-4 px-6 font-pop font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${style}`}>
    Get Started
  </button>
  )
}
