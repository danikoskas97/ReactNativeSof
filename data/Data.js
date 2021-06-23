import Category from "../models/Category";
import Item from "../models/Item";

export const CATEGORY = [
  new Category("T-shirt", "T-Shirt", null),
  new Category("shirt", "Shirt", null),
  new Category("sweat-shirt", "Sweat shirt"),
  new Category("pants", "Pants"),
  new Category("short-pants", "Short Pants"),
  new Category("jacket", "Jackets"),
];

export const ITEMS = [
  new Item("ed", ["T-shirt"], "nike t-shirt", "100", null),
  new Item("dsd", ["T-shirt"], "adidas f433", "150", null),
  new Item("dfdk", ["jacket"], "zara denim jacket", "90", null),
  new Item("fdsd", ["T-shirt"], "under armor t-shirt", "250", null),
  new Item("sdzsd", ["short-pants"], "nike jogging", "200", null),
  new Item("zdzd", ["jacket"], "levis denim jacket", "400", null),
  new Item("zdzd", ["short-pants"], "zara denim short", "199", null),
  new Item("zdzd", ["pants"], "adidas pants", "230", null),
  new Item("ffs", ["sweat-shirt"], "levis sweat-shirt", "135", null),
  new Item("dzd", ["sweat-shirt"], "zara sweat shirt", "140", null),
  new Item("dsd", ["pants"], "nike t-shirt", "179", null),
  new Item("sds", ["pants"], "sweat-pants", "199", null),
];
