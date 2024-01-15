export default class HttpClient {
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  async get() {
    try {
      const response = await fetch(this.#url);

      if (response.ok) {
        const result = await response.json(); /* console.log(response); */

        return result;
      } else {
        throw new Error(`${response.status}${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade: ${error}`);
    }
  }
}
