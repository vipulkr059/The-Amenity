import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { Textarea } from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabins } = useCreateCabin();
  const { isUpdating, editCabins } = useUpdateCabin();

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const isLoading = isCreating || isUpdating;

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editCabins(
        { newCabinData: { ...data, image: image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      createCabins(
        { ...data, image: image, images: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          disabled={isLoading}
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Location" error={errors?.location?.message}>
        <Input
          disabled={isLoading}
          type="text"
          id="location"
          {...register("location", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          disabled={isLoading}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be more than 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Bedrooms" error={errors?.bedrooms?.message}>
        <Input
          disabled={isLoading}
          type="number"
          id="bedrooms"
          {...register("bedrooms", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be more than 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          disabled={isLoading}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be more than 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          disabled={isLoading}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              getValues().regularPrice >= value ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow label="Category" error={errors?.category?.message}>
        <Input
          disabled={isLoading}
          type="text"
          id="category"
          defaultValue=""
          {...register("category", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          disabled={isLoading}
          type="text"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>
          {isEditSession ? "Edit Cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
