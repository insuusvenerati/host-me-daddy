import { uppy } from "@/lib/uppy";
import { DragDrop } from "@uppy/react";

const UploadImageToS3WithReactS3 = () => {
  return (
    <div>
      <div>React S3 File Upload</div>
      <DragDrop uppy={uppy} />
    </div>
  );
};

export default UploadImageToS3WithReactS3;
