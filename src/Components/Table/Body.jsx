
import Timer from "../TImer/TImer";
import Click from "./Click";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const Body = ({ body, handleaddItems, handlePrice, product }) => {
    
    const showALert = (data) => {
        Swal.fire({
            title: `${data.title}`,
            text: `${data.description}`,
            imageUrl: `${data.image}`,
            imageWidth: 300,
            imageHeight: 200,
            confirmButtonText: 'Cool',
            customClass: {
                confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
            }
          })
    }
    
    return (
        
        <>
            {
                body.map((data) => { 
                    return (
                        <tr key={data.id}>
                            <td className='py-4 px-8 border-t-2 border-[#DCE5F3] text-left text-lg'>
                                <div className='flex gap-3'>
                                    <img className='w-[5rem] h-[5rem]' src={data.image} alt="" />
                                    <p>{data.title}</p>
                                    <button onClick={()=>showALert(data)} className="btn btn-sm btn-outline btn-accent">Details</button>
                                </div>
                            </td>
                            <td className='py-4 px-8 border-t-2 border-[#DCE5F3] text-lg text-center'>{data.currentBidPrice}</td>
                            <td className='py-4 px-8 border-t-2 border-[#DCE5F3] text-lg text-center'> <Timer duration={data.timeLeft} /> </td>
                            <td className='py-4 border-t-2 border-[#DCE5F3] text-lg text-center'>
                                <Click data = {data} handleaddItems={handleaddItems} handlePrice={handlePrice} product={product}/>
                            </td>
                        </tr>
                    )
                })
            }
        </>
        
    );
};

export default Body;