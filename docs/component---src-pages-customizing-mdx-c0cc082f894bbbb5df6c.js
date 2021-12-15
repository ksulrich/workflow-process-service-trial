"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[300],{1445:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return p}});var a=n(3366),o=(n(7294),n(4983)),r=n(4295),l=["components"],i={},s={_frontmatter:i},m=r.Z;function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,"Customizing the hostname and port"),(0,o.kt)("p",null,"If you want to access Workplace or Studio from a web browser that’s not running on the Docker host, edit the  ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HOSTNAME")," environment variable to the actual IP or hostname of your Docker host. "),(0,o.kt)("p",null,"You can also customize the external port used to expose the Workflow Process Service APIs. If you want to change the external port, you can’t use localhost as the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HOSTNAME"),". To change the external port, take both of these two actions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," environment variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to the port number of your choice.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the host port declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"services.pc.ports")," section to make it match the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," environment variable value. "),(0,o.kt)("p",{parentName:"li"},"For example, to set the host port to 7443:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' \n[...]\n  pc:\n    [...]\n    ports:\n      - "7443:9443"\n    [...]\n    environment:\n    [...]\n      - EXTERNAL_HTTPS_PORT=7443\n[...]\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," is the first number under ",(0,o.kt)("inlineCode",{parentName:"p"},"ports")," in the docker-compose.yml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ports:\n      - "7443:9443"\n')),(0,o.kt)("p",null,"After updating ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HOSTNAME")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, if you already had an existing environment, follow these steps for the change to take effect:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the  ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose down")," command to stop and delete the environment."),(0,o.kt)("li",{parentName:"ol"},"If you are using persistent data, delete the ",(0,o.kt)("inlineCode",{parentName:"li"},"tls")," folder in your workspace and ",(0,o.kt)("inlineCode",{parentName:"li"},"tls")," folder under data/generated/ in your workspace."),(0,o.kt)("li",{parentName:"ol"},"Run the  ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up")," command to start the environment. ")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: The container will use the same DNS server as the host computer, but the hostname and IP mappings in the /etc/hosts file won’t be passed to the container automatically. If the hostname of your host machine is not added to the DNS server, you can configure the container to use the hostname and IP mappings by adding information similar to the following information in the docker-compose.yml file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#############################################################################################################\n# The "pc" container is running the Workflow Process Service (authoring trial) image\n#############################################################################################################\npc:\n  ...\n\n  extra_hosts:\n    - <hostname>:<host_ipaddress>\n')),(0,o.kt)("h2",null,"Customizing the admin password"),(0,o.kt)("p",null,"If you don’t want to use the default admin password for the Docker image, add the following line under the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," section in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose yml")," file before you start the environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    - ADMIN_PASSWORD=mypassword\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"mypassword")," with your new password. "),(0,o.kt)("p",null," ",(0,o.kt)("em",{parentName:"p"},"Note:  You can’t change the admin username.")," "),(0,o.kt)("h4",null,"Updating the admin password after starting"),(0,o.kt)("p",null,"To update the admin password, you must restart the container because the Liberty server environment is not refreshed dynamically."),(0,o.kt)("p",null,"If you have an existing environment and you updated the ",(0,o.kt)("inlineCode",{parentName:"p"},"ADMIN_PASSWORD")," variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, complete the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose down")," command to stop and delete the environment."),(0,o.kt)("li",{parentName:"ol"},"If you enabled persistence, find the ",(0,o.kt)("inlineCode",{parentName:"li"},"server.env")," file under the env/ folder and delete the whole line that starts with ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_PASSWORD"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the  ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up")," command to start the environment.")),(0,o.kt)("h2",null,"Persisting the data"),(0,o.kt)("p",null,"If you want to save the data and the process when you delete the container instance, and reuse it when you run another container instance, you can persist the data. Copy the contents of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/icp4a/workflow-process-service-trial/blob/main/persistence/basic/docker-compose.yml"},"docker-compose.yml")," file with persistence to your local computer."),(0,o.kt)("h4",null,"For Linux only"),(0,o.kt)("p",null,"If you’re running Linux and using Docker as your container engine, make sure the folder has read-write permission from the container. The container user ID is 50001 and it belongs to the root group, so to change the folder’s permissions, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chown 50001:0 <current sample folder>\n")),(0,o.kt)("p",null," ",(0,o.kt)("em",{parentName:"p"},"Note:  Don’t run this command on Mac. It’s only needed for Linux.")),(0,o.kt)("h4",null,"For all platforms"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <sample folder you created>\ndocker-compose up\n")),(0,o.kt)("h4",null,"Check the volumes"),(0,o.kt)("p",null,"When the Workflow Process Service Trial environment runs, data is persisted into Docker volumes that are automatically created by Docker Compose:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"pc_data")," volume persists the data and logs of the Liberty server running Workflow Process Service"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"postgres_data")," volume persists the PostgreSQL data")),(0,o.kt)("p",null,"There are different data volumes based on the Docker Compose setting. To list the volumes, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume ls\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Hint")),(0,o.kt)("em",{parentName:"p"},": You can retrieve the actual location of the volume on your Docker host file system by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume inspect <folder_name>_pc_data\n")),(0,o.kt)("h4",null,"Accessing the container runtime data and configuration"),(0,o.kt)("p",null,"When persistence is enabled, the container runtime data and configuration are written to the host computer, in the folder where Docker Compose was started. This location is called ",(0,o.kt)("inlineCode",{parentName:"p"},"<local workspace>")," in the following example."),(0,o.kt)("p",null,"The structure looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<local workspace>\n     |--cert-trusted\n     |--tls\n         |--key.p12\n         |--trusts.p12\n     |--config\n         |--liberty-custom.xml\n         |--workflow-custom.xml\n         |--custom-registry.xml\n     |--env\n         |--server.env\n     |--data\n          |--messaging\n          |--index\n     |--output\n          |--logs    \n          |--dump\n")),(0,o.kt)("h2",null,"Customizing the user registry"),(0,o.kt)("p",null,"Workflow Process Service Authoring has predefined users and groups. You can update the users and groups if you have persistence enabled. The custom registry is under ",(0,o.kt)("inlineCode",{parentName:"p"},"<local workspace>"),":\n",(0,o.kt)("inlineCode",{parentName:"p"},"<local workspace>/config/custom-registry.xml")),(0,o.kt)("p",null,"Usernames and groups are listed in this file. If you update this file and don’t restart the container, the changes are applied to the server runtime in about one minute."),(0,o.kt)("p",null,"Make sure to use all-lowercase names for groups. Groups available in the registry are not immediately replicated to the product database. In order to use newly created groups, you can restart the environment or sign in as a user who is member of that group."),(0,o.kt)("h2",null,"Enabling full text search and dashboard support"),(0,o.kt)("p",null,"To access full text search, advanced filtering functions, and the Teams dashboard in Workplace, you must activate the IBM Process Federation Server (PFS) runtime, which requires Elasticsearch. The ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file will deploy an additional Docker container running Elasticsearch."),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file here: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"No persistence"),(0,o.kt)("th",{parentName:"tr",align:null},"Persistence enabled"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"PFS enabled")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/icp4a/workflow-process-service-trial/blob/main/PFS/docker-compose.yml"},"PFS/docker-compose.yml")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/icp4a/workflow-process-service-trial/blob/main/persistence/PFS/docker-compose.yml"},"persistence/PFS/docker-compose.yml"))))),(0,o.kt)("p",null,"Copy the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"PFS/")," folder or ",(0,o.kt)("inlineCode",{parentName:"p"},"persistence/PFS")," folder into a new file named ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in the folder that you created."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Workflow Process Service Trial (",(0,o.kt)("strong",{parentName:"li"},"with optional Process Federation Server enabled"),"):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <your_pfs_yml_folder>/\ndocker-compose up\n")),(0,o.kt)("p",null,"If you already have an existing environment and you want to enable full text search and dashboard support:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update your existing ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file, and add the ",(0,o.kt)("inlineCode",{parentName:"li"},"elasticsearch")," service from the ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file above to your existing file."),(0,o.kt)("li",{parentName:"ol"},"Set the following environment variables in the ",(0,o.kt)("inlineCode",{parentName:"li"},"pc")," service of your ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      - PFS_ENABLE=true\n      - PFS_REMOTEELASTICSEARCH_ENDPOINTS=http://elasticsearch:9200\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"If persistence is enabled, declare the ",(0,o.kt)("inlineCode",{parentName:"li"},"elasticsearch_data")," volume in the ",(0,o.kt)("inlineCode",{parentName:"li"},"volumes")," section.")),(0,o.kt)("p",null,"When Process Federation Server is enabled and persistence is also enabled, the Elasticsearch data will be persisted in a volume named ",(0,o.kt)("inlineCode",{parentName:"p"},"elasticsearch_data"),"."),(0,o.kt)("p",null," ",(0,o.kt)("em",{parentName:"p"},"Note: Running Elasticsearch in addition to the Workflow Process Service container might cause resource issues. See ",(0,o.kt)("a",{parentName:"em",href:"troubleshooting#container-exits-with-code-137-or-outofmemoryerror"},"Container exits with code 137"),".")),(0,o.kt)("h2",null,"Cleaning up the environment"),(0,o.kt)("p",null,"To clean up the environment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose down")," command to stop and delete the environment."),(0,o.kt)("li",{parentName:"ol"},"If you persisted the data, delete all the volumes created by Workflow Process Service Trial. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"docker volume ls")," to check the status of the volumes."),(0,o.kt)("li",{parentName:"ol"},"To delete the volumes, run: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume prune\n")),(0,o.kt)("p",null,"Alternatively, you can delete them one at a time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When Process Federation Server is not enabled:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume rm <basic_folder_name>_pc_data\ndocker volume rm <basic_folder_name>_postgres_data\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When Process Federation Server is enabled:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume rm <pfs_folder_name>_pc_data\ndocker volume rm <pfs_folder_name>_postgres_data\ndocker volume rm <pfs_folder_name>_elasticsearch_data\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"If you persisted the data, delete all the folders under your local workspace: ",(0,o.kt)("inlineCode",{parentName:"li"},"config"),",",(0,o.kt)("inlineCode",{parentName:"li"},"output"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"env"),",",(0,o.kt)("inlineCode",{parentName:"li"},"tls"),",",(0,o.kt)("inlineCode",{parentName:"li"},"cert-trusted")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"data"),".")),(0,o.kt)("h2",null,"Other customization"),(0,o.kt)("p",null,"For other customization, such as integrating with an external service or overriding the Liberty configuration, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/SSYHZ8_21.0.x/com.ibm.dba.install/op_topics/tsk_inst_wps_cust.html"},"Customizing Workflow Process Service"),"."))}p.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7294),o=n(8650),r=n.n(o),l=n(5444),i=n(5426),s=n(6100),m=n(5900),p=n.n(m),c=function(e){var t,n=e.title,o=e.theme,r=e.tabs,l=void 0===r?[]:r;return a.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},d=function(e){var t=e.relativePagePath,n=e.repository,o=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||o,i=r.baseUrl,s=r.subDirectory,m=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=n(4275),h=n(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),s=n===i,m=new RegExp(i+"/?(#.*)?$"),c=o.replace(m,n);return a.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},a.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component),N=k,f=n(2881),g=n(6958),v=n(36),y=function(e){var t=e.date,n=new Date(t);return t?a.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(v.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},b=function(e){var t=e.pageContext,n=e.children,o=e.location,m=e.Title,p=t.frontmatter,h=void 0===p?{}:p,k=t.relativePagePath,v=t.titleType,b=h.tabs,w=h.title,C=h.theme,E=h.description,P=h.keywords,T=h.date,_=(0,g.Z)().interiorTheme,S=(0,l.useStaticQuery)("2456312558").site.pathPrefix,x=S?o.pathname.replace(S,""):o.pathname,D=b?x.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",I=C||_;return a.createElement(s.Z,{tabs:b,homepage:!1,theme:I,pageTitle:w,pageDescription:E,pageKeywords:P,titleType:v},a.createElement(c,{title:m?a.createElement(m,null):w,label:"label",tabs:b,theme:I}),b&&a.createElement(N,{title:w,slug:x,tabs:b,currentTab:D}),a.createElement(f.Z,{padded:!0},n,a.createElement(d,{relativePagePath:k}),a.createElement(y,{date:T})),a.createElement(u.Z,{pageContext:t,location:o,slug:x,tabs:b,currentTab:D}),a.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-customizing-mdx-c0cc082f894bbbb5df6c.js.map