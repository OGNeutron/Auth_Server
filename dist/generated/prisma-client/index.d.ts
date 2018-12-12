import { DocumentNode } from "graphql";
import { BaseClientOptions } from "prisma-client-lib";
declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export interface Exists {
    aPIApplication: (where?: APIApplicationWhereInput) => Promise<boolean>;
    channel: (where?: ChannelWhereInput) => Promise<boolean>;
    comment: (where?: CommentWhereInput) => Promise<boolean>;
    file: (where?: FileWhereInput) => Promise<boolean>;
    message: (where?: MessageWhereInput) => Promise<boolean>;
    notification: (where?: NotificationWhereInput) => Promise<boolean>;
    rating: (where?: RatingWhereInput) => Promise<boolean>;
    team: (where?: TeamWhereInput) => Promise<boolean>;
    user: (where?: UserWhereInput) => Promise<boolean>;
}
export interface Node {
}
export declare type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;
export interface Fragmentable {
    $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}
export interface Prisma {
    $exists: Exists;
    $graphql: <T = any>(query: string, variables?: {
        [key: string]: any;
    }) => Promise<T>;
    aPIApplication: (where: APIApplicationWhereUniqueInput) => APIApplicationPromise;
    aPIApplications: (args?: {
        where?: APIApplicationWhereInput;
        orderBy?: APIApplicationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<APIApplication>;
    aPIApplicationsConnection: (args?: {
        where?: APIApplicationWhereInput;
        orderBy?: APIApplicationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => APIApplicationConnectionPromise;
    channel: (where: ChannelWhereUniqueInput) => ChannelPromise;
    channels: (args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Channel>;
    channelsConnection: (args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ChannelConnectionPromise;
    comment: (where: CommentWhereUniqueInput) => CommentPromise;
    comments: (args?: {
        where?: CommentWhereInput;
        orderBy?: CommentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Comment>;
    commentsConnection: (args?: {
        where?: CommentWhereInput;
        orderBy?: CommentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => CommentConnectionPromise;
    file: (where: FileWhereUniqueInput) => FilePromise;
    files: (args?: {
        where?: FileWhereInput;
        orderBy?: FileOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<File>;
    filesConnection: (args?: {
        where?: FileWhereInput;
        orderBy?: FileOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FileConnectionPromise;
    message: (where: MessageWhereUniqueInput) => MessagePromise;
    messages: (args?: {
        where?: MessageWhereInput;
        orderBy?: MessageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Message>;
    messagesConnection: (args?: {
        where?: MessageWhereInput;
        orderBy?: MessageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => MessageConnectionPromise;
    notification: (where: NotificationWhereUniqueInput) => NotificationPromise;
    notifications: (args?: {
        where?: NotificationWhereInput;
        orderBy?: NotificationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Notification>;
    notificationsConnection: (args?: {
        where?: NotificationWhereInput;
        orderBy?: NotificationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => NotificationConnectionPromise;
    rating: (where: RatingWhereUniqueInput) => RatingPromise;
    ratings: (args?: {
        where?: RatingWhereInput;
        orderBy?: RatingOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Rating>;
    ratingsConnection: (args?: {
        where?: RatingWhereInput;
        orderBy?: RatingOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => RatingConnectionPromise;
    team: (where: TeamWhereUniqueInput) => TeamPromise;
    teams: (args?: {
        where?: TeamWhereInput;
        orderBy?: TeamOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Team>;
    teamsConnection: (args?: {
        where?: TeamWhereInput;
        orderBy?: TeamOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => TeamConnectionPromise;
    user: (where: UserWhereUniqueInput) => UserPromise;
    users: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<User>;
    usersConnection: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => UserConnectionPromise;
    node: (args: {
        id: ID_Output;
    }) => Node;
    createAPIApplication: (data: APIApplicationCreateInput) => APIApplicationPromise;
    updateAPIApplication: (args: {
        data: APIApplicationUpdateInput;
        where: APIApplicationWhereUniqueInput;
    }) => APIApplicationPromise;
    updateManyAPIApplications: (args: {
        data: APIApplicationUpdateManyMutationInput;
        where?: APIApplicationWhereInput;
    }) => BatchPayloadPromise;
    upsertAPIApplication: (args: {
        where: APIApplicationWhereUniqueInput;
        create: APIApplicationCreateInput;
        update: APIApplicationUpdateInput;
    }) => APIApplicationPromise;
    deleteAPIApplication: (where: APIApplicationWhereUniqueInput) => APIApplicationPromise;
    deleteManyAPIApplications: (where?: APIApplicationWhereInput) => BatchPayloadPromise;
    createChannel: (data: ChannelCreateInput) => ChannelPromise;
    updateChannel: (args: {
        data: ChannelUpdateInput;
        where: ChannelWhereUniqueInput;
    }) => ChannelPromise;
    updateManyChannels: (args: {
        data: ChannelUpdateManyMutationInput;
        where?: ChannelWhereInput;
    }) => BatchPayloadPromise;
    upsertChannel: (args: {
        where: ChannelWhereUniqueInput;
        create: ChannelCreateInput;
        update: ChannelUpdateInput;
    }) => ChannelPromise;
    deleteChannel: (where: ChannelWhereUniqueInput) => ChannelPromise;
    deleteManyChannels: (where?: ChannelWhereInput) => BatchPayloadPromise;
    createComment: (data: CommentCreateInput) => CommentPromise;
    updateComment: (args: {
        data: CommentUpdateInput;
        where: CommentWhereUniqueInput;
    }) => CommentPromise;
    updateManyComments: (args: {
        data: CommentUpdateManyMutationInput;
        where?: CommentWhereInput;
    }) => BatchPayloadPromise;
    upsertComment: (args: {
        where: CommentWhereUniqueInput;
        create: CommentCreateInput;
        update: CommentUpdateInput;
    }) => CommentPromise;
    deleteComment: (where: CommentWhereUniqueInput) => CommentPromise;
    deleteManyComments: (where?: CommentWhereInput) => BatchPayloadPromise;
    createFile: (data: FileCreateInput) => FilePromise;
    updateFile: (args: {
        data: FileUpdateInput;
        where: FileWhereUniqueInput;
    }) => FilePromise;
    updateManyFiles: (args: {
        data: FileUpdateManyMutationInput;
        where?: FileWhereInput;
    }) => BatchPayloadPromise;
    upsertFile: (args: {
        where: FileWhereUniqueInput;
        create: FileCreateInput;
        update: FileUpdateInput;
    }) => FilePromise;
    deleteFile: (where: FileWhereUniqueInput) => FilePromise;
    deleteManyFiles: (where?: FileWhereInput) => BatchPayloadPromise;
    createMessage: (data: MessageCreateInput) => MessagePromise;
    updateMessage: (args: {
        data: MessageUpdateInput;
        where: MessageWhereUniqueInput;
    }) => MessagePromise;
    updateManyMessages: (args: {
        data: MessageUpdateManyMutationInput;
        where?: MessageWhereInput;
    }) => BatchPayloadPromise;
    upsertMessage: (args: {
        where: MessageWhereUniqueInput;
        create: MessageCreateInput;
        update: MessageUpdateInput;
    }) => MessagePromise;
    deleteMessage: (where: MessageWhereUniqueInput) => MessagePromise;
    deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;
    createNotification: (data: NotificationCreateInput) => NotificationPromise;
    updateNotification: (args: {
        data: NotificationUpdateInput;
        where: NotificationWhereUniqueInput;
    }) => NotificationPromise;
    updateManyNotifications: (args: {
        data: NotificationUpdateManyMutationInput;
        where?: NotificationWhereInput;
    }) => BatchPayloadPromise;
    upsertNotification: (args: {
        where: NotificationWhereUniqueInput;
        create: NotificationCreateInput;
        update: NotificationUpdateInput;
    }) => NotificationPromise;
    deleteNotification: (where: NotificationWhereUniqueInput) => NotificationPromise;
    deleteManyNotifications: (where?: NotificationWhereInput) => BatchPayloadPromise;
    createRating: (data: RatingCreateInput) => RatingPromise;
    updateRating: (args: {
        data: RatingUpdateInput;
        where: RatingWhereUniqueInput;
    }) => RatingPromise;
    updateManyRatings: (args: {
        data: RatingUpdateManyMutationInput;
        where?: RatingWhereInput;
    }) => BatchPayloadPromise;
    upsertRating: (args: {
        where: RatingWhereUniqueInput;
        create: RatingCreateInput;
        update: RatingUpdateInput;
    }) => RatingPromise;
    deleteRating: (where: RatingWhereUniqueInput) => RatingPromise;
    deleteManyRatings: (where?: RatingWhereInput) => BatchPayloadPromise;
    createTeam: (data: TeamCreateInput) => TeamPromise;
    updateTeam: (args: {
        data: TeamUpdateInput;
        where: TeamWhereUniqueInput;
    }) => TeamPromise;
    updateManyTeams: (args: {
        data: TeamUpdateManyMutationInput;
        where?: TeamWhereInput;
    }) => BatchPayloadPromise;
    upsertTeam: (args: {
        where: TeamWhereUniqueInput;
        create: TeamCreateInput;
        update: TeamUpdateInput;
    }) => TeamPromise;
    deleteTeam: (where: TeamWhereUniqueInput) => TeamPromise;
    deleteManyTeams: (where?: TeamWhereInput) => BatchPayloadPromise;
    createUser: (data: UserCreateInput) => UserPromise;
    updateUser: (args: {
        data: UserUpdateInput;
        where: UserWhereUniqueInput;
    }) => UserPromise;
    updateManyUsers: (args: {
        data: UserUpdateManyMutationInput;
        where?: UserWhereInput;
    }) => BatchPayloadPromise;
    upsertUser: (args: {
        where: UserWhereUniqueInput;
        create: UserCreateInput;
        update: UserUpdateInput;
    }) => UserPromise;
    deleteUser: (where: UserWhereUniqueInput) => UserPromise;
    deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
    $subscribe: Subscription;
}
export interface Subscription {
    aPIApplication: (where?: APIApplicationSubscriptionWhereInput) => APIApplicationSubscriptionPayloadSubscription;
    channel: (where?: ChannelSubscriptionWhereInput) => ChannelSubscriptionPayloadSubscription;
    comment: (where?: CommentSubscriptionWhereInput) => CommentSubscriptionPayloadSubscription;
    file: (where?: FileSubscriptionWhereInput) => FileSubscriptionPayloadSubscription;
    message: (where?: MessageSubscriptionWhereInput) => MessageSubscriptionPayloadSubscription;
    notification: (where?: NotificationSubscriptionWhereInput) => NotificationSubscriptionPayloadSubscription;
    rating: (where?: RatingSubscriptionWhereInput) => RatingSubscriptionPayloadSubscription;
    team: (where?: TeamSubscriptionWhereInput) => TeamSubscriptionPayloadSubscription;
    user: (where?: UserSubscriptionWhereInput) => UserSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
export declare type UserRole = "ADMIN" | "MODERATOR" | "USER";
export declare type APIApplicationOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "token_ASC" | "token_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type NotificationOrderByInput = "id_ASC" | "id_DESC" | "message_ASC" | "message_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type UserOrderByInput = "id_ASC" | "id_DESC" | "email_ASC" | "email_DESC" | "set_private_ASC" | "set_private_DESC" | "username_ASC" | "username_DESC" | "password_ASC" | "password_DESC" | "confirmed_ASC" | "confirmed_DESC" | "online_ASC" | "online_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "role_ASC" | "role_DESC";
export declare type TeamOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "slug_ASC" | "slug_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "confirmed_ASC" | "confirmed_DESC" | "online_ASC" | "online_DESC";
export declare type ChannelOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "slug_ASC" | "slug_DESC" | "public_ASC" | "public_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type MessageOrderByInput = "id_ASC" | "id_DESC" | "body_ASC" | "body_DESC" | "parentId_ASC" | "parentId_DESC" | "url_ASC" | "url_DESC" | "filetype_ASC" | "filetype_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type CommentOrderByInput = "id_ASC" | "id_DESC" | "body_ASC" | "body_DESC" | "parentId_ASC" | "parentId_DESC" | "url_ASC" | "url_DESC" | "pageId_ASC" | "pageId_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type FileOrderByInput = "id_ASC" | "id_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "filename_ASC" | "filename_DESC" | "mimetype_ASC" | "mimetype_DESC" | "encoding_ASC" | "encoding_DESC" | "key_ASC" | "key_DESC" | "ETag_ASC" | "ETag_DESC" | "url_ASC" | "url_DESC";
export declare type RatingOrderByInput = "id_ASC" | "id_DESC" | "vote_ASC" | "vote_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
export declare type APIApplicationWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export interface APIApplicationWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    admin?: UserWhereInput;
    moderators_every?: UserWhereInput;
    moderators_some?: UserWhereInput;
    moderators_none?: UserWhereInput;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    token?: String;
    token_not?: String;
    token_in?: String[] | String;
    token_not_in?: String[] | String;
    token_lt?: String;
    token_lte?: String;
    token_gt?: String;
    token_gte?: String;
    token_contains?: String;
    token_not_contains?: String;
    token_starts_with?: String;
    token_not_starts_with?: String;
    token_ends_with?: String;
    token_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: APIApplicationWhereInput[] | APIApplicationWhereInput;
    OR?: APIApplicationWhereInput[] | APIApplicationWhereInput;
    NOT?: APIApplicationWhereInput[] | APIApplicationWhereInput;
}
export interface UserWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    email?: String;
    email_not?: String;
    email_in?: String[] | String;
    email_not_in?: String[] | String;
    email_lt?: String;
    email_lte?: String;
    email_gt?: String;
    email_gte?: String;
    email_contains?: String;
    email_not_contains?: String;
    email_starts_with?: String;
    email_not_starts_with?: String;
    email_ends_with?: String;
    email_not_ends_with?: String;
    API_every?: APIApplicationWhereInput;
    API_some?: APIApplicationWhereInput;
    API_none?: APIApplicationWhereInput;
    notifications_every?: NotificationWhereInput;
    notifications_some?: NotificationWhereInput;
    notifications_none?: NotificationWhereInput;
    set_private?: Boolean;
    set_private_not?: Boolean;
    username?: String;
    username_not?: String;
    username_in?: String[] | String;
    username_not_in?: String[] | String;
    username_lt?: String;
    username_lte?: String;
    username_gt?: String;
    username_gte?: String;
    username_contains?: String;
    username_not_contains?: String;
    username_starts_with?: String;
    username_not_starts_with?: String;
    username_ends_with?: String;
    username_not_ends_with?: String;
    password?: String;
    password_not?: String;
    password_in?: String[] | String;
    password_not_in?: String[] | String;
    password_lt?: String;
    password_lte?: String;
    password_gt?: String;
    password_gte?: String;
    password_contains?: String;
    password_not_contains?: String;
    password_starts_with?: String;
    password_not_starts_with?: String;
    password_ends_with?: String;
    password_not_ends_with?: String;
    avatar_url?: FileWhereInput;
    confirmed?: Boolean;
    confirmed_not?: Boolean;
    online?: Boolean;
    online_not?: Boolean;
    friends_every?: UserWhereInput;
    friends_some?: UserWhereInput;
    friends_none?: UserWhereInput;
    friend_requests_every?: UserWhereInput;
    friend_requests_some?: UserWhereInput;
    friend_requests_none?: UserWhereInput;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    role?: UserRole;
    role_not?: UserRole;
    role_in?: UserRole[] | UserRole;
    role_not_in?: UserRole[] | UserRole;
    teams_every?: TeamWhereInput;
    teams_some?: TeamWhereInput;
    teams_none?: TeamWhereInput;
    channels_every?: ChannelWhereInput;
    channels_some?: ChannelWhereInput;
    channels_none?: ChannelWhereInput;
    owned_teams_every?: TeamWhereInput;
    owned_teams_some?: TeamWhereInput;
    owned_teams_none?: TeamWhereInput;
    owned_channels_every?: ChannelWhereInput;
    owned_channels_some?: ChannelWhereInput;
    owned_channels_none?: ChannelWhereInput;
    AND?: UserWhereInput[] | UserWhereInput;
    OR?: UserWhereInput[] | UserWhereInput;
    NOT?: UserWhereInput[] | UserWhereInput;
}
export interface NotificationWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    message?: String;
    message_not?: String;
    message_in?: String[] | String;
    message_not_in?: String[] | String;
    message_lt?: String;
    message_lte?: String;
    message_gt?: String;
    message_gte?: String;
    message_contains?: String;
    message_not_contains?: String;
    message_starts_with?: String;
    message_not_starts_with?: String;
    message_ends_with?: String;
    message_not_ends_with?: String;
    author?: UserWhereInput;
    AND?: NotificationWhereInput[] | NotificationWhereInput;
    OR?: NotificationWhereInput[] | NotificationWhereInput;
    NOT?: NotificationWhereInput[] | NotificationWhereInput;
}
export interface FileWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    filename?: String;
    filename_not?: String;
    filename_in?: String[] | String;
    filename_not_in?: String[] | String;
    filename_lt?: String;
    filename_lte?: String;
    filename_gt?: String;
    filename_gte?: String;
    filename_contains?: String;
    filename_not_contains?: String;
    filename_starts_with?: String;
    filename_not_starts_with?: String;
    filename_ends_with?: String;
    filename_not_ends_with?: String;
    mimetype?: String;
    mimetype_not?: String;
    mimetype_in?: String[] | String;
    mimetype_not_in?: String[] | String;
    mimetype_lt?: String;
    mimetype_lte?: String;
    mimetype_gt?: String;
    mimetype_gte?: String;
    mimetype_contains?: String;
    mimetype_not_contains?: String;
    mimetype_starts_with?: String;
    mimetype_not_starts_with?: String;
    mimetype_ends_with?: String;
    mimetype_not_ends_with?: String;
    encoding?: String;
    encoding_not?: String;
    encoding_in?: String[] | String;
    encoding_not_in?: String[] | String;
    encoding_lt?: String;
    encoding_lte?: String;
    encoding_gt?: String;
    encoding_gte?: String;
    encoding_contains?: String;
    encoding_not_contains?: String;
    encoding_starts_with?: String;
    encoding_not_starts_with?: String;
    encoding_ends_with?: String;
    encoding_not_ends_with?: String;
    key?: String;
    key_not?: String;
    key_in?: String[] | String;
    key_not_in?: String[] | String;
    key_lt?: String;
    key_lte?: String;
    key_gt?: String;
    key_gte?: String;
    key_contains?: String;
    key_not_contains?: String;
    key_starts_with?: String;
    key_not_starts_with?: String;
    key_ends_with?: String;
    key_not_ends_with?: String;
    ETag?: String;
    ETag_not?: String;
    ETag_in?: String[] | String;
    ETag_not_in?: String[] | String;
    ETag_lt?: String;
    ETag_lte?: String;
    ETag_gt?: String;
    ETag_gte?: String;
    ETag_contains?: String;
    ETag_not_contains?: String;
    ETag_starts_with?: String;
    ETag_not_starts_with?: String;
    ETag_ends_with?: String;
    ETag_not_ends_with?: String;
    url?: String;
    url_not?: String;
    url_in?: String[] | String;
    url_not_in?: String[] | String;
    url_lt?: String;
    url_lte?: String;
    url_gt?: String;
    url_gte?: String;
    url_contains?: String;
    url_not_contains?: String;
    url_starts_with?: String;
    url_not_starts_with?: String;
    url_ends_with?: String;
    url_not_ends_with?: String;
    AND?: FileWhereInput[] | FileWhereInput;
    OR?: FileWhereInput[] | FileWhereInput;
    NOT?: FileWhereInput[] | FileWhereInput;
}
export interface TeamWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    slug?: String;
    slug_not?: String;
    slug_in?: String[] | String;
    slug_not_in?: String[] | String;
    slug_lt?: String;
    slug_lte?: String;
    slug_gt?: String;
    slug_gte?: String;
    slug_contains?: String;
    slug_not_contains?: String;
    slug_starts_with?: String;
    slug_not_starts_with?: String;
    slug_ends_with?: String;
    slug_not_ends_with?: String;
    moderators_every?: UserWhereInput;
    moderators_some?: UserWhereInput;
    moderators_none?: UserWhereInput;
    author?: UserWhereInput;
    members_every?: UserWhereInput;
    members_some?: UserWhereInput;
    members_none?: UserWhereInput;
    channels_every?: ChannelWhereInput;
    channels_some?: ChannelWhereInput;
    channels_none?: ChannelWhereInput;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    confirmed?: Boolean;
    confirmed_not?: Boolean;
    online?: Boolean;
    online_not?: Boolean;
    AND?: TeamWhereInput[] | TeamWhereInput;
    OR?: TeamWhereInput[] | TeamWhereInput;
    NOT?: TeamWhereInput[] | TeamWhereInput;
}
export interface ChannelWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    slug?: String;
    slug_not?: String;
    slug_in?: String[] | String;
    slug_not_in?: String[] | String;
    slug_lt?: String;
    slug_lte?: String;
    slug_gt?: String;
    slug_gte?: String;
    slug_contains?: String;
    slug_not_contains?: String;
    slug_starts_with?: String;
    slug_not_starts_with?: String;
    slug_ends_with?: String;
    slug_not_ends_with?: String;
    moderators_every?: UserWhereInput;
    moderators_some?: UserWhereInput;
    moderators_none?: UserWhereInput;
    public?: Boolean;
    public_not?: Boolean;
    messages_every?: MessageWhereInput;
    messages_some?: MessageWhereInput;
    messages_none?: MessageWhereInput;
    members_every?: UserWhereInput;
    members_some?: UserWhereInput;
    members_none?: UserWhereInput;
    author?: UserWhereInput;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: ChannelWhereInput[] | ChannelWhereInput;
    OR?: ChannelWhereInput[] | ChannelWhereInput;
    NOT?: ChannelWhereInput[] | ChannelWhereInput;
}
export interface MessageWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    body?: String;
    body_not?: String;
    body_in?: String[] | String;
    body_not_in?: String[] | String;
    body_lt?: String;
    body_lte?: String;
    body_gt?: String;
    body_gte?: String;
    body_contains?: String;
    body_not_contains?: String;
    body_starts_with?: String;
    body_not_starts_with?: String;
    body_ends_with?: String;
    body_not_ends_with?: String;
    parentId?: ID_Input;
    parentId_not?: ID_Input;
    parentId_in?: ID_Input[] | ID_Input;
    parentId_not_in?: ID_Input[] | ID_Input;
    parentId_lt?: ID_Input;
    parentId_lte?: ID_Input;
    parentId_gt?: ID_Input;
    parentId_gte?: ID_Input;
    parentId_contains?: ID_Input;
    parentId_not_contains?: ID_Input;
    parentId_starts_with?: ID_Input;
    parentId_not_starts_with?: ID_Input;
    parentId_ends_with?: ID_Input;
    parentId_not_ends_with?: ID_Input;
    url?: String;
    url_not?: String;
    url_in?: String[] | String;
    url_not_in?: String[] | String;
    url_lt?: String;
    url_lte?: String;
    url_gt?: String;
    url_gte?: String;
    url_contains?: String;
    url_not_contains?: String;
    url_starts_with?: String;
    url_not_starts_with?: String;
    url_ends_with?: String;
    url_not_ends_with?: String;
    filetype?: String;
    filetype_not?: String;
    filetype_in?: String[] | String;
    filetype_not_in?: String[] | String;
    filetype_lt?: String;
    filetype_lte?: String;
    filetype_gt?: String;
    filetype_gte?: String;
    filetype_contains?: String;
    filetype_not_contains?: String;
    filetype_starts_with?: String;
    filetype_not_starts_with?: String;
    filetype_ends_with?: String;
    filetype_not_ends_with?: String;
    author?: UserWhereInput;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: MessageWhereInput[] | MessageWhereInput;
    OR?: MessageWhereInput[] | MessageWhereInput;
    NOT?: MessageWhereInput[] | MessageWhereInput;
}
export declare type ChannelWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export declare type CommentWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export interface CommentWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    body?: String;
    body_not?: String;
    body_in?: String[] | String;
    body_not_in?: String[] | String;
    body_lt?: String;
    body_lte?: String;
    body_gt?: String;
    body_gte?: String;
    body_contains?: String;
    body_not_contains?: String;
    body_starts_with?: String;
    body_not_starts_with?: String;
    body_ends_with?: String;
    body_not_ends_with?: String;
    API?: APIApplicationWhereInput;
    parentId?: ID_Input;
    parentId_not?: ID_Input;
    parentId_in?: ID_Input[] | ID_Input;
    parentId_not_in?: ID_Input[] | ID_Input;
    parentId_lt?: ID_Input;
    parentId_lte?: ID_Input;
    parentId_gt?: ID_Input;
    parentId_gte?: ID_Input;
    parentId_contains?: ID_Input;
    parentId_not_contains?: ID_Input;
    parentId_starts_with?: ID_Input;
    parentId_not_starts_with?: ID_Input;
    parentId_ends_with?: ID_Input;
    parentId_not_ends_with?: ID_Input;
    url?: String;
    url_not?: String;
    url_in?: String[] | String;
    url_not_in?: String[] | String;
    url_lt?: String;
    url_lte?: String;
    url_gt?: String;
    url_gte?: String;
    url_contains?: String;
    url_not_contains?: String;
    url_starts_with?: String;
    url_not_starts_with?: String;
    url_ends_with?: String;
    url_not_ends_with?: String;
    pageId?: ID_Input;
    pageId_not?: ID_Input;
    pageId_in?: ID_Input[] | ID_Input;
    pageId_not_in?: ID_Input[] | ID_Input;
    pageId_lt?: ID_Input;
    pageId_lte?: ID_Input;
    pageId_gt?: ID_Input;
    pageId_gte?: ID_Input;
    pageId_contains?: ID_Input;
    pageId_not_contains?: ID_Input;
    pageId_starts_with?: ID_Input;
    pageId_not_starts_with?: ID_Input;
    pageId_ends_with?: ID_Input;
    pageId_not_ends_with?: ID_Input;
    repliedTo?: UserWhereInput;
    ratings?: RatingWhereInput;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    replies_every?: CommentWhereInput;
    replies_some?: CommentWhereInput;
    replies_none?: CommentWhereInput;
    author?: UserWhereInput;
    AND?: CommentWhereInput[] | CommentWhereInput;
    OR?: CommentWhereInput[] | CommentWhereInput;
    NOT?: CommentWhereInput[] | CommentWhereInput;
}
export interface RatingWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    vote?: Int;
    vote_not?: Int;
    vote_in?: Int[] | Int;
    vote_not_in?: Int[] | Int;
    vote_lt?: Int;
    vote_lte?: Int;
    vote_gt?: Int;
    vote_gte?: Int;
    author_every?: UserWhereInput;
    author_some?: UserWhereInput;
    author_none?: UserWhereInput;
    AND?: RatingWhereInput[] | RatingWhereInput;
    OR?: RatingWhereInput[] | RatingWhereInput;
    NOT?: RatingWhereInput[] | RatingWhereInput;
}
export declare type FileWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export declare type MessageWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export declare type NotificationWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export declare type RatingWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export declare type TeamWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
    name?: String;
}>;
export declare type UserWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
    email?: String;
    username?: String;
}>;
export interface APIApplicationCreateInput {
    admin: UserCreateOneInput;
    moderators?: UserCreateManyInput;
    name: String;
    token: String;
}
export interface UserCreateOneInput {
    create?: UserCreateInput;
    connect?: UserWhereUniqueInput;
}
export interface UserCreateInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    notifications?: NotificationCreateManyWithoutAuthorInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserCreateManyWithoutFriendsInput;
    friend_requests?: UserCreateManyWithoutFriend_requestsInput;
    role: UserRole;
    teams?: TeamCreateManyWithoutMembersInput;
    channels?: ChannelCreateManyWithoutMembersInput;
    owned_teams?: TeamCreateManyWithoutAuthorInput;
    owned_channels?: ChannelCreateManyWithoutAuthorInput;
}
export interface APIApplicationCreateManyInput {
    create?: APIApplicationCreateInput[] | APIApplicationCreateInput;
    connect?: APIApplicationWhereUniqueInput[] | APIApplicationWhereUniqueInput;
}
export interface NotificationCreateManyWithoutAuthorInput {
    create?: NotificationCreateWithoutAuthorInput[] | NotificationCreateWithoutAuthorInput;
    connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput;
}
export interface NotificationCreateWithoutAuthorInput {
    message: String;
}
export interface FileCreateOneInput {
    create?: FileCreateInput;
    connect?: FileWhereUniqueInput;
}
export interface FileCreateInput {
    filename: String;
    mimetype: String;
    encoding: String;
    key: String;
    ETag: String;
    url: String;
}
export interface UserCreateManyWithoutFriendsInput {
    create?: UserCreateWithoutFriendsInput[] | UserCreateWithoutFriendsInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}
export interface UserCreateWithoutFriendsInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    notifications?: NotificationCreateManyWithoutAuthorInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friend_requests?: UserCreateManyWithoutFriend_requestsInput;
    role: UserRole;
    teams?: TeamCreateManyWithoutMembersInput;
    channels?: ChannelCreateManyWithoutMembersInput;
    owned_teams?: TeamCreateManyWithoutAuthorInput;
    owned_channels?: ChannelCreateManyWithoutAuthorInput;
}
export interface UserCreateManyWithoutFriend_requestsInput {
    create?: UserCreateWithoutFriend_requestsInput[] | UserCreateWithoutFriend_requestsInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}
export interface UserCreateWithoutFriend_requestsInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    notifications?: NotificationCreateManyWithoutAuthorInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserCreateManyWithoutFriendsInput;
    role: UserRole;
    teams?: TeamCreateManyWithoutMembersInput;
    channels?: ChannelCreateManyWithoutMembersInput;
    owned_teams?: TeamCreateManyWithoutAuthorInput;
    owned_channels?: ChannelCreateManyWithoutAuthorInput;
}
export interface TeamCreateManyWithoutMembersInput {
    create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput;
    connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
}
export interface TeamCreateWithoutMembersInput {
    name: String;
    slug: String;
    moderators?: UserCreateManyInput;
    author: UserCreateOneWithoutOwned_teamsInput;
    channels?: ChannelCreateManyInput;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface UserCreateManyInput {
    create?: UserCreateInput[] | UserCreateInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}
export interface UserCreateOneWithoutOwned_teamsInput {
    create?: UserCreateWithoutOwned_teamsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserCreateWithoutOwned_teamsInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    notifications?: NotificationCreateManyWithoutAuthorInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserCreateManyWithoutFriendsInput;
    friend_requests?: UserCreateManyWithoutFriend_requestsInput;
    role: UserRole;
    teams?: TeamCreateManyWithoutMembersInput;
    channels?: ChannelCreateManyWithoutMembersInput;
    owned_channels?: ChannelCreateManyWithoutAuthorInput;
}
export interface ChannelCreateManyWithoutMembersInput {
    create?: ChannelCreateWithoutMembersInput[] | ChannelCreateWithoutMembersInput;
    connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
}
export interface ChannelCreateWithoutMembersInput {
    name: String;
    slug: String;
    moderators?: UserCreateManyInput;
    public?: Boolean;
    messages?: MessageCreateManyInput;
    author: UserCreateOneWithoutOwned_channelsInput;
}
export interface MessageCreateManyInput {
    create?: MessageCreateInput[] | MessageCreateInput;
    connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
}
export interface MessageCreateInput {
    body: String;
    parentId: ID_Input;
    url: String;
    filetype: String;
    author: UserCreateOneInput;
}
export interface UserCreateOneWithoutOwned_channelsInput {
    create?: UserCreateWithoutOwned_channelsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserCreateWithoutOwned_channelsInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    notifications?: NotificationCreateManyWithoutAuthorInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserCreateManyWithoutFriendsInput;
    friend_requests?: UserCreateManyWithoutFriend_requestsInput;
    role: UserRole;
    teams?: TeamCreateManyWithoutMembersInput;
    channels?: ChannelCreateManyWithoutMembersInput;
    owned_teams?: TeamCreateManyWithoutAuthorInput;
}
export interface TeamCreateManyWithoutAuthorInput {
    create?: TeamCreateWithoutAuthorInput[] | TeamCreateWithoutAuthorInput;
    connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
}
export interface TeamCreateWithoutAuthorInput {
    name: String;
    slug: String;
    moderators?: UserCreateManyInput;
    members?: UserCreateManyWithoutTeamsInput;
    channels?: ChannelCreateManyInput;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface UserCreateManyWithoutTeamsInput {
    create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}
export interface UserCreateWithoutTeamsInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    notifications?: NotificationCreateManyWithoutAuthorInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserCreateManyWithoutFriendsInput;
    friend_requests?: UserCreateManyWithoutFriend_requestsInput;
    role: UserRole;
    channels?: ChannelCreateManyWithoutMembersInput;
    owned_teams?: TeamCreateManyWithoutAuthorInput;
    owned_channels?: ChannelCreateManyWithoutAuthorInput;
}
export interface ChannelCreateManyWithoutAuthorInput {
    create?: ChannelCreateWithoutAuthorInput[] | ChannelCreateWithoutAuthorInput;
    connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
}
export interface ChannelCreateWithoutAuthorInput {
    name: String;
    slug: String;
    moderators?: UserCreateManyInput;
    public?: Boolean;
    messages?: MessageCreateManyInput;
    members?: UserCreateManyWithoutChannelsInput;
}
export interface UserCreateManyWithoutChannelsInput {
    create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}
export interface UserCreateWithoutChannelsInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    notifications?: NotificationCreateManyWithoutAuthorInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserCreateManyWithoutFriendsInput;
    friend_requests?: UserCreateManyWithoutFriend_requestsInput;
    role: UserRole;
    teams?: TeamCreateManyWithoutMembersInput;
    owned_teams?: TeamCreateManyWithoutAuthorInput;
    owned_channels?: ChannelCreateManyWithoutAuthorInput;
}
export interface ChannelCreateManyInput {
    create?: ChannelCreateInput[] | ChannelCreateInput;
    connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
}
export interface ChannelCreateInput {
    name: String;
    slug: String;
    moderators?: UserCreateManyInput;
    public?: Boolean;
    messages?: MessageCreateManyInput;
    members?: UserCreateManyWithoutChannelsInput;
    author: UserCreateOneWithoutOwned_channelsInput;
}
export interface APIApplicationUpdateInput {
    admin?: UserUpdateOneRequiredInput;
    moderators?: UserUpdateManyInput;
    name?: String;
    token?: String;
}
export interface UserUpdateOneRequiredInput {
    create?: UserCreateInput;
    update?: UserUpdateDataInput;
    upsert?: UserUpsertNestedInput;
    connect?: UserWhereUniqueInput;
}
export interface UserUpdateDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface APIApplicationUpdateManyInput {
    create?: APIApplicationCreateInput[] | APIApplicationCreateInput;
    update?: APIApplicationUpdateWithWhereUniqueNestedInput[] | APIApplicationUpdateWithWhereUniqueNestedInput;
    upsert?: APIApplicationUpsertWithWhereUniqueNestedInput[] | APIApplicationUpsertWithWhereUniqueNestedInput;
    delete?: APIApplicationWhereUniqueInput[] | APIApplicationWhereUniqueInput;
    connect?: APIApplicationWhereUniqueInput[] | APIApplicationWhereUniqueInput;
    disconnect?: APIApplicationWhereUniqueInput[] | APIApplicationWhereUniqueInput;
    deleteMany?: APIApplicationScalarWhereInput[] | APIApplicationScalarWhereInput;
    updateMany?: APIApplicationUpdateManyWithWhereNestedInput[] | APIApplicationUpdateManyWithWhereNestedInput;
}
export interface APIApplicationUpdateWithWhereUniqueNestedInput {
    where: APIApplicationWhereUniqueInput;
    data: APIApplicationUpdateDataInput;
}
export interface APIApplicationUpdateDataInput {
    admin?: UserUpdateOneRequiredInput;
    moderators?: UserUpdateManyInput;
    name?: String;
    token?: String;
}
export interface UserUpdateManyInput {
    create?: UserCreateInput[] | UserCreateInput;
    update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput;
    upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput;
    delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
    updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput;
}
export interface UserUpdateWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput;
    data: UserUpdateDataInput;
}
export interface UserUpsertWithWhereUniqueNestedInput {
    where: UserWhereUniqueInput;
    update: UserUpdateDataInput;
    create: UserCreateInput;
}
export interface UserScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    email?: String;
    email_not?: String;
    email_in?: String[] | String;
    email_not_in?: String[] | String;
    email_lt?: String;
    email_lte?: String;
    email_gt?: String;
    email_gte?: String;
    email_contains?: String;
    email_not_contains?: String;
    email_starts_with?: String;
    email_not_starts_with?: String;
    email_ends_with?: String;
    email_not_ends_with?: String;
    set_private?: Boolean;
    set_private_not?: Boolean;
    username?: String;
    username_not?: String;
    username_in?: String[] | String;
    username_not_in?: String[] | String;
    username_lt?: String;
    username_lte?: String;
    username_gt?: String;
    username_gte?: String;
    username_contains?: String;
    username_not_contains?: String;
    username_starts_with?: String;
    username_not_starts_with?: String;
    username_ends_with?: String;
    username_not_ends_with?: String;
    password?: String;
    password_not?: String;
    password_in?: String[] | String;
    password_not_in?: String[] | String;
    password_lt?: String;
    password_lte?: String;
    password_gt?: String;
    password_gte?: String;
    password_contains?: String;
    password_not_contains?: String;
    password_starts_with?: String;
    password_not_starts_with?: String;
    password_ends_with?: String;
    password_not_ends_with?: String;
    confirmed?: Boolean;
    confirmed_not?: Boolean;
    online?: Boolean;
    online_not?: Boolean;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    role?: UserRole;
    role_not?: UserRole;
    role_in?: UserRole[] | UserRole;
    role_not_in?: UserRole[] | UserRole;
    AND?: UserScalarWhereInput[] | UserScalarWhereInput;
    OR?: UserScalarWhereInput[] | UserScalarWhereInput;
    NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}
export interface UserUpdateManyWithWhereNestedInput {
    where: UserScalarWhereInput;
    data: UserUpdateManyDataInput;
}
export interface UserUpdateManyDataInput {
    email?: String;
    set_private?: Boolean;
    username?: String;
    password?: String;
    confirmed?: Boolean;
    online?: Boolean;
    role?: UserRole;
}
export interface APIApplicationUpsertWithWhereUniqueNestedInput {
    where: APIApplicationWhereUniqueInput;
    update: APIApplicationUpdateDataInput;
    create: APIApplicationCreateInput;
}
export interface APIApplicationScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    token?: String;
    token_not?: String;
    token_in?: String[] | String;
    token_not_in?: String[] | String;
    token_lt?: String;
    token_lte?: String;
    token_gt?: String;
    token_gte?: String;
    token_contains?: String;
    token_not_contains?: String;
    token_starts_with?: String;
    token_not_starts_with?: String;
    token_ends_with?: String;
    token_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: APIApplicationScalarWhereInput[] | APIApplicationScalarWhereInput;
    OR?: APIApplicationScalarWhereInput[] | APIApplicationScalarWhereInput;
    NOT?: APIApplicationScalarWhereInput[] | APIApplicationScalarWhereInput;
}
export interface APIApplicationUpdateManyWithWhereNestedInput {
    where: APIApplicationScalarWhereInput;
    data: APIApplicationUpdateManyDataInput;
}
export interface APIApplicationUpdateManyDataInput {
    name?: String;
    token?: String;
}
export interface NotificationUpdateManyWithoutAuthorInput {
    create?: NotificationCreateWithoutAuthorInput[] | NotificationCreateWithoutAuthorInput;
    delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput;
    connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput;
    disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput;
    update?: NotificationUpdateWithWhereUniqueWithoutAuthorInput[] | NotificationUpdateWithWhereUniqueWithoutAuthorInput;
    upsert?: NotificationUpsertWithWhereUniqueWithoutAuthorInput[] | NotificationUpsertWithWhereUniqueWithoutAuthorInput;
    deleteMany?: NotificationScalarWhereInput[] | NotificationScalarWhereInput;
    updateMany?: NotificationUpdateManyWithWhereNestedInput[] | NotificationUpdateManyWithWhereNestedInput;
}
export interface NotificationUpdateWithWhereUniqueWithoutAuthorInput {
    where: NotificationWhereUniqueInput;
    data: NotificationUpdateWithoutAuthorDataInput;
}
export interface NotificationUpdateWithoutAuthorDataInput {
    message?: String;
}
export interface NotificationUpsertWithWhereUniqueWithoutAuthorInput {
    where: NotificationWhereUniqueInput;
    update: NotificationUpdateWithoutAuthorDataInput;
    create: NotificationCreateWithoutAuthorInput;
}
export interface NotificationScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    message?: String;
    message_not?: String;
    message_in?: String[] | String;
    message_not_in?: String[] | String;
    message_lt?: String;
    message_lte?: String;
    message_gt?: String;
    message_gte?: String;
    message_contains?: String;
    message_not_contains?: String;
    message_starts_with?: String;
    message_not_starts_with?: String;
    message_ends_with?: String;
    message_not_ends_with?: String;
    AND?: NotificationScalarWhereInput[] | NotificationScalarWhereInput;
    OR?: NotificationScalarWhereInput[] | NotificationScalarWhereInput;
    NOT?: NotificationScalarWhereInput[] | NotificationScalarWhereInput;
}
export interface NotificationUpdateManyWithWhereNestedInput {
    where: NotificationScalarWhereInput;
    data: NotificationUpdateManyDataInput;
}
export interface NotificationUpdateManyDataInput {
    message?: String;
}
export interface FileUpdateOneRequiredInput {
    create?: FileCreateInput;
    update?: FileUpdateDataInput;
    upsert?: FileUpsertNestedInput;
    connect?: FileWhereUniqueInput;
}
export interface FileUpdateDataInput {
    filename?: String;
    mimetype?: String;
    encoding?: String;
    key?: String;
    ETag?: String;
    url?: String;
}
export interface FileUpsertNestedInput {
    update: FileUpdateDataInput;
    create: FileCreateInput;
}
export interface UserUpdateManyWithoutFriendsInput {
    create?: UserCreateWithoutFriendsInput[] | UserCreateWithoutFriendsInput;
    delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    update?: UserUpdateWithWhereUniqueWithoutFriendsInput[] | UserUpdateWithWhereUniqueWithoutFriendsInput;
    upsert?: UserUpsertWithWhereUniqueWithoutFriendsInput[] | UserUpsertWithWhereUniqueWithoutFriendsInput;
    deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
    updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput;
}
export interface UserUpdateWithWhereUniqueWithoutFriendsInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutFriendsDataInput;
}
export interface UserUpdateWithoutFriendsDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface UserUpdateManyWithoutFriend_requestsInput {
    create?: UserCreateWithoutFriend_requestsInput[] | UserCreateWithoutFriend_requestsInput;
    delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    update?: UserUpdateWithWhereUniqueWithoutFriend_requestsInput[] | UserUpdateWithWhereUniqueWithoutFriend_requestsInput;
    upsert?: UserUpsertWithWhereUniqueWithoutFriend_requestsInput[] | UserUpsertWithWhereUniqueWithoutFriend_requestsInput;
    deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
    updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput;
}
export interface UserUpdateWithWhereUniqueWithoutFriend_requestsInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutFriend_requestsDataInput;
}
export interface UserUpdateWithoutFriend_requestsDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface TeamUpdateManyWithoutMembersInput {
    create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput;
    delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
    connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
    disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
    update?: TeamUpdateWithWhereUniqueWithoutMembersInput[] | TeamUpdateWithWhereUniqueWithoutMembersInput;
    upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput[] | TeamUpsertWithWhereUniqueWithoutMembersInput;
    deleteMany?: TeamScalarWhereInput[] | TeamScalarWhereInput;
    updateMany?: TeamUpdateManyWithWhereNestedInput[] | TeamUpdateManyWithWhereNestedInput;
}
export interface TeamUpdateWithWhereUniqueWithoutMembersInput {
    where: TeamWhereUniqueInput;
    data: TeamUpdateWithoutMembersDataInput;
}
export interface TeamUpdateWithoutMembersDataInput {
    name?: String;
    slug?: String;
    moderators?: UserUpdateManyInput;
    author?: UserUpdateOneRequiredWithoutOwned_teamsInput;
    channels?: ChannelUpdateManyInput;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface UserUpdateOneRequiredWithoutOwned_teamsInput {
    create?: UserCreateWithoutOwned_teamsInput;
    update?: UserUpdateWithoutOwned_teamsDataInput;
    upsert?: UserUpsertWithoutOwned_teamsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserUpdateWithoutOwned_teamsDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface ChannelUpdateManyWithoutMembersInput {
    create?: ChannelCreateWithoutMembersInput[] | ChannelCreateWithoutMembersInput;
    delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    update?: ChannelUpdateWithWhereUniqueWithoutMembersInput[] | ChannelUpdateWithWhereUniqueWithoutMembersInput;
    upsert?: ChannelUpsertWithWhereUniqueWithoutMembersInput[] | ChannelUpsertWithWhereUniqueWithoutMembersInput;
    deleteMany?: ChannelScalarWhereInput[] | ChannelScalarWhereInput;
    updateMany?: ChannelUpdateManyWithWhereNestedInput[] | ChannelUpdateManyWithWhereNestedInput;
}
export interface ChannelUpdateWithWhereUniqueWithoutMembersInput {
    where: ChannelWhereUniqueInput;
    data: ChannelUpdateWithoutMembersDataInput;
}
export interface ChannelUpdateWithoutMembersDataInput {
    name?: String;
    slug?: String;
    moderators?: UserUpdateManyInput;
    public?: Boolean;
    messages?: MessageUpdateManyInput;
    author?: UserUpdateOneRequiredWithoutOwned_channelsInput;
}
export interface MessageUpdateManyInput {
    create?: MessageCreateInput[] | MessageCreateInput;
    update?: MessageUpdateWithWhereUniqueNestedInput[] | MessageUpdateWithWhereUniqueNestedInput;
    upsert?: MessageUpsertWithWhereUniqueNestedInput[] | MessageUpsertWithWhereUniqueNestedInput;
    delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
    connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
    disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput;
    deleteMany?: MessageScalarWhereInput[] | MessageScalarWhereInput;
    updateMany?: MessageUpdateManyWithWhereNestedInput[] | MessageUpdateManyWithWhereNestedInput;
}
export interface MessageUpdateWithWhereUniqueNestedInput {
    where: MessageWhereUniqueInput;
    data: MessageUpdateDataInput;
}
export interface MessageUpdateDataInput {
    body?: String;
    parentId?: ID_Input;
    url?: String;
    filetype?: String;
    author?: UserUpdateOneRequiredInput;
}
export interface MessageUpsertWithWhereUniqueNestedInput {
    where: MessageWhereUniqueInput;
    update: MessageUpdateDataInput;
    create: MessageCreateInput;
}
export interface MessageScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    body?: String;
    body_not?: String;
    body_in?: String[] | String;
    body_not_in?: String[] | String;
    body_lt?: String;
    body_lte?: String;
    body_gt?: String;
    body_gte?: String;
    body_contains?: String;
    body_not_contains?: String;
    body_starts_with?: String;
    body_not_starts_with?: String;
    body_ends_with?: String;
    body_not_ends_with?: String;
    parentId?: ID_Input;
    parentId_not?: ID_Input;
    parentId_in?: ID_Input[] | ID_Input;
    parentId_not_in?: ID_Input[] | ID_Input;
    parentId_lt?: ID_Input;
    parentId_lte?: ID_Input;
    parentId_gt?: ID_Input;
    parentId_gte?: ID_Input;
    parentId_contains?: ID_Input;
    parentId_not_contains?: ID_Input;
    parentId_starts_with?: ID_Input;
    parentId_not_starts_with?: ID_Input;
    parentId_ends_with?: ID_Input;
    parentId_not_ends_with?: ID_Input;
    url?: String;
    url_not?: String;
    url_in?: String[] | String;
    url_not_in?: String[] | String;
    url_lt?: String;
    url_lte?: String;
    url_gt?: String;
    url_gte?: String;
    url_contains?: String;
    url_not_contains?: String;
    url_starts_with?: String;
    url_not_starts_with?: String;
    url_ends_with?: String;
    url_not_ends_with?: String;
    filetype?: String;
    filetype_not?: String;
    filetype_in?: String[] | String;
    filetype_not_in?: String[] | String;
    filetype_lt?: String;
    filetype_lte?: String;
    filetype_gt?: String;
    filetype_gte?: String;
    filetype_contains?: String;
    filetype_not_contains?: String;
    filetype_starts_with?: String;
    filetype_not_starts_with?: String;
    filetype_ends_with?: String;
    filetype_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: MessageScalarWhereInput[] | MessageScalarWhereInput;
    OR?: MessageScalarWhereInput[] | MessageScalarWhereInput;
    NOT?: MessageScalarWhereInput[] | MessageScalarWhereInput;
}
export interface MessageUpdateManyWithWhereNestedInput {
    where: MessageScalarWhereInput;
    data: MessageUpdateManyDataInput;
}
export interface MessageUpdateManyDataInput {
    body?: String;
    parentId?: ID_Input;
    url?: String;
    filetype?: String;
}
export interface UserUpdateOneRequiredWithoutOwned_channelsInput {
    create?: UserCreateWithoutOwned_channelsInput;
    update?: UserUpdateWithoutOwned_channelsDataInput;
    upsert?: UserUpsertWithoutOwned_channelsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserUpdateWithoutOwned_channelsDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
}
export interface TeamUpdateManyWithoutAuthorInput {
    create?: TeamCreateWithoutAuthorInput[] | TeamCreateWithoutAuthorInput;
    delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
    connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
    disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput;
    update?: TeamUpdateWithWhereUniqueWithoutAuthorInput[] | TeamUpdateWithWhereUniqueWithoutAuthorInput;
    upsert?: TeamUpsertWithWhereUniqueWithoutAuthorInput[] | TeamUpsertWithWhereUniqueWithoutAuthorInput;
    deleteMany?: TeamScalarWhereInput[] | TeamScalarWhereInput;
    updateMany?: TeamUpdateManyWithWhereNestedInput[] | TeamUpdateManyWithWhereNestedInput;
}
export interface TeamUpdateWithWhereUniqueWithoutAuthorInput {
    where: TeamWhereUniqueInput;
    data: TeamUpdateWithoutAuthorDataInput;
}
export interface TeamUpdateWithoutAuthorDataInput {
    name?: String;
    slug?: String;
    moderators?: UserUpdateManyInput;
    members?: UserUpdateManyWithoutTeamsInput;
    channels?: ChannelUpdateManyInput;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface UserUpdateManyWithoutTeamsInput {
    create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput;
    delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    update?: UserUpdateWithWhereUniqueWithoutTeamsInput[] | UserUpdateWithWhereUniqueWithoutTeamsInput;
    upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput[] | UserUpsertWithWhereUniqueWithoutTeamsInput;
    deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
    updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput;
}
export interface UserUpdateWithWhereUniqueWithoutTeamsInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutTeamsDataInput;
}
export interface UserUpdateWithoutTeamsDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface ChannelUpdateManyWithoutAuthorInput {
    create?: ChannelCreateWithoutAuthorInput[] | ChannelCreateWithoutAuthorInput;
    delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    update?: ChannelUpdateWithWhereUniqueWithoutAuthorInput[] | ChannelUpdateWithWhereUniqueWithoutAuthorInput;
    upsert?: ChannelUpsertWithWhereUniqueWithoutAuthorInput[] | ChannelUpsertWithWhereUniqueWithoutAuthorInput;
    deleteMany?: ChannelScalarWhereInput[] | ChannelScalarWhereInput;
    updateMany?: ChannelUpdateManyWithWhereNestedInput[] | ChannelUpdateManyWithWhereNestedInput;
}
export interface ChannelUpdateWithWhereUniqueWithoutAuthorInput {
    where: ChannelWhereUniqueInput;
    data: ChannelUpdateWithoutAuthorDataInput;
}
export interface ChannelUpdateWithoutAuthorDataInput {
    name?: String;
    slug?: String;
    moderators?: UserUpdateManyInput;
    public?: Boolean;
    messages?: MessageUpdateManyInput;
    members?: UserUpdateManyWithoutChannelsInput;
}
export interface UserUpdateManyWithoutChannelsInput {
    create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput;
    delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
    update?: UserUpdateWithWhereUniqueWithoutChannelsInput[] | UserUpdateWithWhereUniqueWithoutChannelsInput;
    upsert?: UserUpsertWithWhereUniqueWithoutChannelsInput[] | UserUpsertWithWhereUniqueWithoutChannelsInput;
    deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
    updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput;
}
export interface UserUpdateWithWhereUniqueWithoutChannelsInput {
    where: UserWhereUniqueInput;
    data: UserUpdateWithoutChannelsDataInput;
}
export interface UserUpdateWithoutChannelsDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface UserUpsertWithWhereUniqueWithoutChannelsInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutChannelsDataInput;
    create: UserCreateWithoutChannelsInput;
}
export interface ChannelUpsertWithWhereUniqueWithoutAuthorInput {
    where: ChannelWhereUniqueInput;
    update: ChannelUpdateWithoutAuthorDataInput;
    create: ChannelCreateWithoutAuthorInput;
}
export interface ChannelScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    slug?: String;
    slug_not?: String;
    slug_in?: String[] | String;
    slug_not_in?: String[] | String;
    slug_lt?: String;
    slug_lte?: String;
    slug_gt?: String;
    slug_gte?: String;
    slug_contains?: String;
    slug_not_contains?: String;
    slug_starts_with?: String;
    slug_not_starts_with?: String;
    slug_ends_with?: String;
    slug_not_ends_with?: String;
    public?: Boolean;
    public_not?: Boolean;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: ChannelScalarWhereInput[] | ChannelScalarWhereInput;
    OR?: ChannelScalarWhereInput[] | ChannelScalarWhereInput;
    NOT?: ChannelScalarWhereInput[] | ChannelScalarWhereInput;
}
export interface ChannelUpdateManyWithWhereNestedInput {
    where: ChannelScalarWhereInput;
    data: ChannelUpdateManyDataInput;
}
export interface ChannelUpdateManyDataInput {
    name?: String;
    slug?: String;
    public?: Boolean;
}
export interface UserUpsertWithWhereUniqueWithoutTeamsInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutTeamsDataInput;
    create: UserCreateWithoutTeamsInput;
}
export interface ChannelUpdateManyInput {
    create?: ChannelCreateInput[] | ChannelCreateInput;
    update?: ChannelUpdateWithWhereUniqueNestedInput[] | ChannelUpdateWithWhereUniqueNestedInput;
    upsert?: ChannelUpsertWithWhereUniqueNestedInput[] | ChannelUpsertWithWhereUniqueNestedInput;
    delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput;
    deleteMany?: ChannelScalarWhereInput[] | ChannelScalarWhereInput;
    updateMany?: ChannelUpdateManyWithWhereNestedInput[] | ChannelUpdateManyWithWhereNestedInput;
}
export interface ChannelUpdateWithWhereUniqueNestedInput {
    where: ChannelWhereUniqueInput;
    data: ChannelUpdateDataInput;
}
export interface ChannelUpdateDataInput {
    name?: String;
    slug?: String;
    moderators?: UserUpdateManyInput;
    public?: Boolean;
    messages?: MessageUpdateManyInput;
    members?: UserUpdateManyWithoutChannelsInput;
    author?: UserUpdateOneRequiredWithoutOwned_channelsInput;
}
export interface ChannelUpsertWithWhereUniqueNestedInput {
    where: ChannelWhereUniqueInput;
    update: ChannelUpdateDataInput;
    create: ChannelCreateInput;
}
export interface TeamUpsertWithWhereUniqueWithoutAuthorInput {
    where: TeamWhereUniqueInput;
    update: TeamUpdateWithoutAuthorDataInput;
    create: TeamCreateWithoutAuthorInput;
}
export interface TeamScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    name?: String;
    name_not?: String;
    name_in?: String[] | String;
    name_not_in?: String[] | String;
    name_lt?: String;
    name_lte?: String;
    name_gt?: String;
    name_gte?: String;
    name_contains?: String;
    name_not_contains?: String;
    name_starts_with?: String;
    name_not_starts_with?: String;
    name_ends_with?: String;
    name_not_ends_with?: String;
    slug?: String;
    slug_not?: String;
    slug_in?: String[] | String;
    slug_not_in?: String[] | String;
    slug_lt?: String;
    slug_lte?: String;
    slug_gt?: String;
    slug_gte?: String;
    slug_contains?: String;
    slug_not_contains?: String;
    slug_starts_with?: String;
    slug_not_starts_with?: String;
    slug_ends_with?: String;
    slug_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    confirmed?: Boolean;
    confirmed_not?: Boolean;
    online?: Boolean;
    online_not?: Boolean;
    AND?: TeamScalarWhereInput[] | TeamScalarWhereInput;
    OR?: TeamScalarWhereInput[] | TeamScalarWhereInput;
    NOT?: TeamScalarWhereInput[] | TeamScalarWhereInput;
}
export interface TeamUpdateManyWithWhereNestedInput {
    where: TeamScalarWhereInput;
    data: TeamUpdateManyDataInput;
}
export interface TeamUpdateManyDataInput {
    name?: String;
    slug?: String;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface UserUpsertWithoutOwned_channelsInput {
    update: UserUpdateWithoutOwned_channelsDataInput;
    create: UserCreateWithoutOwned_channelsInput;
}
export interface ChannelUpsertWithWhereUniqueWithoutMembersInput {
    where: ChannelWhereUniqueInput;
    update: ChannelUpdateWithoutMembersDataInput;
    create: ChannelCreateWithoutMembersInput;
}
export interface UserUpsertWithoutOwned_teamsInput {
    update: UserUpdateWithoutOwned_teamsDataInput;
    create: UserCreateWithoutOwned_teamsInput;
}
export interface TeamUpsertWithWhereUniqueWithoutMembersInput {
    where: TeamWhereUniqueInput;
    update: TeamUpdateWithoutMembersDataInput;
    create: TeamCreateWithoutMembersInput;
}
export interface UserUpsertWithWhereUniqueWithoutFriend_requestsInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutFriend_requestsDataInput;
    create: UserCreateWithoutFriend_requestsInput;
}
export interface UserUpsertWithWhereUniqueWithoutFriendsInput {
    where: UserWhereUniqueInput;
    update: UserUpdateWithoutFriendsDataInput;
    create: UserCreateWithoutFriendsInput;
}
export interface UserUpsertNestedInput {
    update: UserUpdateDataInput;
    create: UserCreateInput;
}
export interface APIApplicationUpdateManyMutationInput {
    name?: String;
    token?: String;
}
export interface ChannelUpdateInput {
    name?: String;
    slug?: String;
    moderators?: UserUpdateManyInput;
    public?: Boolean;
    messages?: MessageUpdateManyInput;
    members?: UserUpdateManyWithoutChannelsInput;
    author?: UserUpdateOneRequiredWithoutOwned_channelsInput;
}
export interface ChannelUpdateManyMutationInput {
    name?: String;
    slug?: String;
    public?: Boolean;
}
export interface CommentCreateInput {
    body: String;
    API: APIApplicationCreateOneInput;
    parentId: ID_Input;
    url: String;
    pageId: ID_Input;
    repliedTo?: UserCreateOneInput;
    ratings: RatingCreateOneInput;
    replies?: CommentCreateManyWithoutRepliesInput;
    author: UserCreateOneInput;
}
export interface APIApplicationCreateOneInput {
    create?: APIApplicationCreateInput;
    connect?: APIApplicationWhereUniqueInput;
}
export interface RatingCreateOneInput {
    create?: RatingCreateInput;
    connect?: RatingWhereUniqueInput;
}
export interface RatingCreateInput {
    vote: Int;
    author?: UserCreateManyInput;
}
export interface CommentCreateManyWithoutRepliesInput {
    create?: CommentCreateWithoutRepliesInput[] | CommentCreateWithoutRepliesInput;
    connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
}
export interface CommentCreateWithoutRepliesInput {
    body: String;
    API: APIApplicationCreateOneInput;
    parentId: ID_Input;
    url: String;
    pageId: ID_Input;
    repliedTo?: UserCreateOneInput;
    ratings: RatingCreateOneInput;
    author: UserCreateOneInput;
}
export interface CommentUpdateInput {
    body?: String;
    API?: APIApplicationUpdateOneRequiredInput;
    parentId?: ID_Input;
    url?: String;
    pageId?: ID_Input;
    repliedTo?: UserUpdateOneInput;
    ratings?: RatingUpdateOneRequiredInput;
    replies?: CommentUpdateManyWithoutRepliesInput;
    author?: UserUpdateOneRequiredInput;
}
export interface APIApplicationUpdateOneRequiredInput {
    create?: APIApplicationCreateInput;
    update?: APIApplicationUpdateDataInput;
    upsert?: APIApplicationUpsertNestedInput;
    connect?: APIApplicationWhereUniqueInput;
}
export interface APIApplicationUpsertNestedInput {
    update: APIApplicationUpdateDataInput;
    create: APIApplicationCreateInput;
}
export interface UserUpdateOneInput {
    create?: UserCreateInput;
    update?: UserUpdateDataInput;
    upsert?: UserUpsertNestedInput;
    delete?: Boolean;
    disconnect?: Boolean;
    connect?: UserWhereUniqueInput;
}
export interface RatingUpdateOneRequiredInput {
    create?: RatingCreateInput;
    update?: RatingUpdateDataInput;
    upsert?: RatingUpsertNestedInput;
    connect?: RatingWhereUniqueInput;
}
export interface RatingUpdateDataInput {
    vote?: Int;
    author?: UserUpdateManyInput;
}
export interface RatingUpsertNestedInput {
    update: RatingUpdateDataInput;
    create: RatingCreateInput;
}
export interface CommentUpdateManyWithoutRepliesInput {
    create?: CommentCreateWithoutRepliesInput[] | CommentCreateWithoutRepliesInput;
    delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
    connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
    disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
    update?: CommentUpdateWithWhereUniqueWithoutRepliesInput[] | CommentUpdateWithWhereUniqueWithoutRepliesInput;
    upsert?: CommentUpsertWithWhereUniqueWithoutRepliesInput[] | CommentUpsertWithWhereUniqueWithoutRepliesInput;
    deleteMany?: CommentScalarWhereInput[] | CommentScalarWhereInput;
    updateMany?: CommentUpdateManyWithWhereNestedInput[] | CommentUpdateManyWithWhereNestedInput;
}
export interface CommentUpdateWithWhereUniqueWithoutRepliesInput {
    where: CommentWhereUniqueInput;
    data: CommentUpdateWithoutRepliesDataInput;
}
export interface CommentUpdateWithoutRepliesDataInput {
    body?: String;
    API?: APIApplicationUpdateOneRequiredInput;
    parentId?: ID_Input;
    url?: String;
    pageId?: ID_Input;
    repliedTo?: UserUpdateOneInput;
    ratings?: RatingUpdateOneRequiredInput;
    author?: UserUpdateOneRequiredInput;
}
export interface CommentUpsertWithWhereUniqueWithoutRepliesInput {
    where: CommentWhereUniqueInput;
    update: CommentUpdateWithoutRepliesDataInput;
    create: CommentCreateWithoutRepliesInput;
}
export interface CommentScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    body?: String;
    body_not?: String;
    body_in?: String[] | String;
    body_not_in?: String[] | String;
    body_lt?: String;
    body_lte?: String;
    body_gt?: String;
    body_gte?: String;
    body_contains?: String;
    body_not_contains?: String;
    body_starts_with?: String;
    body_not_starts_with?: String;
    body_ends_with?: String;
    body_not_ends_with?: String;
    parentId?: ID_Input;
    parentId_not?: ID_Input;
    parentId_in?: ID_Input[] | ID_Input;
    parentId_not_in?: ID_Input[] | ID_Input;
    parentId_lt?: ID_Input;
    parentId_lte?: ID_Input;
    parentId_gt?: ID_Input;
    parentId_gte?: ID_Input;
    parentId_contains?: ID_Input;
    parentId_not_contains?: ID_Input;
    parentId_starts_with?: ID_Input;
    parentId_not_starts_with?: ID_Input;
    parentId_ends_with?: ID_Input;
    parentId_not_ends_with?: ID_Input;
    url?: String;
    url_not?: String;
    url_in?: String[] | String;
    url_not_in?: String[] | String;
    url_lt?: String;
    url_lte?: String;
    url_gt?: String;
    url_gte?: String;
    url_contains?: String;
    url_not_contains?: String;
    url_starts_with?: String;
    url_not_starts_with?: String;
    url_ends_with?: String;
    url_not_ends_with?: String;
    pageId?: ID_Input;
    pageId_not?: ID_Input;
    pageId_in?: ID_Input[] | ID_Input;
    pageId_not_in?: ID_Input[] | ID_Input;
    pageId_lt?: ID_Input;
    pageId_lte?: ID_Input;
    pageId_gt?: ID_Input;
    pageId_gte?: ID_Input;
    pageId_contains?: ID_Input;
    pageId_not_contains?: ID_Input;
    pageId_starts_with?: ID_Input;
    pageId_not_starts_with?: ID_Input;
    pageId_ends_with?: ID_Input;
    pageId_not_ends_with?: ID_Input;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: CommentScalarWhereInput[] | CommentScalarWhereInput;
    OR?: CommentScalarWhereInput[] | CommentScalarWhereInput;
    NOT?: CommentScalarWhereInput[] | CommentScalarWhereInput;
}
export interface CommentUpdateManyWithWhereNestedInput {
    where: CommentScalarWhereInput;
    data: CommentUpdateManyDataInput;
}
export interface CommentUpdateManyDataInput {
    body?: String;
    parentId?: ID_Input;
    url?: String;
    pageId?: ID_Input;
}
export interface CommentUpdateManyMutationInput {
    body?: String;
    parentId?: ID_Input;
    url?: String;
    pageId?: ID_Input;
}
export interface FileUpdateInput {
    filename?: String;
    mimetype?: String;
    encoding?: String;
    key?: String;
    ETag?: String;
    url?: String;
}
export interface FileUpdateManyMutationInput {
    filename?: String;
    mimetype?: String;
    encoding?: String;
    key?: String;
    ETag?: String;
    url?: String;
}
export interface MessageUpdateInput {
    body?: String;
    parentId?: ID_Input;
    url?: String;
    filetype?: String;
    author?: UserUpdateOneRequiredInput;
}
export interface MessageUpdateManyMutationInput {
    body?: String;
    parentId?: ID_Input;
    url?: String;
    filetype?: String;
}
export interface NotificationCreateInput {
    message: String;
    author: UserCreateOneWithoutNotificationsInput;
}
export interface UserCreateOneWithoutNotificationsInput {
    create?: UserCreateWithoutNotificationsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserCreateWithoutNotificationsInput {
    email: String;
    API?: APIApplicationCreateManyInput;
    set_private?: Boolean;
    username: String;
    password: String;
    avatar_url: FileCreateOneInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserCreateManyWithoutFriendsInput;
    friend_requests?: UserCreateManyWithoutFriend_requestsInput;
    role: UserRole;
    teams?: TeamCreateManyWithoutMembersInput;
    channels?: ChannelCreateManyWithoutMembersInput;
    owned_teams?: TeamCreateManyWithoutAuthorInput;
    owned_channels?: ChannelCreateManyWithoutAuthorInput;
}
export interface NotificationUpdateInput {
    message?: String;
    author?: UserUpdateOneRequiredWithoutNotificationsInput;
}
export interface UserUpdateOneRequiredWithoutNotificationsInput {
    create?: UserCreateWithoutNotificationsInput;
    update?: UserUpdateWithoutNotificationsDataInput;
    upsert?: UserUpsertWithoutNotificationsInput;
    connect?: UserWhereUniqueInput;
}
export interface UserUpdateWithoutNotificationsDataInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface UserUpsertWithoutNotificationsInput {
    update: UserUpdateWithoutNotificationsDataInput;
    create: UserCreateWithoutNotificationsInput;
}
export interface NotificationUpdateManyMutationInput {
    message?: String;
}
export interface RatingUpdateInput {
    vote?: Int;
    author?: UserUpdateManyInput;
}
export interface RatingUpdateManyMutationInput {
    vote?: Int;
}
export interface TeamCreateInput {
    name: String;
    slug: String;
    moderators?: UserCreateManyInput;
    author: UserCreateOneWithoutOwned_teamsInput;
    members?: UserCreateManyWithoutTeamsInput;
    channels?: ChannelCreateManyInput;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface TeamUpdateInput {
    name?: String;
    slug?: String;
    moderators?: UserUpdateManyInput;
    author?: UserUpdateOneRequiredWithoutOwned_teamsInput;
    members?: UserUpdateManyWithoutTeamsInput;
    channels?: ChannelUpdateManyInput;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface TeamUpdateManyMutationInput {
    name?: String;
    slug?: String;
    confirmed?: Boolean;
    online?: Boolean;
}
export interface UserUpdateInput {
    email?: String;
    API?: APIApplicationUpdateManyInput;
    notifications?: NotificationUpdateManyWithoutAuthorInput;
    set_private?: Boolean;
    username?: String;
    password?: String;
    avatar_url?: FileUpdateOneRequiredInput;
    confirmed?: Boolean;
    online?: Boolean;
    friends?: UserUpdateManyWithoutFriendsInput;
    friend_requests?: UserUpdateManyWithoutFriend_requestsInput;
    role?: UserRole;
    teams?: TeamUpdateManyWithoutMembersInput;
    channels?: ChannelUpdateManyWithoutMembersInput;
    owned_teams?: TeamUpdateManyWithoutAuthorInput;
    owned_channels?: ChannelUpdateManyWithoutAuthorInput;
}
export interface UserUpdateManyMutationInput {
    email?: String;
    set_private?: Boolean;
    username?: String;
    password?: String;
    confirmed?: Boolean;
    online?: Boolean;
    role?: UserRole;
}
export interface APIApplicationSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: APIApplicationWhereInput;
    AND?: APIApplicationSubscriptionWhereInput[] | APIApplicationSubscriptionWhereInput;
    OR?: APIApplicationSubscriptionWhereInput[] | APIApplicationSubscriptionWhereInput;
    NOT?: APIApplicationSubscriptionWhereInput[] | APIApplicationSubscriptionWhereInput;
}
export interface ChannelSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: ChannelWhereInput;
    AND?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput;
    OR?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput;
    NOT?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput;
}
export interface CommentSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: CommentWhereInput;
    AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
    OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
    NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
}
export interface FileSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: FileWhereInput;
    AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput;
    OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput;
    NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput;
}
export interface MessageSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: MessageWhereInput;
    AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
    OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
    NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
}
export interface NotificationSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: NotificationWhereInput;
    AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput;
    OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput;
    NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput;
}
export interface RatingSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: RatingWhereInput;
    AND?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput;
    OR?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput;
    NOT?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput;
}
export interface TeamSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: TeamWhereInput;
    AND?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput;
    OR?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput;
    NOT?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput;
}
export interface UserSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: UserWhereInput;
    AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
    OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
    NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}
export interface NodeNode {
    id: ID_Output;
}
export interface APIApplication {
    id: ID_Output;
    name: String;
    token: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface APIApplicationPromise extends Promise<APIApplication>, Fragmentable {
    id: () => Promise<ID_Output>;
    admin: <T = UserPromise>() => T;
    moderators: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    name: () => Promise<String>;
    token: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface APIApplicationSubscription extends Promise<AsyncIterator<APIApplication>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    admin: <T = UserSubscription>() => T;
    moderators: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    name: () => Promise<AsyncIterator<String>>;
    token: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface User {
    id: ID_Output;
    email: String;
    set_private: Boolean;
    username: String;
    password: String;
    confirmed: Boolean;
    online: Boolean;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    role: UserRole;
}
export interface UserPromise extends Promise<User>, Fragmentable {
    id: () => Promise<ID_Output>;
    email: () => Promise<String>;
    API: <T = FragmentableArray<APIApplication>>(args?: {
        where?: APIApplicationWhereInput;
        orderBy?: APIApplicationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    notifications: <T = FragmentableArray<Notification>>(args?: {
        where?: NotificationWhereInput;
        orderBy?: NotificationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    set_private: () => Promise<Boolean>;
    username: () => Promise<String>;
    password: () => Promise<String>;
    avatar_url: <T = FilePromise>() => T;
    confirmed: () => Promise<Boolean>;
    online: () => Promise<Boolean>;
    friends: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    friend_requests: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    role: () => Promise<UserRole>;
    teams: <T = FragmentableArray<Team>>(args?: {
        where?: TeamWhereInput;
        orderBy?: TeamOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    channels: <T = FragmentableArray<Channel>>(args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    owned_teams: <T = FragmentableArray<Team>>(args?: {
        where?: TeamWhereInput;
        orderBy?: TeamOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    owned_channels: <T = FragmentableArray<Channel>>(args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface UserSubscription extends Promise<AsyncIterator<User>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    email: () => Promise<AsyncIterator<String>>;
    API: <T = Promise<AsyncIterator<APIApplicationSubscription>>>(args?: {
        where?: APIApplicationWhereInput;
        orderBy?: APIApplicationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    notifications: <T = Promise<AsyncIterator<NotificationSubscription>>>(args?: {
        where?: NotificationWhereInput;
        orderBy?: NotificationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    set_private: () => Promise<AsyncIterator<Boolean>>;
    username: () => Promise<AsyncIterator<String>>;
    password: () => Promise<AsyncIterator<String>>;
    avatar_url: <T = FileSubscription>() => T;
    confirmed: () => Promise<AsyncIterator<Boolean>>;
    online: () => Promise<AsyncIterator<Boolean>>;
    friends: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    friend_requests: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    role: () => Promise<AsyncIterator<UserRole>>;
    teams: <T = Promise<AsyncIterator<TeamSubscription>>>(args?: {
        where?: TeamWhereInput;
        orderBy?: TeamOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    channels: <T = Promise<AsyncIterator<ChannelSubscription>>>(args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    owned_teams: <T = Promise<AsyncIterator<TeamSubscription>>>(args?: {
        where?: TeamWhereInput;
        orderBy?: TeamOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    owned_channels: <T = Promise<AsyncIterator<ChannelSubscription>>>(args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface Notification {
    id: ID_Output;
    message: String;
}
export interface NotificationPromise extends Promise<Notification>, Fragmentable {
    id: () => Promise<ID_Output>;
    message: () => Promise<String>;
    author: <T = UserPromise>() => T;
}
export interface NotificationSubscription extends Promise<AsyncIterator<Notification>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    message: () => Promise<AsyncIterator<String>>;
    author: <T = UserSubscription>() => T;
}
export interface File {
    id: ID_Output;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    filename: String;
    mimetype: String;
    encoding: String;
    key: String;
    ETag: String;
    url: String;
}
export interface FilePromise extends Promise<File>, Fragmentable {
    id: () => Promise<ID_Output>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    filename: () => Promise<String>;
    mimetype: () => Promise<String>;
    encoding: () => Promise<String>;
    key: () => Promise<String>;
    ETag: () => Promise<String>;
    url: () => Promise<String>;
}
export interface FileSubscription extends Promise<AsyncIterator<File>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    filename: () => Promise<AsyncIterator<String>>;
    mimetype: () => Promise<AsyncIterator<String>>;
    encoding: () => Promise<AsyncIterator<String>>;
    key: () => Promise<AsyncIterator<String>>;
    ETag: () => Promise<AsyncIterator<String>>;
    url: () => Promise<AsyncIterator<String>>;
}
export interface Team {
    id: ID_Output;
    name: String;
    slug: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    confirmed: Boolean;
    online: Boolean;
}
export interface TeamPromise extends Promise<Team>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    slug: () => Promise<String>;
    moderators: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    author: <T = UserPromise>() => T;
    members: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    channels: <T = FragmentableArray<Channel>>(args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    confirmed: () => Promise<Boolean>;
    online: () => Promise<Boolean>;
}
export interface TeamSubscription extends Promise<AsyncIterator<Team>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    slug: () => Promise<AsyncIterator<String>>;
    moderators: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    author: <T = UserSubscription>() => T;
    members: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    channels: <T = Promise<AsyncIterator<ChannelSubscription>>>(args?: {
        where?: ChannelWhereInput;
        orderBy?: ChannelOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    confirmed: () => Promise<AsyncIterator<Boolean>>;
    online: () => Promise<AsyncIterator<Boolean>>;
}
export interface Channel {
    id: ID_Output;
    name: String;
    slug: String;
    public?: Boolean;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface ChannelPromise extends Promise<Channel>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    slug: () => Promise<String>;
    moderators: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    public: () => Promise<Boolean>;
    messages: <T = FragmentableArray<Message>>(args?: {
        where?: MessageWhereInput;
        orderBy?: MessageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    members: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    author: <T = UserPromise>() => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface ChannelSubscription extends Promise<AsyncIterator<Channel>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    slug: () => Promise<AsyncIterator<String>>;
    moderators: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    public: () => Promise<AsyncIterator<Boolean>>;
    messages: <T = Promise<AsyncIterator<MessageSubscription>>>(args?: {
        where?: MessageWhereInput;
        orderBy?: MessageOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    members: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    author: <T = UserSubscription>() => T;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface Message {
    id: ID_Output;
    body: String;
    parentId: ID_Output;
    url: String;
    filetype: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface MessagePromise extends Promise<Message>, Fragmentable {
    id: () => Promise<ID_Output>;
    body: () => Promise<String>;
    parentId: () => Promise<ID_Output>;
    url: () => Promise<String>;
    filetype: () => Promise<String>;
    author: <T = UserPromise>() => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface MessageSubscription extends Promise<AsyncIterator<Message>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    body: () => Promise<AsyncIterator<String>>;
    parentId: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    filetype: () => Promise<AsyncIterator<String>>;
    author: <T = UserSubscription>() => T;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface APIApplicationConnection {
}
export interface APIApplicationConnectionPromise extends Promise<APIApplicationConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<APIApplicationEdge>>() => T;
    aggregate: <T = AggregateAPIApplicationPromise>() => T;
}
export interface APIApplicationConnectionSubscription extends Promise<AsyncIterator<APIApplicationConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<APIApplicationEdgeSubscription>>>() => T;
    aggregate: <T = AggregateAPIApplicationSubscription>() => T;
}
export interface PageInfo {
    hasNextPage: Boolean;
    hasPreviousPage: Boolean;
    startCursor?: String;
    endCursor?: String;
}
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
    hasNextPage: () => Promise<Boolean>;
    hasPreviousPage: () => Promise<Boolean>;
    startCursor: () => Promise<String>;
    endCursor: () => Promise<String>;
}
export interface PageInfoSubscription extends Promise<AsyncIterator<PageInfo>>, Fragmentable {
    hasNextPage: () => Promise<AsyncIterator<Boolean>>;
    hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
    startCursor: () => Promise<AsyncIterator<String>>;
    endCursor: () => Promise<AsyncIterator<String>>;
}
export interface APIApplicationEdge {
    cursor: String;
}
export interface APIApplicationEdgePromise extends Promise<APIApplicationEdge>, Fragmentable {
    node: <T = APIApplicationPromise>() => T;
    cursor: () => Promise<String>;
}
export interface APIApplicationEdgeSubscription extends Promise<AsyncIterator<APIApplicationEdge>>, Fragmentable {
    node: <T = APIApplicationSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateAPIApplication {
    count: Int;
}
export interface AggregateAPIApplicationPromise extends Promise<AggregateAPIApplication>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateAPIApplicationSubscription extends Promise<AsyncIterator<AggregateAPIApplication>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface ChannelConnection {
}
export interface ChannelConnectionPromise extends Promise<ChannelConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ChannelEdge>>() => T;
    aggregate: <T = AggregateChannelPromise>() => T;
}
export interface ChannelConnectionSubscription extends Promise<AsyncIterator<ChannelConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ChannelEdgeSubscription>>>() => T;
    aggregate: <T = AggregateChannelSubscription>() => T;
}
export interface ChannelEdge {
    cursor: String;
}
export interface ChannelEdgePromise extends Promise<ChannelEdge>, Fragmentable {
    node: <T = ChannelPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ChannelEdgeSubscription extends Promise<AsyncIterator<ChannelEdge>>, Fragmentable {
    node: <T = ChannelSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateChannel {
    count: Int;
}
export interface AggregateChannelPromise extends Promise<AggregateChannel>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateChannelSubscription extends Promise<AsyncIterator<AggregateChannel>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Comment {
    id: ID_Output;
    body: String;
    parentId: ID_Output;
    url: String;
    pageId: ID_Output;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface CommentPromise extends Promise<Comment>, Fragmentable {
    id: () => Promise<ID_Output>;
    body: () => Promise<String>;
    API: <T = APIApplicationPromise>() => T;
    parentId: () => Promise<ID_Output>;
    url: () => Promise<String>;
    pageId: () => Promise<ID_Output>;
    repliedTo: <T = UserPromise>() => T;
    ratings: <T = RatingPromise>() => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    replies: <T = FragmentableArray<Comment>>(args?: {
        where?: CommentWhereInput;
        orderBy?: CommentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    author: <T = UserPromise>() => T;
}
export interface CommentSubscription extends Promise<AsyncIterator<Comment>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    body: () => Promise<AsyncIterator<String>>;
    API: <T = APIApplicationSubscription>() => T;
    parentId: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    pageId: () => Promise<AsyncIterator<ID_Output>>;
    repliedTo: <T = UserSubscription>() => T;
    ratings: <T = RatingSubscription>() => T;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    replies: <T = Promise<AsyncIterator<CommentSubscription>>>(args?: {
        where?: CommentWhereInput;
        orderBy?: CommentOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    author: <T = UserSubscription>() => T;
}
export interface Rating {
    id: ID_Output;
    vote: Int;
}
export interface RatingPromise extends Promise<Rating>, Fragmentable {
    id: () => Promise<ID_Output>;
    vote: () => Promise<Int>;
    author: <T = FragmentableArray<User>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface RatingSubscription extends Promise<AsyncIterator<Rating>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    vote: () => Promise<AsyncIterator<Int>>;
    author: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CommentConnection {
}
export interface CommentConnectionPromise extends Promise<CommentConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<CommentEdge>>() => T;
    aggregate: <T = AggregateCommentPromise>() => T;
}
export interface CommentConnectionSubscription extends Promise<AsyncIterator<CommentConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<CommentEdgeSubscription>>>() => T;
    aggregate: <T = AggregateCommentSubscription>() => T;
}
export interface CommentEdge {
    cursor: String;
}
export interface CommentEdgePromise extends Promise<CommentEdge>, Fragmentable {
    node: <T = CommentPromise>() => T;
    cursor: () => Promise<String>;
}
export interface CommentEdgeSubscription extends Promise<AsyncIterator<CommentEdge>>, Fragmentable {
    node: <T = CommentSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateComment {
    count: Int;
}
export interface AggregateCommentPromise extends Promise<AggregateComment>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateCommentSubscription extends Promise<AsyncIterator<AggregateComment>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface FileConnection {
}
export interface FileConnectionPromise extends Promise<FileConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<FileEdge>>() => T;
    aggregate: <T = AggregateFilePromise>() => T;
}
export interface FileConnectionSubscription extends Promise<AsyncIterator<FileConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<FileEdgeSubscription>>>() => T;
    aggregate: <T = AggregateFileSubscription>() => T;
}
export interface FileEdge {
    cursor: String;
}
export interface FileEdgePromise extends Promise<FileEdge>, Fragmentable {
    node: <T = FilePromise>() => T;
    cursor: () => Promise<String>;
}
export interface FileEdgeSubscription extends Promise<AsyncIterator<FileEdge>>, Fragmentable {
    node: <T = FileSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateFile {
    count: Int;
}
export interface AggregateFilePromise extends Promise<AggregateFile>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateFileSubscription extends Promise<AsyncIterator<AggregateFile>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface MessageConnection {
}
export interface MessageConnectionPromise extends Promise<MessageConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<MessageEdge>>() => T;
    aggregate: <T = AggregateMessagePromise>() => T;
}
export interface MessageConnectionSubscription extends Promise<AsyncIterator<MessageConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
    aggregate: <T = AggregateMessageSubscription>() => T;
}
export interface MessageEdge {
    cursor: String;
}
export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
    node: <T = MessagePromise>() => T;
    cursor: () => Promise<String>;
}
export interface MessageEdgeSubscription extends Promise<AsyncIterator<MessageEdge>>, Fragmentable {
    node: <T = MessageSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateMessage {
    count: Int;
}
export interface AggregateMessagePromise extends Promise<AggregateMessage>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateMessageSubscription extends Promise<AsyncIterator<AggregateMessage>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface NotificationConnection {
}
export interface NotificationConnectionPromise extends Promise<NotificationConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<NotificationEdge>>() => T;
    aggregate: <T = AggregateNotificationPromise>() => T;
}
export interface NotificationConnectionSubscription extends Promise<AsyncIterator<NotificationConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<NotificationEdgeSubscription>>>() => T;
    aggregate: <T = AggregateNotificationSubscription>() => T;
}
export interface NotificationEdge {
    cursor: String;
}
export interface NotificationEdgePromise extends Promise<NotificationEdge>, Fragmentable {
    node: <T = NotificationPromise>() => T;
    cursor: () => Promise<String>;
}
export interface NotificationEdgeSubscription extends Promise<AsyncIterator<NotificationEdge>>, Fragmentable {
    node: <T = NotificationSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateNotification {
    count: Int;
}
export interface AggregateNotificationPromise extends Promise<AggregateNotification>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateNotificationSubscription extends Promise<AsyncIterator<AggregateNotification>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface RatingConnection {
}
export interface RatingConnectionPromise extends Promise<RatingConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<RatingEdge>>() => T;
    aggregate: <T = AggregateRatingPromise>() => T;
}
export interface RatingConnectionSubscription extends Promise<AsyncIterator<RatingConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<RatingEdgeSubscription>>>() => T;
    aggregate: <T = AggregateRatingSubscription>() => T;
}
export interface RatingEdge {
    cursor: String;
}
export interface RatingEdgePromise extends Promise<RatingEdge>, Fragmentable {
    node: <T = RatingPromise>() => T;
    cursor: () => Promise<String>;
}
export interface RatingEdgeSubscription extends Promise<AsyncIterator<RatingEdge>>, Fragmentable {
    node: <T = RatingSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateRating {
    count: Int;
}
export interface AggregateRatingPromise extends Promise<AggregateRating>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateRatingSubscription extends Promise<AsyncIterator<AggregateRating>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface TeamConnection {
}
export interface TeamConnectionPromise extends Promise<TeamConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<TeamEdge>>() => T;
    aggregate: <T = AggregateTeamPromise>() => T;
}
export interface TeamConnectionSubscription extends Promise<AsyncIterator<TeamConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<TeamEdgeSubscription>>>() => T;
    aggregate: <T = AggregateTeamSubscription>() => T;
}
export interface TeamEdge {
    cursor: String;
}
export interface TeamEdgePromise extends Promise<TeamEdge>, Fragmentable {
    node: <T = TeamPromise>() => T;
    cursor: () => Promise<String>;
}
export interface TeamEdgeSubscription extends Promise<AsyncIterator<TeamEdge>>, Fragmentable {
    node: <T = TeamSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateTeam {
    count: Int;
}
export interface AggregateTeamPromise extends Promise<AggregateTeam>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateTeamSubscription extends Promise<AsyncIterator<AggregateTeam>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface UserConnection {
}
export interface UserConnectionPromise extends Promise<UserConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<UserEdge>>() => T;
    aggregate: <T = AggregateUserPromise>() => T;
}
export interface UserConnectionSubscription extends Promise<AsyncIterator<UserConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
    aggregate: <T = AggregateUserSubscription>() => T;
}
export interface UserEdge {
    cursor: String;
}
export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
    node: <T = UserPromise>() => T;
    cursor: () => Promise<String>;
}
export interface UserEdgeSubscription extends Promise<AsyncIterator<UserEdge>>, Fragmentable {
    node: <T = UserSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface AggregateUser {
    count: Int;
}
export interface AggregateUserPromise extends Promise<AggregateUser>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateUserSubscription extends Promise<AsyncIterator<AggregateUser>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface BatchPayload {
    count: Long;
}
export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
    count: () => Promise<Long>;
}
export interface BatchPayloadSubscription extends Promise<AsyncIterator<BatchPayload>>, Fragmentable {
    count: () => Promise<AsyncIterator<Long>>;
}
export interface APIApplicationSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface APIApplicationSubscriptionPayloadPromise extends Promise<APIApplicationSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = APIApplicationPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = APIApplicationPreviousValuesPromise>() => T;
}
export interface APIApplicationSubscriptionPayloadSubscription extends Promise<AsyncIterator<APIApplicationSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = APIApplicationSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = APIApplicationPreviousValuesSubscription>() => T;
}
export interface APIApplicationPreviousValues {
    id: ID_Output;
    name: String;
    token: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface APIApplicationPreviousValuesPromise extends Promise<APIApplicationPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    token: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface APIApplicationPreviousValuesSubscription extends Promise<AsyncIterator<APIApplicationPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    token: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface ChannelSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface ChannelSubscriptionPayloadPromise extends Promise<ChannelSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ChannelPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ChannelPreviousValuesPromise>() => T;
}
export interface ChannelSubscriptionPayloadSubscription extends Promise<AsyncIterator<ChannelSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ChannelSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ChannelPreviousValuesSubscription>() => T;
}
export interface ChannelPreviousValues {
    id: ID_Output;
    name: String;
    slug: String;
    public?: Boolean;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface ChannelPreviousValuesPromise extends Promise<ChannelPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    slug: () => Promise<String>;
    public: () => Promise<Boolean>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface ChannelPreviousValuesSubscription extends Promise<AsyncIterator<ChannelPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    slug: () => Promise<AsyncIterator<String>>;
    public: () => Promise<AsyncIterator<Boolean>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface CommentSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface CommentSubscriptionPayloadPromise extends Promise<CommentSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = CommentPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = CommentPreviousValuesPromise>() => T;
}
export interface CommentSubscriptionPayloadSubscription extends Promise<AsyncIterator<CommentSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = CommentSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = CommentPreviousValuesSubscription>() => T;
}
export interface CommentPreviousValues {
    id: ID_Output;
    body: String;
    parentId: ID_Output;
    url: String;
    pageId: ID_Output;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface CommentPreviousValuesPromise extends Promise<CommentPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    body: () => Promise<String>;
    parentId: () => Promise<ID_Output>;
    url: () => Promise<String>;
    pageId: () => Promise<ID_Output>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface CommentPreviousValuesSubscription extends Promise<AsyncIterator<CommentPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    body: () => Promise<AsyncIterator<String>>;
    parentId: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    pageId: () => Promise<AsyncIterator<ID_Output>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface FileSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface FileSubscriptionPayloadPromise extends Promise<FileSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = FilePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = FilePreviousValuesPromise>() => T;
}
export interface FileSubscriptionPayloadSubscription extends Promise<AsyncIterator<FileSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = FileSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = FilePreviousValuesSubscription>() => T;
}
export interface FilePreviousValues {
    id: ID_Output;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    filename: String;
    mimetype: String;
    encoding: String;
    key: String;
    ETag: String;
    url: String;
}
export interface FilePreviousValuesPromise extends Promise<FilePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    filename: () => Promise<String>;
    mimetype: () => Promise<String>;
    encoding: () => Promise<String>;
    key: () => Promise<String>;
    ETag: () => Promise<String>;
    url: () => Promise<String>;
}
export interface FilePreviousValuesSubscription extends Promise<AsyncIterator<FilePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    filename: () => Promise<AsyncIterator<String>>;
    mimetype: () => Promise<AsyncIterator<String>>;
    encoding: () => Promise<AsyncIterator<String>>;
    key: () => Promise<AsyncIterator<String>>;
    ETag: () => Promise<AsyncIterator<String>>;
    url: () => Promise<AsyncIterator<String>>;
}
export interface MessageSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface MessageSubscriptionPayloadPromise extends Promise<MessageSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = MessagePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = MessagePreviousValuesPromise>() => T;
}
export interface MessageSubscriptionPayloadSubscription extends Promise<AsyncIterator<MessageSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = MessageSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = MessagePreviousValuesSubscription>() => T;
}
export interface MessagePreviousValues {
    id: ID_Output;
    body: String;
    parentId: ID_Output;
    url: String;
    filetype: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface MessagePreviousValuesPromise extends Promise<MessagePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    body: () => Promise<String>;
    parentId: () => Promise<ID_Output>;
    url: () => Promise<String>;
    filetype: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface MessagePreviousValuesSubscription extends Promise<AsyncIterator<MessagePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    body: () => Promise<AsyncIterator<String>>;
    parentId: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    filetype: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface NotificationSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface NotificationSubscriptionPayloadPromise extends Promise<NotificationSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = NotificationPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = NotificationPreviousValuesPromise>() => T;
}
export interface NotificationSubscriptionPayloadSubscription extends Promise<AsyncIterator<NotificationSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = NotificationSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = NotificationPreviousValuesSubscription>() => T;
}
export interface NotificationPreviousValues {
    id: ID_Output;
    message: String;
}
export interface NotificationPreviousValuesPromise extends Promise<NotificationPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    message: () => Promise<String>;
}
export interface NotificationPreviousValuesSubscription extends Promise<AsyncIterator<NotificationPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    message: () => Promise<AsyncIterator<String>>;
}
export interface RatingSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface RatingSubscriptionPayloadPromise extends Promise<RatingSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = RatingPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = RatingPreviousValuesPromise>() => T;
}
export interface RatingSubscriptionPayloadSubscription extends Promise<AsyncIterator<RatingSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = RatingSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = RatingPreviousValuesSubscription>() => T;
}
export interface RatingPreviousValues {
    id: ID_Output;
    vote: Int;
}
export interface RatingPreviousValuesPromise extends Promise<RatingPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    vote: () => Promise<Int>;
}
export interface RatingPreviousValuesSubscription extends Promise<AsyncIterator<RatingPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    vote: () => Promise<AsyncIterator<Int>>;
}
export interface TeamSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface TeamSubscriptionPayloadPromise extends Promise<TeamSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = TeamPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = TeamPreviousValuesPromise>() => T;
}
export interface TeamSubscriptionPayloadSubscription extends Promise<AsyncIterator<TeamSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = TeamSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = TeamPreviousValuesSubscription>() => T;
}
export interface TeamPreviousValues {
    id: ID_Output;
    name: String;
    slug: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    confirmed: Boolean;
    online: Boolean;
}
export interface TeamPreviousValuesPromise extends Promise<TeamPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    slug: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    confirmed: () => Promise<Boolean>;
    online: () => Promise<Boolean>;
}
export interface TeamPreviousValuesSubscription extends Promise<AsyncIterator<TeamPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    slug: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    confirmed: () => Promise<AsyncIterator<Boolean>>;
    online: () => Promise<AsyncIterator<Boolean>>;
}
export interface UserSubscriptionPayload {
    mutation: MutationType;
    updatedFields?: String[];
}
export interface UserSubscriptionPayloadPromise extends Promise<UserSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = UserPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = UserPreviousValuesPromise>() => T;
}
export interface UserSubscriptionPayloadSubscription extends Promise<AsyncIterator<UserSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = UserSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = UserPreviousValuesSubscription>() => T;
}
export interface UserPreviousValues {
    id: ID_Output;
    email: String;
    set_private: Boolean;
    username: String;
    password: String;
    confirmed: Boolean;
    online: Boolean;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    role: UserRole;
}
export interface UserPreviousValuesPromise extends Promise<UserPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    email: () => Promise<String>;
    set_private: () => Promise<Boolean>;
    username: () => Promise<String>;
    password: () => Promise<String>;
    confirmed: () => Promise<Boolean>;
    online: () => Promise<Boolean>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    role: () => Promise<UserRole>;
}
export interface UserPreviousValuesSubscription extends Promise<AsyncIterator<UserPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    email: () => Promise<AsyncIterator<String>>;
    set_private: () => Promise<AsyncIterator<Boolean>>;
    username: () => Promise<AsyncIterator<String>>;
    password: () => Promise<AsyncIterator<String>>;
    confirmed: () => Promise<AsyncIterator<Boolean>>;
    online: () => Promise<AsyncIterator<Boolean>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    role: () => Promise<AsyncIterator<UserRole>>;
}
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type String = string;
export declare type Boolean = boolean;
export declare type DateTimeInput = Date | string;
export declare type DateTimeOutput = string;
export declare type Int = number;
export declare type Long = string;
export declare const models: {
    name: string;
    embedded: boolean;
}[];
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
export {};
