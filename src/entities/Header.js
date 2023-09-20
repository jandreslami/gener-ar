class Header {
  constructor (name, generatingFunction) {
    this.name = name;
    this.generatingFunction = generatingFunction; // should be a function that each time that it's called returns a different random value
  }
}

export default Header;
