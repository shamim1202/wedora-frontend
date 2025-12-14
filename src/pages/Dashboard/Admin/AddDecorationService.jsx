import { useForm } from "react-hook-form";

const AddDecorationService = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const formattedData = {
      ...data,
      cost: Number(data.cost),
      providers: data.providers.split(",").map((p) => p.trim()),
      tags: data.tags.split(",").map((t) => t.trim()),
      rating: 0,
      review_count: 0,
    };

    onSubmit(formattedData);
    reset();
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
          {/* Service Name */}
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

          {/* Category */}
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

          {/* Cost */}
          <div>
            <label className="form-label">Price</label>
            <input
              type="number"
              {...register("cost", { required: true })}
              placeholder="50000"
              className="input input-bordered w-full"
            />
          </div>

          {/* Unit */}
          <div>
            <label className="form-label">Pricing Unit</label>
            <input
              {...register("unit", { required: true })}
              placeholder="per event / per day"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Image */}
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

        {/* Short Description */}
        <div>
          <label className="form-label">Short Description</label>
          <textarea
            {...register("short_description", { required: true })}
            placeholder="A brief overview of the decoration service"
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="form-label">Detailed Description</label>
          <textarea
            {...register("long_description", { required: true })}
            placeholder="Explain decoration style, materials, setup, theme, etc."
            className="textarea textarea-bordered w-full min-h-[140px]"
          />
        </div>

        {/* Providers */}
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

        {/* Tags */}
        <div>
          <label className="form-label">Tags</label>
          <input
            {...register("tags")}
            placeholder="wedding, floral, luxury"
            className="input input-bordered w-full"
          />
        </div>

        {/* Status */}
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
          className="w-full btn btn-lg bg-primary text-white hover:bg-primary/90 transition-all rounded-full"
        >
          Add Decoration Service
        </button>
      </form>
    </div>
  );
};

export default AddDecorationService;
