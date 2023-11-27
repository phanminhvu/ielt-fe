import { PhotoCamera } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { Editor, IAllProps } from "@tinymce/tinymce-react";
import { TINY_API } from "constants/constants";
import { ChangeEvent, forwardRef, useEffect, useRef, useState } from "react";
import tinymce from "tinymce/tinymce";

export interface Props extends IAllProps {
  height?: number;
  name?: string;
}

const TinyMceCommon = forwardRef((props: Props, ref: any) => {
  const { height, initialValue } = props;

  const [isError, setIsError] = useState<boolean>(false);
  const editorRef = useRef<any>(null);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result;
        if (imageUrl) {
          const editor = editorRef.current.editor;
          editor.insertContent(`<img src="${imageUrl}" alt="Uploaded Image" />`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setIsError(!initialValue);
  }, [initialValue]);
  console.log(`[Debug - props]:`, props);
  return (
    <>
      {!props.disabled && (
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
            <PhotoCamera />
          </IconButton>
        </Stack>
      )}
      <Editor
        name={name}
        apiKey={TINY_API}
        onInit={(evt, editor: any) => {
          ref.current = editor;
        }}
        ref={editorRef}
        init={{
          height: height || 400,

          menubar: "file edit view insert format tools table", // Thêm 'table' vào để hiển thị nút bảng
          plugins:
            "advlist autolink lists link image  charmap print preview anchor earchreplace visualblocks code fullscreen table",
          toolbar:
            "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | table | removeformat ", // Thêm 'table' vào thanh công c,

          init_instance_callback: (editor) => {
            // editor.on("focusout", (e) => {
            //   if (!ref.current.getContent()) {
            //     setIsError(true);
            //   } else {
            //     setIsError(false);
            //   }
            // });
          },
          inline_styles: true,
        }}
        onEditorChange={(value) => {
          if (!value) {
            setIsError(true);
          } else {
            setIsError(false);
          }
        }}
        initialValue={initialValue}
        {...props}
      />
      {/* {isError && <Typography style={{ color: "red", fontSize: 14 }}>This is required field</Typography>} */}
    </>
  );
});
export default TinyMceCommon;
