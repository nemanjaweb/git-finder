class Github {
  constructor() {
    this.client_id = "d33fc3b2c2690f38129a";
    this.client_secret = "01e7527b1238e6b247c4f44e8c18faa5e3dd71b8";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
