import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignUp(firstName, lastName, filename) {
  const res = [];
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({
      status: 'fulfilled',
      value: user,
    });
  } catch (error) {
    res.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  try {
    const photo = await uploadPhoto(filename);
    res.push({
      status: 'fulfilled',
      value: photo,
    });
  } catch (error) {
    res.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return res;
}
