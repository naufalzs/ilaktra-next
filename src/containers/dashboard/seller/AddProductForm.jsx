import { CustomInput } from "@/components";
import Button from "@/components/Button";
import { H1 } from "@/components/Heading";

const AddProductForm = ({ toggleShowForm }) => (
  <div className="w-full h-full flex flex-col p-10">
    <div className=" py-10 lg:w-[732px]">
      <div className="flex flex-col space-y-5 mb-5">
        <H1>Add Product</H1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-y-6">
        <CustomInput
          label="Product Title"
          name="title"
          placeholder="Your product title here"
        />
        <div className="mb-4 md:mb-0 col-span-2 w-1/2">
          <label
            htmlFor="name"
            className="font-montserrat text-xs text-[#080a0b] font-medium leading-4"
          >
            Product Image
          </label>
          <div className="mt-3 p-2 relative rounded-md shadow-lg flex items-center justify-between border border-gray-50 overflow-hidden">
            <p className="font-montserrat text-xs text-[#a8a8aa] leading-4">
              No image selected
            </p>
            <button className="w-[133px] h-[33px] bg-[#e0fef8] rounded shadow-btn2">
              <p className="font-montserrat text-xs text-[#030303] leading-4">
                Select image
              </p>
            </button>
          </div>
        </div>
        {/* Message field */}
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block text-bold font-medium text-gray-700"
          >
            Product Description
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              rows="6"
              className="shadow-lg p-4  focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Your product description"
            ></textarea>
          </div>
        </div>
        <div className="col-span-2 flex justify-end space-x-5">
          <Button onClick={toggleShowForm} isBack />
          <Button isAdd />
        </div>
      </div>
    </div>
  </div>
);

export default AddProductForm;
