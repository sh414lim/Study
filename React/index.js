class ObjectUtilities {
    static mergeObjects(a, b) {
      return { ...a, ...b };
    }
    static removePassword() {
      return delete user.password;
    }
    static freezeObj() {
      return Object.freeze(cleanUser);
    }
    static getOnlyValues() {
      return Object.values(user);
    }
    static getOnlyProperties() {
      return Object.getOwnPropertyNames(user);
    }
  }
  
  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilities.mergeObjects(objA, objB);
  console.log(user);
  
  const cleanUser = ObjectUtilities.removePassword(user);
  console.log(cleanUser);
  
  const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  console.log(onlyValues);
  
  const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  