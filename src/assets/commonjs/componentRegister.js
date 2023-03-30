import { defineAsyncComponent } from "vue";
const components = import.meta.glob("@/components/*.vue"); // 异步方式
export default function install(app)
{
    for (const [key, value] of Object.entries(components)){
        let name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
        console.log(name,value)
        app.component(name, defineAsyncComponent(value));
    }
}