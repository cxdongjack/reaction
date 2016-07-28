import "./methods";
import Startup from "./startup";
import Security from "./security";

Meteor.startup(() => {
  Startup();
  Security();
});

/**
 * Ironman
 */
import "/imports/ironman/server";
