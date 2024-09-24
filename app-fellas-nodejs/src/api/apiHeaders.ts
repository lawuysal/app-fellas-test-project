// Easy accesble airplane API headers

const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;
const resourceVersion = process.env.RESOURCE_VERSION;

export const apiHeaders = new Headers();
apiHeaders.append("app_id", appId as string);
apiHeaders.append("app_key", appKey as string);
apiHeaders.append("ResourceVersion", resourceVersion as string);
