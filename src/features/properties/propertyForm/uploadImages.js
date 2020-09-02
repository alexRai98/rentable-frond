import React, { useState } from "react";
import { Stack, Image, Box } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";
import { ReactComponent as DeleteIcon } from "../../images/deletePhoto.svg";

const Label = styled.label`
  width: 135px;
  border: 1.5px solid #4fd1c5;
  color: #4fd1c5;
  border-radius: 4px;
  padding: 6px 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const UploadImages = () => {
  const [file, setFile] = useState([]);

  let fileObj = [];
  let fileArray = [];

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setFile([...file, ...fileArray]);
  };

  const uploadFiles = (e) => {
    e.preventDefault();
    console.log(file);
  };

  const handleDeletePhoto = (index) => {
    console.log(index);
    const result = file.filter((url) => url !== file[index]);
    setFile(result);
  };

  return (
    <form>
      <Label>
        <input
          type="file"
          onChange={uploadMultipleFiles}
          accept="image/*"
          multiple
        />
        Add photo
        <PlusIcon />
      </Label>

      <Stack isInline spacing={4}>
        {(file || []).map((url, index) => (
          <Box key={index} style={{ position: "relative" }}>
            <Image src={url} w="300px" h="200px" />
            <DeleteIcon
              style={{
                position: "absolute",
                top: "7px",
                right: "7px",
                cursor: "pointer",
              }}
              onClick={() => handleDeletePhoto(index)}
            />
          </Box>
        ))}
      </Stack>

      <button type="button" onClick={uploadFiles}>
        Upload
      </button>
    </form>
  );
};
