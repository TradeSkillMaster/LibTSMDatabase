import { defineConfig } from "vitepress"
export default defineConfig({
    base: "/LibTSMDatabase/",
    title: "LibTSMDatabase",
    description: "Database framework for World of Warcraft addons",
    ignoreDeadLinks: true,
    themeConfig: {
        nav: [{ text: "Home", link: "/" }],
        sidebar: [{
            items: [
                { text: "Home", link: "/" },
                { text: "Database", link: "/Database" },
                { text: "DatabaseSchema", link: "/DatabaseSchema" },
                { text: "DatabaseTable", link: "/DatabaseTable" },
                { text: "DatabaseQuery", link: "/DatabaseQuery" },
                { text: "DatabaseQueryClause", link: "/DatabaseQueryClause" },
            ],
        }],
    },
})
