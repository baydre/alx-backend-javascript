import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    object.photo = photo;
    object.user = user;
  } catch (error) {
    object.photo = null;
    object.user = null;
  }
  return object;
}
