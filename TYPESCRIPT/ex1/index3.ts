let member: number | string = 123;

// 유저 타입 선언
interface User {
  id: number;
  name: string;
}

// 응답 처리 함수
function handleResponse(response: unknown) {
  // 타입 가드: 객체이고, id와 name이 있을 때만 User로 간주
  if (typeof response === 'object' && response !== null && 'id' in response && 'name' in response) {
    const user = response as User;
    console.log(`User: ${user.name}`);
  } else {
    console.error('Invalid user response:', response);
  }
}

// 예시: 실제 API 응답
const apiResponse: unknown = JSON.parse('{"id": 1, "name": "Jane"}');

handleResponse(apiResponse); // ✅ 안전하게 처리됨
