import type {MetadataRoute} from "next"; import {site} from "@/config/site";
export default function sitemap():MetadataRoute.Sitemap{return ["","/rooms","/experiences","/gallery","/about","/location","/contact","/privacy-policy","/terms"].map(path=>({url:site.url+path,changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:0.6}));}
