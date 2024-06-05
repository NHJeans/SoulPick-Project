import supabase from './supabaseClient';
import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";


export const uploadFile = async (file) => {
  try {
    const options = {
      maxSizeMB: 20,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: "image/webp"
    }
    const compressedFile = await imageCompression(file, options)

    const { data: profileImageData, error: uploadError } = await supabase.storage
      .from("soul-pick")
      .upload(`public/${uuidv4()}.webp`, compressedFile, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error("업로드 오류:", uploadError.message);
      return;
    }

    const { data: publicUrlData, error: publicUrlError } = supabase.storage
      .from("soul-pick")
      .getPublicUrl(profileImageData.path);

    if (publicUrlError) {
      console.log(publicUrlError);
    }
    return publicUrlData.publicUrl;

  } catch (error) {
    console.error("파일 압축 오류");
    throw error;
  }
};