import http from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`/serverless?page=${page}`);
  }

  get(id) {
    return http.get(`/serverlessreviewspec?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`/serverless?${by}=${query}&page=${page}`);
  } 

  createReview(data) {
    return http.post("/serverlessreview", data);
  }

  updateReview(data) {
    return http.put("/serverlessreviewedit", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/serverlessreviewdel?id=${id}`, {data:{user_id: userId}});
  }

  getCuisines(id) {
    return http.get(`/serverlesscuisine`);
  }

}

export default new RestaurantDataService();