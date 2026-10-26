import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL(site.url), title: {default:"Meridian Malvan | A Considered Coastal Stay",template:"%s | Meridian Malvan"}, description:site.description, applicationName:site.name, openGraph:{type:"website",locale:"en_IN",siteName:site.name,title:"A Considered Coastal Stay in Konkan",description:site.description}, twitter:{card:"summary_large_image",title:site.name,description:site.description}, robots:{index:true,follow:true} };
export const viewport: Viewport = {width:"device-width",initialScale:1,themeColor:"#173b35"};
export default function RootLayout({children}:Readonly<{children:ReactNode}>){const schema={"@context":"https://schema.org","@type":"Hotel",name:site.name,description:site.description,address:{"@type":"PostalAddress",addressLocality:site.locality,addressRegion:site.region,addressCountry:"IN"},url:site.url};return <html lang="en-IN"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/></body></html>;}
