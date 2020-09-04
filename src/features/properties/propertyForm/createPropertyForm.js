import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Text, Box, Button } from "@chakra-ui/core";
import OperationType from "./operationType";
import InputTextField from "./inputTextField";
import PropertyType from "./propertyType";
import InputSelectField from "./inputSelectField";
import InputTextGroup from "./inputTextGroup";
import CheckboxAmenities from "./checkboxAmenities";
import SwitchPetsAllowed from "./switchPetsAllowed";
import InputTextArea from "./inputTextArea";
import UploadImages from "./uploadImages";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../session/sessionSlice";
//import { createProperty } from "../../../services/api";

const CreatePropertyForm = () => {
  const [operationType, setOperationType] = useState("rent");
  const [propertyType, setPropertyType] = useState("house");
  const [apartmentAmenities, setApartmentAmenities] = useState([]);
  const [buildingAmenities, setBuildingAmenities] = useState([]);
  const [closeBy, setCloseBy] = useState([]);
  const [petsAllowed, setPetsAllowed] = useState(true);
  const [file, setFile] = useState([]);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
   // dispatch(createProperty(user.token,values))
    console.log({
      ...values,
      operation_type: operationType,
      property_type: propertyType,
      apartment_amenities: apartmentAmenities,
      building_amenities: buildingAmenities,
      close_by: closeBy,
      pets_allowed: petsAllowed,
      images: file,
    });
  };

  return (
    <Box w="100%" maxW="1140px">
      <Text fontSize="28px" fontWeight="bold" mb="20px">
        Create listing property
      </Text>
      <Text fontSize="24px" fontWeight="bold">
        Listing information
      </Text>

      <Formik
        initialValues={{
          addres: "",
          monthly_rent: "",
          maintenance: "",
          bedrooms: "",
          bathrooms: "",
          area: "",
          pets_allowed: "",
          description: "",
        }}
        validationSchema={Yup.object({
          addres: Yup.string().required("Required"),
          monthly_rent: Yup.string().required("Required"),
          maintenance: Yup.string().required("Required"),
          bedrooms: Yup.string().required("Required"),
          bathrooms: Yup.string().required("Required"),
          area: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          //apartment_amenities: Yup.array().required("Required")
          // building_amenities: Yup.array().required("Required"),
          // close_by: Yup.array().required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <OperationType
            operationType={operationType}
            setOperationType={setOperationType}
          />

          <InputTextField label="Addres" type="text" name="addres" />

          <InputTextField
            label="Monthly rent"
            type="text"
            name="monthly_rent"
          />

          <InputTextField
            label="Maintenance"
            type="text"
            name="maintenance"
            text="Amount paid to the building for maintenance."
          />

          <PropertyType
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />

          <Box d="flex" mb="30px">
            <InputSelectField label="Bedrooms" name="bedrooms" />
            <InputSelectField label="Bathrooms" name="bathrooms" />
            <InputTextGroup label="Area" name="area" />
          </Box>

          <Text fontSize="24px" fontWeight="bold" mb="18px">
            Amenities
          </Text>

          <Box mb="30px">
            <CheckboxAmenities
              apartmentAmenities={apartmentAmenities}
              setApartmentAmenities={setApartmentAmenities}
              label="Apartment amenities"
              array={[
                "Central Air Conditioning",
                "Stove",
                "Fridge",
                "TV",
                "Laundry room",
                "Balcony",
                "Furnished",
                "Dishwasher",
                "Closets",
                "Walk-in closet",
                "Dog room",
              ]}
            />

            <CheckboxAmenities
              buildingAmenities={buildingAmenities}
              setBuildingAmenities={setBuildingAmenities}
              label="Building amenities"
              array={[
                "Parking spot",
                "Park",
                "Child pool",
                "Pool",
                "24/7 surveillance",
                "Access Control",
                "Dog park",
              ]}
            />

            <CheckboxAmenities
              closeBy={closeBy}
              setCloseBy={setCloseBy}
              label="Close by"
              array={[
                "Supermarket",
                "Minimarket",
                "Ramen restaurant",
                "Restaurants",
                "Child school",
                "University",
                "Park",
                "Dog school",
              ]}
            />
          </Box>

          <SwitchPetsAllowed
            petsAllowed={petsAllowed}
            setPetsAllowed={setPetsAllowed}
          />

          <Text fontSize="24px" fontWeight="bold" mb="16px">
            About the property
          </Text>

          <InputTextArea name="description" />

          <UploadImages file={file} setFile={setFile} />

          <Box d="flex" justifyContent="center" mb="70px">
            <Button
              type="submit"
              variantColor="teal"
              bg="#4FD1C5"
              variant="solid"
              size="md"
            >
              Publish Listing
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default CreatePropertyForm;
