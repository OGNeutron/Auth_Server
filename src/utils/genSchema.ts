import * as glob from "glob";
import * as path from "path";
import { IResolvers } from "graphql-tools/dist/Interfaces";

export const genResolvers = (): IResolvers[] =>
  glob
    .sync(`${path.resolve(__dirname, "../modules")}/**/resolvers.?s`)
    .map(resolver => require(resolver).resolvers);
