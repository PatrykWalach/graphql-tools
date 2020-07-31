(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(189)),l={id:"resolvers",title:"Resolvers",description:"Writing resolvers with graphql-tools"},i={unversionedId:"resolvers",id:"resolvers",isDocsHomePage:!1,title:"Resolvers",description:"Writing resolvers with graphql-tools",source:"@site/docs/resolvers.md",permalink:"/docs/resolvers",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/resolvers.md",sidebar:"someSidebar",previous:{title:"Generating an executable schema",permalink:"/docs/generate-schema"},next:{title:"Resolvers composition",permalink:"/docs/resolvers-composition"}},s=[{value:"Resolver map",id:"resolver-map",children:[]},{value:"Resolver function signature",id:"resolver-function-signature",children:[{value:"Resolver result format",id:"resolver-result-format",children:[]},{value:"Resolver obj argument",id:"resolver-obj-argument",children:[]},{value:"Default resolver",id:"default-resolver",children:[]},{value:"Class method resolvers",id:"class-method-resolvers",children:[]}]},{value:"Unions and interfaces",id:"unions-and-interfaces",children:[]},{value:"API",id:"api",children:[{value:"addResolversToSchema({ schema, resolvers, resolverValidationOptions?, inheritResolversFromInterfaces? })",id:"addresolverstoschema-schema-resolvers-resolvervalidationoptions-inheritresolversfrominterfaces-",children:[]},{value:"addSchemaLevelResolver(schema, rootResolveFunction)",id:"addschemalevelresolverschema-rootresolvefunction",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tools"),", you define your field resolvers separately from the schema. Since the schema already describes all of the fields, arguments, and result types, the only thing left is a collection of functions that are called to actually execute these fields."),Object(o.b)("p",null,"Keep in mind that GraphQL resolvers can return ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"promises"),". In fact, most resolvers that do real work - for example fetching data from a database or a REST API - will return a promise. If you\u2019re not familiar with promises, here\u2019s ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://scotch.io/tutorials/javascript-promises-for-dummies"}),"a brief overview"),"."),Object(o.b)("h2",{id:"resolver-map"},"Resolver map"),Object(o.b)("p",null,'In order to respond to queries, a schema needs to have resolvers for all fields. Resolvers are per field functions that are given a parent object, arguments, and the execution context, and are responsible for returning a result for that field. Resolvers cannot be included in the GraphQL schema language, so they must be added separately. The collection of resolvers is called the "resolver map".'),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"resolverMap")," object (",Object(o.b)("inlineCode",{parentName:"p"},"IResolvers"),") should have a map of resolvers for each relevant GraphQL Object Type. The following is an example of a valid ",Object(o.b)("inlineCode",{parentName:"p"},"resolverMap")," object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const resolverMap = {\n  Query: {\n    author(obj, args, context, info) {\n      return find(authors, { id: args.id });\n    },\n  },\n  Author: {\n    posts(author) {\n      return filter(posts, { authorId: author.id });\n    },\n  },\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: If you are using mocking, the ",Object(o.b)("inlineCode",{parentName:"p"},"preserveResolvers")," argument of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mocking/#addmockstoschema"}),Object(o.b)("inlineCode",{parentName:"a"},"addMocksToSchema"))," must be set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if you don't want your resolvers to be overwritten by mock resolvers.")),Object(o.b)("p",null,"Note that you don't have to put all of your resolvers in one object. Refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/merge-resolvers/"}),'"merging resolvers"')," section to learn how to combine multiple resolver maps into one."),Object(o.b)("h2",{id:"resolver-function-signature"},"Resolver function signature"),Object(o.b)("p",null,"Every resolver in a GraphQL.js schema accepts four positional arguments:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"fieldName(obj, args, context, info) { result }\n")),Object(o.b)("p",null,"These arguments have the following meanings and conventional names:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"obj"),": The object that contains the result returned from the resolver on the parent field, or, in the case of a top-level ",Object(o.b)("inlineCode",{parentName:"li"},"Query")," field, the ",Object(o.b)("inlineCode",{parentName:"li"},"rootValue")," passed from the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/graphql/express-graphql#options/"}),"server configuration"),". This argument enables the nested nature of GraphQL queries."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"args"),": An object with the arguments passed into the field in the query. For example, if the field was called with ",Object(o.b)("inlineCode",{parentName:"li"},'author(name: "Ada")'),", the ",Object(o.b)("inlineCode",{parentName:"li"},"args")," object would be: ",Object(o.b)("inlineCode",{parentName:"li"},'{ "name": "Ada" }'),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"context"),": This is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query. If you're using ",Object(o.b)("inlineCode",{parentName:"li"},"express-graphql"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/graphql/express-graphql#options"}),"read about how to set the context in the setup documentation"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"info"),": This argument should only be used in advanced cases, but it contains information about the execution state of the query, including the field name, path to the field from the root, and more. It's only documented in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/graphql/graphql-js/blob/c82ff68f52722c20f10da69c9e50a030a1f218ae/src/type/definition.js#L489-L500"}),"GraphQL.js source code"),".")),Object(o.b)("h3",{id:"resolver-result-format"},"Resolver result format"),Object(o.b)("p",null,"Resolvers in GraphQL can return different kinds of results which are treated differently:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"null")," or ",Object(o.b)("inlineCode",{parentName:"li"},"undefined")," - this indicates the object could not be found. If your schema says that field is ",Object(o.b)("em",{parentName:"li"},"nullable"),", then the result will have a ",Object(o.b)("inlineCode",{parentName:"li"},"null")," value at that position. If the field is ",Object(o.b)("inlineCode",{parentName:"li"},"non-null"),', the result will "bubble up" to the nearest nullable field and that result will be set to ',Object(o.b)("inlineCode",{parentName:"li"},"null"),". This is to ensure that the API consumer never gets a ",Object(o.b)("inlineCode",{parentName:"li"},"null")," value when they were expecting a result."),Object(o.b)("li",{parentName:"ol"},"An array - this is only valid if the schema indicates that the result of a field should be a list. The sub-selection of the query will run once for every item in this array."),Object(o.b)("li",{parentName:"ol"},"A promise - resolvers often do asynchronous actions like fetching from a database or backend API, so they can return promises. This can be combined with arrays, so a resolver can return:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"A promise that resolves an array"),Object(o.b)("li",{parentName:"ol"},"An array of promises"))),Object(o.b)("li",{parentName:"ol"},"A scalar or object value - a resolver can also return any other kind of value, which doesn't have any special meaning but is simply passed down into any nested resolvers, as described in the next section.")),Object(o.b)("h3",{id:"resolver-obj-argument"},"Resolver obj argument"),Object(o.b)("p",null,"The first argument to every resolver, ",Object(o.b)("inlineCode",{parentName:"p"},"obj"),", can be a bit confusing at first, but it makes sense when you consider what a GraphQL query looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  getAuthor(id: 5){\n    name\n    posts {\n      title\n      author {\n        name # this will be the same as the name above\n      }\n    }\n  }\n}\n")),Object(o.b)("p",null,"You can think of every GraphQL query as a tree of function calls, as explained in detail in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.apollographql.com/graphql-explained-5844742f195e#.fq5jjdw7t"}),"GraphQL explained blog post"),". So the ",Object(o.b)("inlineCode",{parentName:"p"},"obj")," contains the result of parent resolver, in this case:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"obj")," in ",Object(o.b)("inlineCode",{parentName:"li"},"Query.getAuthor")," will be whatever the server configuration passed for ",Object(o.b)("inlineCode",{parentName:"li"},"rootValue"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"obj")," in ",Object(o.b)("inlineCode",{parentName:"li"},"Author.name")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Author.posts")," will be the result from ",Object(o.b)("inlineCode",{parentName:"li"},"getAuthor"),", likely an Author object from the backend."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"obj")," in ",Object(o.b)("inlineCode",{parentName:"li"},"Post.title")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Post.author")," will be one item from the ",Object(o.b)("inlineCode",{parentName:"li"},"posts")," result array."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"obj")," in ",Object(o.b)("inlineCode",{parentName:"li"},"Author.name")," is the result from the above ",Object(o.b)("inlineCode",{parentName:"li"},"Post.author")," call.")),Object(o.b)("p",null,"Basically, it's just every resolver function being called in a nested way according to the layout of the query."),Object(o.b)("h3",{id:"default-resolver"},"Default resolver"),Object(o.b)("p",null,"You don't need to specify resolvers for ",Object(o.b)("em",{parentName:"p"},"every")," type in your schema. If you don't specify a resolver, GraphQL.js falls back to a default one, which does the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Returns a property from ",Object(o.b)("inlineCode",{parentName:"li"},"obj")," with the relevant field name, or"),Object(o.b)("li",{parentName:"ol"},"Calls a function on ",Object(o.b)("inlineCode",{parentName:"li"},"obj")," with the relevant field name and passes the query arguments into that function")),Object(o.b)("p",null,"So, in the example query above, the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"title")," fields wouldn't need a resolver if the Post and Author objects retrieved from the backend already had those fields."),Object(o.b)("h3",{id:"class-method-resolvers"},"Class method resolvers"),Object(o.b)("p",null,"When returning an object or a class instance from a parent resolver, we are implicitly relying the GraphQL.js default resolver logic described above to execute the child resolvers. As such, class method resolvers have the following interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Type {\n    fieldName(args, context, info) { result }\n}\n")),Object(o.b)("h2",{id:"unions-and-interfaces"},"Unions and interfaces"),Object(o.b)("p",null,"Unions and interfaces are great when you have fields that are in common between two types."),Object(o.b)("p",null,"When you have a field in your schema that returns a union or interface type, you will need to specify an extra ",Object(o.b)("inlineCode",{parentName:"p"},"__resolveType")," field in your resolver map, which tells the GraphQL executor which type the result is, out of the available options."),Object(o.b)("p",null,"For example, if you have a ",Object(o.b)("inlineCode",{parentName:"p"},"Vehicle")," interface type with members ",Object(o.b)("inlineCode",{parentName:"p"},"Airplane")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Car"),":"),Object(o.b)("p",null,"You could specify the schema like so"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"interface Vehicle {\n  maxSpeed: Int\n}\n\ntype Airplane implements Vehicle {\n  maxSpeed: Int\n  wingspan: Int\n}\n\ntype Car implements Vehicle {\n  maxSpeed: Int\n  licensePlate: String\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const resolverMap = {\n  Vehicle: {\n    __resolveType(obj, context, info){\n      if(obj.wingspan){\n        return 'Airplane';\n      }\n\n      if(obj.licensePlate){\n        return 'Car';\n      }\n\n      return null;\n    },\n  },\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Returning the type name as a string from ",Object(o.b)("inlineCode",{parentName:"p"},"__resolveType")," is only supported starting with GraphQL.js 0.7.2. In previous versions, you had to get a reference using ",Object(o.b)("inlineCode",{parentName:"p"},"info.schema.getType('Car')"),".")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"In addition to using a resolver map with ",Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema"),", you can use it with any GraphQL.js schema by importing the following function from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tools"),":"),Object(o.b)("h3",{id:"addresolverstoschema-schema-resolvers-resolvervalidationoptions-inheritresolversfrominterfaces-"},"addResolversToSchema({ schema, resolvers, resolverValidationOptions?, inheritResolversFromInterfaces? })"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"addResolversToSchema")," takes an options object of ",Object(o.b)("inlineCode",{parentName:"p"},"IAddResolveFunctionsToSchemaOptions")," and returns a new schema with resolvers attached to the relevant types."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { addResolversToSchema } from \'@graphql-tools/schema\';\n\nconst resolvers = {\n  RootQuery: {\n    author(obj, { name }, context){\n      console.log("RootQuery called with context " +\n        context + " to find " + name);\n      return Author.find({ name });\n    },\n  },\n};\n\nconst schemaWithResolvers = addResolversToSchema({ schema, resolvers });\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"IAddResolveFunctionsToSchemaOptions")," object consists of several of the underlying properties used to configure ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/generate-schema/#makeexecutableschemaoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"makeExecutableSchema")," and described there"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export interface IAddResolveFunctionsToSchemaOptions {\n  schema: GraphQLSchema;\n  resolvers: IResolvers;\n  resolverValidationOptions?: IResolverValidationOptions;\n  inheritResolversFromInterfaces?: boolean;\n  updateResolversInPlace?: boolean;\n}\n")),Object(o.b)("p",null,"Additonally, the ",Object(o.b)("inlineCode",{parentName:"p"},"updateResolversInPlace")," property, when set to true, changes ",Object(o.b)("inlineCode",{parentName:"p"},"addResolversToSchema")," behavior to modify the original schema in place without recreating it. By default, a new schema will be returned without modification of the original schema."),Object(o.b)("h3",{id:"addschemalevelresolverschema-rootresolvefunction"},"addSchemaLevelResolver(schema, rootResolveFunction)"),Object(o.b)("p",null,"Some operations, such as authentication, need to be done only once per query. Logically, these operations belong in a schema level resolver field resolver, but unfortunately GraphQL-JS does not let you define one. ",Object(o.b)("inlineCode",{parentName:"p"},"addSchemaLevelResolver")," solves this by returning a new schema with the addition of a root resolve function."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can check ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolvers-composition"}),"Resolvers Composition")," to compose resolvers with an authentication layer, and some checking operations etc.")))}b.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(h,i({ref:t},c,{components:n})):r.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);