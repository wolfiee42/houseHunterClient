import { useState } from "react";
import Container from "../../../Components/Container/Container"
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../Components/useAxiosSecure";



const AddHouse = () => {

    const axiosSecure = useAxiosSecure();

    const [city, setCity] = useState();
    const [room, setRoom] = useState();
    const [phoneNumber, setphoneNumber] = useState();



    const handleCity = e => {
        setCity(e.target.value);
    }

    const handleRoom = e => {
        setRoom(e.target.value);
    }

    const handlePhoneNumber = e => {
        const newValue = e.target.value.replace(/\D/g, '');
        const limitedValue = newValue.slice(0, 11);
        setphoneNumber(limitedValue);
    }


    const imgHostingkey = import.meta.env.VITE_imgbb_key;
    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingkey}`;


    const {
        register,
        handleSubmit
    } = useForm()


    const onSubmit = async (data) => {
        // const imageFile = { image: data.image[0] };
        // const res = await axiosSecure.post(imgHostingApi, imageFile, {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        //     // image: res.data.data.display_url,
        // })
        console.log(data);
    }


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-2 mb-4 w-[500px]">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Address</span>
                        </div>
                        <input {...register("address")} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="flex gap-2 mb-4 w-[500px]">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">City</span>
                        </div>
                        <select value={city} onChange={handleCity} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>City Name</option>
                            <option value={"Dhaka"} >Dhaka</option>
                            <option value={"Chattogram"} >Chattogram</option>
                            <option value={"Rajshahi"} >Rajshahi</option>
                            <option value={"Sylhet"} >Sylhet</option>
                            <option value={"Rangpur"} >Rangpur</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Bedrooms</span>
                        </div>
                        <input {...register("bedroom")} type="number" placeholder="Bedrooms" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="flex gap-2 mb-4 w-[500px]">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Room Size</span>
                        </div>
                        <select value={city} onChange={handleRoom} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>City Name</option>
                            <option value={"Big"} >Big</option>
                            <option value={"Medium"} >Medium</option>
                            <option value={"Small"} >Small</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Bathrooms</span>
                        </div>
                        <input {...register("bathroom")} type="number" placeholder="Bathrooms" className="input input-bordered w-full max-w-xs" />
                    </label>

                </div>
                <div className="flex gap-2 mb-4 w-[500px]">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Picture</span>
                        </div>
                        <input  {...register("image", { required: true })} type="file"
                            className="file-input file-input-bordered file-input-md  w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Availablity Date</span>
                        </div>
                        <input type="text" placeholder="Availablity Date" className="input input-bordered w-full max-w-xs" />
                    </label>

                </div>
                <div className="flex gap-2 w-[500px]">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Rent Per Month</span>
                        </div>
                        <input {...register("rent")} type="text" placeholder="Rent Per Month" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Phone Number</span>
                        </div>
                        <input value={phoneNumber} maxLength={11} onChange={handlePhoneNumber} type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <label className="form-control w-[500px]">
                    <div className="label">
                        <span className="Description">House Description</span>
                    </div>
                    <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                </label>
                <button type="submit" className="btn">Add House</button>
            </form>
        </Container>
    );
};

export default AddHouse;