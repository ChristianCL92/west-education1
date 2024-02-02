export default class HttpClient {
  #url = '';

  constructor(url: string) {
    this.#url = url;
  }

  async get(): Promise<string> {
    try {
      const response = await fetch(this.#url);

      if (response.ok) {
        const result = await response.json();

        return result;
      } else {
        throw new Error(`${response.status}${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`An error occured: ${error}`);
    }
  }

  async add(courseData: object): Promise<object> {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',

        headers: {
          'Content-type': 'application/json',
        },

        body: JSON.stringify(courseData),
      });

      if (response.ok) {
        const result = await response.json();

        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw error;
    }
  }
}
