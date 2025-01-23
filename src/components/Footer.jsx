import logo from '../assets/img/Logo2.png';

function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:justify-between p-10 bg-[#07292F]'>
        <img className='max-w-[72px] h-auto' src={logo} alt="" />
        <p className='text-[#96ACAF]'>Copyright © 2023 Wizia. All rights reserved.</p>
    </div>
  )
}

export default Footer