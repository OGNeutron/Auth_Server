"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_lib_1 = require("prisma-client-lib");
const prisma_schema_1 = require("./prisma-schema");
exports.models = [
    {
        name: "APIApplication",
        embedded: false
    },
    {
        name: "Channel",
        embedded: false
    },
    {
        name: "Comment",
        embedded: false
    },
    {
        name: "File",
        embedded: false
    },
    {
        name: "Message",
        embedded: false
    },
    {
        name: "Notification",
        embedded: false
    },
    {
        name: "OnlineStatus",
        embedded: false
    },
    {
        name: "Rating",
        embedded: false
    },
    {
        name: "Team",
        embedded: false
    },
    {
        name: "User",
        embedded: false
    },
    {
        name: "UserRole",
        embedded: false
    }
];
exports.Prisma = prisma_client_lib_1.makePrismaClientClass({
    typeDefs: prisma_schema_1.typeDefs,
    models: exports.models,
    endpoint: `http://localhost:4466/prismadb/dev`
});
exports.prisma = new exports.Prisma();
//# sourceMappingURL=index.js.map