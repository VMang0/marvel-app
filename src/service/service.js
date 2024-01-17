class Service {
  _apiBaseUrl = 'https://gateway.marvel.com:443/v1/public/';
  _key = '2531cfd5eff0fd2c7821aac82da2cb83';
  _apiKey = `apikey=${this._key}`;

  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`)
    }
    return await res.json();
  }
  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBaseUrl}characters?limit=9&offset=300&${this._apiKey}`);
    return res.data.results.map(this._transformChar)
  }
  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBaseUrl}characters/${id}?${this._apiKey}`)
    return this._transformChar(res.data.results[0]);
  }

  _transformChar = (char) => {
    const oldDescription = char.description;
    const transformDescription = oldDescription.length > 287
      ? oldDescription.slice(0, 227) + '...'
      : 'Description not found'
    return {
      id: char.id,
      name: char.name,
      description: transformDescription,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items.slice(0, 10)
    }
  }
}

export default Service;