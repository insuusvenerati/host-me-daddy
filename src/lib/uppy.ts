import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import ThumbnailGenerator from "@uppy/thumbnail-generator";

export const uppy = new Uppy({
  autoProceed: true,
});

uppy.use(XHRUpload, {
  endpoint: "/api/upload",
  formData: true,
  method: "POST",
  fieldName: "photos",
});

uppy.use(ThumbnailGenerator, {
  thumbnailWidth: 200,
  waitForThumbnailsBeforeUpload: false,
});
