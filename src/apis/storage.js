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
    const compressedFile = await imageCompression(file, options);

    const filePath = `public/${uuidv4()}.webp`;
    const { error: uploadError } = await supabase.storage
      .from('soul-pick')
      .upload(filePath, compressedFile, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('업로드 오류:', uploadError.message);
      return null;
    }

    const { data: publicUrlData, error: publicUrlError } = await supabase.storage
      .from('soul-pick')
      .getPublicUrl(filePath);

    if (publicUrlError) {
      console.error('Public URL 생성 오류:', publicUrlError.message);
      return null;
    }

    return publicUrlData.publicUrl;

  } catch (error) {
    console.error('파일 압축 오류:', error.message);
    throw error;
  }
};