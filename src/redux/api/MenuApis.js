//Gọi API đăng nhập
const messageError = 'Không thể kết nối tới server.';
const fakeApi = true;
import {API_URL} from '../../config';
export function menuApi(input) {
  if (fakeApi) {
    return {
        resultCode: 1,
        message: "Get Thành Công",
        data: [
            {
              heading: 'Sài gòn, hôm nay ăn gì?',
              title: 'Anise Aroma Art Bazar',
              url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              id: 1,
            },
            {
              heading: 'Thông tin nhà trường?',
              title: 'Food inside a Bowl, Food inside a Bowl',
              url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              id: 2,
            },
            {
              heading: 'Trùm cuối khao 60k?',
              title: 'Vegatable Salad',
              url:
                'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              id: 3,
            },
          ],
    };
  } else {
    return fetch(API_URL+'get_data', {
     
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.warn('responseJson', responseJson);
        return responseJson;
      })
      .catch((error) => {
        return {resultCode: -1, message: messageError};
      });
  }
}
