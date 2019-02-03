import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0770a4f5070cb68dfe496919faf3d46548d2f8d913847d931feac40ab20e8616'
  }
});