import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { eirlyBackersSchema } from "./eirlyBackers";
import { phaseLimitsSchema } from "./phaseLimits";

export default createSchema({
	name: "default",

	types: schemaTypes.concat([eirlyBackersSchema, phaseLimitsSchema]),
});
