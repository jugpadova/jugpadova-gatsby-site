"use strict";(self.webpackChunkjugpadova_gatsby_site=self.webpackChunkjugpadova_gatsby_site||[]).push([[813],{1519:function(e,t,n){var a=n(7294),l=n(1597),r=n(1074).default.nav.withConfig({displayName:"category-menu__Wrapper",componentId:"sc-1cwudr6-0"})(["& > ol{list-style-type:none;}& > ol > li{margin-bottom:0.5em;white-space:nowrap;}"]);t.Z=function(){var e=(0,l.useStaticQuery)("292711624").allMarkdownRemark.group;return a.createElement(r,null,a.createElement("h3",null,"Categorie"),a.createElement("ol",null,e.map((function(e){return a.createElement("li",{key:e.fieldValue},a.createElement(l.Link,{to:"/articles/category/"+e.fieldValue},e.nodes[0].frontmatter.categories.find((function(t){return t.permalink===e.fieldValue})).name)," ","(",e.totalCount,")")}))))}},8127:function(e,t,n){var a=n(7294),l=n(1597),r=n(4116),i=n(1074),o=n(788),m=n(9707),c=i.default.span.withConfig({displayName:"post-item__AuthorWrapper",componentId:"sc-1l8nmud-0"})(["display:flex;align-items:center;font-size:0.8em;& > *{margin-right:0.5em;}"]),u=i.default.nav.withConfig({displayName:"post-item__LinksWrapper",componentId:"sc-1l8nmud-1"})(["display:flex;justify-content:flex-end;align-items:center;margin-top:0.5rem;& > *{margin-left:0.5em;}"]);t.Z=function(e){var t=e.slug,n=e.title,i=e.author,s=e.date,p=e.content,d=e.categories,f=e.tags;return a.createElement("li",{key:t},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(l.Link,{to:t,itemProp:"url"},a.createElement("span",{itemProp:"headline"},n))),a.createElement(c,null,a.createElement(r.Z,i),a.createElement("span",null,"|"),a.createElement("span",null,s))),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:p},itemProp:"description"})),a.createElement(u,null,a.createElement(o.Z,{categories:d}),a.createElement("div",null,"|"),a.createElement(m.Z,{tags:f}))))}},8664:function(e,t,n){var a=n(7294),l=n(1597),r=n(1074).default.nav.withConfig({displayName:"tag-cloud__Wrapper",componentId:"sc-3nj08u-0"})([""]);t.Z=function(){var e=(0,l.useStaticQuery)("2243694114").allMarkdownRemark.group.map((function(e){return{name:e.fieldValue,display:e.nodes[0].frontmatter.tags.find((function(t){return t.name===e.fieldValue})).display,totalCount:e.totalCount}})).sort((function(e,t){return t.totalCount-e.totalCount})).slice(0,40).sort((function(e,t){return e.display.toLowerCase().localeCompare(t.display.toLowerCase())})),t=e.map((function(e){return e.totalCount})).reduce((function(e,t){var n=e[0],a=e[1];return[Math.min(n,t),Math.max(a,t)]}),[1/0,-1/0]),n=t[0],i=t[1];return a.createElement(r,null,a.createElement("h3",null,"Tag"),a.createElement("div",null,e.map((function(e){return a.createElement("span",{key:e.name,style:{fontSize:66+134*(e.totalCount-n)/(i-n)+"%"}},a.createElement(l.Link,{to:"/articles/tag/"+e.name},e.display),a.createElement("span",null," "))}))))}},5639:function(e,t,n){n.r(t);var a=n(7294),l=n(1499),r=n(262),i=n(8127),o=n(1074),m=n(1519),c=n(8664),u=o.default.div.withConfig({displayName:"post-list__ContentWrapper",componentId:"sc-1kwih6s-0"})(["display:flex;align-items:stretch;"]),s=o.default.div.withConfig({displayName:"post-list__Sidebar",componentId:"sc-1kwih6s-1"})(["font-size:0.8rem;padding-left:1rem;width:25%;& h3{color:#d75a20;margin-top:1rem;margin-bottom:0px;font-size:1.2em;}& ol{margin-block-start:0.5em;margin-block-end:0px;}"]);t.default=function(e){var t,n=e.pageContext,o=e.data,p=e.location,d=(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=o.allMarkdownRemark.nodes;return a.createElement(l.Z,{location:p,title:d},a.createElement(r.Z,{title:n.title}),a.createElement(u,null,a.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){var t=e.frontmatter.title||e.fields.slug,n=e.frontmatter.description||e.excerpt;return a.createElement(i.Z,{key:e.fields.slug,slug:e.fields.slug,title:t,author:e.frontmatter.author,date:e.frontmatter.date,content:n,categories:e.frontmatter.categories,tags:e.frontmatter.tags})}))),a.createElement(s,null,a.createElement(m.Z,null),a.createElement(c.Z,null))))}}}]);
//# sourceMappingURL=component---src-templates-post-list-js-858f6dbe47b1142ba80a.js.map