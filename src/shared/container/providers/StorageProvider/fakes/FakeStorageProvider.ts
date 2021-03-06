import IStorageProvider from '../models/IStorageProvider';

class FakeStorageprovider implements IStorageProvider {
  private storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const fingIndex = this.storage.findIndex(
      storageFile => storageFile === file,
    );

    this.storage.splice(fingIndex, 1);
  }
}

export default FakeStorageprovider;
