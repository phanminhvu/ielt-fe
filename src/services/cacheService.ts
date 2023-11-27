const KEY_CACHE = "cache";

class CacheService {
  cache(field: string, value: any) {
    const dataCached = localStorage.getItem(KEY_CACHE);
    if (dataCached) {
      const dataCachedParsed = JSON.parse(dataCached);
      dataCachedParsed[field] = value;
      localStorage.setItem(KEY_CACHE, JSON.stringify(dataCachedParsed));
    } else {
      localStorage.setItem(KEY_CACHE, JSON.stringify({ [field]: value }));
    }
  }

  getDataCache() {
    const dataCached = localStorage.getItem(KEY_CACHE);
    if (dataCached) {
      return JSON.parse(dataCached);
    }

    return {};
  }

  clearCacheData() {
    localStorage.removeItem(KEY_CACHE);
  }
}

export default new CacheService();
