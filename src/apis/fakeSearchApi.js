// 가짜 검색 API 입니다.
export const fakeSearchApi = async (query) => {
  console.log("API 호출!", query);
  return new Promise((resolve) =>
    setTimeout(() => resolve([`${query} 결과1`, `${query} 결과2`]), 1000)
  );
};
