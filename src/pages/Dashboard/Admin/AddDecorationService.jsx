import { useForm } from "react-hook-form";
import { uploadImageToImgBB } from "../../../utilities";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import Swal from "sweetalert2";
import { SiSpine } from "react-icons/si";
import { ImSpinner5 } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddDecorationService = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // Post new service to the server via tanstack query mutation
  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: async (payload) => await axiosSecure.post("/add-service", payload),
    onSuccess: data => {
      console.log(data)
      if (data?.data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Service Added",
          text: `Service Added Successfully Done!`,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    },
    onError: error => {
      console.log(error)
    },
    onMutate: payload => {
      console.log("I will post this data--->", payload)
    },
    onSettled: (data, error) => {
      if (data) console.log(data)
      if (error) console.log(error)
    }
  })

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    const { cost, image, long_description, providers, service_category, service_name, short_description, status, tags, unit } = data
    const imageFile = image[0];
    try {
      const imageURL = await uploadImageToImgBB(imageFile);
      const serviceData = {
        service_name,
        service_category,
        cost: Number(cost),
        image: imageURL,
        long_description,
        providers: providers.split(",").map((p) => p.trim()),
        short_description,
        status,
        tags: tags.split(",").map((t) => t.trim()),
        unit
      }
      await mutateAsync(serviceData);
      reset();
    } catch (err) {
      console.log(err)
    }
    if (isPending) return <Loading></Loading>
    if (isError) return <ErrorPage></ErrorPage>
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 md:my-10 bg-white rounded-2xl shadow-xl border border-pink-100">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-secondary">
          Add New <span className="text-primary">Decoration Service</span>
        </h2>
        <p className="text-sm text-accent mt-2">
          Create a beautiful service listing for your wedding clients
        </p>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/*------------- Service Name --------------*/}
          <div>
            <label className="form-label">Service Name</label>
            <input
              {...register("service_name", { required: true })}
              placeholder="Wedding Stage Decoration"
              className="input input-bordered w-full"
            />
            {errors.service_name && (
              <p className="text-red-500 text-xs mt-1">Required</p>
            )}
          </div>

          {/*------------ Category -------------*/}
          <div>
            <label className="form-label">Category</label>
            <select
              {...register("service_category", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select category</option>
              <option value="Wedding">Wedding</option>
              <option value="Reception">Reception</option>
              <option value="Holud">Holud</option>
              <option value="Engagement">Engagement</option>
            </select>
          </div>

          {/*------------ Cost --------------*/}
          <div>
            <label className="form-label">Price</label>
            <input
              type="number"
              {...register("cost", { required: true, min: 0 })}
              placeholder="50000"
              className="input input-bordered w-full"
            />
            {errors.cost && (
              <p className="text-red-500 text-xs mt-1">Price must be positive</p>
            )}
          </div>

          {/*------------- Unit ---------------*/}
          <div>
            <label className="form-label">Pricing Unit</label>
            <input
              {...register("unit", { required: true })}
              placeholder="per event / per day"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/*------------ Image -----------*/}
        <div>
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            className="w-full file-input border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:ring-0 focus:border-primary dark:focus:border-primary bg-transparent text-gray-600 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500  transition-colors"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            PNG, JPG or JPEG (max - 2mb)
          </p>
        </div>

        {/*------------------ Description -----------------*/}
        <div>
          <label className="form-label">Description</label>
          <textarea
            {...register("short_description", { required: true })}
            placeholder="A brief overview of the decoration service"
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/*--------- Long Description */}
        <div>
          <label className="form-label">Detailed Description</label>
          <textarea
            {...register("long_description", { required: true })}
            placeholder="Explain decoration style, materials, setup, theme, etc."
            className="textarea textarea-bordered w-full min-h-[140px]"
          />
        </div>

        {/*------------- Providers -------------*/}
        <div>
          <label className="form-label">Providers</label>
          <input
            {...register("providers", { required: true })}
            placeholder="Wedora Decor, Elegant Events"
            className="input input-bordered w-full"
          />
          <p className="text-xs text-gray-500 mt-1">
            Separate multiple providers with commas
          </p>
        </div>

        {/*------------- Tags --------------*/}
        <div>
          <label className="form-label">Tags</label>
          <input
            {...register("tags")}
            placeholder="wedding, floral, luxury"
            className="input input-bordered w-full"
          />
        </div>

        {/*------------- Status -------------*/}
        <div>
          <label className="form-label">Service Status</label>
          <select
            {...register("status")}
            defaultValue="active"
            className="select select-bordered w-full"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-sm md:btn-md bg-primary text-white hover:bg-primary/90 transition-all rounded-full"
        >
          {isPending ? (<ImSpinner5 className="animate-spin m-auto" />) : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddDecorationService;
