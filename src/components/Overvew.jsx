import banner from '../assets/BG.png'

function Overvew() {
    const card = [
        {
            number: "32%",
            description: "Improvement in Open Rates"
        },
        {
            number: "75%",
            description: "Improvement in Ramp Time"
        },
        {
            number: "35%",
            description: "Improvement in Meetings Booked"
        }
    ]
  return (
    <div
     className="w-full bg-cover bg-center p-8"  
                style={{ backgroundImage: `url(${banner})` }} 
    >
        <div className='p-8 max-w-[591px]'>
<h2 className='text-[#FFFFFF] text-[32px] font-semibold'>Allocate effort where your reps make an inpact.</h2>
<h2 className='text-[32px] font-medium italic text-[#0FF1F6]'>
Let us handle the rest.
</h2>
<p className='font-light text-xl text-[#d2d1d1]'>
Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
</p>
<div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4 py-4 mt-4'>
    {
        card.map((item, index) => (
            <div key={index}>
                <h2 className='text-[40px] font-bold text-[#0FF1F6]'>{item.number}</h2>
                <p className='text-xl font-medium text-[#E9EEF1]'>{item.description}</p>
            </div>
        ))
    }
</div>
        </div>
    </div>
  )
}

export default Overvew