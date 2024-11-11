import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = 'http://192.168.10.138:8000';

export const updateUserProfile = async (height, weight) => {
  const token = await AsyncStorage.getItem('access');
  const response = await fetch(`${API_URL}/profile/update/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ height, weight }),
  });
  if (!response.ok) throw new Error('Failed to update profile');
  return response.json();
};

export const getUserProfile = async () => {
  const token = await AsyncStorage.getItem('access');
  const response = await fetch(`${API_URL}/profile/`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch profile');
  return response.json();
};
