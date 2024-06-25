"use strict";(self.webpackChunkmongodb_sprout_workshop=self.webpackChunkmongodb_sprout_workshop||[]).push([[398],{4053:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453);const t={},s="MongoTemplate and MongoRepository",a={id:"spring-data-mongodb/MongoTemplate-and-MongoRepository",title:"MongoTemplate and MongoRepository",description:"MongoTemplate and MongoRepository are both part of Spring Data MongoDB, but they serve different",source:"@site/docs/04-spring-data-mongodb/2-MongoTemplate-and-MongoRepository.mdx",sourceDirName:"04-spring-data-mongodb",slug:"/spring-data-mongodb/MongoTemplate-and-MongoRepository",permalink:"/mongodb-sprout-workshop/docs/spring-data-mongodb/MongoTemplate-and-MongoRepository",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mongodb-sprout-workshop/blob/main/docs/04-spring-data-mongodb/2-MongoTemplate-and-MongoRepository.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting to your MongoDB Database",permalink:"/mongodb-sprout-workshop/docs/spring-data-mongodb/getting-started"},next:{title:"Create",permalink:"/mongodb-sprout-workshop/docs/spring-data-mongodb/Create"}},d={},l=[{value:"MongoTemplate",id:"mongotemplate",level:2},{value:"Key Features:",id:"key-features",level:3},{value:"MongoRepository",id:"mongorepository",level:2},{value:"Key Features:",id:"key-features-1",level:3},{value:"When to Use What?",id:"when-to-use-what",level:2},{value:"Use MongoTemplate:",id:"use-mongotemplate",level:3},{value:"Use MongoRepository:",id:"use-mongorepository",level:3}];function p(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"mongotemplate-and-mongorepository",children:"MongoTemplate and MongoRepository"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"MongoTemplate"})," and ",(0,r.jsx)(o.code,{children:"MongoRepository"})," are both part of Spring Data MongoDB, but they serve different\npurposes and offer different levels of abstraction for interacting with MongoDB. Here\u2019s a detailed\ncomparison to help you understand when to use each:"]}),"\n",(0,r.jsx)(o.h2,{id:"mongotemplate",children:"MongoTemplate"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"MongoTemplate"})," provides a low-level, flexible, and comprehensive way to interact with MongoDB.\nYou can use it for any kind of MongoDB operations, including custom queries, updates, and aggregations."]}),"\n",(0,r.jsx)(o.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Flexibility:"})," Allows for complex queries and custom operations."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Aggregation Support:"})," Provides comprehensive support for MongoDB aggregation framework."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"CRUD Operations:"})," Supports basic create, read, update, and delete operations."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Bulk Operations:"})," Allows for performing bulk operations."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Transactions:"})," Supports MongoDB transactions where applicable."]}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:'import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.mongodb.core.MongoTemplate;\nimport org.springframework.data.mongodb.core.query.Criteria;\nimport org.springframework.data.mongodb.core.query.Query;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class MyService {\n\n    @Autowired\n    private MongoTemplate mongoTemplate;\n\n    public void saveMyObject(MyObject obj) {\n        mongoTemplate.save(obj);\n    }\n\n    public MyObject findMyObjectById(String id) {\n        return mongoTemplate.findById(id, MyObject.class);\n    }\n\n    public List<MyObject> findMyObjectsByField(String fieldValue) {\n        Query query = new Query(Criteria.where("myField").is(fieldValue));\n        return mongoTemplate.find(query, MyObject.class);\n    }\n}\n'})}),"\n",(0,r.jsx)(o.h2,{id:"mongorepository",children:"MongoRepository"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"MongoRepository"})," is part of Spring Data\u2019s repository abstraction, which provides a higher-level,\neasier-to-use approach compared to ",(0,r.jsx)(o.code,{children:"MongoTemplate"}),". ",(0,r.jsx)(o.code,{children:"MongoRepository"})," uses convention over configuration,\nmeaning it provides basic CRUD operations out of the box and derives query methods from method names."]}),"\n",(0,r.jsx)(o.h3,{id:"key-features-1",children:"Key Features:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Simplicity:"})," Provides a simple and easy-to-use interface for basic CRUD operations."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Query Derivation:"})," Automatically derives query methods from method names."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Pagination and Sorting:"})," Built-in support for pagination and sorting."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Custom Queries:"})," Supports custom query methods using the ",(0,r.jsx)(o.code,{children:"@Query"})," annotation."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Integration with Spring Data:"})," Seamless integration with other Spring Data modules."]}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"import org.springframework.data.mongodb.repository.MongoRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface MyRepository extends MongoRepository<MyObject, String> {\n    // Derived query method\n    List<MyObject> findByMyField(String fieldValue);\n\n    // Custom query method\n    @Query(\"{ 'myField' : ?0 }\")\n    List<MyObject> findCustomByMyField(String fieldValue);\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Service Layer Using ",(0,r.jsx)(o.code,{children:"MongoRepository"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class MyService {\n\n    @Autowired\n    private MyRepository myRepository;\n\n    public void saveMyObject(MyObject obj) {\n        myRepository.save(obj);\n    }\n\n    public MyObject findMyObjectById(String id) {\n        return myRepository.findById(id).orElse(null);\n    }\n\n    public List<MyObject> findMyObjectsByField(String fieldValue) {\n        return myRepository.findByMyField(fieldValue);\n    }\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"when-to-use-what",children:"When to Use What?"}),"\n",(0,r.jsx)(o.h3,{id:"use-mongotemplate",children:"Use MongoTemplate:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"When you need fine-grained control over MongoDB operations."}),"\n",(0,r.jsx)(o.li,{children:"When you need to perform complex queries or aggregations."}),"\n",(0,r.jsx)(o.li,{children:"When you need to perform custom updates or bulk operations."}),"\n",(0,r.jsx)(o.li,{children:"When you need more flexibility in handling MongoDB transactions."}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"use-mongorepository",children:"Use MongoRepository:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"When you prefer simplicity and convention over configuration."}),"\n",(0,r.jsx)(o.li,{children:"When you need basic CRUD operations with minimal boilerplate code."}),"\n",(0,r.jsx)(o.li,{children:"When you want to leverage Spring Data\u2019s repository abstraction for automatic query derivation."}),"\n",(0,r.jsx)(o.li,{children:"When you need built-in support for pagination and sorting."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["In summary, ",(0,r.jsx)(o.code,{children:"MongoRepository"})," is suitable for simple CRUD operations and straightforward query derivation,\nmaking it easy to get started and maintain. On the other hand, ",(0,r.jsx)(o.code,{children:"MongoTemplate"})," provides the flexibility and\npower needed for more complex operations, custom queries, and advanced use cases."]})]})}function c(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>a});var r=n(6540);const i={},t=r.createContext(i);function s(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);