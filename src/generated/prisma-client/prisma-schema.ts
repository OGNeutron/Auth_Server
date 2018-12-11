export const typeDefs = /* GraphQL */ `type AggregateAPIApplication {
  count: Int!
}

type AggregateChannel {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateRating {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type APIApplication {
  id: ID!
  admin: User!
  moderators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  name: String!
  token: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type APIApplicationConnection {
  pageInfo: PageInfo!
  edges: [APIApplicationEdge]!
  aggregate: AggregateAPIApplication!
}

input APIApplicationCreateInput {
  admin: UserCreateOneInput!
  moderators: UserCreateManyInput
  name: String!
  token: String!
}

input APIApplicationCreateManyInput {
  create: [APIApplicationCreateInput!]
  connect: [APIApplicationWhereUniqueInput!]
}

input APIApplicationCreateOneInput {
  create: APIApplicationCreateInput
  connect: APIApplicationWhereUniqueInput
}

type APIApplicationEdge {
  node: APIApplication!
  cursor: String!
}

enum APIApplicationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  token_ASC
  token_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type APIApplicationPreviousValues {
  id: ID!
  name: String!
  token: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input APIApplicationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [APIApplicationScalarWhereInput!]
  OR: [APIApplicationScalarWhereInput!]
  NOT: [APIApplicationScalarWhereInput!]
}

type APIApplicationSubscriptionPayload {
  mutation: MutationType!
  node: APIApplication
  updatedFields: [String!]
  previousValues: APIApplicationPreviousValues
}

input APIApplicationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: APIApplicationWhereInput
  AND: [APIApplicationSubscriptionWhereInput!]
  OR: [APIApplicationSubscriptionWhereInput!]
  NOT: [APIApplicationSubscriptionWhereInput!]
}

input APIApplicationUpdateDataInput {
  admin: UserUpdateOneRequiredInput
  moderators: UserUpdateManyInput
  name: String
  token: String
}

input APIApplicationUpdateInput {
  admin: UserUpdateOneRequiredInput
  moderators: UserUpdateManyInput
  name: String
  token: String
}

input APIApplicationUpdateManyDataInput {
  name: String
  token: String
}

input APIApplicationUpdateManyInput {
  create: [APIApplicationCreateInput!]
  update: [APIApplicationUpdateWithWhereUniqueNestedInput!]
  upsert: [APIApplicationUpsertWithWhereUniqueNestedInput!]
  delete: [APIApplicationWhereUniqueInput!]
  connect: [APIApplicationWhereUniqueInput!]
  disconnect: [APIApplicationWhereUniqueInput!]
  deleteMany: [APIApplicationScalarWhereInput!]
  updateMany: [APIApplicationUpdateManyWithWhereNestedInput!]
}

input APIApplicationUpdateManyMutationInput {
  name: String
  token: String
}

input APIApplicationUpdateManyWithWhereNestedInput {
  where: APIApplicationScalarWhereInput!
  data: APIApplicationUpdateManyDataInput!
}

input APIApplicationUpdateOneRequiredInput {
  create: APIApplicationCreateInput
  update: APIApplicationUpdateDataInput
  upsert: APIApplicationUpsertNestedInput
  connect: APIApplicationWhereUniqueInput
}

input APIApplicationUpdateWithWhereUniqueNestedInput {
  where: APIApplicationWhereUniqueInput!
  data: APIApplicationUpdateDataInput!
}

input APIApplicationUpsertNestedInput {
  update: APIApplicationUpdateDataInput!
  create: APIApplicationCreateInput!
}

input APIApplicationUpsertWithWhereUniqueNestedInput {
  where: APIApplicationWhereUniqueInput!
  update: APIApplicationUpdateDataInput!
  create: APIApplicationCreateInput!
}

input APIApplicationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  admin: UserWhereInput
  moderators_every: UserWhereInput
  moderators_some: UserWhereInput
  moderators_none: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [APIApplicationWhereInput!]
  OR: [APIApplicationWhereInput!]
  NOT: [APIApplicationWhereInput!]
}

input APIApplicationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Channel {
  id: ID!
  name: String!
  slug: String!
  moderators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  public: Boolean
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ChannelConnection {
  pageInfo: PageInfo!
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  public: Boolean
  messages: MessageCreateManyInput
  members: UserCreateManyWithoutChannelsInput
  author: UserCreateOneWithoutOwned_channelsInput!
}

input ChannelCreateManyInput {
  create: [ChannelCreateInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutAuthorInput {
  create: [ChannelCreateWithoutAuthorInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateWithoutAuthorInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  public: Boolean
  messages: MessageCreateManyInput
  members: UserCreateManyWithoutChannelsInput
}

input ChannelCreateWithoutMembersInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  public: Boolean
  messages: MessageCreateManyInput
  author: UserCreateOneWithoutOwned_channelsInput!
}

type ChannelEdge {
  node: Channel!
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  public_ASC
  public_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  name: String!
  slug: String!
  public: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ChannelScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  public: Boolean
  public_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ChannelScalarWhereInput!]
  OR: [ChannelScalarWhereInput!]
  NOT: [ChannelScalarWhereInput!]
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
  AND: [ChannelSubscriptionWhereInput!]
  OR: [ChannelSubscriptionWhereInput!]
  NOT: [ChannelSubscriptionWhereInput!]
}

input ChannelUpdateDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  members: UserUpdateManyWithoutChannelsInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  members: UserUpdateManyWithoutChannelsInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateManyDataInput {
  name: String
  slug: String
  public: Boolean
}

input ChannelUpdateManyInput {
  create: [ChannelCreateInput!]
  update: [ChannelUpdateWithWhereUniqueNestedInput!]
  upsert: [ChannelUpsertWithWhereUniqueNestedInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  deleteMany: [ChannelScalarWhereInput!]
  updateMany: [ChannelUpdateManyWithWhereNestedInput!]
}

input ChannelUpdateManyMutationInput {
  name: String
  slug: String
  public: Boolean
}

input ChannelUpdateManyWithoutAuthorInput {
  create: [ChannelCreateWithoutAuthorInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ChannelScalarWhereInput!]
  updateMany: [ChannelUpdateManyWithWhereNestedInput!]
}

input ChannelUpdateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [ChannelScalarWhereInput!]
  updateMany: [ChannelUpdateManyWithWhereNestedInput!]
}

input ChannelUpdateManyWithWhereNestedInput {
  where: ChannelScalarWhereInput!
  data: ChannelUpdateManyDataInput!
}

input ChannelUpdateWithoutAuthorDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  members: UserUpdateManyWithoutChannelsInput
}

input ChannelUpdateWithoutMembersDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  public: Boolean
  messages: MessageUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutAuthorDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutMembersDataInput!
}

input ChannelUpsertWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateDataInput!
  create: ChannelCreateInput!
}

input ChannelUpsertWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutAuthorDataInput!
  create: ChannelCreateWithoutAuthorInput!
}

input ChannelUpsertWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutMembersDataInput!
  create: ChannelCreateWithoutMembersInput!
}

input ChannelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  moderators_every: UserWhereInput
  moderators_some: UserWhereInput
  moderators_none: UserWhereInput
  public: Boolean
  public_not: Boolean
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ChannelWhereInput!]
  OR: [ChannelWhereInput!]
  NOT: [ChannelWhereInput!]
}

input ChannelWhereUniqueInput {
  id: ID
}

type Comment {
  id: ID!
  body: String!
  API: APIApplication!
  parentId: ID!
  url: String!
  pageId: ID!
  repliedTo: User
  ratings: Rating!
  createdAt: DateTime!
  updatedAt: DateTime!
  replies(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  author: User!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  body: String!
  API: APIApplicationCreateOneInput!
  parentId: ID!
  url: String!
  pageId: ID!
  repliedTo: UserCreateOneInput
  ratings: RatingCreateOneInput!
  replies: CommentCreateManyWithoutRepliesInput
  author: UserCreateOneInput!
}

input CommentCreateManyWithoutRepliesInput {
  create: [CommentCreateWithoutRepliesInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutRepliesInput {
  body: String!
  API: APIApplicationCreateOneInput!
  parentId: ID!
  url: String!
  pageId: ID!
  repliedTo: UserCreateOneInput
  ratings: RatingCreateOneInput!
  author: UserCreateOneInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  parentId_ASC
  parentId_DESC
  url_ASC
  url_DESC
  pageId_ASC
  pageId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  body: String!
  parentId: ID!
  url: String!
  pageId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  pageId: ID
  pageId_not: ID
  pageId_in: [ID!]
  pageId_not_in: [ID!]
  pageId_lt: ID
  pageId_lte: ID
  pageId_gt: ID
  pageId_gte: ID
  pageId_contains: ID
  pageId_not_contains: ID
  pageId_starts_with: ID
  pageId_not_starts_with: ID
  pageId_ends_with: ID
  pageId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  body: String
  API: APIApplicationUpdateOneRequiredInput
  parentId: ID
  url: String
  pageId: ID
  repliedTo: UserUpdateOneInput
  ratings: RatingUpdateOneRequiredInput
  replies: CommentUpdateManyWithoutRepliesInput
  author: UserUpdateOneRequiredInput
}

input CommentUpdateManyDataInput {
  body: String
  parentId: ID
  url: String
  pageId: ID
}

input CommentUpdateManyMutationInput {
  body: String
  parentId: ID
  url: String
  pageId: ID
}

input CommentUpdateManyWithoutRepliesInput {
  create: [CommentCreateWithoutRepliesInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutRepliesInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutRepliesInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutRepliesDataInput {
  body: String
  API: APIApplicationUpdateOneRequiredInput
  parentId: ID
  url: String
  pageId: ID
  repliedTo: UserUpdateOneInput
  ratings: RatingUpdateOneRequiredInput
  author: UserUpdateOneRequiredInput
}

input CommentUpdateWithWhereUniqueWithoutRepliesInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutRepliesDataInput!
}

input CommentUpsertWithWhereUniqueWithoutRepliesInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutRepliesDataInput!
  create: CommentCreateWithoutRepliesInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  API: APIApplicationWhereInput
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  pageId: ID
  pageId_not: ID
  pageId_in: [ID!]
  pageId_not_in: [ID!]
  pageId_lt: ID
  pageId_lte: ID
  pageId_gt: ID
  pageId_gte: ID
  pageId_contains: ID
  pageId_not_contains: ID
  pageId_starts_with: ID
  pageId_not_starts_with: ID
  pageId_ends_with: ID
  pageId_not_ends_with: ID
  repliedTo: UserWhereInput
  ratings: RatingWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  replies_every: CommentWhereInput
  replies_some: CommentWhereInput
  replies_none: CommentWhereInput
  author: UserWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  key_ASC
  key_DESC
  ETag_ASC
  ETag_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateDataInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateManyMutationInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateOneRequiredInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
  connect: FileWhereUniqueInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  mimetype: String
  mimetype_not: String
  mimetype_in: [String!]
  mimetype_not_in: [String!]
  mimetype_lt: String
  mimetype_lte: String
  mimetype_gt: String
  mimetype_gte: String
  mimetype_contains: String
  mimetype_not_contains: String
  mimetype_starts_with: String
  mimetype_not_starts_with: String
  mimetype_ends_with: String
  mimetype_not_ends_with: String
  encoding: String
  encoding_not: String
  encoding_in: [String!]
  encoding_not_in: [String!]
  encoding_lt: String
  encoding_lte: String
  encoding_gt: String
  encoding_gte: String
  encoding_contains: String
  encoding_not_contains: String
  encoding_starts_with: String
  encoding_not_starts_with: String
  encoding_ends_with: String
  encoding_not_ends_with: String
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  ETag: String
  ETag_not: String
  ETag_in: [String!]
  ETag_not_in: [String!]
  ETag_lt: String
  ETag_lte: String
  ETag_gt: String
  ETag_gte: String
  ETag_contains: String
  ETag_not_contains: String
  ETag_starts_with: String
  ETag_not_starts_with: String
  ETag_ends_with: String
  ETag_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  author: UserCreateOneInput!
}

input MessageCreateManyInput {
  create: [MessageCreateInput!]
  connect: [MessageWhereUniqueInput!]
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  parentId_ASC
  parentId_DESC
  url_ASC
  url_DESC
  filetype_ASC
  filetype_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  filetype: String
  filetype_not: String
  filetype_in: [String!]
  filetype_not_in: [String!]
  filetype_lt: String
  filetype_lte: String
  filetype_gt: String
  filetype_gte: String
  filetype_contains: String
  filetype_not_contains: String
  filetype_starts_with: String
  filetype_not_starts_with: String
  filetype_ends_with: String
  filetype_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateDataInput {
  body: String
  parentId: ID
  url: String
  filetype: String
  author: UserUpdateOneRequiredInput
}

input MessageUpdateInput {
  body: String
  parentId: ID
  url: String
  filetype: String
  author: UserUpdateOneRequiredInput
}

input MessageUpdateManyDataInput {
  body: String
  parentId: ID
  url: String
  filetype: String
}

input MessageUpdateManyInput {
  create: [MessageCreateInput!]
  update: [MessageUpdateWithWhereUniqueNestedInput!]
  upsert: [MessageUpsertWithWhereUniqueNestedInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyMutationInput {
  body: String
  parentId: ID
  url: String
  filetype: String
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateDataInput!
}

input MessageUpsertWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateDataInput!
  create: MessageCreateInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  parentId: ID
  parentId_not: ID
  parentId_in: [ID!]
  parentId_not_in: [ID!]
  parentId_lt: ID
  parentId_lte: ID
  parentId_gt: ID
  parentId_gte: ID
  parentId_contains: ID
  parentId_not_contains: ID
  parentId_starts_with: ID
  parentId_not_starts_with: ID
  parentId_ends_with: ID
  parentId_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  filetype: String
  filetype_not: String
  filetype_in: [String!]
  filetype_not_in: [String!]
  filetype_lt: String
  filetype_lte: String
  filetype_gt: String
  filetype_gte: String
  filetype_contains: String
  filetype_not_contains: String
  filetype_starts_with: String
  filetype_not_starts_with: String
  filetype_ends_with: String
  filetype_not_ends_with: String
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createAPIApplication(data: APIApplicationCreateInput!): APIApplication!
  updateAPIApplication(data: APIApplicationUpdateInput!, where: APIApplicationWhereUniqueInput!): APIApplication
  updateManyAPIApplications(data: APIApplicationUpdateManyMutationInput!, where: APIApplicationWhereInput): BatchPayload!
  upsertAPIApplication(where: APIApplicationWhereUniqueInput!, create: APIApplicationCreateInput!, update: APIApplicationUpdateInput!): APIApplication!
  deleteAPIApplication(where: APIApplicationWhereUniqueInput!): APIApplication
  deleteManyAPIApplications(where: APIApplicationWhereInput): BatchPayload!
  createChannel(data: ChannelCreateInput!): Channel!
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  updateManyChannels(data: ChannelUpdateManyMutationInput!, where: ChannelWhereInput): BatchPayload!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createNotification(data: NotificationCreateInput!): Notification!
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  createRating(data: RatingCreateInput!): Rating!
  updateRating(data: RatingUpdateInput!, where: RatingWhereUniqueInput!): Rating
  updateManyRatings(data: RatingUpdateManyMutationInput!, where: RatingWhereInput): BatchPayload!
  upsertRating(where: RatingWhereUniqueInput!, create: RatingCreateInput!, update: RatingUpdateInput!): Rating!
  deleteRating(where: RatingWhereUniqueInput!): Rating
  deleteManyRatings(where: RatingWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Notification {
  id: ID!
  message: String!
  author: User!
}

type NotificationConnection {
  pageInfo: PageInfo!
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  message: String!
  author: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutAuthorInput {
  create: [NotificationCreateWithoutAuthorInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutAuthorInput {
  message: String!
}

type NotificationEdge {
  node: Notification!
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  message: String!
}

input NotificationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  AND: [NotificationScalarWhereInput!]
  OR: [NotificationScalarWhereInput!]
  NOT: [NotificationScalarWhereInput!]
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
  AND: [NotificationSubscriptionWhereInput!]
  OR: [NotificationSubscriptionWhereInput!]
  NOT: [NotificationSubscriptionWhereInput!]
}

input NotificationUpdateInput {
  message: String
  author: UserUpdateOneRequiredWithoutNotificationsInput
}

input NotificationUpdateManyDataInput {
  message: String
}

input NotificationUpdateManyMutationInput {
  message: String
}

input NotificationUpdateManyWithoutAuthorInput {
  create: [NotificationCreateWithoutAuthorInput!]
  delete: [NotificationWhereUniqueInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [NotificationScalarWhereInput!]
  updateMany: [NotificationUpdateManyWithWhereNestedInput!]
}

input NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput!
  data: NotificationUpdateManyDataInput!
}

input NotificationUpdateWithoutAuthorDataInput {
  message: String
}

input NotificationUpdateWithWhereUniqueWithoutAuthorInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutAuthorDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutAuthorInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutAuthorDataInput!
  create: NotificationCreateWithoutAuthorInput!
}

input NotificationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  author: UserWhereInput
  AND: [NotificationWhereInput!]
  OR: [NotificationWhereInput!]
  NOT: [NotificationWhereInput!]
}

input NotificationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  aPIApplication(where: APIApplicationWhereUniqueInput!): APIApplication
  aPIApplications(where: APIApplicationWhereInput, orderBy: APIApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [APIApplication]!
  aPIApplicationsConnection(where: APIApplicationWhereInput, orderBy: APIApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): APIApplicationConnection!
  channel(where: ChannelWhereUniqueInput!): Channel
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notification(where: NotificationWhereUniqueInput!): Notification
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  rating(where: RatingWhereUniqueInput!): Rating
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating]!
  ratingsConnection(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RatingConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Rating {
  id: ID!
  vote: Int!
  author(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type RatingConnection {
  pageInfo: PageInfo!
  edges: [RatingEdge]!
  aggregate: AggregateRating!
}

input RatingCreateInput {
  vote: Int!
  author: UserCreateManyInput
}

input RatingCreateOneInput {
  create: RatingCreateInput
  connect: RatingWhereUniqueInput
}

type RatingEdge {
  node: Rating!
  cursor: String!
}

enum RatingOrderByInput {
  id_ASC
  id_DESC
  vote_ASC
  vote_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RatingPreviousValues {
  id: ID!
  vote: Int!
}

type RatingSubscriptionPayload {
  mutation: MutationType!
  node: Rating
  updatedFields: [String!]
  previousValues: RatingPreviousValues
}

input RatingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RatingWhereInput
  AND: [RatingSubscriptionWhereInput!]
  OR: [RatingSubscriptionWhereInput!]
  NOT: [RatingSubscriptionWhereInput!]
}

input RatingUpdateDataInput {
  vote: Int
  author: UserUpdateManyInput
}

input RatingUpdateInput {
  vote: Int
  author: UserUpdateManyInput
}

input RatingUpdateManyMutationInput {
  vote: Int
}

input RatingUpdateOneRequiredInput {
  create: RatingCreateInput
  update: RatingUpdateDataInput
  upsert: RatingUpsertNestedInput
  connect: RatingWhereUniqueInput
}

input RatingUpsertNestedInput {
  update: RatingUpdateDataInput!
  create: RatingCreateInput!
}

input RatingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  vote: Int
  vote_not: Int
  vote_in: [Int!]
  vote_not_in: [Int!]
  vote_lt: Int
  vote_lte: Int
  vote_gt: Int
  vote_gte: Int
  author_every: UserWhereInput
  author_some: UserWhereInput
  author_none: UserWhereInput
  AND: [RatingWhereInput!]
  OR: [RatingWhereInput!]
  NOT: [RatingWhereInput!]
}

input RatingWhereUniqueInput {
  id: ID
}

type Subscription {
  aPIApplication(where: APIApplicationSubscriptionWhereInput): APIApplicationSubscriptionPayload
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  slug: String!
  moderators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  author: User!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  createdAt: DateTime!
  updatedAt: DateTime!
  confirmed: Boolean!
  online: Boolean!
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput!
  members: UserCreateManyWithoutTeamsInput
  channels: ChannelCreateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamCreateManyWithoutAuthorInput {
  create: [TeamCreateWithoutAuthorInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutAuthorInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  members: UserCreateManyWithoutTeamsInput
  channels: ChannelCreateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamCreateWithoutMembersInput {
  name: String!
  slug: String!
  moderators: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput!
  channels: ChannelCreateManyInput
  confirmed: Boolean
  online: Boolean
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  confirmed_ASC
  confirmed_DESC
  online_ASC
  online_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  confirmed: Boolean!
  online: Boolean!
}

input TeamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  AND: [TeamScalarWhereInput!]
  OR: [TeamScalarWhereInput!]
  NOT: [TeamScalarWhereInput!]
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_teamsInput
  members: UserUpdateManyWithoutTeamsInput
  channels: ChannelUpdateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateManyDataInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateManyMutationInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateManyWithoutAuthorInput {
  create: [TeamCreateWithoutAuthorInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput!
  data: TeamUpdateManyDataInput!
}

input TeamUpdateWithoutAuthorDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  members: UserUpdateManyWithoutTeamsInput
  channels: ChannelUpdateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateWithoutMembersDataInput {
  name: String
  slug: String
  moderators: UserUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_teamsInput
  channels: ChannelUpdateManyInput
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutAuthorDataInput!
}

input TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutMembersDataInput!
}

input TeamUpsertWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutAuthorDataInput!
  create: TeamCreateWithoutAuthorInput!
}

input TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutMembersDataInput!
  create: TeamCreateWithoutMembersInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  moderators_every: UserWhereInput
  moderators_some: UserWhereInput
  moderators_none: UserWhereInput
  author: UserWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
  name: String
}

type User {
  id: ID!
  email: String!
  API(where: APIApplicationWhereInput, orderBy: APIApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [APIApplication!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  set_private: Boolean!
  username: String!
  password: String!
  avatar_url: File!
  confirmed: Boolean!
  online: Boolean!
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  friend_requests(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  owned_teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  owned_channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  API: APIApplicationCreateManyInput
  notifications: NotificationCreateManyWithoutAuthorInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFriend_requestsInput {
  create: [UserCreateWithoutFriend_requestsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwned_channelsInput {
  create: UserCreateWithoutOwned_channelsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwned_teamsInput {
  create: UserCreateWithoutOwned_teamsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChannelsInput {
  email: String!
  API: APIApplicationCreateManyInput
  notifications: NotificationCreateManyWithoutAuthorInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutFriend_requestsInput {
  email: String!
  API: APIApplicationCreateManyInput
  notifications: NotificationCreateManyWithoutAuthorInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutFriendsInput {
  email: String!
  API: APIApplicationCreateManyInput
  notifications: NotificationCreateManyWithoutAuthorInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutNotificationsInput {
  email: String!
  API: APIApplicationCreateManyInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutOwned_channelsInput {
  email: String!
  API: APIApplicationCreateManyInput
  notifications: NotificationCreateManyWithoutAuthorInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
}

input UserCreateWithoutOwned_teamsInput {
  email: String!
  API: APIApplicationCreateManyInput
  notifications: NotificationCreateManyWithoutAuthorInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutTeamsInput {
  email: String!
  API: APIApplicationCreateManyInput
  notifications: NotificationCreateManyWithoutAuthorInput
  set_private: Boolean
  username: String!
  password: String!
  avatar_url: FileCreateOneInput!
  confirmed: Boolean
  online: Boolean
  friends: UserCreateManyWithoutFriendsInput
  friend_requests: UserCreateManyWithoutFriend_requestsInput
  role: UserRole!
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  set_private_ASC
  set_private_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  confirmed_ASC
  confirmed_DESC
  online_ASC
  online_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  set_private: Boolean!
  username: String!
  password: String!
  confirmed: Boolean!
  online: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
}

enum UserRole {
  ADMIN
  MODERATOR
  USER
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  set_private: Boolean
  set_private_not: Boolean
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateManyDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
}

input UserUpdateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChannelsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChannelsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFriend_requestsInput {
  create: [UserCreateWithoutFriend_requestsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFriend_requestsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFriend_requestsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFriendsInput {
  create: [UserCreateWithoutFriendsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFriendsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFriendsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwned_channelsInput {
  create: UserCreateWithoutOwned_channelsInput
  update: UserUpdateWithoutOwned_channelsDataInput
  upsert: UserUpsertWithoutOwned_channelsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwned_teamsInput {
  create: UserCreateWithoutOwned_teamsInput
  update: UserUpdateWithoutOwned_teamsDataInput
  upsert: UserUpsertWithoutOwned_teamsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChannelsDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFriend_requestsDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutFriendsDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutNotificationsDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutOwned_channelsDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutOwned_teamsDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutTeamsDataInput {
  email: String
  API: APIApplicationUpdateManyInput
  notifications: NotificationUpdateManyWithoutAuthorInput
  set_private: Boolean
  username: String
  password: String
  avatar_url: FileUpdateOneRequiredInput
  confirmed: Boolean
  online: Boolean
  friends: UserUpdateManyWithoutFriendsInput
  friend_requests: UserUpdateManyWithoutFriend_requestsInput
  role: UserRole
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChannelsDataInput!
}

input UserUpdateWithWhereUniqueWithoutFriend_requestsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFriend_requestsDataInput!
}

input UserUpdateWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFriendsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOwned_channelsInput {
  update: UserUpdateWithoutOwned_channelsDataInput!
  create: UserCreateWithoutOwned_channelsInput!
}

input UserUpsertWithoutOwned_teamsInput {
  update: UserUpdateWithoutOwned_teamsDataInput!
  create: UserCreateWithoutOwned_teamsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChannelsDataInput!
  create: UserCreateWithoutChannelsInput!
}

input UserUpsertWithWhereUniqueWithoutFriend_requestsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFriend_requestsDataInput!
  create: UserCreateWithoutFriend_requestsInput!
}

input UserUpsertWithWhereUniqueWithoutFriendsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFriendsDataInput!
  create: UserCreateWithoutFriendsInput!
}

input UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeamsDataInput!
  create: UserCreateWithoutTeamsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  API_every: APIApplicationWhereInput
  API_some: APIApplicationWhereInput
  API_none: APIApplicationWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  set_private: Boolean
  set_private_not: Boolean
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  avatar_url: FileWhereInput
  confirmed: Boolean
  confirmed_not: Boolean
  online: Boolean
  online_not: Boolean
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  friend_requests_every: UserWhereInput
  friend_requests_some: UserWhereInput
  friend_requests_none: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  owned_teams_every: TeamWhereInput
  owned_teams_some: TeamWhereInput
  owned_teams_none: TeamWhereInput
  owned_channels_every: ChannelWhereInput
  owned_channels_some: ChannelWhereInput
  owned_channels_none: ChannelWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`