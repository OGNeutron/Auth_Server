"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const path = require("path");
exports.genResolvers = () => glob
    .sync(`${path.resolve(__dirname, "../modules")}/**/resolvers.?s`)
    .map(resolver => require(resolver).resolvers);
//# sourceMappingURL=genSchema.js.map